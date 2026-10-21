/* ==========================================================================
   PUBLICAÇÕES & IMPRENSA — BASE DE DADOS EDITÁVEL
   --------------------------------------------------------------------------
   Para adicionar uma publicação, copie um bloco { ... } e preencha:
     tipo:     'artigo'  (artigos da equipe)  ou  'imprensa' (notícias externas)
     titulo:   título da publicação
     resumo:   1-2 frases neutras (sem promessa de resultado — Prov. 205/2021)
     data:     'AAAA-MM-DD'
     autor:    nome do(a) autor(a) — usado em artigos
     perfil:   página do autor (opcional), ex.: 'patricia-azevedo.html'
     veiculo:  nome do veículo, ex.: 'O Garantista'
     url:      link para a publicação original
     rascunho: true  -> aparece com selo "Exemplo". REMOVA ao publicar real.
   Os itens são ordenados automaticamente do mais recente para o mais antigo.
   ========================================================================== */
window.PUBLICACOES = [
  {
    tipo: 'artigo',
    titulo: '[EXEMPLO] Título do artigo da Dra. Patricia Azevedo',
    resumo: 'Substitua por um resumo de uma ou duas frases sobre o tema do artigo.',
    data: '2026-09-15',
    autor: 'Dra. Patricia Azevedo',
    perfil: 'patricia-azevedo.html',
    veiculo: 'Artigo Jurídico',
    url: '#',
    rascunho: true
  },
  {
    tipo: 'imprensa',
    titulo: '[EXEMPLO] Manchete da matéria publicada no O Garantista',
    resumo: 'Substitua pela linha fina da matéria. Apenas reproduza o que foi noticiado.',
    data: '2026-08-28',
    veiculo: 'O Garantista',
    url: '#',
    rascunho: true
  },
  {
    tipo: 'artigo',
    titulo: '[EXEMPLO] Segundo artigo técnico da equipe',
    resumo: 'Substitua por um resumo de uma ou duas frases sobre o tema do artigo.',
    data: '2026-07-10',
    autor: 'Dra. Patricia Azevedo',
    perfil: 'patricia-azevedo.html',
    veiculo: 'Artigo Jurídico',
    url: '#',
    rascunho: true
  }
];
