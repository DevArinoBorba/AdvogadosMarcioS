/* ==========================================================================
   PUBLICAÇÕES & IMPRENSA — RENDERIZAÇÃO
   - #publicacoesHome  : prévia na Home (3 mais recentes)
   - #publicacoesGrid  : lista completa em publicacoes.html (com filtros)
   ========================================================================== */
(function () {
  'use strict';

  const dados = Array.isArray(window.PUBLICACOES) ? window.PUBLICACOES.slice() : [];
  dados.sort((a, b) => (b.data || '').localeCompare(a.data || ''));

  const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  const formatarData = (iso) => {
    const [y, m, d] = (iso || '').split('-').map(Number);
    if (!y || !m) return '';
    return `${d ? String(d).padStart(2, '0') + ' ' : ''}${MESES[m - 1]} ${y}`;
  };

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  const ROTULO = { artigo: 'Artigo', imprensa: 'Na Imprensa' };

  const card = (p) => {
    const externo = p.url && p.url !== '#' && /^https?:/i.test(p.url);
    const cta = p.tipo === 'imprensa'
      ? `Ler no ${esc(p.veiculo || 'veículo')}`
      : 'Ler artigo';
    const autor = p.autor
      ? (p.perfil
        ? `<a href="${esc(p.perfil)}" class="pub-author">${esc(p.autor)}</a>`
        : `<span class="pub-author">${esc(p.autor)}</span>`)
      : (p.veiculo ? `<span class="pub-author">${esc(p.veiculo)}</span>` : '');

    return `
      <article class="pub-card" data-tipo="${esc(p.tipo)}">
        <div class="pub-meta">
          <span class="pub-type pub-type-${esc(p.tipo)}">${esc(ROTULO[p.tipo] || 'Publicação')}</span>
          <time datetime="${esc(p.data)}">${esc(formatarData(p.data))}</time>
          ${p.rascunho ? '<span class="pub-draft" title="Conteúdo de exemplo — substituir">Exemplo</span>' : ''}
        </div>
        <h3 class="pub-title">${esc(p.titulo)}</h3>
        <p class="pub-summary">${esc(p.resumo)}</p>
        <div class="pub-footer">
          ${autor}
          <a href="${esc(p.url || '#')}" class="pub-cta"${externo ? ' target="_blank" rel="noopener"' : ''}>
            ${cta} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </article>`;
  };

  const vazio = '<p class="pub-empty">Nenhuma publicação nesta categoria ainda.</p>';

  // Prévia da Home
  const home = document.getElementById('publicacoesHome');
  if (home) {
    const recentes = dados.slice(0, 3);
    home.innerHTML = recentes.length ? recentes.map(card).join('') : vazio;
  }

  // Página completa com filtros
  const grid = document.getElementById('publicacoesGrid');
  if (grid) {
    const filtros = document.querySelectorAll('.pub-filter');
    const render = (tipo) => {
      const lista = tipo === 'todos' ? dados : dados.filter((p) => p.tipo === tipo);
      grid.innerHTML = lista.length ? lista.map(card).join('') : vazio;
    };

    filtros.forEach((btn) => {
      btn.addEventListener('click', () => {
        filtros.forEach((b) => {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        render(btn.dataset.filter);
      });
    });

    render('todos');
  }
})();
