import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
// 1. IMPORT EMAILJS
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setFormStatus({ type: 'loading', message: 'Sending message...' });

    // --- START: HARD-CODED KEYS (NOT RECOMMENDED FOR PRODUCTION) ---
    // The keys are now directly in the code.
    const serviceID = 'service_cz6n43d';
    const templateID = 'template_qs5qztn'; // Using your new Template ID
    const publicKey = 'ItnM01lu4yfEUVd4Y';
    // --- END: HARD-CODED KEYS ---

    // This object's keys MUST match the variables in your EmailJS template
    const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setFormStatus({
          type: 'error',
          message: 'Sorry, there was an error sending your message. Please try again.'
        });
      });
  };

  // Animation variants (no changes here)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <section 
      id="contact-section" 
      className="contact-section section-padding relative bg-gradient-to-br from-background to-surface"
    >

      <div className="container-custom relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div className="contact-info" variants={itemVariants}>
            <h2 className="heading-section text-text-primary mb-6">
              LET'S WORK TOGETHER
            </h2>
            
            <p className="text-body text-text-secondary mb-8 leading-relaxed">
              Have a project in mind or want to discuss opportunities? 
              I'd love to hear from you. Let's create something amazing together.
            </p>

            {/* Contact Methods */}
            <div className="contact-methods space-y-6">
              <motion.div 
                className="contact-method flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="icon-container w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-text-primary uppercase tracking-wider">
                    Email
                  </h4>
                  <a 
                    href="mailto:udaykrizzz08@gmail.com"
                    className="text-body text-text-secondary hover:text-accent transition-colors duration-300"
                  >
                    udaykrizzz08@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="contact-method flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="icon-container w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <MessageSquare size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-text-primary uppercase tracking-wider">
                    Response Time
                  </h4>
                  <p className="text-body text-text-secondary">
                    Usually within 24 hours
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Additional Info */}
            <motion.div 
              className="additional-info mt-12 p-6 rounded-radius glass-card"
              variants={itemVariants}
            >
              <h4 className="text-sm font-medium text-text-primary uppercase tracking-wider mb-3">
                What I Can Help With
              </h4>
              <ul className="space-y-2 text-body text-text-secondary">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span>Full-stack web development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span>Cloud applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span>Software Development</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="contact-form" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="form-group">
                <label 
                  htmlFor="name"
                  className="form-label block text-sm font-medium text-text-primary uppercase tracking-wider mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input w-full px-4 py-3 rounded-radius bg-surface border border-border 
                           text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 
                           focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Input */}
              <div className="form-group">
                <label 
                  htmlFor="email"
                  className="form-label block text-sm font-medium text-text-primary uppercase tracking-wider mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input w-full px-4 py-3 rounded-radius bg-surface border border-border 
                           text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 
                           focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              {/* 3. ADD THE SUBJECT FIELD TO THE FORM */}
              <div className="form-group">
                <label 
                  htmlFor="subject"
                  className="form-label block text-sm font-medium text-text-primary uppercase tracking-wider mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input w-full px-4 py-3 rounded-radius bg-surface border border-border 
                           text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 
                           focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="What is this about?"
                />
              </div>

              {/* Message Textarea */}
              <div className="form-group">
                <label 
                  htmlFor="message"
                  className="form-label block text-sm font-medium text-text-primary uppercase tracking-wider mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="form-input w-full px-4 py-3 rounded-radius bg-surface border border-border 
                           text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 
                           focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or how I can help you..."
                />
              </div>

              {/* Status Message */}
              {formStatus.type !== 'idle' && (
                <motion.div
                  className={`status-message flex items-center space-x-2 p-4 rounded-radius ${
                    formStatus.type === 'success' 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : formStatus.type === 'error'
                      ? 'bg-red-50 text-red-700 border border-red-200'
                      : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formStatus.type === 'success' && <CheckCircle size={16} />}
                  {formStatus.type === 'error' && <AlertCircle size={16} />}
                  {formStatus.type === 'loading' && (
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  )}
                  <span className="text-sm">{formStatus.message}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={formStatus.type === 'loading'}
                className="submit-button w-full inline-flex items-center justify-center space-x-2 px-8 py-4 
                         rounded-radius bg-accent text-primary-foreground font-medium tracking-wide
                         hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed 
                         transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent 
                         focus:ring-offset-2 focus:ring-offset-background"
                whileHover={{ scale: formStatus.type === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: formStatus.type === 'loading' ? 1 : 0.98 }}
              >
                {formStatus.type === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
