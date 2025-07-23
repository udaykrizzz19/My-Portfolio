import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  // Social links data
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/uday-krishna-banala-55aa9a24a/t',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/udaykrizzz19',
      icon: Github,
      color: 'hover:text-gray-600'
    },
    {
      name: 'Email',
      url: 'mailto:udaykrizzz08@gmail.com',
      icon: Mail,
      color: 'hover:text-red-500'
    }
  ];

  // Quick navigation links
  const quickLinks = [
    { name: 'Works', href: '#works-section' },
    { name: 'Bio', href: '#bio-section' },
    { name: 'Contact', href: '#contact-section' }
  ];

  // Handle smooth scroll for internal links
  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer-section relative bg-gradient-to-t from-surface to-background border-t border-border/50">
      <div className="container-custom py-12 md:py-16">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            {/* Brand Section */}
            <div className="brand-section">
              <motion.h3 
                className="brand-name text-2xl font-light tracking-tight text-text-primary mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Uday Krishna
              </motion.h3>
              <p className="brand-description text-body text-text-secondary leading-relaxed">
                Software Developer crafting digital experiences with modern technologies 
                and creative solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="quick-links-section">
              <h4 className="section-title text-sm font-medium text-text-primary uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <nav className="quick-nav space-y-3">
                {quickLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className="nav-link block text-body text-text-secondary hover:text-accent transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h4 className="section-title text-sm font-medium text-text-primary uppercase tracking-wider mb-4">
                Get In Touch
              </h4>
              <div className="contact-details space-y-3">
                <p className="contact-email text-body text-text-secondary">
                  <a 
                    href="mailto:udaykrizzz08@gmail.com"
                    className="hover:text-accent transition-colors duration-300"
                  >
                    udaykrizzz08@gmail.com
                  </a>
                </p>
                <p className="contact-location text-body text-text-secondary">
                  Available for remote work
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="footer-divider w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

          {/* Bottom Footer */}
          <div className="footer-bottom flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="social-links flex items-center space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : '_self'}
                    rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`social-link w-10 h-10 rounded-full bg-surface-secondary hover:bg-surface-tertiary 
                              flex items-center justify-center text-text-muted ${social.color} 
                              transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent 
                              focus:ring-offset-2 focus:ring-offset-background`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Visit ${social.name} profile`}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="copyright text-center md:text-right">
              <p className="text-caption text-text-muted">
                ALL RIGHTS RESERVED. | UDAY KRISHNA | {new Date().getFullYear()}
              </p>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="scroll-to-top fixed bottom-8 right-8 w-12 h-12 rounded-full glass-card 
                     flex items-center justify-center text-text-primary hover:text-accent 
                     transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent 
                     focus:ring-offset-2 focus:ring-offset-background z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              ↑
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
      </div>
    </footer>
  );
};

export default Footer;