import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import IAHeroSection from '@/components/ia/IAHeroSection';
import HowItWorks from '@/components/ia/HowItWorks';
import UseCases from '@/components/ia/UseCases';
import Integrations from '@/components/ia/Integrations';
import IACtaSection from '@/components/ia/IACtaSection';
import IAContactSection from '@/components/ia/IAContactSection';
import Footer from '@/components/Footer';

export default function IAAutomacao() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/ia-automacao') return;
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <IAHeroSection />
      <HowItWorks />
      <UseCases />
      <Integrations />
      <IACtaSection />
      <IAContactSection />
      <Footer />
    </div>
  );
}