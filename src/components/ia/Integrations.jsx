import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

const INTEGRATIONS = [
  { name: 'REST', type: 'Protocol' },
  { name: 'GraphQL', type: 'Protocol' },
  { name: 'Webhooks', type: 'Protocol' },
  { name: 'OAuth2', type: 'Protocol' },
  { name: 'gSheets', type: 'Spreadsheet' },
  { name: 'MySQL', type: 'Database' },
  { name: 'PostgreSQL', type: 'Database' },
  { name: 'Nuvemshop', type: 'E-commerce' },
  { name: 'Shopify', type: 'E-commerce' },
  { name: 'RD Station', type: 'CRM' },
  { name: 'Pipedrive', type: 'CRM' },
  { name: 'HubSpot', type: 'CRM' },
  { name: 'Notion', type: 'Productivity' },
  { name: 'Google Calendar', type: 'Calendar' },
  { name: 'AWS', type: 'Cloud' },
  { name: 'Azure', type: 'Cloud' },
  { name: 'GCP', type: 'Cloud' },
];

const TYPE_COLORS = {
  Protocol: 'bg-neon-purple/10 text-neon-purple border-neon-purple/20',
  CRM: 'bg-sky-accent/10 text-sky-accent border-sky-accent/20',
  'E-commerce': 'bg-orange-400/10 text-orange-400 border-orange-400/20',
  Spreadsheet: 'bg-green-500/10 text-green-500 border-green-500/20',
  Database: 'bg-red-400/10 text-red-400 border-red-400/20',
  Calendar: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
  Cloud: 'bg-sky-accent/10 text-sky-accent border-sky-accent/20',
  Productivity: 'bg-green-500/10 text-green-500 border-green-500/20',
};

export default function Integrations() {
  const { t, lang } = useLanguage();

  return (
    <section id="integracoes" className="relative py-28">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-56 w-[600px] -translate-x-1/2 rounded-full bg-neon-purple/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="mb-4 inline-block rounded-full border border-sky-accent/20 bg-sky-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-accent">
            {lang === 'pt' ? 'Integrações' : 'Integrations'}
          </span>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {t.ia.integrationsTitle}
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">{t.ia.integrationsDesc}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {INTEGRATIONS.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className={`nexus-chip-interactive cursor-default rounded-full border px-5 py-2.5 text-sm font-semibold ${TYPE_COLORS[item.type]}`}
            >
              {item.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
