import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, TrendingUp, Layers, Star } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import type { LucideIcon } from 'lucide-react';

interface Pillar {
  id: string;
  icon: LucideIcon;
  title: {
    pt: string;
    en: string;
  };
  desc: {
    pt: string;
    en: string;
  };
}

const PILLARS: Pillar[] = [
  {
    id: 'time-to-value',
    icon: Clock,
    title: {
      pt: 'Time-to-value rápido',
      en: 'Fast time-to-value',
    },
    desc: {
      pt: 'Projetos que saem do papel em dias, não meses. Metodologia ágil com entregas incrementais.',
      en: 'Projects off the ground in days, not months. Agile methodology with incremental deliveries.',
    },
  },
  {
    id: 'roi-focused',
    icon: Target,
    title: {
      pt: 'Focado em ROI',
      en: 'ROI focused',
    },
    desc: {
      pt: 'Medimos sucesso em números: redução de custo, aumento de receita, ganho de eficiência.',
      en: 'We measure success in numbers: cost reduction, revenue growth, efficiency gains.',
    },
  },
  {
    id: 'scalability',
    icon: TrendingUp,
    title: {
      pt: 'Escala com você',
      en: 'Scales with you',
    },
    desc: {
      pt: 'Arquiteturas que crescem conforme sua demanda, sem retrabalho caro.',
      en: 'Architectures that grow with your demand, without costly rework.',
    },
  },
  {
    id: 'full-stack',
    icon: Layers,
    title: {
      pt: 'Stack completo',
      en: 'Full stack',
    },
    desc: {
      pt: 'Infra, Cloud, Segurança, BI e IA sob um mesmo teto. Menos fornecedores, mais coesão.',
      en: 'Infra, Cloud, Security, BI and AI under one roof. Fewer vendors, more cohesion.',
    },
  },
  {
    id: 'support-24-7',
    icon: Star,
    title: {
      pt: 'Suporte real 24/7',
      en: 'Real 24/7 support',
    },
    desc: {
      pt: 'NOC e Service Desk com SLA claro. Não um chatbot — pessoas de verdade.',
      en: 'NOC and Service Desk with clear SLA. Not a chatbot — real people.',
    },
  },
];

export default function WhyNexusSection() {
  const { lang } = useLanguage();

  // Conteúdo traduzido centralizado
  const content = {
    badge: lang === 'pt' ? 'Por que a Nexus' : 'Why Nexus',
    titlePrefix: lang === 'pt' ? 'Não somos mais um' : "We're not just another",
    titleHighlight: lang === 'pt' ? 'fornecedor de TI' : 'IT vendor',
    subtitle: lang === 'pt'
      ? 'Somos parceiros de resultado. A diferença está na execução, na transparência e em como medimos o sucesso.'
      : "We're results partners. The difference is in execution, transparency, and how we measure success.",
  };

  // Função para obter texto traduzido
  const getTranslatedText = (pillar: Pillar, field: 'title' | 'desc'): string => {
    return pillar[field][lang];
  };

  // Memoizar para evitar re-renders desnecessários
  const memoizedPillars = useMemo(() => PILLARS, []);

  return (
    <section id="diferenciais" className="py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-deep-navy/[0.03] via-transparent to-neon-purple/[0.04] dark:from-deep-navy/40 dark:via-transparent dark:to-neon-purple/10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-accent/10 border border-sky-accent/20 text-sky-accent text-xs font-semibold uppercase tracking-widest mb-4">
            {content.badge}
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {content.titlePrefix}{' '}
            <span className="text-neon-purple">{content.titleHighlight}</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memoizedPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const title = getTranslatedText(pillar, 'title');
            const desc = getTranslatedText(pillar, 'desc');

            return (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="flex gap-5 p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-neon-purple/25 hover:shadow-[0_4px_30px_rgba(168,85,247,0.1)] transition-all duration-300 focus-within:ring-2 focus-within:ring-neon-purple/50"
                role="region"
                aria-labelledby={`pillar-title-${pillar.id}`}
              >
                {/* Icon Container */}
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl bg-neon-purple/10 dark:bg-neon-purple/20 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5 text-neon-purple" />
                </div>

                {/* Content */}
                <div>
                  <h3
                    id={`pillar-title-${pillar.id}`}
                    className="font-heading font-semibold text-foreground mb-1.5"
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}