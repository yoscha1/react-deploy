'use client';

import { useState, useEffect } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe sections (excluding contact for special handling)
    const sections = ['home', 'projects', 'about'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Handle scroll position for contact highlighting
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If we're near the bottom of the page (within 100px), highlight contact
      if (scrollPosition >= documentHeight - 100) {
        setActiveSection('contact');
      } else {
        // Check if any other section is in view
        const currentSection = sections.find(sectionId => {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3;
          }
          return false;
        });
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getNavItemClass = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `nav-item ${isActive ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : 'text-white hover:text-gray-200'}`;
  };

  return (
    <div className="flex justify-center items-center fixed top-3 left-0 right-0 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#home" className={getNavItemClass('home')}>Home</a>
        <a href="#projects" className={getNavItemClass('projects')}>Projects</a>
        <a href="#about" className={getNavItemClass('about')}>About</a>
        <a href="#contact" className={getNavItemClass('contact')}>Contact</a>
      </nav>
    </div>
  );
};
