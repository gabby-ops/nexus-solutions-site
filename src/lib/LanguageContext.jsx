import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  pt: {
    nav: {
      iaAutomacao: 'IA & Automação',
      servicos: 'Serviços',
      sobre: 'Sobre',
      cases: 'Cases',
      faleConosco: 'Fale conosco',
      inicio: 'Início',
    },
    hero: {
      title: 'Conectando Tecnologia, Inteligência e Resultados',
      subtitle: 'Entregamos soluções completas de TI — Infraestrutura, Cloud & DevOps, Segurança, Automação e APIs, BI e Inteligência Artificial — integradas para acelerar seu crescimento e reduzir custos.',
      cta1: 'Fale com um Especialista',
      cta2: 'Conheça as soluções',
    },
    services: {
      title: 'Soluções Inteligentes em Tecnologia',
      infra: { title: 'Infraestrutura de TI', desc: 'Redes, servidores, storage e virtualização com alta disponibilidade e desempenho. Projetos completos, implantação e sustentação.' },
      cloud: { title: 'Cloud & DevOps', desc: 'Arquitetura em nuvem (AWS, Azure, GCP), CI/CD, containers, observabilidade e otimização de custos.' },
      security: { title: 'Segurança da Informação', desc: 'Firewalls, IAM, backups, LGPD, gestão de vulnerabilidades, SSO, MFA e resposta a incidentes.' },
      bi: { title: 'Business Intelligence', desc: 'Dashboards interativos, governança de dados e análises preditivas para decisões mais rápidas.' },
      automation: { title: 'Automação e APIs', desc: 'Integrações entre sistemas, orquestrações, RPA e automações de atendimento e operações.' },
      ai: { title: 'Inteligência Artificial', desc: 'Agentes de IA, NLP, classificação de leads, visão computacional e modelos sob medida.' },
      support: { title: 'Suporte & Monitoração 24/7', desc: 'NOC, Service Desk, SRE e monitoramento proativo com SLAs claros.' },
      governance: { title: 'Governança & Compliance', desc: 'Políticas, processos ITIL/COBIT, CMDB e conformidade regulatória.' },
    },
    about: {
      title: 'Sobre a Nexus Solutions',
      p1: 'Somos especialistas em conectar inovação e eficiência para impulsionar resultados. Atuamos de ponta a ponta: estratégia, arquitetura, implementação e suporte contínuo.',
      p2: 'Nosso diferencial é a entrega orientada a dados, automação e experiência do usuário. Da infraestrutura à IA, somos o parceiro para a sua transformação digital.',
      badges: ['Projetos sob medida', 'Time sênior', 'Foco em ROI', 'Metodologia ágil'],
    },
    founders: {
      renan: 'Renan Dias — CEO & Co-Founder',
      joao: 'João Fachin — CTO & Co-Founder',
      gustavo_f: 'Gustavo Fachim — CEO & Co-Founder',
      gustavo_r: 'Gustavo Redin — CTO & Co-Founder',
    },
    stats: {
      title: 'Resultados que falam por nós',
      prod: { value: '+47%', label: 'produtividade', desc: 'Com automações e integrações via API, reduzimos tarefas manuais e aceleramos o atendimento.' },
      cost: { value: '-38%', label: 'custos de Hospedagem', desc: 'Otimização de arquitetura com visibilidade em tempo real e políticas de escala.' },
      uptime: { value: '99,95%', label: 'disponibilidade', desc: 'Monitoração proativa, SRE e boas práticas de resiliência em produção.' },
    },
    cta: {
      title: 'Pronto para transformar sua TI?',
      subtitle: 'Converse com nossa equipe e receba um diagnóstico inicial gratuito.',
      button: 'Fale com um Especialista',
    },
    contact: {
      title: 'Fale conosco',
      subtitle: 'Preencha o formulário e nossa equipe retornará rapidamente. Preferir WhatsApp? Use o botão flutuante no canto.',
      location: 'Rondonópolis • Atendemos todo o Brasil',
      hours: 'Seg–Sex: 8h às 18h',
      email: 'contato@nexussolutions.com.br',
      name: 'Nome *',
      namePlaceholder: 'Seu nome completo',
      company: 'Empresa',
      companyPlaceholder: 'Nome da sua empresa',
      emailLabel: 'E-mail *',
      emailPlaceholder: 'seu@email.com',
      phone: 'Telefone',
      phonePlaceholder: '(00) 00000-0000',
      area: 'Área de interesse',
      areaPlaceholder: 'Selecione uma área',
      message: 'Mensagem',
      messagePlaceholder: 'Como podemos ajudar seu negócio?',
      send: 'Enviar mensagem',
    },
  footer: {
  desc: 'Pioneiros em soluções de infraestrutura digital, segurança e inteligência artificial para empresas.',
  nav: 'Navegação',
  contactUs: 'Fale Conosco',
  rights: '© 2026 Nexus Solutions. Todos os direitos reservados.',
  privacy: 'Política de Privacidade',
  terms: 'Termos de Uso',

  footerEmail: 'contato@nexussolutions.com.br',
  footerPhone: '+55 66 3199-2858',
  footerAddress: 'Rondonópolis • Atendemos todo o Brasil',
  footerHours: 'Seg–Sex: 8h às 18h',
},
    // IA page
    ia: {
      heroTitle: 'IA & Automação no WhatsApp',
      heroSubtitle: 'Conectamos qualquer aplicação com API ao WhatsApp para unificar atendimento, qualificação, agendamentos, pedidos e muito mais — com agentes de IA que entendem contexto, seguem regras e entregam resultado.',
      cta1: 'Falar com um Especialista',
      cta2: 'Ver como funciona',
      badges: ['Atendimento 24/7', 'Regras & Flows', 'Human handoff', 'Métricas & BI'],
      nav: {
        comoFunciona: 'Como funciona',
        casosDeUso: 'Casos de uso',
        integracoes: 'Integrações',
        whatsapp: 'Fale no WhatsApp',
      },
      howTitle: 'Como funciona',
      steps: [
        { id: 's1', title: 'Conexão de APIs', desc: 'Integramos seu CRM, ERP, e-commerce, planilhas e qualquer REST/GraphQL.' },
        { id: 's2', title: 'Orquestração', desc: 'Definimos regras, filas, horários, SLA e quando acionar humano.' },
        { id: 's3', title: 'Agentes de IA', desc: 'Atendem, qualificam, coletam dados e agendam — com contexto e memória.' },
        { id: 's4', title: 'Métricas & BI', desc: 'Dashboards de leads, conversas, conversão e tempos de resposta.' },
      ],
      useCasesTitle: 'O que seus agentes fazem no WhatsApp',
      useCases: [
        { title: 'Atendimento 24/7', desc: 'Respostas instantâneas, menus inteligentes, trilhas por intenção e histórico do cliente.' },
        { title: 'Qualificação de Leads', desc: 'Perguntas dinâmicas, validação de dados e encaminhamento para o time certo.' },
        { title: 'Agendamentos & Lembretes', desc: 'Integra com calendário/sistema e dispara confirmações e lembretes automáticos.' },
        { title: 'Pedidos & Estoque', desc: 'Consulta catálogo, cria pedidos, acompanha status e integra com ERP.' },
        { title: 'Suporte & Status', desc: 'Abertura de chamados, status de serviço, rastreios e FAQs.' },
        { title: 'Cobrança & Boletos', desc: 'Geração de segunda via, lembretes e confirmação de pagamento.' },
      ],
      integrationsTitle: 'Integramos com o que você já usa',
      integrationsDesc: 'Qualquer sistema com API REST ou GraphQL: CRMs (Pipedrive, RD, HubSpot), ERPs, e-commerces (Nuvemshop, Shopify), planilhas (Google Sheets), bancos de dados, gateways de pagamento, serviços de e-mail, calendários e muito mais.',
      ctaTitle: 'Vamos colocar seu WhatsApp para trabalhar?',
      ctaSubtitle: 'Fale agora e receba um desenho rápido de fluxo e integrações possíveis para o seu cenário.',
      ctaButton: 'Conversar no WhatsApp',
    },
    contactPage: {
      title: 'Vamos conversar sobre seu projeto',
      subtitle: 'Preencha o formulário ou fale diretamente pelo WhatsApp. Nossa equipe retorna rapidamente.',
      locationLabel: 'Localização',
      location: 'Rondonópolis, MT — Atendemos todo o Brasil',
      hoursLabel: 'Horário',
      hours: 'Seg–Sex, 8h às 18h',
      emailLabel: 'E-mail',
      email: 'contato@nexussolutions.com.br',
      whatsappLabel: 'WhatsApp',
      whatsapp: '+55 (66) 3199-2858',
    },
  },
  en: {
    nav: {
      iaAutomacao: 'AI & Automation',
      servicos: 'Services',
      sobre: 'About',
      cases: 'Cases',
      faleConosco: 'Contact Us',
      inicio: 'Home',
    },
    hero: {
      title: 'Connecting Technology, Intelligence and Results',
      subtitle: 'We deliver complete IT solutions — Infrastructure, Cloud & DevOps, Security, Automation & APIs, BI and Artificial Intelligence — integrated to accelerate your growth and reduce costs.',
      cta1: 'Talk to a Specialist',
      cta2: 'Explore Solutions',
    },
    services: {
      title: 'Intelligent Technology Solutions',
      infra: { title: 'IT Infrastructure', desc: 'Networks, servers, storage and virtualization with high availability and performance. Complete projects, deployment and support.' },
      cloud: { title: 'Cloud & DevOps', desc: 'Cloud architecture (AWS, Azure, GCP), CI/CD, containers, observability and cost optimization.' },
      security: { title: 'Information Security', desc: 'Firewalls, IAM, backups, LGPD, vulnerability management, SSO, MFA and incident response.' },
      bi: { title: 'Business Intelligence', desc: 'Interactive dashboards, data governance and predictive analytics for faster decisions.' },
      automation: { title: 'Automation & APIs', desc: 'System integrations, orchestrations, RPA and service/operations automation.' },
      ai: { title: 'Artificial Intelligence', desc: 'AI agents, NLP, lead scoring, computer vision and custom models.' },
      support: { title: 'Support & Monitoring 24/7', desc: 'NOC, Service Desk, SRE and proactive monitoring with clear SLAs.' },
      governance: { title: 'Governance & Compliance', desc: 'Policies, ITIL/COBIT processes, CMDB and regulatory compliance.' },
    },
    about: {
      title: 'About Nexus Solutions',
      p1: 'We are specialists in connecting innovation and efficiency to drive results. We work end-to-end: strategy, architecture, implementation and ongoing support.',
      p2: 'Our differentiator is data-driven delivery, automation and user experience. From infrastructure to AI, we are the partner for your digital transformation.',
      badges: ['Custom projects', 'Senior team', 'ROI focused', 'Agile methodology'],
    },
    founders: {
      renan: 'Renan Dias — CEO & Co-Founder',
      joao: 'João Fachin — CTO & Co-Founder',
      gustavo_f: 'Gustavo Fachim — CEO & Co-Founder',
      gustavo_r: 'Gustavo Redin — CTO & Co-Founder',
    },
    stats: {
      title: 'Results that speak for themselves',
      prod: { value: '+47%', label: 'productivity', desc: 'With automations and API integrations, we reduced manual tasks and accelerated service.' },
      cost: { value: '-38%', label: 'hosting costs', desc: 'Architecture optimization with real-time visibility and scaling policies.' },
      uptime: { value: '99.95%', label: 'availability', desc: 'Proactive monitoring, SRE and best practices for production resilience.' },
    },
    cta: {
      title: 'Ready to transform your IT?',
      subtitle: 'Talk to our team and get a free initial diagnostic.',
      button: 'Talk to a Specialist',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Fill out the form and our team will get back to you quickly. Prefer WhatsApp? Use the floating button.',
      location: 'Rondonópolis • We serve all of Brazil',
      hours: 'Mon–Fri: 8am to 6pm',
      email: 'contato@nexussolutions.com.br',
      name: 'Name *',
      namePlaceholder: 'Your full name',
      company: 'Company',
      companyPlaceholder: 'Your company name',
      emailLabel: 'Email *',
      emailPlaceholder: 'your@email.com',
      phone: 'Phone',
      phonePlaceholder: '(00) 00000-0000',
      area: 'Area of interest',
      areaPlaceholder: 'Select an area',
      message: 'Message',
      messagePlaceholder: 'How can we help your business?',
      send: 'Send message',
    },
    footer: {
      desc: 'Pioneers in digital infrastructure solutions, security and artificial intelligence for the global corporate market.',
      nav: 'Navigation',
      contactUs: 'Contact Us',
      rights: '© 2026 Nexus Solutions. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      footerEmail: 'hello@nexussolutions.tech',
      footerPhone: '+55 11 99999-9999',
      footerAddress: 'São Paulo, SP — Brazil',
    },
    ia: {
      heroTitle: 'AI & Automation on WhatsApp',
      heroSubtitle: 'We connect any API application to WhatsApp to unify service, qualification, scheduling, orders and more — with AI agents that understand context, follow rules and deliver results.',
      cta1: 'Talk to a Specialist',
      cta2: 'See how it works',
      badges: ['24/7 Service', 'Rules & Flows', 'Human handoff', 'Metrics & BI'],
      nav: {
        comoFunciona: 'How it works',
        casosDeUso: 'Use cases',
        integracoes: 'Integrations',
        whatsapp: 'WhatsApp us',
      },
      howTitle: 'How it works',
      steps: [
        { id: 's1', title: 'API Connection', desc: 'We integrate your CRM, ERP, e-commerce, spreadsheets and any REST/GraphQL.' },
        { id: 's2', title: 'Orchestration', desc: 'We define rules, queues, schedules, SLA and when to escalate to human.' },
        { id: 's3', title: 'AI Agents', desc: 'They serve, qualify, collect data and schedule — with context and memory.' },
        { id: 's4', title: 'Metrics & BI', desc: 'Dashboards for leads, conversations, conversion and response times.' },
      ],
      useCasesTitle: 'What your agents do on WhatsApp',
      useCases: [
        { title: '24/7 Service', desc: 'Instant responses, smart menus, intent trails and customer history.' },
        { title: 'Lead Qualification', desc: 'Dynamic questions, data validation and routing to the right team.' },
        { title: 'Scheduling & Reminders', desc: 'Calendar integration and automatic confirmations and reminders.' },
        { title: 'Orders & Inventory', desc: 'Catalog lookup, order creation, status tracking and ERP integration.' },
        { title: 'Support & Status', desc: 'Ticket creation, service status, tracking and FAQs.' },
        { title: 'Billing & Invoices', desc: 'Invoice generation, reminders and payment confirmation.' },
      ],
      integrationsTitle: 'We integrate with what you already use',
      integrationsDesc: 'Any system with REST or GraphQL API: CRMs (Pipedrive, RD, HubSpot), ERPs, e-commerces (Nuvemshop, Shopify), spreadsheets (Google Sheets), databases, payment gateways, email services, calendars and more.',
      ctaTitle: 'Ready to put your WhatsApp to work?',
      ctaSubtitle: 'Talk now and get a quick flow design and possible integrations for your scenario.',
      ctaButton: 'Chat on WhatsApp',
    },
    contactPage: {
      title: "Let's talk about your project",
      subtitle: 'Fill out the form or talk directly on WhatsApp. Our team responds quickly.',
      locationLabel: 'Location',
      location: 'Rondonópolis, MT — We serve all of Brazil',
      hoursLabel: 'Hours',
      hours: 'Mon–Fri, 8am to 6pm',
      emailLabel: 'Email',
      email: 'contato@nexussolutions.com.br',
      whatsappLabel: 'WhatsApp',
      whatsapp: '+55 (66) 3199-2858',
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('nexus-lang') || 'pt';
    }
    return 'pt';
  });

  const toggleLang = () => {
    const newLang = lang === 'pt' ? 'en' : 'pt';
    setLang(newLang);
    localStorage.setItem('nexus-lang', newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);