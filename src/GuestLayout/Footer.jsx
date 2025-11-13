import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaCode, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/pavan-patil-279183369/',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/yourusername',
      color: '#333'
    },
    
    {
      name: 'LeetCode',
      icon: <FaCode />,
      url: 'https://leetcode.com/u/pavan-patil-22/',
      color: '#ffa116'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://github.com/pavan-patil-22',
      color: '#e4405f'
    },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      text: 'Haragapur, Hukkeri, Belagavi',
      url: 'https://maps.app.goo.gl/tAi5EqEyXM4CKP7o9'
    },
    {
      icon: <FaPhone />,
      text: '+91 9110413455',
      url: 'tel:+91 9110413455'
    },
    {
      icon: <FaEnvelope />,
      text: 'pavanpatil@gmail.com',
      url: 'mailto:pavanpatil2204'
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <h3 className="brand-name">Pavan Patil</h3>
              <p className="brand-tagline">MERN Stack Developer</p>
              <p className="brand-description">
                Passionate about creating innovative web solutions and 
                turning ideas into reality through code.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="section-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#experience" className="footer-link">Experience</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="section-title">Get In Touch</h4>
            <div className="contact-info">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="contact-item"
                  target={item.url.startsWith('http') ? '_blank' : '_self'}
                  rel={item.url.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <span className="contact-icon">{item.icon}</span>
                  <span className="contact-text">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h4 className="section-title">Follow Me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <button
                  key={social.name}
                  className="social-btn"
                  onClick={() => handleSocialClick(social.url)}
                  style={{ '--social-color': social.color }}
                  aria-label={`Visit my ${social.name}`}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="bottom-content">
            <p className="copyright">
              © {currentYear} Pavan Patil. Made with <FaHeart className="heart-icon" /> using React
            </p>
            <p className="footer-note">
              Open to new opportunities and collaborations!
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          color: #e2e8f0;
          padding: 3rem 0 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: auto;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .brand-name {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .brand-tagline {
          color: #667eea;
          font-weight: 600;
          font-size: 1.1rem;
          margin: 0;
        }

        .brand-description {
          line-height: 1.6;
          color: #94a3b8;
          margin: 0;
        }

        .section-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #ffffff;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 0.3rem 0;
          position: relative;
        }

        .footer-link:hover {
          color: #667eea;
          transform: translateX(5px);
        }

        .footer-link::before {
          content: '▸';
          position: absolute;
          left: -1rem;
          opacity: 0;
          transition: all 0.3s ease;
          color: #667eea;
        }

        .footer-link:hover::before {
          opacity: 1;
          left: -0.7rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
        }

        .contact-item:hover {
          color: #667eea;
          transform: translateX(5px);
        }

        .contact-icon {
          color: #667eea;
          font-size: 1.1rem;
          width: 20px;
          display: flex;
          justify-content: center;
        }

        .contact-text {
          flex: 1;
        }

        .social-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
        }

        .social-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .social-btn:hover {
          background: var(--social-color);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          border-color: var(--social-color);
        }

        .social-icon {
          font-size: 1.2rem;
          display: flex;
          align-items: center;
        }

        .social-name {
          font-weight: 500;
        }

        .footer-bottom {
          margin-top: 2rem;
        }

        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(102, 126, 234, 0.3) 50%, 
            transparent 100%);
          margin-bottom: 1.5rem;
        }

        .bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          margin: 0;
          font-size: 0.9rem;
        }

        .heart-icon {
          color: #e53e3e;
          animation: heartbeat 2s infinite;
        }

        .footer-note {
          color: #667eea;
          margin: 0;
          font-size: 0.9rem;
          font-weight: 500;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* Responsive Design */
        @media screen and (max-width: 968px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer-brand {
            grid-column: 1 / -1;
            text-align: center;
            align-items: center;
          }

          .brand-description {
            max-width: 500px;
          }
        }

        @media screen and (max-width: 768px) {
          .footer-container {
            padding: 0 1.5rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-section {
            text-align: center;
            align-items: center;
          }

          .section-title::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .social-links {
            grid-template-columns: 1fr;
            max-width: 200px;
          }

          .bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }
        }

        @media screen and (max-width: 480px) {
          .footer {
            padding: 2rem 0 1rem;
          }

          .footer-container {
            padding: 0 1rem;
          }

          .brand-name {
            font-size: 1.5rem;
          }

          .brand-tagline {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.1rem;
          }

          .social-btn {
            padding: 0.7rem;
            font-size: 0.85rem;
          }

          .copyright, .footer-note {
            font-size: 0.85rem;
          }
        }

        /* Smooth transitions */
        * {
          transition: color 0.3s ease, background-color 0.3s ease, 
                     transform 0.3s ease, border-color 0.3s ease;
        }
      `}</style>
    </footer>
  );
};

export default Footer;