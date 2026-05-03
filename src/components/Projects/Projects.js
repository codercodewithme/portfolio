import { useEffect, useRef } from 'react';
import './Projects.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.1,
      }
    );

    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      title: 'JavaScript Execution Visualizer',
      description: 'Phase 1 MVP for an AST-based JavaScript simulator that visualizes synchronous function calls, console.log output, and call stack behavior without eval or async runtime execution.',
      tech: ['JavaScript', 'AST', 'React.js', 'Call Stack', 'Console Simulator'],
      github: 'https://github.com/codercodewithme',
      external: 'https://js-execution-visualizer-xi.vercel.app/'
    },
    {
      title: 'Food Buddy Application',
      description: 'A React food ordering application with a clean product browsing experience, responsive UI, and user-friendly flow for exploring food items online.',
      tech: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Responsive UI'],
      github: 'https://github.com/codercodewithme',
      external: 'https://foodbuddy-dusky.vercel.app/'
    },
    {
      title: 'E-commerce',
      description: 'A React-based e-commerce web application focused on product listing, modern UI components, responsive layouts, and smooth shopping experience.',
      tech: ['React.js', 'JavaScript', 'E-commerce', 'HTML', 'CSS'],
      github: 'https://github.com/codercodewithme',
      external: 'https://21plusecommerce.vercel.app/'
    },
    {
      title: 'Real-Time Notification System',
      description: 'Built a notification engine capable of handling 20K concurrent socket connections, with delivery tracking, retry mechanisms, and message acknowledgements for reliable event delivery.',
      tech: ['Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com/codercodewithme',
      external: 'https://soham-delta.vercel.app/'
    }
  ];

  return (
    <section ref={sectionRef} className="projects" id="projects">
      <div className="projects-content">
        <h2 className="section-title">
          <span className="section-number">03.</span> Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FiGithub />
                    </a>
                    <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="project-tech-list">
                  {project.tech.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
