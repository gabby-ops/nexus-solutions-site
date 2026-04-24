import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

export default function StatsSection() {
  const { t } = useLanguage();
  const s = t.stats;

  const stats = [
    { value: s.prod.value, label: s.prod.label, desc: s.prod.desc },
    { value: s.cost.value, label: s.cost.label, desc: s.cost.desc },
    { value: s.uptime.value, label: s.uptime.label, desc: s.uptime.desc },
  ];

  return (
    <section id="cases" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {s.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="nexus-card-interactive bg-background rounded-2xl border border-border p-8 text-center shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold capitalize mb-3">
                {stat.label}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
