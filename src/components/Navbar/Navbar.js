import { useState, useEffect } from 'react';
import resumePdf from '../../asset/soham_kavde.pdf';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#education' },
    { label: 'LeetCode', href: '#leetcode' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleMenuClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-content">
        <a href="#hero" className="logo">
          <span className="logo-text">Portfolio</span>
        </a>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className="nav-links">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick(item.href);
              }}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="nav-link-number">0{index + 1}.</span>
              {item.label}
            </a>
          ))}
          <a className="resume-button" href={resumePdf} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>

      <div className="mobile-menu">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="mobile-nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick(item.href);
            }}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="nav-link-number">0{index + 1}.</span>
            {item.label}
          </a>
        ))}
        <a className="resume-button mobile" href={resumePdf} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar; 