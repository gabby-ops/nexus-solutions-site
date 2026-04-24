import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const ROTATING_WORDS = {
  pt: ['Crescimento', 'Inovação', 'Resultados', 'Eficiência'],
  en: ['Growth', 'Innovation', 'Results', 'Efficiency'],
};

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const [wordIndex, setWordIndex] = useState(0);

  const words = ROTATING_WORDS[lang] || [];

  useEffect(() => {
    setWordIndex(0);
  }, [lang]);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 text-center"
    >
      {/* BACKGROUND BASE MAIS LEVE */}
      <div className="absolute inset-0 bg-background" />

      {/* GLOW REDUZIDO (melhora TBT) */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-neon-purple/20 blur-[80px]"
        aria-hidden
      />

      {/* GRID MAIS LEVE */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--neon-purple)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-purple)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden
      />

      {/* CONTEÚDO CENTRAL */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 sm:px-6 lg:px-8">

        {/* BADGE */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neon-purple/20 bg-neon-purple/10 px-4 py-2 text-sm font-semibold text-neon-purple">
          <span className="h-2 w-2 animate-pulse rounded-full bg-neon-purple" />
          {lang === 'pt'
            ? 'Tecnologia que entrega resultado'
            : 'Technology that delivers'}
        </div>

        {/* TITULO */}
        <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl">
          <span className="block">
            {lang === 'pt'
              ? 'Tecnologia que gera '
              : 'Technology that drives '}
          </span>

          {/* 🔥 ANIMAÇÃO MANTIDA (SEU DIFERENCIAL) */}
          <span className="inline-block min-w-[11rem] text-neon-purple transition-all duration-300">
            {words[wordIndex]}
          </span>

          <span className="block">
            {lang === 'pt' ? 'de verdade.' : 'for real.'}
          </span>
        </h1>

        {/* SUBTITULO */}
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {t.hero.subtitle}
        </p>

        {/* BOTÕES */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contato"
            className="rounded-full bg-[#1E2E4F] px-8 py-4 text-white"
          >
            {t.hero.cta1} <ArrowRight className="inline h-4 w-4" />
          </a>

          <a
            href="#servicos"
            className="rounded-full border px-8 py-4"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="h-5 w-5 text-muted-foreground/50" />
      </div>
    </section>
  );
}