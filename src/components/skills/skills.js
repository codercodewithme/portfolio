import { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'C++', 'Core Java']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'MVC', 'JWT', 'Socket.io']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'HTML', 'CSS', 'Redux']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Docker', 'Grafana', 'Prometheus', 'Loki']
    },
    {
      title: 'Tools & Fundamentals',
      skills: ['Git', 'Postman', 'Redis', 'OOP', 'Data Structures & Algorithms', 'System Design Basics']
    }
  ];

  return (
    <section ref={sectionRef} className="skills" id="skills">
      <div className="skills-content">
        <h2 className="section-title">
          <span className="section-number">02.</span> Skills
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <span className="skill-bullet">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 