# Manual de Identidade Visual e Diretrizes de Design do Site
# MÁRCIO SANDIM ADVOGADOS

> **Documento Oficial de Padrões e Sistema de Design (Design System)**  
> **Versão:** 1.0 — 2026  
> **Localização:** Campo Grande · MS  
> **Base de Referência:** Apresentação Institucional, Identidade & Posicionamento de Marca (*Orium Digital*), Benchmarks de Alta Advocacia Internacional e Diretrizes do Provimento 205/2021 do CFOAB.

---

## 1. Posicionamento Estratégico e Manifesto

### 1.1 O Manifesto da Marca
> *"Não reinventar o escritório. Elevá-lo.*  
> *Tradição sem ser antiga. Modernidade sem modismo.*  
> *Sofisticação sem ostentação. Autoridade sem excesso."*

O escritório **Márcio Sandim Advogados** consolida a transição de uma atuação pessoal de destaque (com histórico consolidado em Direito Penal) para uma **banca de advocacia multidisciplinar, robusta, institucional e estratégica**, sediada em Campo Grande/MS.

O site deve refletir esse salto institucional: **solidez de uma banca madura, contemporânea e de alto padrão técnico**, transmitindo acolhimento e proximidade ao cliente individual somados à capacidade técnica para demandas corporativas de alta complexidade.

### 1.2 Os Quatro Pilares da Marca
1. **Autoridade:** Liderança técnica do Dr. Márcio Sandim e sócios/associados em causas de relevância e tribunais superiores.
2. **Estrutura:** Sede física ampla e refinada em Campo Grande/MS, corpo jurídico multidisciplinar e infraestrutura moderna para atuação presencial e remota em todo o Brasil.
3. **Estratégia:** Soluções sob medida para cada fase processual (inquérito, 1ª instância, recursos, tribunais superiores e preventivo empresarial).
4. **Proximidade:** Atendimento humano, escuta atenta, comunicação clara e acompanhamento próximo ao cliente.

### 1.3 Pilares de Atributos Visuais e Verbais
* **Sobriedade:** Postura serena, sem afetações, layouts respirados e acabamentos nobres.
* **Confiança:** Transparência de processos, credibilidade institucional e ética inegociável.
* **Precisão:** Tipografia milimétrica, grids alinhados e microinterações táteis.
* **Experiência:** Bagagem prática comprovada e maturidade na tomada de decisão jurídica.
* **Solidez:** Presença visual imponente (Azul Petróleo profundo) que transmite segurança e perenidade.
* **Contemporaneidade:** Fluidez digital, estética editorial moderna, adaptabilidade impecável para smartphones e ultrabooks.

---

## 2. Sistema Cromático (Color Palette & Proporções Exatas)

O sistema de cores segue uma distribuição harmônica estrita estabelecida no manual de identidade:

