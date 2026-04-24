import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Plug, Settings, Bot, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import type { LucideIcon } from 'lucide-react';

interface Step {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface HowItWorksContent {
  badge: string;
  title: string;
  steps: Step[];
}

// Ícones mapeados para cada passo
const STEP_ICONS: Record<number, LucideIcon> = {
  0: Plug,
  1: Settings,
  2: Bot,
  3: BarChart3,
} as const;

export default function HowItWorks() {
  const { t, lang } = useLanguage();

  // Conteúdo traduzido centralizado
  const content = useMemo((): HowItWorksContent => ({
    badge: lang === 'pt' ? 'O processo' : 'The process',
    title: t.ia?.howTitle || (lang === 'pt' ? 'Como funciona' : 'How it works'),
    steps: t.ia?.steps || [],
  }), [lang, t.ia]);

  // Callback para obter ícone seguro
  const getStepIcon = useCallback((index: number): LucideIcon => {
    return STEP_ICONS[index] || Plug;
  }, []);

  // Validação de steps
  const validSteps = useMemo(() => {
    if (!Array.isArray(content.steps)) return [];
    return content.steps.filter(
      (step): step is Step =>
        step &&
        typeof step === 'object' &&
        'id' in step &&
        'title' in step &&
        'desc' in step
    );
  }, [content.steps]);

  // Se não houver steps, renderizar fallback
  if (validSteps.length === 0) {
    return null;
  }

  return (
    <section id="como-funciona" className="py-28 relative">
      {/* Background blur */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-64 bg-neon-purple/8 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-semibold uppercase tracking-widest mb-4">
            {content.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {content.title}
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {validSteps.map((step, index) => {
            const Icon = getStepIcon(index);
            const isLastStep = index === validSteps.length - 1;
            const stepNumber = index + 1;

            return (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-neon-purple/30 hover:shadow-[0_4px_30px_rgba(168,85,247,0.12)] transition-all duration-300 focus-within:ring-2 focus-within:ring-neon-purple/50"
                role="region"
                aria-label={`Step ${stepNumber}: ${step.title}`}
              >
                {/* Connector Line - hidden on last step */}
                {!isLastStep && (
                  <div
                    className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-gradient-to-r from-neon-purple/40 to-transparent z-20"
                    aria-hidden="true"
                  />
                )}

                {/* Icon Container */}
                <div
                  className="w-12 h-12 rounded-2xl bg-neon-purple/15 flex items-center justify-center mb-4"
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6 text-neon-purple" />
                </div>

                {/* Step Number Badge */}
                <div
                  className="absolute top-4 right-4 font-heading text-4xl font-bold text-neon-purple/10 select-none leading-none pointer-events-none"
                  aria-hidden="true"
                >
                  {stepNumber}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Empty State */}
        {validSteps.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              {lang === 'pt' ? 'Dados de steps não encontrados' : 'Steps data not found'}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}