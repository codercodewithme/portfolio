import { useEffect, useRef } from 'react';
import profileImage from '../../asset/profile.png';
import './About.css';

const About = () => {
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

  return (
    <section ref={sectionRef} className="about" id="about">
      <div className="about-content">
        <h2 className="section-title">
          <span className="section-number">01.</span> About Me
        </h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Hello! I'm Soham, a software engineer based in Balaghat, MP. I started my
              journey as a full-time employee in April 2025 as a MERN stack developer,
              building web applications, RESTful APIs, and responsive React experiences.
            </p>
            <p>
              Fast-forward to today, I've had the privilege of working on diverse projects that have helped me
              develop a strong foundation in modern web technologies and best practices.
            </p>
            <p>
              My main focus is clean architecture, performance optimization, secure APIs,
              responsive UI, and production-ready code that supports real users.
            </p>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <img src={profileImage} alt="Soham Kavde profile" />
              <div className="image-outline"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 