import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ContactSection from '../components/home/ContactSection';
import StickyMobileNav from '../components/common/StickyMobileNav';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Golden Hour | Compassionate Home Care Services';
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <StickyMobileNav />
    </>
  );
};

export default HomePage;