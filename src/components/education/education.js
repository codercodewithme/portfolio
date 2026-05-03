import { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
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

  const education = [
    {
      degree: 'Web Developer',
      institution: 'Digital One Box Pvt Ltd',
      location: 'Balaghat, MP',
      period: 'April 2025 - Present',
      description: 'Building MERN stack features with Node.js, Express.js, React.js, MongoDB, MySQL, and Git.',
      achievements: [
        'Built REST APIs serving 10K+ active users and improved response time by 30% through optimized queries and caching.',
        'Rewrote legacy application modules, reducing bug reports by 25%.',
        'Collaborated with frontend teams to reduce UI defects by 40% and deliver analytics dashboards.'
      ]
    },
    {
      degree: 'B.Tech in Computer Science (CSE)',
      institution: 'IES College Of Technology',
      location: 'Bhopal, MP',
      period: '2023',
      description: 'Graduated with a CGPA of 8.46.',
      achievements: [
        'Qualified GATE 2025.',
        'Solved 350+ DSA questions across LeetCode, GeeksforGeeks, and other coding platforms.',
        'Completed certifications in Core Java, React Basics Frontend, SQL, and SQL Intermediate.'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="education" id="education">
      <div className="education-content">
        <h2 className="section-title">
          <span className="section-number">04.</span> Experience & Education
        </h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="period">{edu.period}</span>
                </div>
                <div className="institution">
                  <span className="name">{edu.institution}</span>
                  <span className="location">{edu.location}</span>
                </div>
                <p className="description">{edu.description}</p>
                <ul className="achievements">
                  {edu.achievements.map((achievement, achieveIndex) => (
                    <li key={achieveIndex}>
                      <span className="bullet">▹</span>
                      {achievement}
                    </li>
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

export default Education;
