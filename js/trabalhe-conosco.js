/* ==========================================================================
   TRABALHE CONOSCO — ENVIO DE CURRÍCULOS COM ARQUIVO
   --------------------------------------------------------------------------
   Envia para a função /api/curriculo (Vercel), que repassa por e-mail via
   Resend com o currículo em anexo. Configuração (chaves, e-mails) fica nas
   variáveis de ambiente da Vercel — nada sensível neste arquivo.
   ========================================================================== */
(function () {
  'use strict';

  const ENDPOINT = '/api/curriculo';
  const EMAIL_FALLBACK = 'contato@marciosandim.com';
  const MAX_BYTES = 3 * 1024 * 1024; // manter igual ao limite da API
  const EXTENSOES = ['pdf', 'doc', 'docx'];

  const form = document.getElementById('careersForm');
  if (!form) return;

  const $ = (id) => document.getElementById(id);
  const campos = {
    nome: $('cvName'),
    email: $('cvEmail'),
    telefone: $('cvPhone'),
    area: $('cvArea'),
    arquivo: $('cvFile'),
    consent: $('cvConsent')
  };
  const status = $('careersStatus');
  const btn = form.querySelector('button[type="submit"]');

  const setErro = (input, msg) => {
    const el = $(input.id + 'Error');
    input.classList.add('is-invalid');
    input.setAttribute('aria-invalid', 'true');
    if (el) { el.textContent = msg; input.setAttribute('aria-describedby', el.id); }
  };
  const limpaErro = (input) => {
    const el = $(input.id + 'Error');
    input.classList.remove('is-invalid');
    input.removeAttribute('aria-invalid');
    if (el) { el.textContent = ''; input.removeAttribute('aria-describedby'); }
  };

  Object.values(campos).forEach((c) => {
    if (!c) return;
    c.addEventListener('input', () => limpaErro(c));
    c.addEventListener('change', () => limpaErro(c));
  });

  // Máscara de telefone (mesmo padrão do formulário de contato)
  campos.telefone.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 10) v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    else if (v.length > 6) v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    else if (v.length > 2) v = v.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    else if (v.length > 0) v = '(' + v;
    e.target.value = v;
  });

  const mostrarStatus = (msg, tipo) => {
    status.textContent = msg;
    status.className = 'careers-status is-' + tipo;
  };

  const erroArquivo = (file) => {
    if (!file) return 'Anexe seu currículo.';
    const ext = (file.name.split('.').pop() || '').toLowerCase();
    if (!EXTENSOES.includes(ext)) return 'Formato não aceito. Envie PDF, DOC ou DOCX.';
    if (file.size > MAX_BYTES) return `Arquivo muito grande (${(file.size / 1048576).toFixed(1)} MB). Limite: 3 MB.`;
    if (file.size === 0) return 'O arquivo está vazio.';
    return '';
  };

  // Validação imediata ao escolher o arquivo
  campos.arquivo.addEventListener('change', () => {
    const msg = erroArquivo(campos.arquivo.files[0]);
    if (msg) setErro(campos.arquivo, msg);
  });

  const validar = () => {
    let primeiro = null;
    const marca = (input, msg) => { setErro(input, msg); if (!primeiro) primeiro = input; };

    if (campos.nome.value.trim().length < 3) marca(campos.nome, 'Informe seu nome completo.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email.value.trim())) marca(campos.email, 'Informe um e-mail válido.');
    if (campos.telefone.value.replace(/\D/g, '').length < 10) marca(campos.telefone, 'Informe um telefone com DDD.');
    if (!campos.area.value) marca(campos.area, 'Selecione a vaga ou área de interesse.');
    const msgArq = erroArquivo(campos.arquivo.files[0]);
    if (msgArq) marca(campos.arquivo, msgArq);
    if (!campos.consent.checked) marca(campos.consent, 'É necessário autorizar o tratamento dos dados.');

    if (primeiro) primeiro.focus();
    return !primeiro;
  };

  const lerBase64 = (file) => new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result).split(',')[1] || '');
    r.onerror = () => reject(r.error);
    r.readAsDataURL(file);
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validar()) {
      mostrarStatus('Verifique os campos destacados.', 'error');
      return;
    }

    const txtOriginal = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = 'Enviando...';
    mostrarStatus('', 'info');

    try {
      const file = campos.arquivo.files[0];
      const payload = {
        nome: campos.nome.value.trim(),
        email: campos.email.value.trim(),
        telefone: campos.telefone.value.trim(),
        area: campos.area.value,
        oab: $('cvOab').value.trim(),
        mensagem: $('cvMessage').value.trim(),
        consentimento: campos.consent.checked,
        website: $('cvWebsite').value,
        arquivo: { nome: file.name, base64: await lerBase64(file) }
      };

      const resp = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await resp.json().catch(() => ({}));
      if (!resp.ok || !json.ok) {
        const erro = new Error(json.erro || 'Falha no envio');
        // A API devolve os campos inválidos em "campos" (ex.: ["email", "consentimento"])
        erro.campos = Array.isArray(json.campos) ? json.campos : null;
        throw erro;
      }

      form.reset();
      mostrarStatus('Currículo enviado com sucesso! Entraremos em contato caso seu perfil seja selecionado.', 'success');
    } catch (err) {
      const mapaCampos = {
        nome: [campos.nome, 'Informe seu nome completo.'],
        email: [campos.email, 'Informe um e-mail válido.'],
        telefone: [campos.telefone, 'Informe um telefone com DDD.'],
        area: [campos.area, 'Selecione a vaga ou área de interesse.'],
        arquivo: [campos.arquivo, 'Anexe um currículo em PDF, DOC ou DOCX de até 3 MB.'],
        consentimento: [campos.consent, 'É necessário autorizar o tratamento dos dados.']
      };
      let primeiro = null;
      if (err && err.campos) {
        err.campos.forEach((nomeCampo) => {
          const par = Object.prototype.hasOwnProperty.call(mapaCampos, nomeCampo) ? mapaCampos[nomeCampo] : null;
          if (par && par[0]) {
            setErro(par[0], par[1]);
            if (!primeiro) primeiro = par[0];
          }
        });
      }
      if (primeiro) {
        primeiro.focus();
        mostrarStatus('Verifique os campos destacados.', 'error');
      } else {
        mostrarStatus(`Não foi possível enviar agora. Tente novamente em instantes ou envie para ${EMAIL_FALLBACK}.`, 'error');
      }
    } finally {
      btn.disabled = false;
      btn.innerHTML = txtOriginal;
    }
  });
})();
