import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const FOUNDER_KEYS = ['renan', 'joao', 'gustavo_f', 'gustavo_r'] as const;
const INITIALS: Record<(typeof FOUNDER_KEYS)[number], string> = {
  renan: 'RD',
  joao: 'JF',
  gustavo_f: 'GF',
  gustavo_r: 'GR',
};

function parseFounderLine(line: string): { name: string; role: string } {
  const parts = line.split(' — ');
  return { name: parts[0]?.trim() ?? line, role: parts[1]?.trim() ?? '' };
}

export default function AboutSection() {
  const { t, lang } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const storageLabel = lang === 'pt' ? 'Conheça o time' : 'Meet the team';
  const storyLabel = lang === 'pt' ? 'Nossa história' : 'Our story';
  const leaderLabel = lang === 'pt' ? 'Quem está à frente' : 'Who leads';
  const locationLabel = lang === 'pt' ? 'Atendemos todo o Brasil' : 'Serving all of Brazil';

  return (
    <section id="sobre" className="py-28 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-sky-accent/8 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-semibold uppercase tracking-widest mb-6">
              {storyLabel}
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              {lang === 'pt'
                ? <>Nascemos para ser o parceiro que <span className="text-neon-purple">você queria ter tido</span> antes.</>
                : <>We were born to be the partner you <span className="text-neon-purple">wish you'd had</span> from the start.</>
              }
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
              {t.about?.p1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              {t.about?.p2}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {t.about?.badges?.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/8 border border-neon-purple/15 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-neon-purple" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(168,85,247,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-deep-navy dark:bg-neon-purple text-white font-semibold text-sm shadow-lg transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
              aria-label={storageLabel}
            >
              {storageLabel}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </motion.button>
          </motion.div>

          {/* RIGHT – Founders */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              {leaderLabel}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {FOUNDER_KEYS.map((key, index) => {
                const line = (t.founders as Record<string, string>)?.[key] ?? '';
                const { name, role } = parseFounderLine(line);
                const initials = INITIALS[key];
                return (
                  <motion.article
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="nexus-card-interactive rounded-2xl border border-border/50 bg-card/60 p-5 backdrop-blur-xl transition-all duration-300"
                  >
                    <div
                      className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-neon-purple/30 to-sky-accent/20"
                      aria-hidden="true"
                    >
                      <span className="font-heading text-sm font-bold text-foreground">{initials}</span>
                    </div>
                    <p className="text-sm font-semibold leading-snug text-foreground">{name}</p>
                    <p className="mt-1 text-xs font-medium text-neon-purple">{role}</p>
                  </motion.article>
                );
              })}
            </div>

            {/* Location badge */}
            <div className="mt-6 p-4 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm flex items-center gap-3">
              <MapPin className="w-6 h-6 text-neon-purple" aria-hidden="true" />
              <div>
                <p className="font-semibold text-foreground text-sm">Rondonópolis, MT</p>
                <p className="text-xs text-muted-foreground">{locationLabel}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}