import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const LOGO_URL = 'https://media.base44.com/images/public/69ea6e00e5e6c9a180b02b3e/32802a7af_generated_21bfb19e.png';

export default function Footer() {
  const { t, lang } = useLanguage();

  const navLinks = [
    { label: lang === 'pt' ? 'Início' : 'Home', to: '/' },
    { label: lang === 'pt' ? 'Serviços' : 'Services', to: '/#servicos' },
    { label: lang === 'pt' ? 'Sobre' : 'About', to: '/#sobre' },
    { label: lang === 'pt' ? 'Contato' : 'Contact', to: '/#contato' },
    { label: t.nav.iaAutomacao, to: '/ia-automacao' },
  ];

  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main */}
        <div className="py-14 grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src={LOGO_URL} alt="Nexus" className="w-8 h-8 rounded-lg" />
              <span className="font-heading font-bold text-xl text-foreground">
                Nexus<span className="text-neon-purple">Solutions</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t.footer.desc}
            </p>

            {/* Socials / quick actions */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://wa.me/556631992858"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${t.footer.footerEmail}`}
                className="w-9 h-9 rounded-full bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center text-neon-purple hover:bg-neon-purple hover:text-white transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 className="font-heading font-semibold text-foreground text-sm mb-4 uppercase tracking-wider">
              {t.footer.nav}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="block text-left text-sm text-muted-foreground transition-colors hover:text-neon-purple"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-heading font-semibold text-foreground text-sm mb-4 uppercase tracking-wider">
              {t.footer.contactUs}
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 text-neon-purple" />
                {t.footer.footerAddress}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-neon-purple" />
                {t.footer.footerEmail}
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 flex-shrink-0 text-neon-purple" />
                {t.footer.footerPhone}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">{t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{t.footer.privacy}</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}