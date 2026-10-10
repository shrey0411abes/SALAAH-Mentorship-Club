import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Departments from './components/Departments';
import Programs from './components/Programs';
import Connect from './components/Connect';
import Footer from './components/Footer';
import SwooshDivider from './components/SwooshDivider';
import { FaArrowUp } from 'react-icons/fa6';
import './App.css';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 420);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="salaah-app-root">
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* Calligraphic Swoosh Transition: Paper -> Surface */}
        <SwooshDivider fill="var(--surface)" accent="var(--gold)" height={64} />

        {/* 3. About Section */}
        <About />

        {/* Calligraphic Swoosh Transition: Surface -> Paper */}
        <SwooshDivider fill="var(--paper)" accent="var(--maroon)" height={64} flip />

        {/* 4. Departments Section */}
        <Departments />

        {/* Calligraphic Swoosh Transition: Paper -> Surface */}
        <SwooshDivider fill="var(--surface)" accent="var(--gold)" height={64} />

        {/* 5. Programs & Events Section */}
        <Programs />

        {/* Calligraphic Swoosh Transition: Surface -> Paper */}
        <SwooshDivider fill="var(--paper)" accent="var(--maroon)" height={64} flip />

        {/* 6. Connect Section */}
        <Connect />

        {/* Calligraphic Swoosh Transition: Paper -> Maroon-Dark Footer */}
        <SwooshDivider fill="var(--maroon-dark)" accent="var(--gold)" height={72} />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <button
        type="button"
        className={`floating-back-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}
