import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const WHATSAPP = 'https://wa.me/556631992858';

export default function IACtaSection() {
  const { t, lang } = useLanguage();
  const ia = t.ia;

  const scrollContact = (e) => {
    e.preventDefault();
    document.querySelector('#contato-ia')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden py-24" aria-label="IA CTA">
      <div
        className="absolute inset-0 bg-gradient-to-br from-deep-navy via-[#1a1040] to-deep-navy"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 40%, rgba(168,85,247,0.35) 0%, transparent 55%), radial-gradient(circle at 20% 70%, rgba(56,189,248,0.12) 0%, transparent 45%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="mb-5 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
            {lang === 'pt' ? 'Próximo passo' : 'Next step'}
          </span>
          <h2 className="mb-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            {ia.ctaTitle}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/65">
            {ia.ctaSubtitle}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-10 py-4 text-base font-bold text-white shadow-lg transition-shadow hover:bg-green-600 hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {ia.ctaButton}
            </motion.a>
            <motion.a
              href="#contato-ia"
              onClick={scrollContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white/50"
            >
              {lang === 'pt' ? 'Formulário' : 'Contact form'}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
