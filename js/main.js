/**
 * MÁRCIO SANDIM ADVOGADOS
 * Frontend Logic, Interactions & Accessibility
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Sticky Header com Transição de Vidro ---
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- 2. Menu Mobile (Drawer Off-Canvas) ---
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerClose = document.querySelector('.drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  const openDrawer = () => {
    mobileDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));
  }

  // --- 3. Modal de Detalhamento das 13 Áreas de Atuação ---
  const areasData = {
    '01': {
      title: 'Direito Criminal',
      kicker: 'ÁREA 01 · PERSECUÇÃO PENAL & TRIBUNAIS',
      desc: 'Acompanhamento e defesa de procedimentos em sede Policial e Judicial: boletim de ocorrência, inquérito policial, queixa crime, elaboração de pedidos de liberdade provisória, relaxamento de prisão em flagrante, revogação de prisão temporária e prisão preventiva, habeas corpus, recursos em geral, revisão criminal, atuação perante o tribunal do júri e tribunais superiores com sustentação oral.',
      scope: [
        'Acompanhamento em sede Policial (Boletim de Ocorrência, Inquérito Policial e Queixa-Crime);',
        'Audiências de Custódia, elaboração de pedidos de liberdade provisória e relaxamento de prisão em flagrante;',
        'Revogação de prisão temporária e revogação de prisão preventiva;',
        'Impetração de Habeas Corpus perante Tribunais de Justiça, TRFs, STJ e STF;',
        'Atuação completa perante o Tribunal do Júri com sustentação oral;',
        'Interposição de recursos em geral perante todas as instâncias e Revisão Criminal.'
      ]
    },
    '02': {
      title: 'Direito Cível',
      kicker: 'ÁREA 02 · CONTENCIOSO & CONTRATOS',
      desc: 'Propositura e defesa em ações diversas: indenizatórias, responsabilidade civil, direito de posse e propriedade, análise e elaboração de contratos em geral, defesa dos direitos e garantias individuais e consultoria.',
      scope: [
        'Propositura e defesa em ações indenizatórias e reparação por danos materiais e morais;',
        'Ações de responsabilidade civil contratual e extracontratual;',
        'Disputas de posse, propriedade e proteção de direitos reais;',
        'Análise criteriosa, elaboração e revisão de contratos em geral;',
        'Defesa técnica dos direitos e garantias individuais e consultoria preventiva.'
      ]
    },
    '03': {
      title: 'Direito Militar',
      kicker: 'ÁREA 03 · JUSTIÇA MILITAR',
      desc: 'Acompanhamento com profissionais qualificados em procedimentos militares de forma geral: processos administrativos disciplinares, ações judiciais, previdenciário militar, dentre outros.',
      scope: [
        'Acompanhamento de Inquérito Policial Militar (IPM) perante as Forças Armadas e Forças Policiais Militares;',
        'Defesa técnica em Processos Administrativos Disciplinares (PAD/PADM);',
        'Atuação em Conselhos de Justificação e Conselhos de Disciplina;',
        'Ações judiciais perante as Justiças Militares Estadual e da União;',
        'Previdenciário militar (reformas, pensões militares e direitos remuneratórios funcionais).'
      ]
    },
    '04': {
      title: 'Direito Empresarial',
      kicker: 'ÁREA 04 · ASSESSORIA CORPORATIVA',
      desc: 'Assessoria e defesa dos interesses comerciais de empresas de vários segmentos, com atuação de forma preventiva, bem como atendimento de contencioso.',
      scope: [
        'Assessoria jurídica integral para defesa dos interesses comerciais corporativos;',
        'Atuação preventiva, auditoria legal e mitigação de contingências financeiras;',
        'Atendimento de contencioso comercial e empresarial estratégico;',
        'Elaboração, negociação e auditoria de contratos mercantis complexos;',
        'Estruturação societária, governança corporativa e acordos entre sócios.'
      ]
    },
    '05': {
      title: 'Família e Sucessões',
      kicker: 'ÁREA 05 · PATRIMÔNIO & SUCESSÃO',
      desc: 'Atendimento em ações de reconhecimento e dissolução de união estável, divórcio, guarda de filhos e regulamentação de visitas, pensão alimentícia, adoção, investigação de paternidade, interdição, inventário extrajudicial e judicial, testamento, dentre outros.',
      scope: [
        'Reconhecimento e dissolução de união estável e processos de divórcio (consensual e litigioso);',
        'Guarda de filhos, regulamentação de regime de convivência e visitas;',
        'Ações de pensão alimentícia (fixação, revisão, exoneração e execução);',
        'Processos de adoção, investigação de paternidade e interdição civil;',
        'Inventário extrajudicial (em cartório) e inventário judicial com partilha de bens;',
        'Planejamento sucessório, elaboração de testamentos e preservação patrimonial.'
      ]
    },
    '06': {
      title: 'Direito Tributário',
      kicker: 'ÁREA 06 · INTELIGÊNCIA FISCAL',
      desc: 'Assessoria e ampla atuação em contencioso administrativo e judicial, trabalhando em equipe e com parceiros, com o escopo de oferecer planejamento tributário e outras medidas preventivas relevantes que compõem a área tributária.',
      scope: [
        'Ampla atuação em contencioso administrativo e judicial tributário;',
        'Planejamento tributário estratégico e adoção de medidas preventivas fiscais;',
        'Defesa contra autos de infração e cobranças indevidas (Receita Federal, SEFAZ e Municípios);',
        'Ações anulatórias, embargos à execução fiscal e mandados de segurança;',
        'Recuperação de créditos fiscais e pedidos administrativos/judiciais de restituição.'
      ]
    },
    '07': {
      title: 'Direito Imobiliário',
      kicker: 'ÁREA 07 · IMOBILIÁRIO & REGISTRAL',
      desc: 'Atendemos no ramo imobiliário em geral, transações comerciais diversas, acompanhamento em cartórios, assessoria em compra e venda de imóveis, registros, ações possessórias, usucapião, posse, propriedade, dentre outras.',
      scope: [
        'Assessoria completa em compra e venda de imóveis urbanos e rurais;',
        'Acompanhamento presencial e técnico em cartórios e ofícios de registro de imóveis;',
        'Estruturação de transações imobiliárias comerciais e empresariais diversas;',
        'Ações possessórias (reintegração, manutenção de posse e interdito proibitório);',
        'Ações de usucapião judicial e extrajudicial;',
        'Regularização fundiária, retificação de área, registro de títulos e defesa da propriedade.'
      ]
    },
    '08': {
      title: 'Direito Trabalhista',
      kicker: 'ÁREA 08 · RELAÇÕES DE TRABALHO',
      desc: 'Atuamos na representação de interesses dos empregados e empregadores, em questões sindicais, de forma preventiva junto às empresas, promovendo reclamações e elaborando defesas.',
      scope: [
        'Representação de interesses de empregados e empregadores perante a Justiça do Trabalho;',
        'Consultoria jurídica preventiva e compliance trabalhista junto a empresas;',
        'Assessoria em negociações coletivas e questões sindicais;',
        'Elaboração de defesas técnicas e recursos em reclamações trabalhistas;',
        'Propositura de ações trabalhistas para garantia de direitos e verbas devidas.'
      ]
    },
    '09': {
      title: 'Direito Previdenciário',
      kicker: 'ÁREA 09 · SEGURIDADE & INSS',
      desc: 'Representação de interesses de segurados da previdência social (INSS), em âmbito administrativo e judicial, defesa dos direitos dos segurados: aposentadoria em geral (especial, rural, etc.) e outros benefícios previdenciários (pensão, auxílio doença, etc.).',
      scope: [
        'Representação dos direitos de segurados do INSS nas vias administrativa e judicial;',
        'Concessão e revisão de aposentadorias (especial, rural, por idade e por tempo de contribuição);',
        'Benefícios por incapacidade temporária ou permanente (auxílio-doença e aposentadoria por invalidez);',
        'Concessão de pensão por morte e auxílio-reclusão;',
        'Benefício de Prestação Continuada (BPC/LOAS) e salário-maternidade;',
        'Planejamento previdenciário e cálculo detalhado de tempo de contribuição.'
      ]
    },
    '10': {
      title: 'Recuperação de Crédito',
      kicker: 'ÁREA 10 · GESTÃO DE ATIVOS & COBRANÇA',
      desc: 'Atuação com foco em aumentar o índice de crédito recuperado, seja com cobrança de forma Extrajudicial ou Judicial, negociação esta realizada por profissionais altamente qualificados, visando garantir sempre os melhores resultados para a sua empresa.',
      scope: [
        'Cobrança extrajudicial estruturada, humanizada e de alta resolutividade;',
        'Ações de execução de títulos de crédito e cobranças judiciais;',
        'Negociação estratégica conduzida por advogados altamente qualificados;',
        'Investigação patrimonial avançada, busca e penhora de bens de devedores;',
        'Gestão e recuperação de passivos comerciais com foco nos melhores resultados para a empresa.'
      ]
    },
    '11': {
      title: 'Direito Administrativo',
      kicker: 'ÁREA 11 · SERVIDORES & CORREGEDORIAS',
      desc: 'Atuação na área administrativa, especialmente em procedimentos instaurados em desfavor de servidores públicos, com atendimento especializado em âmbito de corregedorias: Polícia Civil, Polícia Militar, Polícia Rodoviária Federal, Polícia Federal, dentre outras.',
      scope: [
        'Defesa técnica especializada em procedimentos disciplinares contra servidores públicos;',
        'Atuação especializada perante Corregedorias da Polícia Civil e Polícia Militar;',
        'Atuação em Corregedorias da Polícia Rodoviária Federal e Polícia Federal;',
        'Acompanhamento de sindicâncias, inquéritos civis e Processos Administrativos Disciplinares (PAD);',
        'Ações judiciais anulatória de penalidades, mandados de segurança e reintegração de cargo.'
      ]
    },
    '12': {
      title: 'Direito Cooperativo',
      kicker: 'ÁREA 12 · COOPERATIVISMO & AGRO',
      desc: 'Assessoria a diversos ramos de cooperativas: Agropecuária, Crédito, Infraestrutura e Saúde. Como o direito cooperativo é interdisciplinar, o escritório possui em seu corpo jurídico profissionais qualificados atuando nas áreas trabalhista, tributário, comercial e civil, que se complementam e entrelaçam na aplicação do Direito Cooperativo.',
      scope: [
        'Assessoria jurídica integral aos ramos de cooperativas: Agropecuária, Crédito, Infraestrutura e Saúde;',
        'Elaboração e atualização de estatutos sociais, regulamentos internos e governança cooperativa;',
        'Assessoria interdisciplinar especializada com atuação conjunta em direito trabalhista, tributário, comercial e civil;',
        'Defesa em litígios judiciais e procedimentos regulatórios junto aos órgãos competentes;',
        'Consultoria na aplicação e preservação dos princípios do cooperativismo e segurança jurídica dos cooperados.'
      ]
    },
    '13': {
      title: 'Correspondente Jurídico',
      kicker: 'ÁREA 13 · APOIO PROCESSUAL EM MS',
      desc: 'Amplo apoio no serviço de correspondência jurídica: audiências, protocolos, assessoria jurídica, diligências diversas, cópia de processos, acompanhamento de julgamentos, sustentação oral, acompanhamento de profissionais, entre outros.',
      scope: [
        'Realização de audiências presenciais e virtuais (conciliação, mediação, instrução e julgamento);',
        'Sustentação oral perante o Tribunal de Justiça de MS (TJMS) e Tribunais Regionais;',
        'Cumprimento ágil de diligências forenses, cartorárias e administrativas com relatórios em tempo real;',
        'Protocolos de petições, recursos e despachos presenciais com magistrados e secretarias de vara;',
        'Obtenção de cópias integrais e certidões de processos físicos e digitais;',
        'Acompanhamento presencial de perícias judiciais e suporte logístico-jurídico a bancas parceiras de todo o Brasil.'
      ]
    }
  };

  const modalOverlay = document.querySelector('.modal-overlay');
  const modalContent = document.querySelector('.modal-content');
  const modalKicker = document.getElementById('modalAreaKicker');
  const modalTitle = document.getElementById('modalAreaTitle');
  const modalDesc = document.getElementById('modalAreaDesc');
  const modalList = document.getElementById('modalAreaList');
  const modalClose = document.querySelector('.modal-close');
  let lastFocusedElement = null;

  const openAreaModal = (areaKey, updateHistory = true) => {
    const data = areasData[areaKey];
    if (!data) return;

    lastFocusedElement = document.activeElement;

    modalKicker.textContent = data.kicker;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalList.innerHTML = data.scope.map(item => `<li>${item}</li>`).join('');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (updateHistory) {
      try {
        history.pushState({ modalOpen: true, area: areaKey }, '', '#area-' + areaKey);
      } catch (e) {}
    }

    if (modalClose) {
      modalClose.focus();
    }
  };

  const closeAreaModal = (fromHistory = false) => {
    if (!modalOverlay || !modalOverlay.classList.contains('active')) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';

    if (!fromHistory && window.history.state && window.history.state.modalOpen) {
      window.history.back();
    }

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  };

  // Trapping Tab Focus inside modal
  if (modalOverlay && modalContent) {
    modalOverlay.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const focusable = modalContent.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    });
  }

  // Sincronização do Botão Voltar do Navegador (History API)
  window.addEventListener('popstate', () => {
    if (modalOverlay && modalOverlay.classList.contains('active')) {
      closeAreaModal(true);
    }
  });

  document.querySelectorAll('.area-card, .quick-area-tab').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const areaKey = el.getAttribute('data-area');
      if (areaKey) openAreaModal(areaKey);
    });
  });

  if (modalClose) modalClose.addEventListener('click', () => closeAreaModal(false));
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeAreaModal(false);
    });
  }

  // Fechar modais ao pressionar tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAreaModal(false);
      closeDrawer();
    }
  });

  // --- 4. Sistema de Feedback e Notificação (Toast) ---
  const showToast = (message) => {
    let toast = document.querySelector('.toast-msg');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-msg';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  };

  // --- 5. Formulário de Contato Ético com Validação Inline e Máscara ---
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('formName');
  const phoneInput = document.getElementById('formPhone');
  const emailInput = document.getElementById('formEmail');
  const nameError = document.getElementById('formNameError');
  const phoneError = document.getElementById('formPhoneError');
  const emailError = document.getElementById('formEmailError');

  const setFieldError = (input, errorEl, message) => {
    if (!input) return;
    input.classList.add('is-invalid');
    input.setAttribute('aria-invalid', 'true');
    if (errorEl) {
      errorEl.textContent = message;
      input.setAttribute('aria-describedby', errorEl.id);
    }
  };

  const clearFieldError = (input, errorEl) => {
    if (!input) return;
    input.classList.remove('is-invalid');
    input.removeAttribute('aria-invalid');
    if (errorEl) {
      errorEl.textContent = '';
      input.removeAttribute('aria-describedby');
    }
  };

  // Máscara dinâmica de telefone brasileiro (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if (val.length > 11) val = val.slice(0, 11);

      if (val.length > 10) {
        val = val.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      } else if (val.length > 6) {
        val = val.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
      } else if (val.length > 2) {
        val = val.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
      } else if (val.length > 0) {
        val = val.replace(/^(\d*)$/, '($1');
      }
      e.target.value = val;
      clearFieldError(phoneInput, phoneError);
    });
  }

  if (nameInput) {
    nameInput.addEventListener('input', () => clearFieldError(nameInput, nameError));
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => clearFieldError(emailInput, emailError));
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = nameInput ? nameInput.value.trim() : '';
      const phoneDigits = phoneInput ? phoneInput.value.replace(/\D/g, '') : '';
      const email = emailInput ? emailInput.value.trim() : '';

      let hasError = false;
      let firstInvalid = null;

      if (!name || name.length < 3) {
        setFieldError(nameInput, nameError, 'Por favor, informe seu nome completo.');
        hasError = true;
        if (!firstInvalid) firstInvalid = nameInput;
      } else {
        clearFieldError(nameInput, nameError);
      }

      if (!phoneDigits || phoneDigits.length < 10) {
        setFieldError(phoneInput, phoneError, 'Informe um telefone válido com DDD (mínimo 10 dígitos).');
        hasError = true;
        if (!firstInvalid) firstInvalid = phoneInput;
      } else {
        clearFieldError(phoneInput, phoneError);
      }

      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setFieldError(emailInput, emailError, 'Informe um e-mail válido ou deixe em branco.');
        hasError = true;
        if (!firstInvalid) firstInvalid = emailInput;
      } else if (emailInput) {
        clearFieldError(emailInput, emailError);
      }

      if (hasError) {
        if (firstInvalid) firstInvalid.focus();
        showToast('Por favor, verifique os campos destacados.');
        return;
      }

      // Montagem da mensagem estruturada para o WhatsApp Oficial
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const areaSelect = document.getElementById('formArea');
      const areaText = areaSelect && areaSelect.selectedIndex >= 0 ? areaSelect.options[areaSelect.selectedIndex].text : '';
      const messageInput = document.getElementById('formMessage');
      const message = messageInput ? messageInput.value.trim() : '';

      const lines = [
        'Olá! Gostaria de solicitar um atendimento com o escritório Márcio Sandim Advogados.',
        '',
        '*Dados da Solicitação:*',
        `- *Nome:* ${name}`,
        `- *Telefone/WhatsApp:* ${phone}`,
      ];

      if (email) {
        lines.push(`- *E-mail:* ${email}`);
      }

      if (areaText) {
        lines.push(`- *Área de Interesse:* ${areaText}`);
      }

      if (message) {
        lines.push('', '*Resumo da Demanda:*', message);
      }

      const whatsappText = lines.join('\n');
      const whatsappUrl = `https://wa.me/5567991672000?text=${encodeURIComponent(whatsappText)}`;

      // Feedback visual e desativação temporária do botão para evitar cliques múltiplos
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Encaminhando para o WhatsApp...';
      }

      showToast(`Obrigado, ${name}! Encaminhando sua solicitação para o WhatsApp do escritório...`);

      // Tenta abrir em nova aba; se bloqueado pelo navegador, redireciona diretamente
      const win = window.open(whatsappUrl, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = whatsappUrl;
      }

      // Limpar formulário e restaurar botão após um intervalo
      contactForm.reset();
      if (submitBtn) {
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }, 2500);
      }
    });
  }

  // --- 6. Botão de Copiar Dados de Segurança ---
  const copySecurityBtn = document.getElementById('copySecurityInfo');
  if (copySecurityBtn) {
    copySecurityBtn.addEventListener('click', () => {
      const securityText = 'Márcio Sandim Advogados | Sede: Av. Afonso Pena, 3504, Sala 65, Edifício Empire Center, Campo Grande/MS | Telefones Oficiais: (67) 3029-1060 e (67) 99167-2000. O escritório NÃO solicita depósitos ou transferências sem alinhamento prévio e contrato.';
      navigator.clipboard.writeText(securityText).then(() => {
        showToast('Dados de segurança copiados com sucesso!');
      }).catch(() => {
        showToast('Telefones oficiais: (67) 3029-1060 / (67) 99167-2000');
      });
    });
  }

  // --- 7. Alternância de Tema Claro / Escuro (Theme Toggle) ---
  const themeToggles = document.querySelectorAll('.theme-toggle');

  const getCurrentTheme = () => {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  };

  const applyTheme = (theme, notify = false) => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('sandim_theme', theme);
    } catch (e) {}

    // Atualiza o meta theme-color para a barra do navegador mobile
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = theme === 'light' ? '#F6F4EF' : '#0E2E38';
    }

    // Atualiza o meta color-scheme
    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaColorScheme) {
      metaColorScheme.content = theme === 'light' ? 'light dark' : 'dark light';
    }

    // Atualiza atributos de acessibilidade nos botões
    themeToggles.forEach(btn => {
      btn.setAttribute('aria-pressed', theme === 'light');
      btn.setAttribute('title', theme === 'light' ? 'Mudar para modo escuro' : 'Mudar para modo claro');
      const srText = btn.querySelector('.theme-toggle-sr');
      if (srText) {
        srText.textContent = theme === 'light' ? 'Mudar para modo escuro' : 'Mudar para modo claro';
      }
    });

    // Garantia ativa de visibilidade única do logotipo institucional no cabeçalho
    const headerWhiteLogo = document.querySelector('.site-header .brand-logo-white');
    const headerDarkLogo = document.querySelector('.site-header .brand-logo-dark');
    if (headerWhiteLogo && headerDarkLogo) {
      if (theme === 'light') {
        headerWhiteLogo.style.setProperty('display', 'none', 'important');
        headerDarkLogo.style.setProperty('display', 'block', 'important');
      } else {
        headerWhiteLogo.style.setProperty('display', 'block', 'important');
        headerDarkLogo.style.setProperty('display', 'none', 'important');
      }
    }

    if (notify) {
      showToast(theme === 'light' ? 'Tema claro ativado.' : 'Tema escuro ativado.');
    }
  };

  // Inicializa estado dos botões de acordo com o tema ativo
  applyTheme(getCurrentTheme(), false);

  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const nextTheme = getCurrentTheme() === 'light' ? 'dark' : 'light';
      applyTheme(nextTheme, true);
    });
  });

  // Observa mudanças de preferência do sistema operacional
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
      if (!localStorage.getItem('sandim_theme')) {
        applyTheme(e.matches ? 'light' : 'dark', false);
      }
    });
  }
});

