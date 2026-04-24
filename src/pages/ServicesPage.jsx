import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';
import {
  SERVICE_DETAIL_KEYS,
  servicesDetail,
} from '@/data/servicesDetail';

const ICONS = {
  infra: Server,
  cloud: Cloud,
  security: Shield,
  bi: BarChart3,
  automation: Cog,
  ai: Brain,
  support: Headphones,
  governance: ClipboardCheck,
};

export default function ServicesPage() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title =
      lang === 'pt'
        ? 'Serviços | Nexus Solutions'
        : 'Services | Nexus Solutions';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        lang === 'pt'
          ? 'Infraestrutura, Cloud & DevOps, Segurança, BI, IA e mais — benefícios, entregas e diferenciais Nexus Solutions.'
          : 'Infrastructure, Cloud & DevOps, Security, BI, AI and more — benefits, delivery and Nexus Solutions differentiators.'
      );
    }
    window.scrollTo(0, 0);
  }, [lang]);

  const labels = {
    badge: lang === 'pt' ? 'Catálogo completo' : 'Full catalog',
    intro:
      lang === 'pt'
        ? 'Cada linha abaixo descreve o que entregamos, por que importa e como nos destacamos — sem jargão vazio.'
        : 'Each block below describes what we deliver, why it matters and how we stand out — without empty jargon.',
    benefits: lang === 'pt' ? 'Benefícios' : 'Benefits',
    differential: lang === 'pt' ? 'Diferencial Nexus' : 'Nexus edge',
    cta: lang === 'pt' ? 'Falar com especialista' : 'Talk to a specialist',
    back: lang === 'pt' ? 'Voltar à home' : 'Back to home',
  };

  const scrollContact = () => {
    window.location.href = '/#contato';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14 text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-neon-purple/20 bg-neon-purple/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neon-purple">
              {labels.badge}
            </span>
            <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t.services?.title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {labels.intro}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.button
                type="button"
                onClick={scrollContact}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-deep-navy px-8 py-3.5 text-sm font-bold text-white shadow-lg dark:bg-neon-purple"
              >
                {labels.cta}
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              <Link
                to="/"
                className="inline-flex items-center rounded-full border-2 border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-neon-purple hover:text-neon-purple"
              >
                {labels.back}
              </Link>
            </div>
          </motion.div>

          <div className="space-y-12">
            {SERVICE_DETAIL_KEYS.map((key, index) => {
              const Icon = ICONS[key];
              const title = t.services?.[key]?.title ?? key;
              const block = servicesDetail[key][lang === 'pt' ? 'pt' : 'en'];

              return (
                <motion.article
                  key={key}
                  id={key}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: index * 0.05 }}
                  className="nexus-card-interactive rounded-2xl border border-border/60 bg-card/50 p-8 shadow-sm backdrop-blur-sm dark:bg-card/40"
                >
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-neon-purple/15">
                        <Icon className="h-7 w-7 text-neon-purple" aria-hidden />
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                          {title}
                        </h2>
                        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
                          {block.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                      <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-neon-purple">
                        {labels.benefits}
                      </h3>
                      <ul className="space-y-2.5" role="list">
                        {block.benefits.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm font-medium text-foreground"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neon-purple"
                              aria-hidden
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-neon-purple/25 bg-neon-purple/5 p-6">
                      <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-neon-purple">
                        {labels.differential}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground">
                        {block.differential}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
