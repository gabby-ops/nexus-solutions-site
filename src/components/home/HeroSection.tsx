import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const LOGO_URL =
  'https://media.base44.com/images/public/69ea6e00e5e6c9a180b02b3e/32802a7af_generated_21bfb19e.png';

const ROTATING_WORDS = {
  pt: ['Crescimento', 'Inovação', 'Resultados', 'Eficiência'],
  en: ['Growth', 'Innovation', 'Results', 'Efficiency'],
};

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const [wordIndex, setWordIndex] = useState(0);

  const words = ROTATING_WORDS[lang];

  useEffect(() => {
    setWordIndex(0);
  }, [lang]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [words.length]);

  const scrollToSection =
    (selector: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-background" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 rounded-full bg-neon-purple/25 blur-[100px] dark:bg-neon-purple/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-0 h-72 w-72 rounded-full bg-[#1E2E4F]/20 blur-[90px] dark:bg-sky-accent/15"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--neon-purple)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-purple)) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-neon-purple/25 bg-neon-purple/10 px-4 py-2 text-sm font-semibold text-neon-purple"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-neon-purple" />
              {lang === 'pt' ? 'Tecnologia que entrega resultado' : 'Technology that delivers'}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mb-5 font-heading text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl xl:text-[3.25rem]"
            >
              <span className="block sm:inline">
                {lang === 'pt' ? 'Tecnologia que gera ' : 'Technology that drives '}
              </span>
              <span className="relative inline-block min-w-[11rem] align-baseline sm:min-w-[12rem]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${lang}-${wordIndex}`}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="inline-block text-neon-purple"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="mt-1 block text-foreground">
                {lang === 'pt' ? 'de verdade.' : 'for real.'}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#contato"
                onClick={scrollToSection('#contato')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-full bg-[#1E2E4F] px-8 py-4 text-base font-bold text-white shadow-lg transition-shadow hover:shadow-[0_0_36px_rgba(168,85,247,0.5)] dark:bg-neon-purple dark:hover:shadow-[0_0_40px_rgba(168,85,247,0.55)]"
              >
                {t.hero.cta1}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#servicos"
                onClick={scrollToSection('#servicos')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border-2 border-[#1E2E4F] bg-transparent px-8 py-4 text-base font-semibold text-[#1E2E4F] transition-colors hover:bg-[#1E2E4F]/10 dark:border-neon-purple dark:text-neon-purple dark:hover:bg-neon-purple/10"
              >
                {t.hero.cta2}
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex min-h-[280px] items-center justify-center lg:col-span-5"
          >
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div className="h-64 w-64 rounded-full bg-neon-purple/30 blur-[72px] dark:bg-neon-purple/40" />
              <div className="absolute h-48 w-48 rounded-full bg-[#1E2E4F]/35 blur-[56px] dark:bg-sky-accent/20" />
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
              className="pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-dashed border-neon-purple/25"
              aria-hidden
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
              className="pointer-events-none absolute h-[220px] w-[220px] rounded-full border border-dashed border-sky-accent/20"
              aria-hidden
            />

            <motion.div
              className="relative z-10 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={LOGO_URL}
                alt={lang === 'pt' ? 'Nexus Solutions' : 'Nexus Solutions'}
                className="h-28 w-28 rounded-2xl object-contain drop-shadow-2xl ring-1 ring-border/30 sm:h-36 sm:w-36"
                width={144}
                height={144}
                loading="eager"
                fetchPriority="high"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        aria-hidden
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="h-5 w-5 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
