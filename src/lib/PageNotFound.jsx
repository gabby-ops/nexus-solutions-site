import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function PageNotFound() {
  const location = useLocation();
  const { lang } = useLanguage();
  const path = location.pathname;

  const copy = {
    title: lang === 'pt' ? 'Página não encontrada' : 'Page not found',
    desc:
      lang === 'pt'
        ? 'O endereço que você acessou não existe ou foi movido.'
        : 'The address you opened does not exist or has been moved.',
    pathLabel: lang === 'pt' ? 'Caminho' : 'Path',
    home: lang === 'pt' ? 'Voltar ao início' : 'Back to home',
    services: lang === 'pt' ? 'Ver serviços' : 'View services',
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md text-center"
      >
        <p className="font-heading text-7xl font-bold text-neon-purple/40">404</p>
        <h1 className="mt-2 font-heading text-2xl font-bold text-foreground">{copy.title}</h1>
        <p className="mt-3 text-muted-foreground">{copy.desc}</p>
        <p className="mt-4 rounded-xl border border-border bg-card/60 px-4 py-3 font-mono text-xs text-muted-foreground">
          {copy.pathLabel}: <span className="text-foreground">{path}</span>
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-deep-navy px-6 py-3 text-sm font-bold text-white dark:bg-neon-purple"
          >
            <Home className="h-4 w-4" aria-hidden />
            {copy.home}
          </Link>
          <Link
            to="/servicos"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-neon-purple hover:text-neon-purple"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {copy.services}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