| Amostra | Nome da Cor | Código HEX | RGB | Proporção | Função Principal |
| :--- | :--- | :--- | :--- | :---: | :--- |
| ![#0E2E38](https://via.placeholder.com/15/0E2E38/000000?text=+) | **Azul Petróleo** | `#0E2E38` | `rgb(14, 46, 56)` | **45%** | Fundo dominante institucional, Hero Dark, cabeçalho e rodapé solene. |
| ![#F4F2ED](https://via.placeholder.com/15/F4F2ED/000000?text=+) | **Off-White** | `#F4F2ED` | `rgb(244, 242, 237)` | **30%** | Superfícies editoriais, cartões claros de leitura, fundos contrastantes. |
| ![#2A2F33](https://via.placeholder.com/15/2A2F33/000000?text=+) | **Grafite** | `#2A2F33` | `rgb(42, 47, 51)` | **15%** | Tipografia sobre fundos claros, cartões secundários de profundidade. |
| ![#8C9196](https://via.placeholder.com/15/8C9196/000000?text=+) | **Cinza Mineral** | `#8C9196` | `rgb(140, 145, 150)` | **7%** | Linhas arquitetônicas, separadores de grid (hairlines), legendas e metadados. |
| ![#C6B49A](https://via.placeholder.com/15/C6B49A/000000?text=+) | **Champagne Fosco** | `#C6B49A` | `rgb(198, 180, 154)` | **3%** | **Acento Nobre Exclusivo:** Botões de ação primária (CTA), bordas iluminadas ativas, detalhes de status e tags de categoria. |

### 2.1 Cores Funcionais e de Suporte
* **Branco Puro:** `#FFFFFF` — Exclusivo para tipografia de alta legibilidade sobre Azul Petróleo e ícones vetoriais.
* **Azul Petróleo Profundo (Dark Surface):** `#091F26` — Fundo de menus suspensos, rodapés e modais.
* **Bordas Sutis (Hairlines):** `rgba(198, 180, 154, 0.2)` (dourado/champagne translúcido) e `rgba(255, 255, 255, 0.08)` (linhas de grid).

### 2.2 Tokens CSS Prontos para Implementação
```css
:root {
  /* Cores Institucionais */
  --color-petroleo: #0E2E38;
  --color-petroleo-dark: #091F26;
  --color-offwhite: #F4F2ED;
  --color-grafite: #2A2F33;
  --color-mineral: #8C9196;
  --color-champagne: #C6B49A;
  --color-champagne-hover: #D8C7B0;
  --color-champagne-alpha: rgba(198, 180, 154, 0.15);
  
  /* Superfícies e Fundos */
  --bg-primary: #0E2E38;
  --bg-surface-light: #F4F2ED;
  --bg-surface-dark: #0A222A;
  --border-hairline: rgba(255, 255, 255, 0.1);
  --border-accent: rgba(198, 180, 154, 0.35);

  /* Tipografia */
  --text-primary: #F4F2ED;
  --text-dark: #2A2F33;
  --text-muted: #8C9196;
  --text-accent: #C6B49A;

  /* Sombras & Profundidade */
  --shadow-subtle: 0 4px 20px rgba(0, 0, 0, 0.15);
  --shadow-elevated: 0 12px 40px rgba(0, 0, 0, 0.25);
  --glass-bg: rgba(14, 46, 56, 0.85);
  --glass-border: 1px solid rgba(198, 180, 154, 0.18);
  --glass-blur: blur(16px);
}
```

---

## 3. Tipografia e Escala Modular

A combinação tipográfica reflete com exatidão a dualidade da marca: **tradição erudita (Serif)** e **precisão técnica contemporânea (Sans-serif)**.

### 3.1 Famílias Tipográficas
1. **Fonte Principal de Títulos e Citações:** `Spectral` (Google Fonts)
   * *Classificação:* Serif Editorial contemporânea, proporções nobres e contraste moderado.
   * *Pesos utilizados:* 200 (Extra-Light para números e kickers de alto contraste), 300 (Light para H1 e H2), 400 (Regular para títulos de cartões).
   * *Uso:* Frase do Hero, títulos de seções, números de área (`01`, `02`), citações do manifesto e números de autoridade.
2. **Fonte de Interface, Menus e Texto Corrido:** `Barlow` (Google Fonts)
   * *Classificação:* Sans-serif geométrica limpa, excelente legibilidade em telas retina e compactas.
   * *Pesos utilizados:* 300 (Light para parágrafos densos), 400 (Regular para leitura de artigos), 500 (Medium para botões, itens de navegação e microtipografia).
   * *Uso:* Menu superior, botões, parágrafos explicativos, legendas, rodapé e metadados.

### 3.2 Escala Tipográfica Responsiva
```css
/* Importação Oficial */
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;1,300;1,400&display=swap');

/* Regras de Aplicação */
.font-editorial {
  font-family: 'Spectral', Georgia, serif;
}

.font-interface {
  font-family: 'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Microtipografia (Kickers e Metadados) */
.kicker {
  font-family: 'Barlow', sans-serif;
  font-size: 0.75rem; /* 12px */
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.22em; /* Amplo tracking característico da identidade */
  color: var(--color-champagne);
}

/* Títulos */
h1, .hero-title {
  font-family: 'Spectral', serif;
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  font-weight: 300;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}

h2, .section-title {
  font-family: 'Spectral', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 300;
  line-height: 1.25;
  color: var(--text-primary);
}

h3, .card-title {
  font-family: 'Spectral', serif;
  font-size: 1.35rem;
  font-weight: 400;
  line-height: 1.3;
}

/* Parágrafos de Leitura */
p.body-lead {
  font-family: 'Barlow', sans-serif;
  font-size: 1.125rem; /* 18px */
  font-weight: 300;
  line-height: 1.7;
  color: rgba(244, 242, 237, 0.85);
}

p.body-text {
  font-family: 'Barlow', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 300;
  line-height: 1.65;
  color: rgba(244, 242, 237, 0.75);
}
```

---

## 4. Elementos de Identidade Visual e Linguagem Gráfica

### 4.1 Logomarca e Monograma Institucional
* **O Monograma "M":** Formado pela silhueta minimalista da letra `M` estilizada com proporções arquitetônicas, cruzada por uma barra de acento horizontal precisa.
* **Uso da Marca d'Água:** O monograma pode ser aplicado ampliado no canto superior direito de seções nobres, com opacidade sutil entre **4% e 8%**, criando profundidade textural sem disputar leitura.
* **Tipografia do Logotipo:** `MÁRCIO SANDIM` (Caixa alta, peso médio, tracking generoso) e `ADVOGADOS` (alinhado abaixo, menor proporção, tracking expandido).

### 4.2 Elementos de Construção Gráfica (Grid & Layout)
1. **Hairline Framing (Molduras Finas):** Bordas finas de `1px` em tons de Champagne translúcido (`rgba(198, 180, 154, 0.2)`) ou Cinza Mineral (`rgba(140, 145, 150, 0.25)`) delimitando cartões e seções.
2. **Cruzetas Arquitetônicas / Registration Marks (`+`):** Símbolos de cruz milimétrica posicionados nos vértices de colunas e encontros de linhas de grid, conferindo precisão cartográfica e sobriedade de engenharia legal.
3. **Numeração Indexada:** As 6 áreas de atuação utilizam numeração de dois dígitos em serifa (`01`, `02`, `03`...), com tracking aberto e tom Champagne Fosco ou Cinza Mineral.
4. **Respiro Espacial Generoso:** Espaçamentos entre seções com ritmo generoso (`padding: 100px 0` no desktop, `64px 0` no mobile), evitando poluição visual.

### 4.3 O Que É Terminantemente Proibido (Anti-Patterns)
* ❌ **Proibido usar clichês jurídicos genéricos:** Fotos de balança da justiça 3D dourada falsa, martelo de juiz de madeira ("gavel") sobre mesa, colunas gregas virtuais de banco de imagens gratuito.
* ❌ **Proibido gradientes espalhafatosos:** Nada de degradês azuis saturados ou dourados cintilantes "ouro brilhante". O acabamento do Champagne é **fosco acetinado** (`#C6B49A`).
* ❌ **Proibido pop-ups invasivos de WhatsApp:** O canal de WhatsApp deve existir como um CTA elegante e institucional, nunca como um elemento piscando ou cobrindo o conteúdo de leitura.

---

## 5. Diretrizes Fotográficas e Direção de Arte

### 5.1 Curadoria de Imagens
* **Retratos Oficiais do Dr. Márcio Sandim:** Imagens reais em alta resolução capturadas no ambiente do escritório. Postura firme, olhar confiante, vestimenta sóbria (alfaiataria escura, gravata alinhada, relógio discreto).
* **A Estrutura Física do Escritório:** Fotografias da sede em Campo Grande/MS (sala de reuniões com mesa de mármore/madeira nobre, biblioteca de capa dura, recepção aconchegante, detalhes de textura tátil como caneta-tinteiro e cadernos de anotações jurídicas).
* **Equipe e Sócios:** Retratos institucionais padronizados com o mesmo fundo ou temperatura de cor quente e natural.

### 5.2 Tratamento de Cor e Filtros Fotográficos
O site utiliza três tratamentos fotográficos oficiais:
1. **Cor Natural Quente:** Luz solar suave indireta, tons de pele naturais sem suavização artificial de IA, pretos profundos e iluminação pontual de abajur/escritório.
2. **Preto e Branco Editorial de Alto Contraste:** Para retratos de sócios e fotos de bastidores de reuniões e julgamentos.
3. **Duotone Azul Petróleo Institucional:** Aplicação sutil de máscara escura com `#0E2E38` com `mix-blend-mode: multiply` a 80% de opacidade para imagens que servem como plano de fundo de texto.

---

## 6. As 6 Áreas de Atuação (Conteúdo Oficial)

Conforme estabelecido na apresentação institucional (Slide 14 do Posicionamento e Slide 04 da Apresentação ao Cliente):

| # | Área | Título Oficial | Escopo Descritivo para o Site |
| :-: | :--- | :--- | :--- |
| **01** | **Direito Criminal** | Defesa Técnica em Processo Penal | Atuação técnica e estratégica em todas as fases da persecução penal: inquérito policial, audiências de custódia, tribunal do júri, recursos aos Tribunais Superiores (STJ e STF) e crimes de colarinho branco. |
| **02** | **Direito Cível** | Contencioso Cível Estratégico | Atuação preventiva e contenciosa de alta complexidade em obrigações civis, disputas contratuais, responsabilidade civil, indenizações e proteção de direitos patrimoniais. |
| **03** | **Família e Sucessões** | Gestão Patrimonial e Sucessória | Planejamento sucessório seguro, inventários judiciais e extrajudiciais, partilha estratégica de bens familiares e solução de conflitos sucessórios complexos. |
| **04** | **Direito Militar** | Atuação Especializada Militar | Defesa técnica em inquéritos policiais militares (IPM), processos judiciais perante a Justiça Militar Estadual e Justiça Militar da União, conselhos de justificação e disciplina. |
| **05** | **Direito Tributário** | Revisão Fiscal e Contencioso | Estruturação e planejamento tributário, gestão de passivos fiscais, defesas administrativas e judiciais contra autuações e recuperação de créditos tributários. |
| **06** | **Direito Empresarial** | Assessoria Corporativa e Contratos | Prevenção de litígios societários, estruturação e auditoria de contratos estratégicos, governança corporativa, conformidade e assessoria jurídica contínua para empresas. |

---

## 7. Arquitetura da Informação e Estrutura das Páginas

### 7.1 Navegação Principal (Header Fixo)
* **Lado Esquerdo:** Monograma + Logotipo tipográfico `MÁRCIO SANDIM ADVOGADOS`.
* **Centro / Direita (Menu):**
  * `O ESCRITÓRIO`
  * `ÁREAS DE ATUAÇÃO`
  * `EQUIPE`
  * `ARTIGOS & NOTÍCIAS`
  * `CONTATO`
* **CTA Direita:** Botão de acento `FALAR COM O ESCRITÓRIO` (Champagne Fosco).

### 7.2 Estrutura de Seções da Página Inicial (Landing Page Institucional)

```
┌────────────────────────────────────────────────────────────────────────┐
│  HEADER: [Logo Márcio Sandim Advogados]        [Menu] [CTA Contato]   │
├────────────────────────────────────────────────────────────────────────┤
│  HERO SECTION:                                                         │
│  [Kicker: CAMPO GRANDE · MS]                                           │
│  [H1: Advocacia multidisciplinar]                                      │
│  [Sub: Estrutura e estratégia para cada fase do processo.]             │
│  [Corpo curto sobre a atuação robusta e institucional]                 │
│  [Botão Primário: FALAR COM O ESCRITÓRIO]  [Botão Ghost: CONHECER ÁREAS]│
│  ────────────────────────────────────────────────────────────────────  │
│  RÉGUA DE ACESSO RÁPIDO (Bottom Hero Bar):                             │
│  01 Criminal  | 02 Cível | 03 Família | 04 Militar | 05 Tributário | 06 Empresarial │
├────────────────────────────────────────────────────────────────────────┤
│  SEÇÃO SOBRE: O ESCRITÓRIO & POSICIONAMENTO                            │
│  "Tradição sem ser antiga. Modernidade sem modismo."                   │
│  [Os 4 Pilares: Autoridade · Estrutura · Estratégia · Proximidade]     │
│  [Grid com números institucionais de relevância e atuação nacional]    │
├────────────────────────────────────────────────────────────────────────┤
│  SEÇÃO ÁREAS DE ATUAÇÃO:                                               │
│  Grid 3x2 arquitetônico com bordas finas, numeração e modal/revelação  │
│  [01] Penal       [02] Cível        [03] Família                       │
│  [04] Militar     [05] Tributário   [06] Empresarial                   │
├────────────────────────────────────────────────────────────────────────┤
│  SEÇÃO LIDERANÇA & CORPO JURÍDICO:                                     │
│  Foto de estúdio do Dr. Márcio Sandim + Perfil Técnico institucional  │
│  Sócios de área e advogados associados especializados                  │
├────────────────────────────────────────────────────────────────────────┤
│  SEÇÃO ATENDIMENTO & ESTRUTURA (Presencial e Digital):                 │
│  Fotos da sede de Campo Grande/MS (Sala de reuniões, biblioteca)       │
│  Card com horário: Segunda a Sexta, 8h às 18h                          │
│  Atendimento para todo o território nacional e Tribunais Superiores    │
├────────────────────────────────────────────────────────────────────────┤
│  SEÇÃO CONTEÚDO TÉCNICO & ARTIGOS (Blog Informativo CFOAB):            │
│  3 Artigos recentes sobre teses jurídicas e decisões relevantes        │
├────────────────────────────────────────────────────────────────────────┤
│  FOOTER SOLENE:                                                        │
│  [Logo + Slogan] | [Endereço Campo Grande] | [OAB/MS] | [Links Éticos] │
└────────────────────────────────────────────────────────────────────────┘
```

### 7.3 Adaptação Mobile (Mobile-First Experience)
Conforme projetado no Slide 20 da apresentação de posicionamento:
* **Header Mobile:** Logotipo compacto à esquerda + botão hambúrguer elegante à direita.
* **Hero Mobile:** Hierarquia verticalizada, chamada direta, botão de toque rápido para WhatsApp e discagem.
* **Menu Off-Canvas / Drawer:** Fundo Azul Petróleo profundo (`#091F26`), lista vertical com tipografia generosa, numeração ordinal e flechas minimalistas (`→`).
* **Card de Atendimento Rápido (1-Tap):**
  > *Presencial e on-line · Campo Grande/MS*  
  > *Segunda a sexta, 8h às 18h*  
  > Botão de largura total: `WHATSAPP OFICIAL`

---

## 8. Microinterações, Física de Animação e Experiência do Usuário (UI/UX)

Com base nas melhores práticas das diretrizes `emil-design-eng` e `apple-design`:

### 8.1 Curvas de Transição e Easing
* **Curva Padrão (Apple Fluid Curve):** `cubic-bezier(0.23, 1, 0.32, 1)` (suave aceleração e desaceleração natural, evitando sensações mecânicas).
* **Durações Recomendadas:**
  * Micro-hover (botões, links): `180ms` a `240ms`.
  * Expansão de cards e drawers: `320ms` a `400ms`.
  * Transição de página ou modais: `450ms`.

### 8.2 Feedback Tátil dos Componentes
1. **Botões de Ação (CTAs):**
   * *Normal:* Fundo Champagne Fosco (`#C6B49A`), texto grafite escuro (`#0E2E38`), `border-radius: 4px` (cantos sóbrios, sem arredondamentos infantis).
   * *Hover:* Iluminação sutil do fundo (`#D8C7B0`), leve deslocamento de `translateY(-1px)`.
   * *Active (Toque):* Compressão física suave com `scale(0.98)` para sensação tátil de clique.
2. **Cartões de Área de Atuação (Grid Cards):**
   * *Normal:* Borda `1px solid rgba(255, 255, 255, 0.08)`.
   * *Hover:* Borda se acende em tom dourado suave (`rgba(198, 180, 154, 0.45)`), número ordinal sobe sutilmente e surge seta indicativa de leitura.

---

## 9. Conformidade Rigorosa com a OAB (Provimento 205/2021 do CFOAB)

Para garantir segurança jurídica e cumprimento das regras éticas da advocacia brasileira:

1. **Caráter Exclusivamente Informativo:**
   * O site possui natureza informativa, didática e de apresentação institucional.
   * Não é permitido uso de gatilhos apelativos (ex.: "Contrate agora", "Garantia de causa ganha", "O melhor advogado de MS", "Preço imbatível").
2. **CTAs e Linguagem Sóbria:**
   * Textos recomendados para botões: `Falar com o Escritório`, `Agendar Consulta`, `Conhecer Áreas de Atuação`, `Iniciar Atendimento`.
3. **Exibição Obrigatória dos Dados de Registro:**
   * Rodapé e cabeçalho devem exibir ostensivamente o nome do advogado responsável, número de inscrição na **OAB/MS** e dados de registro da sociedade de advogados.
4. **LGPD e Privacidade:**
   * Banner de consentimento de cookies discreto e política de privacidade completa com termos transparentes de tratamento de dados de clientes e consultas.

---

## 10. Checklist de Implementação Frontend

- [ ] **Google Fonts:** Carregar `Spectral` (pesos 200, 300, 400) e `Barlow` (pesos 300, 400, 500, 600) com `display=swap`.
- [ ] **Cores Globais:** Aplicar variáveis CSS `:root` com a proporção exata (45% Petróleo, 30% Off-White, 15% Grafite, 7% Mineral, 3% Champagne).
- [ ] **Estrutura Semântica:** Uso correto de tags HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- [ ] **Acessibilidade (WCAG AA):** Garantir contraste mínimo de `4.5:1` entre texto branco/off-white e fundo Azul Petróleo, e texto grafite sobre fundo Off-White.
- [ ] **SEO Jurídico:**
  * Title tags otimizadas: *"Márcio Sandim Advogados \| Advocacia Multidisciplinar em Campo Grande - MS"*
  * Meta description com foco institucional e geolocalização.
  * Schema.org (`LegalService` e `Attorney`) com endereço, horários de atendimento e coordenadas.
- [ ] **Performance:** Imagens WebP/AVIF com compressão otimizada, lazy loading nativo e LCP (Largest Contentful Paint) abaixo de 1.8s.

---

## 11. Dados Cadastrais Oficiais, Localização e Contatos Institucionais

Extraídos diretamente da sede operacional e canais oficiais do escritório:

* **Sede Principal:**  
  Avenida Afonso Pena, nº 3504, 6º Andar, Sala 65  
  Edifício Empire Center — Bairro Jardim dos Estados  
  Campo Grande / MS — CEP 79.002-072
* **Horário de Atendimento Presencial:**  
  Segunda a Sexta-feira: 08h00 às 12h00 e das 13h00 às 18h00
* **Canais Telefônicos:**  
  * **Telefone Fixo / Central:** `(67) 3029-1060`
  * **Plantão Criminal 24 Horas:** `(67) 99167-2000`
* **E-mail Institucional:** `contato@marciosandim.com`
* **Domínio Oficial:** `https://www.marciosandim.com/`
* **Redes Sociais:**  
  * Instagram Institucional: `@marciosandimadvogados`  
  * Instagram Profissional: `@marcio_sandim`

---

## 12. Corpo Jurídico e Roster de Profissionais

Membros da equipe com registros e atuações verificadas:

| Nome do Profissional | Cargo / Função | Registro OAB | Destaque Técnico / Atuação |
| :--- | :--- | :---: | :--- |
| **Dr. Márcio Sandim** | Sócio Fundador / Proprietário | **OAB/MS 10.217** | Liderança em Direito Criminal, Júri e causas de alta complexidade em Tribunais Superiores. |
| **Dr. Wellington Albuquerque** | Advogado Sênior | **OAB/MS 13.331** | Conselheiro Estadual da OAB/MS e Membro do Tribunal de Ética e Disciplina (TED/OAB-MS). |
| **Dra. Aline Marques Leandro** | Advogada Associada | **OAB/MS 19.088** | Atuação destacada na Justiça Federal (TRF3) e contencioso cível/administrativo. |
| **Dr. Guilherme Gonçalves Marin** | Advogado Associado | **OAB/MS 23.087** | Atuação em contencioso cível e contratos na seccional de Campo Grande. |
| **Dr. André Tanahara** | Corpo Jurídico | OAB/MS | Previdenciário, imobiliário e suporte multidisciplinar. |
| **Dra. Patricia Azevedo** | Corpo Jurídico | OAB/MS | Atendimento cível e consultoria jurídica. |
| **Dr. Renato Tanahara** | Corpo Jurídico | OAB/MS | Atuação técnica processual e suporte contencioso. |

---

## 13. Módulo de Segurança Institucional (Trust Shield / Canal Oficial Verificado)

Devido aos reiterados alertas de tentativas de golpe por criminosos que utilizam fotos de advogados no WhatsApp em Mato Grosso do Sul (inclusive documentado em parceria com o Sinpol-MS), o site deve incorporar um componente de alta credibilidade:

* **Badge "Canal Oficial Verificado":**  
  Exibição sutil no rodapé e no modal de contato com o seguinte aviso ético:  
  > *"Aviso de Segurança: O escritório Márcio Sandim Advogados NÃO solicita transferências bancárias, depósitos ou pagamentos via PIX sem prévio alinhamento formal e contrato firmado. Certifique-se de estar em contato exclusivamente através de nossos telefones oficiais: (67) 3029-1060 e (67) 99167-2000."*

---

## 14. Repositório de Imagens Oficiais Salvas no Projeto (`assets/images/`)

Todas as fotos oficiais da equipe e a foto principal do Dr. Márcio Sandim foram baixadas e organizadas na pasta local do projeto para uso imediato no HTML/CSS:

| Profissional | Arquivo Local | Resolução / Formato | Uso Recomendado no Layout |
| :--- | :--- | :---: | :--- |
| **Dr. Márcio Sandim** | `assets/images/marcio-sandim-principal.png` | Alta definição (916 KB) | **Hero Section Principal** e destaque de Liderança Institucional. |
| **Dr. Wellington Albuquerque** | `assets/images/wellington-albuquerque.jpg` | 478 × 640 px | Card de equipe / Conselheiro Estadual e TED/OAB-MS. |
| **Dra. Aline Marques Leandro** | `assets/images/aline-marques-leandro.jpg` | 836 × 1280 px | Card de equipe / Advogada associada. |
| **Dr. Guilherme Gonçalves Marin**| `assets/images/guilherme-marin.jpg` | 960 × 1280 px | Card de equipe / Advogado associado. |
| **Dr. André Tanahara** | `assets/images/andre-tanahara.jpg` | 762 × 949 px | Card de equipe / Corpo jurídico. |
| **Dra. Patricia Azevedo** | `assets/images/patricia-azevedo.jpg` | 2208 × 3920 px (3.6 MB)| Card de equipe / Corpo jurídico. |
| **Dr. Renato Tanahara** | `assets/images/renato-tanahara.jpg` | 720 × 1280 px | Card de equipe / Corpo jurídico. |

