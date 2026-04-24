export const SERVICE_DETAIL_KEYS = [
  'infra',
  'cloud',
  'security',
  'bi',
  'ai',
  'automation',
  'support',
  'governance',
] as const;

export type ServiceDetailKey = (typeof SERVICE_DETAIL_KEYS)[number];

export interface ServiceDetailBlock {
  description: string;
  benefits: string[];
  differential: string;
}

export const servicesDetail: Record<
  ServiceDetailKey,
  { pt: ServiceDetailBlock; en: ServiceDetailBlock }
> = {
  infra: {
    pt: {
      description:
        'Projetamos e operamos redes, servidores, storage e virtualização com foco em disponibilidade, performance e custo previsível — da auditoria à sustentação.',
      benefits: [
        'Arquitetura resiliente (HA/DR) alinhada ao seu RTO/RPO',
        'Padronização e automação de provisionamento',
        'Capacidade e performance dimensionadas com dados reais',
        'Runbooks e monitoração integrados ao NOC',
      ],
      differential:
        'Entrega “ponta a ponta”: não vendemos só hardware — desenhamos o ecossistema, implementamos e ficamos responsáveis pelo resultado em produção.',
    },
    en: {
      description:
        'We design and operate networks, servers, storage and virtualization with a focus on availability, performance and predictable cost — from audit to sustainment.',
      benefits: [
        'Resilient (HA/DR) architecture aligned to your RTO/RPO',
        'Standardized, automated provisioning',
        'Capacity and performance sized on real metrics',
        'Runbooks and monitoring integrated with the NOC',
      ],
      differential:
        'True end-to-end delivery: we do not only sell boxes — we design the ecosystem, implement it and own the outcome in production.',
    },
  },
  cloud: {
    pt: {
      description:
        'Cloud híbrida e multi-cloud (AWS, Azure, GCP) com pipelines CI/CD, containers, observabilidade e FinOps para reduzir desperdício sem perder velocidade.',
      benefits: [
        'Landing zones seguras e repetíveis',
        'Pipelines e ambientes efêmeros para menos risco em release',
        'Custos visíveis por time, produto e tag',
        'SRE com SLIs/SLOs e error budgets claros',
      ],
      differential:
        'Cloud com disciplina comercial: cada sprint liga melhoria técnica a indicador de negócio (custo, lead time, incidentes).',
    },
    en: {
      description:
        'Hybrid and multi-cloud (AWS, Azure, GCP) with CI/CD pipelines, containers, observability and FinOps to cut waste without slowing delivery.',
      benefits: [
        'Secure, repeatable landing zones',
        'Pipelines and ephemeral environments for safer releases',
        'Costs visible by team, product and tag',
        'SRE with clear SLIs/SLOs and error budgets',
      ],
      differential:
        'Cloud with commercial discipline: every sprint ties technical work to business metrics (cost, lead time, incidents).',
    },
  },
  security: {
    pt: {
      description:
        'Postura de segurança em camadas: identidade (IAM/SSO/MFA), rede, dados, backup e resposta a incidentes, com LGPD e conformidade no desenho.',
      benefits: [
        'Menor superfície de ataque e segmentação real (não só VLAN “de praxe”)',
        'Gestão de vulnerabilidades priorizada por risco ao negócio',
        'Playbooks de resposta e comunicação com stakeholders',
        'Evidências prontas para auditoria e due diligence',
      ],
      differential:
        'Segurança que conversa com operações: menos “checklist” e mais controles que o time consegue operar no dia a dia.',
    },
    en: {
      description:
        'Layered security posture: identity (IAM/SSO/MFA), network, data, backup and incident response, with privacy and compliance baked in.',
      benefits: [
        'Smaller attack surface and meaningful segmentation',
        'Vulnerability management prioritized by business risk',
        'Response playbooks and stakeholder communication',
        'Evidence packs ready for audit and due diligence',
      ],
      differential:
        'Security that talks to operations: fewer checkbox exercises, more controls your team can actually run daily.',
    },
  },
  bi: {
    pt: {
      description:
        'Camada de dados confiável para decisão: modelagem, governança, dashboards e analytics avançado (incluindo predição) com foco em ação, não só relatório.',
      benefits: [
        'Indicadores acordados com negócio e donos de dado',
        'Linhagem e qualidade monitoradas',
        'Self-service controlado para áreas analíticas',
        'Projetos piloto com ROI estimado antes do rollout',
      ],
      differential:
        'BI que fecha o ciclo: da pergunta de negócio ao dado certo, ao insight, ao play acionável no CRM/ERP/WhatsApp.',
    },
    en: {
      description:
        'A trustworthy data layer for decisions: modeling, governance, dashboards and advanced analytics (including prediction) focused on action, not only reports.',
      benefits: [
        'Metrics agreed with business and data owners',
        'Lineage and quality monitored',
        'Controlled self-service for analytical teams',
        'Pilot projects with estimated ROI before rollout',
      ],
      differential:
        'BI that closes the loop: from business question to the right data, to insight, to an actionable play in CRM/ERP/WhatsApp.',
    },
  },
  ai: {
    pt: {
      description:
        'Agentes de IA, NLP, classificação de leads, visão computacional e modelos sob medida — sempre com governança, observabilidade e fallback humano.',
      benefits: [
        'Casos de uso priorizados por impacto e viabilidade de dados',
        'Guardrails, logs e avaliação contínua de qualidade',
        'Integração com canais (WhatsApp, web, voz) e sistemas legados',
        'Redução de filas e custo por atendimento mensurável',
      ],
      differential:
        'IA aplicada com pragmatismo: começamos pelo fluxo que dói no P&L hoje, não pelo “POC eterno”.',
    },
    en: {
      description:
        'AI agents, NLP, lead scoring, computer vision and custom models — always with governance, observability and human fallback.',
      benefits: [
        'Use cases prioritized by impact and data feasibility',
        'Guardrails, logs and continuous quality evaluation',
        'Integration with channels (WhatsApp, web, voice) and legacy systems',
        'Measurable reduction in queues and cost per service',
      ],
      differential:
        'Applied AI with pragmatism: we start with the flow that hurts the P&L today, not an endless POC.',
    },
  },
  automation: {
    pt: {
      description:
        'Integrações REST/GraphQL, filas, orquestrações e RPA onde faz sentido — para eliminar retrabalho, erros manuais e gargalos entre sistemas.',
      benefits: [
        'Mapa de integrações e contratos de API versionados',
        'Retries, idempotência e dead-letter para resiliência',
        'Automação de onboarding e backoffice',
        'Menos copy/paste entre times e ferramentas',
      ],
      differential:
        'Automação com arquitetura: evitamos “Frankenstein” de scripts — desenhamos padrões reutilizáveis e observáveis.',
    },
    en: {
      description:
        'REST/GraphQL integrations, queues, orchestrations and RPA where it fits — to remove rework, manual errors and bottlenecks between systems.',
      benefits: [
        'Integration map and versioned API contracts',
        'Retries, idempotency and dead-letter queues for resilience',
        'Onboarding and back-office automation',
        'Less copy/paste across teams and tools',
      ],
      differential:
        'Automation with architecture: we avoid a Frankenstein of scripts — we design reusable, observable patterns.',
    },
  },
  support: {
    pt: {
      description:
        'NOC, Service Desk e SRE com SLAs transparentes, postmortem sem culpa e melhoria contínua — seu time foca no produto enquanto cuidamos da plataforma.',
      benefits: [
        'Filas e prioridades alinhadas ao impacto ao negócio',
        'Plantão e escalonamento com runbooks testados',
        'Health checks e alertas com redução de ruído',
        'Relatórios de incidentes e tendências para gestão',
      ],
      differential:
        'Suporte que fala a língua do negócio: traduzimos incidente em risco financeiro e experiência do cliente.',
    },
    en: {
      description:
        'NOC, Service Desk and SRE with transparent SLAs, blameless postmortems and continuous improvement — your team ships product while we run the platform.',
      benefits: [
        'Queues and priorities aligned to business impact',
        'On-call and escalation with tested runbooks',
        'Health checks and alerts with noise reduction',
        'Incident and trend reports for leadership',
      ],
      differential:
        'Support that speaks business: we translate incidents into financial risk and customer experience.',
    },
  },
  governance: {
    pt: {
      description:
        'ITIL/COBIT, políticas, CMDB e trilhas de compliance — para dar previsibilidade a mudanças, auditorias e crescimento sem caos operacional.',
      benefits: [
        'Catálogo de serviços e RACI claros',
        'Gestão de mudança com risco proporcional ao impacto',
        'Evidências e relatórios para reguladores e parceiros',
        'Alinhamento entre jurídico, TI e negócio',
      ],
      differential:
        'Governança leve o suficiente para ágil, forte o bastante para escalar e passar auditoria.',
    },
    en: {
      description:
        'ITIL/COBIT, policies, CMDB and compliance paths — predictable change, audits and growth without operational chaos.',
      benefits: [
        'Service catalog and clear RACI',
        'Change management with risk proportional to impact',
        'Evidence and reports for regulators and partners',
        'Alignment across legal, IT and business',
      ],
      differential:
        'Governance light enough to stay agile, strong enough to scale and pass audit.',
    },
  },
};
