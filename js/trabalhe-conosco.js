/* ==========================================================================
   TRABALHE CONOSCO — ENVIO DE CURRÍCULOS (Web3Forms)
   --------------------------------------------------------------------------
   1. Crie a chave gratuita em https://web3forms.com usando o e-mail que deve
      receber os currículos.
   2. Cole a chave abaixo em WEB3FORMS_ACCESS_KEY.
   Enquanto a chave não for configurada, o formulário abre o e-mail do
   usuário (mailto) como alternativa, para nenhum candidato ficar sem enviar.
   ========================================================================== */
(function () {
  'use strict';

  const WEB3FORMS_ACCESS_KEY = '643a8f4c-3cd5-4044-a84c-914e1c3d1c90';
  const EMAIL_FALLBACK = 'contato@marciosandim.com';

  const form = document.getElementById('careersForm');
  if (!form) return;

  const $ = (id) => document.getElementById(id);
  const campos = {
    nome: $('cvName'),
    email: $('cvEmail'),
    telefone: $('cvPhone'),
    area: $('cvArea'),
    link: $('cvLink'),
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

  Object.values(campos).forEach((c) => c && c.addEventListener('input', () => limpaErro(c)));
  if (campos.consent) campos.consent.addEventListener('change', () => limpaErro(campos.consent));

  // Máscara de telefone (mesmo padrão do formulário de contato)
  if (campos.telefone) {
    campos.telefone.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').slice(0, 11);
      if (v.length > 10) v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      else if (v.length > 6) v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
      else if (v.length > 2) v = v.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
      else if (v.length > 0) v = '(' + v;
      e.target.value = v;
    });
  }

  const mostrarStatus = (msg, tipo) => {
    status.textContent = msg;
    status.className = 'careers-status is-' + tipo;
  };

  const validar = () => {
    let primeiro = null;
    const marca = (input, msg) => { setErro(input, msg); if (!primeiro) primeiro = input; };

    if (campos.nome.value.trim().length < 3) marca(campos.nome, 'Informe seu nome completo.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email.value.trim())) marca(campos.email, 'Informe um e-mail válido.');
    if (campos.telefone.value.replace(/\D/g, '').length < 10) marca(campos.telefone, 'Informe um telefone com DDD.');
    if (!campos.area.value) marca(campos.area, 'Selecione a vaga ou área de interesse.');
    const link = campos.link.value.trim();
    if (!/^https?:\/\/\S+\.\S+/i.test(link)) marca(campos.link, 'Cole um link válido (Google Drive, Dropbox ou LinkedIn).');
    if (!campos.consent.checked) marca(campos.consent, 'É necessário autorizar o tratamento dos dados.');

    if (primeiro) primeiro.focus();
    return !primeiro;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validar()) {
      mostrarStatus('Verifique os campos destacados.', 'error');
      return;
    }

    const data = new FormData(form);
    const areaTxt = campos.area.options[campos.area.selectedIndex].text;

    // Sem chave configurada: alternativa por e-mail
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.startsWith('COLE_AQUI')) {
      const corpo = [
        `Nome: ${data.get('nome')}`,
        `E-mail: ${data.get('email')}`,
        `Telefone: ${data.get('telefone')}`,
        `Área: ${areaTxt}`,
        `OAB: ${data.get('oab') || '-'}`,
        `Currículo: ${data.get('curriculo')}`,
        '',
        data.get('mensagem') || ''
      ].join('\n');
      window.location.href = `mailto:${EMAIL_FALLBACK}?subject=${encodeURIComponent('Currículo - ' + areaTxt)}&body=${encodeURIComponent(corpo)}`;
      mostrarStatus('Abrimos seu aplicativo de e-mail com os dados preenchidos. Basta enviar.', 'success');
      return;
    }

    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('subject', `Novo currículo - ${areaTxt} - ${data.get('nome')}`);
    data.append('from_name', 'Site Márcio Sandim Advogados');
    data.set('area', areaTxt);

    const txtOriginal = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = 'Enviando...';

    try {
      const resp = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await resp.json();
      if (!resp.ok || !json.success) throw new Error(json.message || 'Falha no envio');
      form.reset();
      mostrarStatus('Currículo enviado com sucesso! Entraremos em contato caso seu perfil seja selecionado.', 'success');
    } catch (err) {
      mostrarStatus(`Não foi possível enviar agora. Tente novamente ou envie para ${EMAIL_FALLBACK}.`, 'error');
    } finally {
      btn.disabled = false;
      btn.innerHTML = txtOriginal;
    }
  });
})();
