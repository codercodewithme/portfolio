import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/education/Education';
import Leetcode from './components/leetcode50days/leetcode';
import Contact from './components/contact/contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  useEffect(() => {
    const updateMousePosition = (e) => {
      const cursor = document.querySelector('.cursor');
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="app">
      <div className="cursor"></div>
      <div className="noise"></div>
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Leetcode />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
