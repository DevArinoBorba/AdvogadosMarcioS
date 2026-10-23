/* ==========================================================================
   API: /api/curriculo — recebe o currículo do site e envia por e-mail (Resend)
   --------------------------------------------------------------------------
   Variáveis de ambiente (Vercel > Settings > Environment Variables):
     RESEND_API_KEY  chave da Resend (obrigatória)
     CV_TO_EMAIL     destino. Padrão: contato@marciosandim.com
     CV_FROM_EMAIL   remetente em domínio verificado na Resend.
                     Ex.: "Site Márcio Sandim <curriculos@marciosandim.com>"
   Sem dependências: usa a API HTTP da Resend via fetch (Node 18+).
   O arquivo chega em base64 dentro de JSON. Limite de corpo da Vercel é
   4,5 MB, por isso o arquivo é limitado a 3 MB (base64 aumenta ~33%).
   ========================================================================== */

const MAX_BYTES = 3 * 1024 * 1024;
const TIPOS = {
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
};
const AREAS = {
  advogado: 'Advogado(a)',
  estagio: 'Estágio em Direito',
  administrativo: 'Administrativo / Apoio',
  outro: 'Outro'
};

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const limpa = (s, max) => String(s == null ? '' : s).replace(/[\r\n]+/g, ' ').trim().slice(0, max);

// Origens permitidas (hostname do cabeçalho Origin)
const HOSTS_PERMITIDOS = ['marciosandim.com', 'www.marciosandim.com', 'localhost', '127.0.0.1'];
const origemPermitida = (origin) => {
  let host;
  try { host = new URL(origin).hostname; } catch { return false; }
  return HOSTS_PERMITIDOS.includes(host) || host.endsWith('.vercel.app');
};

// Limite simples por IP (best effort): o Map vive na memória de cada instância,
// então o limite não é global entre instâncias. Contém abuso casual, não substitui WAF.
const RATE_JANELA_MS = 10 * 60 * 1000; // 10 minutos
const RATE_MAX = 5;                    // requisições por IP na janela
const tentativas = new Map();
const excedeuLimite = (ip) => {
  const agora = Date.now();
  if (tentativas.size > 1000) {
    for (const [chave, reg] of tentativas) {
      if (agora - reg.inicio > RATE_JANELA_MS) tentativas.delete(chave);
    }
  }
  const reg = tentativas.get(ip);
  if (!reg || agora - reg.inicio > RATE_JANELA_MS) {
    tentativas.set(ip, { inicio: agora, count: 1 });
    return false;
  }
  reg.count += 1;
  return reg.count > RATE_MAX;
};

// Confere a assinatura real do arquivo, não só a extensão
function assinaturaValida(buf, ext) {
  if (ext === 'pdf') return buf.slice(0, 4).toString('latin1') === '%PDF';
  if (ext === 'docx') return buf[0] === 0x50 && buf[1] === 0x4b; // ZIP "PK"
  if (ext === 'doc') return buf.slice(0, 4).toString('hex') === 'd0cf11e0'; // OLE2
  return false;
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, erro: 'Método não permitido.' });
  }

  const origin = req.headers.origin;
  if (origin && !origemPermitida(origin)) {
    return res.status(403).json({ ok: false, erro: 'Requisição não permitida.' });
  }

  const contentType = String(req.headers['content-type'] || '').split(';')[0].trim().toLowerCase();
  if (contentType !== 'application/json') {
    return res.status(415).json({ ok: false, erro: 'Tipo de conteúdo não suportado.' });
  }

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'desconhecido';
  if (excedeuLimite(ip)) {
    return res.status(429).json({ ok: false, erro: 'Muitas tentativas. Aguarde alguns minutos e tente novamente.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const para = process.env.CV_TO_EMAIL || 'contato@marciosandim.com';
  const de = process.env.CV_FROM_EMAIL;
  if (!apiKey || !de) {
    console.error('curriculo: RESEND_API_KEY ou CV_FROM_EMAIL não configurado');
    return res.status(500).json({ ok: false, erro: 'Envio temporariamente indisponível.' });
  }

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = null; } }
  if (!b || typeof b !== 'object') return res.status(400).json({ ok: false, erro: 'Requisição inválida.' });

  // Honeypot anti-spam: robôs preenchem campos ocultos
  if (b.website) return res.status(200).json({ ok: true });

  const nome = limpa(b.nome, 120);
  const email = limpa(b.email, 160);
  const telefone = limpa(b.telefone, 30);
  const oab = limpa(b.oab, 40);
  const area = Object.prototype.hasOwnProperty.call(AREAS, b.area) ? AREAS[b.area] : undefined;
  const mensagem = String(b.mensagem || '').trim().slice(0, 3000);

  const erros = [];
  if (nome.length < 3) erros.push('nome');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) erros.push('email');
  if (telefone.replace(/\D/g, '').length < 10) erros.push('telefone');
  if (!area) erros.push('area');
  if (b.consentimento !== true) erros.push('consentimento');

  const arq = b.arquivo || {};
  const nomeArq = limpa(arq.nome, 120).replace(/[^\w.\- ()À-ú]/g, '_');
  const ext = (nomeArq.split('.').pop() || '').toLowerCase();
  let buf = null;
  const tipoConhecido = Object.prototype.hasOwnProperty.call(TIPOS, ext);
  if (!tipoConhecido || typeof arq.base64 !== 'string') {
    erros.push('arquivo');
  } else {
    buf = Buffer.from(arq.base64, 'base64');
    if (!buf.length || buf.length > MAX_BYTES || !assinaturaValida(buf, ext)) erros.push('arquivo');
  }

  if (erros.length) return res.status(400).json({ ok: false, erro: 'Dados inválidos.', campos: erros });

  const linha = (r, v) => `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top">${r}</td><td style="padding:6px 0">${v}</td></tr>`;
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#222">
      <h2 style="font-weight:normal;margin:0 0 16px">Novo currículo recebido pelo site</h2>
      <table style="border-collapse:collapse">
        ${linha('Nome', esc(nome))}
        ${linha('E-mail', `<a href="mailto:${esc(email)}">${esc(email)}</a>`)}
        ${linha('Telefone', esc(telefone))}
        ${linha('Vaga / Área', esc(area))}
        ${linha('OAB', esc(oab || '-'))}
        ${linha('Consentimento LGPD', 'Sim')}
      </table>
      ${mensagem ? `<h3 style="font-weight:normal;margin:20px 0 8px">Apresentação</h3><p style="white-space:pre-wrap;margin:0">${esc(mensagem)}</p>` : ''}
      <p style="color:#888;font-size:12px;margin-top:24px">Currículo em anexo. Responder a este e-mail responde direto ao candidato.</p>
    </div>`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: de,
        to: [para],
        reply_to: email,
        subject: `Currículo - ${area} - ${nome}`,
        html,
        attachments: [{ filename: nomeArq, content: buf.toString('base64') }]
      }),
      // Evita que a função fique presa aguardando a Resend (timeout de 10 s)
      signal: AbortSignal.timeout(10000)
    });
    if (!r.ok) {
      console.error('curriculo: Resend respondeu', r.status, await r.text());
      return res.status(502).json({ ok: false, erro: 'Falha ao enviar o e-mail.' });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('curriculo: erro de rede', e);
    return res.status(502).json({ ok: false, erro: 'Falha ao enviar o e-mail.' });
  }
};
