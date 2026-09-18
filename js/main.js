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

  // --- 3. Modal de Detalhamento das 6 Áreas de Atuação ---
  const areasData = {
    '01': {
      title: 'Direito Criminal',
      kicker: 'ÁREA 01 · PERSECUÇÃO PENAL E TRIBUNAIS',
      desc: 'Atuação técnica, vigorosa e estratégica em todas as fases da persecução penal, assegurando as garantias constitucionais e a ampla defesa com sigilo absoluto.',
      scope: [
        'Acompanhamento em Delegacias de Polícia e Inquéritos Policiais (Estadual e Federal);',
        'Audiências de Custódia e pedidos urgentes de liberdade provisória / revogação de prisão preventiva;',
        'Impetração de Habeas Corpus perante os Tribunais de Justiça, TRFs, STJ e STF;',
        'Atuação no Tribunal do Júri com sustentação oral;',
        'Recursos em todas as instâncias e Revisão Criminal;',
        'Defesa em Crimes Financeiros, Tributários e de Colarinho Branco (White-Collar).'
      ]
    },
    '02': {
      title: 'Direito Cível',
      kicker: 'ÁREA 02 · CONTENCIOSO ESTRATÉGICO',
      desc: 'Soluções preventivas e contenciosas de alta complexidade para blindagem patrimonial, segurança contratual e mitigação de riscos civis.',
      scope: [
        'Ações indenizatórias e reparação de danos morais e materiais;',
        'Elaboração, análise e auditoria de contratos civis complexos;',
        'Disputas de posse, propriedade e direitos reais imobiliários;',
        'Execução de títulos, recuperação de ativos e cobranças judiciais;',
        'Consultoria jurídica preventiva para pessoas físicas e grupos familiares.'
      ]
    },
    '03': {
      title: 'Família e Sucessões',
      kicker: 'ÁREA 03 · PATRIMÔNIO E SUCESSÃO',
      desc: 'Condução discreta, acolhedora e altamente técnica para proteção patrimonial de gerações e resolução pacífica de conflitos familiares.',
      scope: [
        'Planejamento sucessório estratégico e governança patrimonial;',
        'Inventários judiciais e extrajudiciais (em cartório) com partilha de bens;',
        'Testamentos, doações com reserva de usufruto e holdings familiares;',
        'Divórcios consensuais e litigiosos, partilha de bens e pensão alimentícia;',
        'Regulamentação de guarda, visitas e investigações de paternidade.'
      ]
    },
    '04': {
      title: 'Direito Militar',
      kicker: 'ÁREA 04 · JUSTIÇA MILITAR',
      desc: 'Assessoria jurídica altamente especializada na defesa dos direitos de praças e oficiais perante a Justiça Militar Estadual e da União.',
      scope: [
        'Acompanhamento de Inquérito Policial Militar (IPM);',
        'Defesa técnica em Processos Administrativos Disciplinares (PAD/PADM);',
        'Atuação em Conselhos de Justificação e Conselhos de Disciplina;',
        'Ações ordinárias para promoções, reintegrações e direitos funcionais;',
        'Contencioso perante as Auditorias Militares e Superior Tribunal Militar (STM).'
      ]
    },
    '05': {
      title: 'Direito Tributário',
      kicker: 'ÁREA 05 · INTELIGÊNCIA FISCAL',
      desc: 'Planejamento e contencioso fiscal visando a otimização da carga tributária, conformidade e recuperação de tributos recolhidos indevidamente.',
      scope: [
        'Planejamento tributário estratégico para pessoas jurídicas e físicas;',
        'Defesas administrativas e judiciais contra autuações da Receita Federal, SEFAZ e Municípios;',
        'Ações declaratórias, anulatórias de débito fiscal e embargos à execução fiscal;',
        'Recuperação de créditos tributários e pedidos de restituição;',
        'Gestão e parcelamento especial de passivos tributários.'
      ]
    },
    '06': {
      title: 'Direito Empresarial',
      kicker: 'ÁREA 06 · ASSESSORIA CORPORATIVA',
      desc: 'Assessoria jurídica contínua para empresas de diversos portes, garantindo solidez nas operações, compliance e blindagem contra litígios societários.',
      scope: [
        'Consultoria jurídica empresarial preventiva (Full-Service Corporativo);',
        'Elaboração e negociação de contratos comerciais estratégicos;',
        'Estruturação societária, acordos de sócios e resolução de conflitos internos;',
        'Programas de conformidade (Compliance) e adequação à LGPD;',
        'Assessoria em reestruturações, fusões e aquisições (M&A).'
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

      // Simulação de envio com confirmação institucional
      showToast(`Obrigado, ${name}. Sua solicitação foi recebida com sucesso. O escritório entrará em contato.`);
      contactForm.reset();
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

