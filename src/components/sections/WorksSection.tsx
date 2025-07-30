import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

// Project data structure
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  challenge: string;
  solution: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Full-Stack Intelligent Traffic-Monitoring Violation Management & fine collection',
    category: 'Full Stack Software Development with AI/ML',
    description: 'A web-based platform that uses a hybrid deep learning model to classify realistic ECG signals, helping in the early and accurate detection of cardiac abnormalities like Myocardial Infarction and arrhythmia.',
    technologies: ['React', 'Python', 'YOLOv8', 'Supabase', 'PaddleOCR',"OpenCV", "NumPy", "Matplotlib", "Vite","MySQL"," Google Colab"],
    image: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJhZmZpY3xlbnwwfHwwfHx8MA%3D%3D',
    githubUrl: 'https://github.com/udaykrizzz19/Full-Stack-Intelligent-Traffic-Monitoring-Violation-Management-and-fine-collection',
    year: '2025',
    challenge: 'Non-compliance with helmet laws is a major cause of fatalities and severe injuries among motorcycle riders, especially in developing countries. Traditional enforcement methods rely on manual monitoring by traffic police, which is labor-intensive, prone to human error, and not scalable for covering vast road networks. This reactive approach fails to provide consistent, real-time monitoring, leading to a high number of unrecorded violations and a persistent public safety risk.high traffic and complex inventory management.',
    solution: 'This project proposes an intelligent, automated system to address the enforcement gap in helmet law compliance. Using advanced deep learning and computer vision, the system detects motorcyclists in images or videos, determines helmet usage, identifies license plates of violators, and logs violations with visual evidence and extracted data for review and automated fining. By streamlining this process, the solution enhances road safety, reduces fatalities, and offers law enforcement a powerful, efficient, and scalable tool for real-time, consistent monitoring.'},
  {
    id: '2',
    title: 'Cardiac Conduction Simulation: A Hybrid Deep Learning Approach',
    category: 'Full stack app with ML',
    description: 'A web-based platform that uses a hybrid deep learning model to classify realistic ECG signals, helping in the early and accurate detection of cardiac abnormalities like Myocardial Infarction and arrhythmia.',
    technologies: ['React', 'Python',"TensorFlow", "KerasPandas", "NumPy", "Scikit-learn","HTML", "CSS", "JavaScript","Vite","MySQL"," Google Colab", "Flask"],
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNnfGVufDB8fDB8fHww',
    githubUrl: 'https://github.com/udaykrizzz19/Cardiac-Conduction-SimulatioA-ECG-Classification-Model',
    year: '2025',
    challenge: 'Ensuring real-time synchronization across multiple users while maintaining performance.',
    solution: 'Leveraged WebSocket connections with efficient state management and optimistic updates.'
},
   {
    id: '3',
    title: 'Recipe Whirls: A Full-Stack Software Solution for Culinary Enthusiasts',
    category: 'Web & Software development',
    description: 'A beautiful recipe app that helps you discover meals with ingredients you own, reducing food waste and inspiring creativity.',
    technologies: [ "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "PostgreSQL", "Supabase Auth", "Google OAuth", "TheMealDB API" ],
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
    githubUrl: 'https://github.com/udaykrizzz19/Recipe-Whirls',
    year: '2024',
    challenge: 'Many home cooks face the daily challenge of deciding what to make with ingredients on hand, often leading to food waste and meal fatigue. Existing recipe platforms can be overwhelming, lacking the intuitive tools to turn available items into a delicious meal. This transforms cooking from a creative, enjoyable process into a frustrating chore, leaving users uninspired and searching for a dynamic, helpful kitchen companion that simplifies their daily culinary decisions.',
    solution: 'Recipe Whirls tackles this by introducing a "Search by Items" feature, suggesting recipes based on ingredients you already have, minimizing food waste and sparking creativity. With the "Filter by Category" option, users can easily explore cuisines and meal types. By empowering users to save favorites in a personalized recipe box and contribute their own creations, our app transforms the daily task of cooking into an inspiring and delightful culinary journey, making every meal an exciting new adventure.',
    liveUrl: 'https://recipe-whirls.vercel.app/',
  },
  {
  id: '4',
  title: 'My Portfolio Website',
  category: 'Software Development',
  description: 'Responsive portfolio website with 3D elements, smooth animations, and modern design principles.',
  technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'Vite', 'TypeScript','React Bits','React Icons'],
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
  githubUrl: 'https://github.com/udaykrizzz19/My-Portfolio',
  year: '2025',
  challenge: 'Balancing visual appeal with performance across all devices.',
  solution: 'Implemented progressive loading, optimized 3D rendering, and responsive design patterns to ensure fast load times and smooth interactions on both desktop and mobile devices.',
  liveUrl: 'https://portfolioo-six-gamma.vercel.app/',
}
];

const WorksSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section 
      id="works-section" 
      className="works-section section-padding relative bg-gradient-to-b from-surface to-background"
    >

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="section-header text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-section text-text-primary mb-4">
            SELECTED WORKS
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in modern web development, 
            from concept to deployment.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card group cursor-pointer"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="card-content glass-card rounded-radius-large overflow-hidden h-full">
                {/* Project Image */}
                <div className="image-container relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="image-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm opacity-90">
                        Click to view details
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="card-info p-6 md:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <span className="project-category text-caption text-accent-muted uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="project-year text-caption text-text-muted">
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="project-title heading-card text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="project-description text-body text-text-secondary line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="technologies flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag text-xs px-3 py-1 rounded-full bg-surface-tertiary text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag text-xs px-3 py-1 rounded-full bg-surface-tertiary text-text-secondary">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            {/* Modal Content */}
            <motion.div
              className="modal-content relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface rounded-radius-large"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="close-button absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors duration-200"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Project Image */}
              <div className="modal-image relative aspect-[16/9] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} detailed view`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="modal-details p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="project-category text-caption text-accent-muted uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h2 className="project-title heading-section text-text-primary mt-2">
                      {selectedProject.title}
                    </h2>
                  </div>
                  <span className="project-year text-caption text-text-muted">
                    {selectedProject.year}
                  </span>
                </div>

                <p className="project-description text-body text-text-secondary mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Challenge & Solution */}
                <div className="challenge-solution grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-text-primary uppercase tracking-wider mb-2">
                      Challenge
                    </h4>
                    <p className="text-body text-text-secondary">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text-primary uppercase tracking-wider mb-2">
                      Solution
                    </h4>
                    <p className="text-body text-text-secondary">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="technologies-section mb-6">
                  <h4 className="text-sm font-medium text-text-primary uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag text-sm px-4 py-2 rounded-full bg-surface-tertiary text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="action-buttons flex flex-wrap gap-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-accent text-primary-foreground font-medium hover:bg-accent-light transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>View Live</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-border text-text-primary hover:bg-surface-secondary transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorksSection;