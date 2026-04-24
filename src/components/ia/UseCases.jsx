import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, UserCheck, CalendarCheck, ShoppingCart, Headphones, Receipt } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const ICONS = [MessageSquare, UserCheck, CalendarCheck, ShoppingCart, Headphones, Receipt];
const COLORS = [
  'text-neon-purple bg-neon-purple/10',
  'text-sky-accent bg-sky-accent/10',
  'text-green-500 bg-green-500/10',
  'text-orange-400 bg-orange-400/10',
  'text-neon-purple bg-neon-purple/10',
  'text-sky-accent bg-sky-accent/10',
];

export default function UseCases() {
  const { t, lang } = useLanguage();

  return (
    <section id="casos-de-uso" className="py-28 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-semibold uppercase tracking-widest mb-4">
            {lang === 'pt' ? 'Casos de uso' : 'Use cases'}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.ia.useCasesTitle}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {lang === 'pt'
              ? 'Do atendimento ao fechamento — seus agentes operam sem parar.'
              : 'From service to closing — your agents operate non-stop.'}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.ia.useCases.map((uc, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08 }}
                className="nexus-card-interactive flex gap-5 rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-xl transition-all duration-300"
              >
                <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${COLORS[i]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1.5">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}