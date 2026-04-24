import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Zap, Bot, BarChart3, Users } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const LOGO_URL =
  'https://media.base44.com/images/public/69ea6e00e5e6c9a180b02b3e/32802a7af_generated_21bfb19e.png';

const BADGES = {
  pt: [
    { icon: Zap, label: 'Atendimento 24/7' },
    { icon: Bot, label: 'Agentes de IA' },
    { icon: Users, label: 'Transferência para humano' },
    { icon: BarChart3, label: 'Métricas & BI' },
  ],
  en: [
    { icon: Zap, label: '24/7 Service' },
    { icon: Bot, label: 'AI Agents' },
    { icon: Users, label: 'Human handoff' },
    { icon: BarChart3, label: 'Metrics & BI' },
  ],
};

const CHAT_BUBBLES = {
  pt: {
    top: 'Olá! Como posso te ajudar?',
    bottom: 'Qual o prazo para instalação?',
    pill: 'WhatsApp + IA',
    logoAlt: 'Nexus Solutions',
  },
  en: {
    top: 'Hello! How can I help you?',
    bottom: 'What is the installation timeline?',
    pill: 'WhatsApp + AI',
    logoAlt: 'Nexus Solutions',
  },
};

export default function IAHeroSection() {
  const { t, lang } = useLanguage();
  const badges = BADGES[lang];
  const copy = CHAT_BUBBLES[lang];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--neon-purple)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-purple)) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-neon-purple/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-10 h-72 w-72 rounded-full bg-sky-accent/10 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-500"
            >
              <MessageCircle className="h-4 w-4" />
              {copy.pill}
            </motion.div>

            <h1 className="mb-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl xl:text-[3.5rem]">
              {lang === 'pt' ? (
                <>
                  Seu WhatsApp trabalhando
                  <br />
                  <span className="text-neon-purple">por você — 24/7.</span>
                </>
              ) : (
                <>
                  Your WhatsApp working
                  <br />
                  <span className="text-neon-purple">for you — 24/7.</span>
                </>
              )}
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t.ia.heroSubtitle}
            </p>

            <div className="mb-10 flex flex-wrap gap-4">
              <motion.a
                href="https://wa.me/556631992858"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(34,197,94,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-green-600"
              >
                <MessageCircle className="h-5 w-5" />
                {t.ia.cta1}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#como-funciona"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border-2 border-[#1E2E4F] px-8 py-4 font-semibold text-[#1E2E4F] transition-all hover:bg-[#1E2E4F]/10 dark:border-border dark:text-foreground dark:hover:border-neon-purple dark:hover:text-neon-purple"
              >
                {t.ia.cta2}
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-border/50 bg-card/70 px-4 py-2 text-sm font-medium text-foreground"
                >
                  <Icon className="h-4 w-4 text-neon-purple" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden items-center justify-center lg:col-span-5 lg:flex"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              className="absolute h-80 w-80 rounded-full border border-dashed border-neon-purple/20"
            />
            <div className="absolute h-64 w-64 rounded-full bg-neon-purple/15 blur-[70px]" />

            <motion.div
              className="relative z-10 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={LOGO_URL}
                alt={copy.logoAlt}
                className="h-28 w-28 rounded-2xl object-contain drop-shadow-2xl ring-1 ring-border/30 sm:h-36 sm:w-36"
                width={144}
                height={144}
                loading="eager"
                fetchPriority="high"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-2 top-12 max-w-[160px] rounded-2xl rounded-tr-sm bg-green-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg"
            >
              <p>{copy.top} 👋</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute -left-2 bottom-12 max-w-[160px] rounded-2xl rounded-tl-sm border border-border bg-card px-4 py-2.5 text-sm text-foreground shadow-lg"
            >
              <p>{copy.bottom}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
