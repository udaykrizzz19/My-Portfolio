import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart, Download } from 'lucide-react';

const BioSection = () => {
  // Skills and expertise data
  const skills = [
    {
      icon: Code,
      title: 'Programming Languages',
      description: 'Crafting scalable and efficient applications using modern, versatile languages across web and backend development.',
      technologies: ["JavaScript", "TypeScript", "Python", "C++", "C", "SQL", "HTML/CSS", "Java", "PostgreSQL", "NoSQL"]
    },
    {
      icon: Palette,
      title: 'Frameworks & Libraries',
      description: 'Delivering clean, high-performance interfaces and APIs through modern frameworks focused on speed, design, and modularity.',
      technologies: ["React.js", "Node.js", "FastAPI", "Vite", "Tailwind CSS", "Bootstrap"," Framer Motion", "React Bits", "React Icons"]
    },
    {
      icon: Zap,
      title: 'Cloud Platforms & Dev Services',
      description: 'Deploying, scaling, and securing applications across cloud-native platforms with seamless backend integrations.',
      technologies: ["AWS", "Azure","Docker","Kubernetes","Supabase", "Vercel", "Netlify"," Google-Colab"]
    },
    {
      icon: Heart,
      title: ' Developer & DevOps Tooling',
      description: 'Streamlining development workflows with modern IDEs, testing tools, CI/CD utilities, and version control systems.',
      technologies: ["Git", "GitHub", "Postman", "Figma", "IntelliJ IDEA", "Android Studio", "Jupyter", "Anaconda", "VS Code", "PyCharm", "Eclipse"]
    }
  ];

  // Education timeline - CORRECTED & UNIFIED DATA
  const Education = [
    {
      year: 'July - 2025',
      title: 'SRM Univeristy Ap, India',
      branch: 'Computer Science and Engineering',
      stream: 'B.Tech',
      cgpa: '7.54 / 10',
      description: 'Pursued Bachelor of Technology in Computer Science and Engineering with a focus on software development and cloud technologies.',
    },
    {
      year: '2021',
      title: 'JNV Khammam Telangana, India',
      branch: 'Science (MPC)',
      stream: 'Intermediate',
      cgpa: '89.3 %',
      description: 'Completed intermediate education with a focus on Mathematics, Physics, and Chemistry.',
    },
    {
      year: '2019',
      branch: 'Science',
      stream: '10th Grade',
      cgpa: '9.3 / 10',
      description: 'Pursued 10th grade with a focus on Science and Mathematics, laying the foundation for a career in technology.',
    },
  ];

  // Animation variants
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
      id="bio-section" 
      className="bio-section pt-6 pb-20 relative bg-gradient-to-b from-surface to-background"
    >

      <div className="container-custom relative z-10">
        <motion.div
          className="bio-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div 
            className="section-header text-center mb-16 md:mb-24"
            variants={itemVariants}
          >
            <h2 className="heading-section text-text-primary mb-6">
              ABOUT ME
            </h2>
            <p className="text-body text-text-secondary max-w-3xl mx-auto leading-relaxed">
              I'm a passionate software developer with a strong academic background, creating 
              digital solutions that combine technical excellence with thoughtful design. 
              I believe in writing clean, maintainable code and building applications that 
              not only work flawlessly but also provide exceptional user experiences.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24"
            variants={itemVariants}
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  className="skill-card glass-card p-6 md:p-8 rounded-radius-large"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="skill-header flex items-center space-x-4 mb-4">
                    <div className="skill-icon w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <h3 className="skill-title heading-card text-text-primary">
                      {skill.title}
                    </h3>
                  </div>
                  
                  <p className="skill-description text-body text-text-secondary mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  
                  <div className="skill-technologies flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag text-xs px-3 py-1 rounded-full bg-surface-tertiary text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Education Timeline */}
          <motion.div 
            className="Education-section mb-16 md:mb-24"
            variants={itemVariants}
          >
            <h3 className="heading-section text-text-primary text-center mb-12">
              Education
            </h3>
            
            <div className="timeline relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="timeline-line absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"></div>
              
              {Education.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`timeline-item relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`timeline-content ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="timeline-card glass-card p-6 rounded-radius">
                      <div className="timeline-year text-sm font-medium text-accent uppercase tracking-wider mb-2">
                        {item.year}
                      </div>
                      <h4 className="timeline-title text-lg font-medium text-text-primary mb-1">
                        {item.title}
                      </h4>
                      {/* === START: UPDATED SECTION === */}
                      <div className="timeline-details text-sm text-accent-muted mb-3 flex flex-wrap gap-x-3">
                        {item.stream && (
                          <span className="font-medium">{item.stream}</span>
                        )}
                        {item.branch && (
                          <span>{item.branch}</span>
                        )}
                        {item.cgpa && (
                          <span className="font-semibold">CGPA: {item.cgpa}</span>
                        )}
                      </div>
                      {/* === END: UPDATED SECTION === */}
                      <p className="timeline-description text-body text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="cta-section text-center"
            variants={itemVariants}
          >
            <h3 className="heading-card text-text-primary mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-body text-text-secondary mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's create something amazing together.
            </p>
            
            <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="cta-button inline-flex items-center space-x-2 px-8 py-4 rounded-radius 
                         bg-accent text-primary-foreground font-medium tracking-wide
                         hover:bg-accent-light transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
              </motion.button>
              
              <motion.a
                href="/UdayKrishna_Banala"
                download="UdayKrishna_Banala.pdf"
                className="cta-button-secondary inline-flex items-center space-x-2 px-8 py-4 rounded-radius 
                         border border-border text-text-primary hover:bg-surface-secondary 
                         transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent 
                         focus:ring-offset-2 focus:ring-offset-background"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                <span>Download CV</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BioSection;