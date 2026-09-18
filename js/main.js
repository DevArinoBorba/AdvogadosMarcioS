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
  const modalKicker = document.getElementById('modalAreaKicker');
  const modalTitle = document.getElementById('modalAreaTitle');
  const modalDesc = document.getElementById('modalAreaDesc');
  const modalList = document.getElementById('modalAreaList');
  const modalClose = document.querySelector('.modal-close');

  const openAreaModal = (areaKey) => {
    const data = areasData[areaKey];
    if (!data) return;

    modalKicker.textContent = data.kicker;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalList.innerHTML = data.scope.map(item => `<li>${item}</li>`).join('');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeAreaModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.area-card, .quick-area-tab').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const areaKey = el.getAttribute('data-area');
      if (areaKey) openAreaModal(areaKey);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeAreaModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeAreaModal();
    });
  }

  // Fechar modais ao pressionar tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAreaModal();
      closeDrawer();
    }
  });

  // --- 4. Sistema de Feedback e Notificação (Toast) ---
  const showToast = (message) => {
    let toast = document.querySelector('.toast-msg');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  };

  // --- 5. Formulário de Contato Ético ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value.trim();
      const phone = document.getElementById('formPhone').value.trim();
      const area = document.getElementById('formArea').value;

      if (!name || !phone) {
        showToast('Por favor, informe ao menos seu nome e telefone.');
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

