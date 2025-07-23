import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Silk from '../three/Silk';

interface HeroSectionProps {
  onScrollToWorks: () => void;
}

const HeroSection = ({ onScrollToWorks }: HeroSectionProps) => {
  // Animation variants for staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  };

  const floatingVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: {
        duration: 1.2,
        delay: 0.8,
        ease: "easeOut"
      }
    },
  };

  return (
    <section 
      id="hero-section" 
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-surface-secondary"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.1)_50%,transparent_65%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Silk Background Element */}
      <motion.div
        className="absolute inset-0 opacity-30"
        variants={floatingVariants}
        initial="hidden"
        animate="visible"
      >
        <Silk
          speed={7}
          scale={1}
          color="#F0B30A"
          noiseIntensity={2.3}
          rotation={0}
        />
      </motion.div>

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <motion.div
          className="hero-content text-center space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h1
            className="main-heading heading-hero text-text-primary"
            variants={itemVariants}
          >
            <b>UDAY KRISHNA</b>
          </motion.h1>

          {/* Profession */}
          <motion.div
            className="profession-container"
            variants={itemVariants}
          >
            <div className="inline-block px-6 py-3 rounded-full glass-card">
              <p className="text-lg md:text-xl font-light tracking-[0.2em] text-text-secondary uppercase">
                Software Engineer
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="hero-description max-w-2xl mx-auto text-body text-text-secondary leading-relaxed px-4"
            variants={itemVariants}
          >
            Crafting digital experiences with modern technologies, 
            clean code, and creative solutions. Specializing in full-stack 
            development and innovative web and Cloud applications.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="cta-container pt-6"
            variants={itemVariants}
          >
            <motion.button
              onClick={onScrollToWorks}
              className="cta-button group inline-flex items-center space-x-2 px-8 py-4 rounded-full 
                         bg-accent text-primary-foreground font-medium tracking-wide
                         hover:bg-accent-light transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 1)"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="View my work"
            >
              <span>VIEW MY WORK</span>
              <motion.div
                className="arrow-icon"
                animate={{ y: [0, 3, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center"
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(255,255,255,0.4)",
              "0 0 0 10px rgba(255,255,255,0)",
              "0 0 0 0 rgba(255,255,255,0)"
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeOut"
          }}
        >
          <motion.div
            className="w-1 h-3 bg-text-muted rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;