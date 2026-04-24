import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Globe, Menu, X, ArrowRight } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';
import { useLanguage } from '@/lib/LanguageContext';
import { useScrollSpySection } from '@/hooks/useScrollSpySection';

const LOGO_URL = 'https://media.base44.com/images/public/69ea6e00e5e6c9a180b02b3e/32802a7af_generated_21bfb19e.png';

const HOME_SECTION_IDS = ['servicos', 'sobre', 'cases', 'contato'];
const IA_SECTION_IDS = ['como-funciona', 'casos-de-uso', 'integracoes', 'contato-ia'];

const WHATSAPP = 'https://wa.me/556631992858';

function navPillClass(active) {
  return active
    ? 'rounded-full px-4 py-2 text-sm font-semibold text-neon-purple bg-neon-purple/15 ring-1 ring-neon-purple/40 shadow-[0_0_24px_rgba(168,85,247,0.28)] transition-all duration-200'
    : 'rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-neon-purple hover:bg-neon-purple/8 transition-all duration-200';
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = location.pathname === '/';
  const isIaPage = location.pathname === '/ia-automacao';
  const isServicesPage = location.pathname === '/servicos';

  const homeSpy = useScrollSpySection(isHome, HOME_SECTION_IDS, 'inicio');
  const iaSpy = useScrollSpySection(isIaPage, IA_SECTION_IDS, 'como-funciona');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const homeNav = [
    { key: 'inicio', label: t.nav.inicio, to: '/#inicio', type: 'link' },
    { key: 'ia', label: t.nav.iaAutomacao, to: '/ia-automacao', type: 'link' },
    { key: 'servicos', label: t.nav.servicos, to: '/#servicos', type: 'link' },
    { key: 'sobre', label: t.nav.sobre, to: '/#sobre', type: 'link' },
    { key: 'cases', label: t.nav.cases, to: '/#cases', type: 'link' },
    { key: 'contato', label: t.nav.faleConosco, to: '/#contato', type: 'link' },
  ];

  const iaNav = [
    { key: 'como-funciona', label: t.ia.nav.comoFunciona, to: '/ia-automacao#como-funciona', type: 'link' },
    { key: 'casos-de-uso', label: t.ia.nav.casosDeUso, to: '/ia-automacao#casos-de-uso', type: 'link' },
    { key: 'integracoes', label: t.ia.nav.integracoes, to: '/ia-automacao#integracoes', type: 'link' },
    { key: 'whatsapp', label: t.ia.nav.whatsapp, href: WHATSAPP, type: 'external' },
  ];

  const isHomeItemActive = (key) => {
    if (key === 'ia') return isIaPage;
    if (key === 'servicos') return isServicesPage || (isHome && homeSpy === 'servicos');
    if (!isHome) return false;
    return homeSpy === key;
  };

  const isIaItemActive = (key) => {
    if (key === 'whatsapp') return iaSpy === 'contato-ia';
    if (!isIaPage) return false;
    return iaSpy === key;
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.assign('/#contato');
    }
  };

  const renderNavLink = (item, active) => {
    const cls = navPillClass(active);
    if (item.type === 'external') {
      return (
        <a
          key={item.key}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
        >
          {item.label}
        </a>
      );
    }
    return (
      <Link key={item.key} to={item.to} className={cls}>
        {item.label}
      </Link>
    );
  };

  const desktopItems = isIaPage ? iaNav : homeNav;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 22 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 gap-3">
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 min-w-0">
              <img src={LOGO_URL} alt="Nexus Solutions" className="w-9 h-9 rounded-lg shadow-md ring-1 ring-neon-purple/20" />
              <span className="font-heading font-bold text-lg md:text-xl text-foreground tracking-tight truncate">
                Nexus<span className="text-neon-purple">Solutions</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1 flex-wrap justify-end">
              {isIaPage
                ? iaNav.map((item) =>
                    renderNavLink(item, isIaItemActive(item.key))
                  )
                : homeNav.map((item) =>
                    renderNavLink(item, isHomeItemActive(item.key))
                  )}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={toggleLang}
                className="px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent hover:border-border transition-all"
              >
                <Globe className="w-3.5 h-3.5 inline mr-1" />
                {lang === 'pt' ? 'EN' : 'PT'}
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                aria-label="Alternar tema"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <motion.button
                type="button"
                onClick={handleCtaClick}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#1E2E4F] px-5 py-2.5 text-sm font-bold text-white shadow-md transition-shadow hover:shadow-[0_0_28px_rgba(168,85,247,0.45)] dark:bg-neon-purple dark:hover:shadow-[0_0_28px_rgba(168,85,247,0.55)]"
              >
                {t.hero.cta1}
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] md:top-[80px] z-40 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1.5">
              {desktopItems.map((item) => {
                const active = isIaPage ? isIaItemActive(item.key) : isHomeItemActive(item.key);
                if (item.type === 'external') {
                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className={navPillClass(active)}
                    >
                      {item.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.key}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={navPillClass(active)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <motion.button
                type="button"
                onClick={(e) => {
                  handleCtaClick(e);
                  setMobileOpen(false);
                }}
                className="mt-3 w-full rounded-full bg-[#1E2E4F] py-3.5 text-sm font-bold text-white dark:bg-neon-purple"
              >
                {t.hero.cta1}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
