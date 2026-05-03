import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaCode, FaGraduationCap, FaEnvelope, FaBrain } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import useActiveSection from '../../hooks/useActiveSection';
import './Layout.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const activeSection = useActiveSection();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { icon: <FaHome />, label: 'Home', href: '#header' },
    { icon: <FaBrain />, label: 'Skills', href: '#skills' },
    { icon: <BsCodeSlash />, label: 'Projects', href: '#projects' },
    { icon: <FaCode />, label: 'LeetCode', href: '#leetcode' },
    { icon: <FaGraduationCap />, label: 'Education', href: '#education' },
    { icon: <FaEnvelope />, label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsSidebarOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="layout">
      <button className="menu-toggle" onClick={toggleSidebar} aria-label="Toggle navigation">
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="logo">
            <h2>Portfolio</h2>
          </div>
          <nav className="sidebar-nav">
            {menuItems.map((item, index) => {
              const sectionId = item.href.replace('#', '');
              return (
                <a
                  key={index}
                  href={item.href}
                  className={`nav-item ${activeSection === sectionId ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>

      <main className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout; 