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
    titulo: 'Discriminação racial e social no porte de drogas: um debate histórico no STF',
    resumo: 'Análise sobre a seletividade penal na aplicação da Lei de Drogas e o debate histórico no Supremo Tribunal Federal para mitigar a disparidade de tratamento entre usuários e traficantes no sistema de justiça criminal.',
    data: '2024-06-21',
    autor: 'Dra. Patricia Azevedo',
    perfil: 'patricia-azevedo.html',
    veiculo: 'O Garantista',
    url: 'https://ogarantista.com.br/discriminacao-racial-e-social-no-porte-de-drogas-um-debate-historico-no-stf/'
  },
  {
    tipo: 'artigo',
    titulo: 'Impacto da LGPD no Mundo dos Negócios: na cadeia de fornecedores “quem pode mais, chora menos”',
    resumo: 'Exame sobre a exigência de conformidade com a LGPD nas relações contratuais entre empresas e fornecedores, destacando a governança de dados e a segurança jurídica no ambiente corporativo.',
    data: '2024-05-28',
    autor: 'Dra. Patricia Azevedo',
    perfil: 'patricia-azevedo.html',
    veiculo: 'O Garantista',
    url: 'https://ogarantista.com.br/impacto-da-lgpd-no-mundo-dos-negocios'
  },
  {
    tipo: 'artigo',
    titulo: 'O uso estratégico e deturpado das medidas protetivas',
    resumo: 'Reflexão jurídica sobre o desvio de finalidade das medidas protetivas de urgência em disputas patrimoniais e familiares, ressaltando a relevância da análise técnica criteriosa para resguardar o propósito social da Lei Maria da Penha.',
    data: '2024-04-29',
    autor: 'Dra. Patricia Azevedo',
    perfil: 'patricia-azevedo.html',
    veiculo: 'O Garantista',
    url: 'https://ogarantista.com.br/o-uso-estrategico-e-deturpado-das-medidas-protetivas'
  },
  {
    tipo: 'artigo',
    titulo: 'Guerra Digital: Elon Musk vs. Alexandre de Moraes na batalha contra as milícias virtuais',
    resumo: 'Discussão constitucional e regulatória acerca do embate entre plataformas digitais e o Judiciário brasileiro, analisando soberania nacional, regulação de redes sociais e os limites da liberdade de expressão.',
    data: '2024-04-09',
    autor: 'Dra. Patricia Azevedo',
    perfil: 'patricia-azevedo.html',
    veiculo: 'O Garantista',
    url: 'https://ogarantista.com.br/guerra-digital-elon-musk-vs-alexandre-de-moraes-na-batalha-contra-as-milicias-virtuais/'
  }
];
