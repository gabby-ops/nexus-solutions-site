import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const WHATSAPP_NUMBER = '556631992858';

const BACKGROUND_STYLES = {
  gradients: `radial-gradient(circle at 70% 50%, rgba(168,85,247,0.25) 0%, transparent 60%), radial-gradient(circle at 20% 60%, rgba(56,189,248,0.1) 0%, transparent 50%)`,
  grid: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
} as const;

export default function CtaBanner() {
  const { t, lang } = useLanguage();

  // Tradução centralizada
  const content = {
    badge: lang === 'pt' ? 'Diagnóstico gratuito' : 'Free diagnostic',
    title: lang === 'pt'
      ? <>Sua TI está custando mais<br className="hidden sm:block" /> do que deveria?</>
      : <>Is your IT costing more<br className="hidden sm:block" /> than it should?</>,
    description: lang === 'pt'
      ? 'Converse 30 minutos com um de nossos especialistas e descubra onde está o desperdício — sem compromisso.'
      : 'Spend 30 minutes with one of our specialists and find out where the waste is — no strings attached.',
    buttonText: t.cta?.button || (lang === 'pt' ? 'Agendar diagnóstico' : 'Schedule diagnostic'),
    whatsappText: 'WhatsApp',
  };

  const scrollToContact = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" aria-label="Call to action banner">
      {/* Background - Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-[#1a1040] to-deep-navy" aria-hidden="true" />
      
      {/* Background - Radial Gradients */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: BACKGROUND_STYLES.gradients }}
        aria-hidden="true"
      />
      
      {/* Background - Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: BACKGROUND_STYLES.grid,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-purple/20 border border-neon-purple/30 text-neon-purple text-xs font-semibold uppercase tracking-widest mb-6">
            {content.badge}
          </span>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {content.title}
          </h2>

          {/* Description */}
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button - Schedule */}
            <motion.a
              href="#contato"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168,85,247,0.5)' }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-2 rounded-full bg-[#1E2E4F] px-10 py-4 text-base font-bold text-white shadow-lg transition-all hover:shadow-[0_0_36px_rgba(168,85,247,0.45)] focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:ring-offset-2 focus:ring-offset-deep-navy dark:bg-neon-purple dark:hover:shadow-xl"
              aria-label={content.buttonText}
            >
              {content.buttonText}
              <ArrowRight 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                aria-hidden="true"
              />
            </motion.a>

            {/* Secondary Button - WhatsApp */}
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-base transition-all focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:ring-offset-2 focus:ring-offset-deep-navy shadow-lg hover:shadow-xl"
              aria-label="Enviar mensagem via WhatsApp"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              {content.whatsappText}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}