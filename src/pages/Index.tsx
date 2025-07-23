import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/navigation/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import WorksSection from '@/components/sections/WorksSection';
import BioSection from '@/components/sections/BioSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import ThemeToggle from '@/components/theme/ThemeToggle';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Handle section changes and smooth scrolling
  const handleSectionChange = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(`${sectionId}-section`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(sectionId);
  };

  // Handle scroll to works from hero
  const handleScrollToWorks = () => {
    handleSectionChange('works');
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'works', 'bio', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(
          section === 'hero' ? 'hero-section' : `${section}-section`
        );
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="portfolio-app min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navigation */}
      <Navbar 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <HeroSection onScrollToWorks={handleScrollToWorks} />

        {/* Works Section */}
        <WorksSection />

        {/* Bio Section */}
        <BioSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Theme Toggle */}
      <ThemeToggle />
    </motion.div>
  );
};

export default Index;
