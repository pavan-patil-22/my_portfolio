import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);

    // If href is a route path (starts with '/'), use router navigation
    if (typeof href === 'string' && href.startsWith('/')) {
      // If we're already on the homepage and the path matches a section (e.g. '/contact'),
      // try to scroll to the element with that id first. Otherwise navigate.
      const sectionId = href.replace(/^\//, ''); // 'contact'
      if (window.location.pathname === '/' || window.location.pathname === '') {
        const el = document.getElementById(sectionId) || document.querySelector(`#${sectionId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }

      // Not on home, or element not found: navigate to route
      navigate(href);
      return;
    }

    // If href is a hash/fragment like '#about'
    if (typeof href === 'string' && href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Fallback: try querying the selector only if it looks like an id selector
    try {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } catch (err) {
      // invalid selector (e.g. '/contact'), do nothing or navigate to href
      // as a safe fallback, navigate if it's a path-like string
      if (typeof href === 'string' && href.startsWith('/')) {
        navigate(href);
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <span className="logo-text">Pavan Patil</span>
          <span className="logo-badge">MERN Stack</span>
        </div>

        {/* Navigation Items */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li key={item.name} className="nav-item">
              <a
                href={item.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <style>
        {`
          /* Navbar Styles */
          .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            z-index: 1000;
            transition: all 0.3s ease;
            /* increased height */
            padding: 1.4rem 0;
          }

          .navbar.scrolled {
            background: rgba(15, 15, 15, 0.98);
            /* keep scrolled height slightly smaller but taller than before */
            padding: 1rem 0;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }

          .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          /* Logo Styles */
          .nav-logo {
            display: flex;
            align-items: center;
            gap: 0.8rem;
          }

          .logo-text {
            font-size: 1.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: glow 2s ease-in-out infinite alternate;
          }

          .logo-badge {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 0.2rem 0.6rem;
            border-radius: 12px;
            font-size: 0.7rem;
            font-weight: 600;
            animation: pulse 2s infinite;
          }

          /* Navigation Menu */
          .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
            margin: 0;
            padding: 0;
          }

          .nav-item {
            position: relative;
          }

          .nav-link {
            color: #e2e8f0;
            text-decoration: none;
            font-weight: 500;
            padding: 0.5rem 0;
            position: relative;
            transition: all 0.3s ease;
            opacity: 0;
            animation: slideInDown 0.5s ease forwards;
          }

          .nav-link:hover {
            color: #667eea;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          /* Mobile Menu Toggle */
          .nav-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
            padding: 0.5rem;
          }

          .bar {
            width: 25px;
            height: 3px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 3px 0;
            transition: all 0.3s ease;
            border-radius: 2px;
          }

          .nav-toggle.active .bar:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
          }

          .nav-toggle.active .bar:nth-child(2) {
            opacity: 0;
          }

          .nav-toggle.active .bar:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
          }

          /* Animations */
          @keyframes glow {
            from {
              text-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
            }
            to {
              text-shadow: 0 0 20px rgba(102, 126, 234, 0.8), 0 0 30px rgba(102, 126, 234, 0.6);
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Responsive Design */
          @media screen and (max-width: 768px) {
            .nav-container {
              padding: 0 1rem;
            }

            .nav-toggle {
              display: flex;
            }

            .nav-menu {
              position: fixed;
              /* adjust top to match increased navbar height */
              top: 84px;
              left: -100%;
              width: 100%;
              height: calc(100vh - 84px);
              background: rgba(15, 15, 15, 0.98);
              backdrop-filter: blur(20px);
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              padding-top: 3rem;
              gap: 2rem;
              transition: all 0.5s ease;
              border-top: 1px solid rgba(255, 255, 255, 0.1);
            }

            .nav-menu.active {
              left: 0;
            }

            .nav-link {
              font-size: 1.2rem;
              padding: 1rem 2rem;
              opacity: 1;
              animation: none;
            }

            .nav-link::after {
              display: none;
            }

            .logo-text {
              font-size: 1.3rem;
            }

            .logo-badge {
              font-size: 0.6rem;
              padding: 0.15rem 0.5rem;
            }
          }

          @media screen and (max-width: 480px) {
            .nav-logo {
              flex-direction: column;
              gap: 0.3rem;
              align-items: flex-start;
            }

            .logo-text {
              font-size: 1.2rem;
            }

            .logo-badge {
              font-size: 0.55rem;
            }
          }

          /* Smooth transitions for all interactive elements */
          * {
            transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;
          }

          /* Custom scrollbar for webkit browsers */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #1a1a1a;
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;