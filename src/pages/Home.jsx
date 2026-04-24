import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyNexusSection from '@/components/home/WhyNexusSection';
import AboutSection from '@/components/home/AboutSection';
import StatsSection from '@/components/home/StatsSection';
import CtaBanner from '@/components/home/CtaBanner';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;
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
      <HeroSection />
      <ServicesSection />
      <WhyNexusSection />
      <StatsSection />
      <AboutSection />
      <CtaBanner />
      <ContactSection />
      <Footer />
    </div>
  );
}