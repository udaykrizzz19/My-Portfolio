import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navbar = ({ activeSection, onSectionChange }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items matching the reference design
  const navItems = [
    { id: 'works', label: 'WORKS' },
    { id: 'bio', label: 'BIO' },
    { id: 'contact', label: 'CONTACT' },
  ];

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when section changes
  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <motion.nav
        className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-glass border-b border-border/50' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          {/* Logo/Home Link */}
          <motion.button
            onClick={() => handleSectionClick('hero')}
            className="logo-button text-xl md:text-2xl font-light tracking-tight text-text-primary hover:text-accent transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            UK
          </motion.button>

          {/* Desktop Navigation */}
          <div className="desktop-nav hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`nav-link text-sm font-medium tracking-wider transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-accent-light border-b-2 border-accent-light'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-toggle md:hidden p-2 text-text-primary hover:text-accent transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu-overlay fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/95 backdrop-blur-glass"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="mobile-menu-content relative flex flex-col items-center justify-center h-full space-y-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`mobile-nav-link text-2xl md:text-3xl font-light tracking-wider transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-accent-light'
                      : 'text-text-primary hover:text-accent'
                  }`}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;