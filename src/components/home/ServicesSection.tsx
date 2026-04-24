import React, { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Cloud,
  Shield,
  BarChart3,
  Cog,
  Brain,
  Headphones,
  ClipboardCheck,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import type { LucideIcon } from 'lucide-react';

type ServiceKey = 'infra' | 'cloud' | 'security' | 'bi' | 'automation' | 'ai' | 'support' | 'governance';

interface ServiceBenefit {
  pt: string[];
  en: string[];
}

interface Service {
  key: ServiceKey;
  icon: LucideIcon;
  benefits: ServiceBenefit;
}

const SERVICES: Service[] = [
  {
    key: 'infra',
    icon: Server,
    benefits: {
      pt: ['Alta disponibilidade (HA)', 'Redução de downtime', 'Projetos chave na mão'],
      en: ['High availability (HA)', 'Downtime reduction', 'Turnkey projects'],
    },
  },
  {
    key: 'cloud',
    icon: Cloud,
    benefits: {
      pt: ['Redução de custo cloud', 'CI/CD automatizado', 'Observabilidade 360°'],
      en: ['Cloud cost reduction', 'Automated CI/CD', '360° observability'],
    },
  },
  {
    key: 'security',
    icon: Shield,
    benefits: {
      pt: ['Conformidade LGPD', 'Redução de vetores de ataque', 'Resposta a incidentes'],
      en: ['LGPD compliance', 'Attack surface reduction', 'Incident response'],
    },
  },
  {
    key: 'bi',
    icon: BarChart3,
    benefits: {
      pt: ['Decisões baseadas em dados', 'Dashboards em tempo real', 'Governança de dados'],
      en: ['Data-driven decisions', 'Real-time dashboards', 'Data governance'],
    },
  },
  {
    key: 'automation',
    icon: Cog,
    benefits: {
      pt: ['Elimina tarefas manuais', 'Integra qualquer sistema', 'RPA & orquestração'],
      en: ['Eliminate manual tasks', 'Integrate any system', 'RPA & orchestration'],
    },
  },
  {
    key: 'ai',
    icon: Brain,
    benefits: {
      pt: ['Agentes de IA 24/7', 'Classificação de leads', 'Modelos sob medida'],
      en: ['24/7 AI agents', 'Lead scoring', 'Custom models'],
    },
  },
  {
    key: 'support',
    icon: Headphones,
    benefits: {
      pt: ['SLA garantido', 'NOC 24/7', 'Service Desk proativo'],
      en: ['Guaranteed SLA', '24/7 NOC', 'Proactive service desk'],
    },
  },
  {
    key: 'governance',
    icon: ClipboardCheck,
    benefits: {
      pt: ['Conformidade regulatória', 'ITIL/COBIT', 'Auditoria e CMDB'],
      en: ['Regulatory compliance', 'ITIL/COBIT', 'Audit & CMDB'],
    },
  },
];

export default function ServicesSection() {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState<ServiceKey | null>(null);

  // Textos traduzidos centralizados
  const content = {
    badge: lang === 'pt' ? 'O que entregamos' : 'What we deliver',
    subtitle: lang === 'pt'
      ? 'Cada serviço com entrega clara, benefícios mensuráveis e equipe sênior dedicada.'
      : 'Each service with clear delivery, measurable benefits and dedicated senior team.',
    hint: lang === 'pt'
      ? 'Clique em um serviço para ver os benefícios — ou fale direto conosco.'
      : 'Click a service to see benefits — or talk to us directly.',
    learnMore: lang === 'pt' ? 'Saiba mais' : 'Learn more',
    speakWithExpert: lang === 'pt' ? 'Falar com Especialista' : 'Talk to a Specialist',
    fullPage:
      lang === 'pt'
        ? 'Ver página completa de serviços (descrição, benefícios e diferenciais)'
        : 'Full services page (description, benefits & differentiators)',
  };

  // Callback memoizado para scroll
  const scrollToContact = useCallback(() => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Callback para alternar card ativo
  const handleCardClick = useCallback((key: ServiceKey) => {
    setActive((prev) => (prev === key ? null : key));
  }, []);

  // Função para obter benefícios traduzidos
  const getBenefits = useCallback(
    (service: Service): string[] => {
      return lang === 'pt' ? service.benefits.pt : service.benefits.en;
    },
    [lang]
  );

  // Memoizar serviços com títulos traduzidos
  const servicesWithTranslations = useMemo(() => {
    return SERVICES.map((service) => ({
      ...service,
      title: t.services?.[service.key]?.title || service.key,
      desc: t.services?.[service.key]?.desc || '',
    }));
  }, [lang, t.services]);

  return (
    <section id="servicos" className="py-28 relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-neon-purple/8 dark:bg-neon-purple/12 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-semibold uppercase tracking-widest mb-4">
            {content.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.services?.title || (lang === 'pt' ? 'Serviços' : 'Services')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {servicesWithTranslations.map((service, index) => {
            const isActive = active === service.key;
            const benefits = getBenefits(service);

            return (
              <motion.button
                key={service.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.06 }}
                onClick={() => handleCardClick(service.key)}
                className={`nexus-card-interactive group relative w-full cursor-pointer overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 ${
                  isActive
                    ? 'bg-neon-purple/10 border-neon-purple/50 shadow-[0_0_40px_rgba(168,85,247,0.2)]'
                    : 'border-border/50 bg-card/60 backdrop-blur-xl'
                }`}
                aria-expanded={isActive}
                aria-label={`${service.title} service details`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isActive ? 'bg-neon-purple/20' : 'bg-neon-purple/8 dark:bg-neon-purple/15 group-hover:bg-neon-purple/15'
                  }`}
                  aria-hidden="true"
                >
                  <service.icon className="w-6 h-6 text-neon-purple" />
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-base text-foreground mb-2 leading-snug">
                  {service.title}
                </h3>

                {/* Description — visible when not active */}
                <AnimatePresence initial={false}>
                  {!isActive && (
                    <motion.p
                      key={`desc-${service.key}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {service.desc}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Benefits — visible when active */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key={`benefits-${service.key}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mb-4" role="list">
                        {benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-center gap-2 text-sm text-foreground font-medium"
                            role="listitem"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-neon-purple flex-shrink-0"
                              aria-hidden="true"
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      {/* Learn More Button */}
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToContact();
                        }}
                        whileHover={{ gap: '0.5rem' }}
                        className="text-sm font-semibold text-neon-purple flex items-center gap-1 hover:gap-2 transition-all focus:outline-none focus:ring-1 focus:ring-neon-purple/50 rounded px-1 py-0.5"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        {content.learnMore}
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Active indicator dot */}
                <div
                  className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-neon-purple' : 'bg-transparent'
                  }`}
                  aria-hidden="true"
                />
              </motion.button>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-5 text-sm">
            {content.hint}
          </p>
          <div className="flex flex-col items-center gap-5">
            <Link
              to="/servicos"
              className="text-sm font-semibold text-neon-purple underline-offset-4 hover:underline"
            >
              {content.fullPage}
            </Link>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(168,85,247,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full bg-deep-navy dark:bg-neon-purple text-white font-semibold text-sm shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:ring-offset-2 focus:ring-offset-background hover:shadow-xl"
              aria-label={content.speakWithExpert}
            >
              {content.speakWithExpert}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}