import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

interface Stat {
  id: string;
  value: string;
  prefix: string;
  suffix: string;
  label: {
    pt: string;
    en: string;
  };
  desc: {
    pt: string;
    en: string;
  };
}

interface AnimatedNumberProps {
  target: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  lang: 'pt' | 'en';
}

/**
 * AnimatedNumber - Anima um número de 0 até o valor alvo
 * Suporta decimais e localização (pt: vírgula, en: ponto)
 */
function AnimatedNumber({ target, prefix = '', suffix = '', duration = 1800, lang }: AnimatedNumberProps) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!inView) return;

    // Normalizar valor: converter vírgula para ponto para parseFloat
    const normalized = target.replace(',', '.');
    const numValue = parseFloat(normalized);

    // Se não for número válido, mostrar valor original
    if (isNaN(numValue)) {
      setDisplay(target);
      return;
    }

    // Contar casas decimais
    const decimalPlaces = (normalized.split('.')[1] || '').length;

    // Animação com easing
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing out cubic para animação suave
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numValue * eased;

      // Formatar com casas decimais corretas
      let formatted = current.toFixed(decimalPlaces);

      // Aplicar localização (pt: vírgula, en: ponto)
      if (lang === 'pt') {
        formatted = formatted.replace('.', ',');
      }

      setDisplay(formatted);

      // Continuar animação se não terminou
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup: cancelar animação se componente desmontar
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [inView, target, duration, lang]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const STATS: Stat[] = [
  {
    id: 'productivity',
    value: '47',
    prefix: '+',
    suffix: '%',
    label: {
      pt: 'Produtividade',
      en: 'Productivity',
    },
    desc: {
      pt: 'Ganho médio de eficiência operacional com automações e integrações.',
      en: 'Average operational efficiency gain with automations and integrations.',
    },
  },
  {
    id: 'infra-cost',
    value: '38',
    prefix: '-',
    suffix: '%',
    label: {
      pt: 'Custo de Infra',
      en: 'Infra Cost',
    },
    desc: {
      pt: 'Redução de gastos com otimização de arquitetura cloud.',
      en: 'Spending reduction through cloud architecture optimization.',
    },
  },
  {
    id: 'availability',
    value: '99.95',
    prefix: '',
    suffix: '%',
    label: {
      pt: 'Disponibilidade',
      en: 'Availability',
    },
    desc: {
      pt: 'SLA de uptime entregue via monitoração proativa e SRE.',
      en: 'Uptime SLA delivered via proactive monitoring and SRE.',
    },
  },
  {
    id: 'projects',
    value: '120',
    prefix: '+',
    suffix: '',
    label: {
      pt: 'Projetos',
      en: 'Projects',
    },
    desc: {
      pt: 'Projetos entregues para empresas de todos os portes no Brasil.',
      en: 'Projects delivered for companies of all sizes across Brazil.',
    },
  },
];

export default function StatsSection() {
  const { lang } = useLanguage();

  // Conteúdo traduzido centralizado
  const content = {
    badge: lang === 'pt' ? 'Resultados reais' : 'Real results',
    title: lang === 'pt' ? 'Números que comprovam.' : 'Numbers that prove it.',
    subtitle: lang === 'pt'
      ? 'Métricas reais de projetos entregues para clientes em produção.'
      : 'Real metrics from projects delivered for clients in production.',
  };

  // Callback para obter label/desc traduzido
  const getTranslatedStat = useCallback(
    (stat: Stat, field: 'label' | 'desc'): string => {
      return stat[field][lang];
    },
    [lang]
  );

  return (
    <section id="cases" className="py-28 relative overflow-hidden">
      {/* Full-bleed dark background */}
      <div className="absolute inset-0 bg-deep-navy" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-neon-purple/20 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-48 bg-sky-accent/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
            {content.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            {content.title}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, borderColor: 'rgba(168,85,247,0.4)' }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center transition-all duration-300 group focus-within:ring-2 focus-within:ring-neon-purple/50"
              role="region"
              aria-label={`${getTranslatedStat(stat, 'label')} stat: ${stat.prefix}${stat.value}${stat.suffix}`}
            >
              {/* Number */}
              <div className="font-heading text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors duration-300 tabular-nums">
                <AnimatedNumber
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={1800}
                  lang={lang}
                />
              </div>

              {/* Label */}
              <p className="font-semibold text-neon-purple text-sm uppercase tracking-wider mb-3">
                {getTranslatedStat(stat, 'label')}
              </p>

              {/* Description */}
              <p className="text-xs text-white/45 leading-relaxed">
                {getTranslatedStat(stat, 'desc')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}