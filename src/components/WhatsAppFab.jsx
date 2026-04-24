import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function WhatsAppFab() {
  const { lang } = useLanguage();
  const [tooltip, setTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="mb-1 px-4 py-3 rounded-2xl bg-foreground text-background text-sm font-medium max-w-[180px] shadow-xl"
          >
            {lang === 'pt'
              ? '💬 Resposta em minutos!'
              : '💬 Reply in minutes!'}
            <div className="absolute right-[-6px] bottom-4 w-3 h-3 bg-foreground rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/556631992858"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        className="relative w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl"
        style={{ boxShadow: '0 0 0 0 rgba(34,197,94,0.5)' }}
      >
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
        <MessageCircle className="w-6 h-6 relative z-10" />
      </motion.a>
    </div>
  );
}