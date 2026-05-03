import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
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
    <section ref={sectionRef} className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-title">
          <span className="hero-name">Soham Kavde.</span>
          <br />
          <span className="hero-subtitle">I build MERN stack applications.</span>
        </h1>
        <p className="hero-description">
          I'm a MERN stack developer with hands-on experience building React interfaces,
          Node.js APIs, and MongoDB-backed applications that are reliable and production-ready.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="cta-button">
            Check out my work!
          </a>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 