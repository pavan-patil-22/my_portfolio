import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    });
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/pavan-patil-22', name: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/pavan-patil-279183369/', name: 'LinkedIn' },
    { icon: <FaCode />, url: 'https://leetcode.com/u/pavan-patil-22/', name: 'LeetCode' },
    { icon: <FaEnvelope />, url: 'mailto:pavanpatil2204@gmail.com', name: 'Email' }
  ];

  const techStack = [
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <SiExpress />, name: 'Express.js', color: '#000000' },
    { icon: <SiReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiNodedotjs />, name: 'Node.js', color: '#339933' }
  ];

  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  return (
    <div>
      <section id="home" className="home_section">
        <div className="home_container">
          {/* Background Animation */}
          <div className="home_background_animation">
            <div className="home_floating_circle home_circle_1"></div>
            <div className="home_floating_circle home_circle_2"></div>
          </div>

          <div className="home_content">
            {/* Text Content */}
            <div className="home_text_content" data-aos="fade-right">
              <div className="home_greeting">
                <span className="home_wave">👋</span> Hello, I'm
              </div>
              
              <h1 className="home_name">
                Pavan <span className="home_name_highlight">Patil</span>
              </h1>
              
              <div className="home_title">
                <span className="home_title_text">MERN Stack Developer</span>
                <div className="home_title_underline"></div>
              </div>

              {/* Photo Section - Mobile Only */}
              <div className="home_image_mobile" data-aos="fade-up" data-aos-delay="200">
                <div className="home_image_container_mobile">
                  <img
                    src={`${process.env.PUBLIC_URL}/pavan.jpg`}
                    alt="Pavan Patil - MERN Stack Developer"
                    className="home_profile_image_mobile"
                  />
                  <div className="home_image_glow_mobile"></div>
                  <div className="home_image_border_mobile"></div>
                </div>
              </div>

              <p className="home_description">
                I'm a passionate MERN Developer and MCA student, dedicated to crafting dynamic, responsive web applications using MongoDB, Express.js, React, and Node.js. I love transforming ideas into clean, efficient, and user-friendly digital solutions while continuously exploring new technologies to enhance performance and design.
              </p>

              {/* Tech Stack Icons */}
              <div className="home_tech_stack">
                <h3 className="home_tech_title">Tech Stack</h3>
                <div className="home_tech_icons">
                  {techStack.map((tech, index) => (
                    <div 
                      key={tech.name}
                      className="home_tech_item"
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                    >
                      <div 
                        className="home_tech_icon"
                        style={{ color: tech.color }}
                      >
                        {tech.icon}
                      </div>
                      <span className="home_tech_name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="home_buttons" data-aos="fade-up" data-aos-delay="400">
                <button onClick={handleGetInTouch} className="home_btn home_btn_primary">
                  Get In Touch
                </button>
                <a 
                  href={`${process.env.PUBLIC_URL}/resume.pdf`} 
                  download 
                  className="home_btn home_btn_secondary"
                >
                  <FaDownload className="home_btn_icon" />
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="home_social_links" data-aos="fade-up" data-aos-delay="600">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="home_social_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    data-aos="zoom-in"
                    data-aos-delay={800 + index * 100}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Photo Section - Desktop Only */}
            <div className="home_image_desktop" data-aos="fade-left" data-aos-delay="200">
              <div className="home_image_container_desktop">
                <img
                  src={`${process.env.PUBLIC_URL}/pavan.jpg`}
                  alt="Pavan Patil - MERN Stack Developer"
                  className="home_profile_image_desktop"
                />
                <div className="home_image_glow_desktop"></div>
                <div className="home_image_border_desktop"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="home_scroll_indicator" data-aos="fade-up" data-aos-delay="1000">
            <div className="home_scroll_mouse">
              <div className="home_scroll_wheel"></div>
            </div>
            <span className="home_scroll_text">Scroll Down</span>
          </div>
        </div>

        <style>
          {`
            /* Home Section */
            .home_section {
              min-height: calc(100vh - 60px);
              background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #0f0f0f 100%);
              position: relative;
              overflow: hidden;
              display: flex;
              align-items: center;
              padding: 6rem 0;
            }

            .home_container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 2rem;
              width: 100%;
              position: relative;
              z-index: 2;
              pointer-events: auto;
            }

            /* Background Animation */
            .home_background_animation {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 1;
              pointer-events: none;
            }

            .home_floating_circle {
              position: absolute;
              border-radius: 50%;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              opacity: 0.1;
              animation: home_float 6s ease-in-out infinite;
              pointer-events: none;
            }

            .home_circle_1 {
              width: 300px;
              height: 300px;
              top: -150px;
              right: -100px;
              animation-delay: 0s;
            }

            .home_circle_2 {
              width: 200px;
              height: 200px;
              bottom: 100px;
              left: -50px;
              animation-delay: 2s;
            }

            @keyframes home_float {
              0%, 100% {
                transform: translateY(0px) scale(1);
              }
              50% {
                transform: translateY(-20px) scale(1.05);
              }
            }

            /* Content Layout */
            .home_content {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 4rem;
              align-items: center;
              min-height: 80vh;
              pointer-events: auto;
              position: relative;
              z-index: 100;
            }

            /* Text Content */
            .home_text_content {
              color: #ffffff;
              pointer-events: auto;
            }

            .home_greeting {
              font-size: 1.2rem;
              color: #667eea;
              margin-bottom: 0.5rem;
              font-weight: 500;
            }

            .home_wave {
              display: inline-block;
              animation: home_wave 2.5s infinite;
              transform-origin: 70% 70%;
            }

            @keyframes home_wave {
              0% { transform: rotate(0deg); }
              10% { transform: rotate(14deg); }
              20% { transform: rotate(-8deg); }
              30% { transform: rotate(14deg); }
              40% { transform: rotate(-4deg); }
              50% { transform: rotate(10deg); }
              60% { transform: rotate(0deg); }
              100% { transform: rotate(0deg); }
            }

            .home_name {
              font-size: 3.5rem;
              font-weight: 700;
              margin-bottom: 0.5rem;
              background: linear-gradient(135deg, #ffffff 0%, #667eea 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }

            .home_name_highlight {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }

            .home_title {
              margin-bottom: 1.5rem;
              position: relative;
            }

            .home_title_text {
              font-size: 1.5rem;
              color: #e2e8f0;
              font-weight: 500;
            }

            .home_title_underline {
              width: 100px;
              height: 3px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              margin-top: 0.5rem;
              border-radius: 2px;
              animation: home_underline 3s ease-in-out infinite;
            }

            @keyframes home_underline {
              0%, 100% { width: 100px; }
              50% { width: 150px; }
            }

            .home_description {
              text-align: justify;
              font-size: 1.1rem;
              line-height: 1.6;
              color: #94a3b8;
              margin-bottom: 2rem;
              max-width: 500px;
            }

            /* Tech Stack */
            .home_tech_stack {
              margin-bottom: 2rem;
            }

            .home_tech_title {
              font-size: 1rem;
              color: #667eea;
              margin-bottom: 1rem;
              font-weight: 600;
            }

            .home_tech_icons {
              display: flex;
              gap: 1.5rem;
              flex-wrap: wrap;
            }

            .home_tech_item {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0.5rem;
              transition: transform 0.3s ease;
              pointer-events: auto;
              position: relative;
              z-index: 101;
              cursor: pointer;
            }

            .home_tech_item:hover {
              transform: translateY(-5px);
            }

            .home_tech_icon {
              font-size: 2rem;
              transition: all 0.3s ease;
            }

            .home_tech_name {
              font-size: 0.8rem;
              color: #cbd5e1;
              font-weight: 500;
            }

            /* Buttons */
            .home_buttons {
              display: flex;
              gap: 1rem;
              margin-bottom: 2rem;
              flex-wrap: wrap;
            }

            .home_btn {
              padding: 0.8rem 1.5rem;
              border-radius: 50px;
              text-decoration: none;
              font-weight: 600;
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              gap: 0.5rem;
              border: 2px solid transparent;
              cursor: pointer;
              font-family: inherit;
              font-size: inherit;
              pointer-events: auto;
              position: relative;
              z-index: 101;
            }

            .home_btn_primary {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
            }

            .home_btn_primary:hover {
              transform: translateY(-3px);
              box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
            }

            .home_btn_secondary {
              background: transparent;
              color: #e2e8f0;
              border-color: #667eea;
            }

            .home_btn_secondary:hover {
              background: #667eea;
              color: white;
              transform: translateY(-3px);
            }

            .home_btn_icon {
              font-size: 0.9rem;
            }

            /* Social Links */
            .home_social_links {
              display: flex;
              gap: 1rem;
            }

            .home_social_link {
              width: 45px;
              height: 45px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.1);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #e2e8f0;
              text-decoration: none;
              font-size: 1.2rem;
              transition: all 0.3s ease;
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.1);
              pointer-events: auto;
              position: relative;
              z-index: 101;
              cursor: pointer;
            }

            .home_social_link:hover {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              transform: translateY(-3px);
              box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
            }

            /* Desktop Image Content */
            .home_image_desktop {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .home_image_container_desktop {
              position: relative;
              width: 400px;
              height: 400px;
            }

            .home_profile_image_desktop {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 50%;
              position: relative;
              z-index: 103;
              border: 3px solid rgba(255,255,255,0.06);
              background: transparent;
              animation: home_image_float 4s ease-in-out infinite;
              pointer-events: auto;
              cursor: pointer;
            }

            @keyframes home_image_float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }

            .home_image_glow_desktop {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 110%;
              height: 110%;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              border-radius: 50%;
              filter: blur(20px);
              opacity: 0.3;
              z-index: 101;
              animation: home_glow_pulse 3s ease-in-out infinite;
              pointer-events: none;
            }

            @keyframes home_glow_pulse {
              0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
              50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.05); }
            }

            .home_image_border_desktop {
              position: absolute;
              top: -10px;
              left: -10px;
              right: -10px;
              bottom: -10px;
              border-radius: 50%;
              border: 4px solid rgba(102,126,234,0.18);
              z-index: 102;
              animation: home_rotate 10s linear infinite;
              pointer-events: none;
            }

            @keyframes home_rotate {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            /* Mobile Image Content */
            .home_image_mobile {
              display: none;
              justify-content: center;
              align-items: center;
              margin: 2rem 0;
            }

            .home_image_container_mobile {
              position: relative;
              width: 280px;
              height: 280px;
            }

            .home_profile_image_mobile {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 50%;
              position: relative;
              z-index: 103;
              border: 3px solid rgba(255,255,255,0.06);
              background: transparent;
              animation: home_image_float 4s ease-in-out infinite;
              pointer-events: auto;
              cursor: pointer;
            }

            .home_image_glow_mobile {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 110%;
              height: 110%;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              border-radius: 50%;
              filter: blur(20px);
              opacity: 0.3;
              z-index: 101;
              animation: home_glow_pulse 3s ease-in-out infinite;
              pointer-events: none;
            }

            .home_image_border_mobile {
              position: absolute;
              top: -10px;
              left: -10px;
              right: -10px;
              bottom: -10px;
              border-radius: 50%;
              border: 4px solid rgba(102,126,234,0.18);
              z-index: 102;
              animation: home_rotate 10s linear infinite;
              pointer-events: none;
            }

            /* Scroll Indicator */
            .home_scroll_indicator {
              position: absolute;
              bottom: 2rem;
              left: 50%;
              transform: translateX(-50%);
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0.5rem;
              color: #94a3b8;
              pointer-events: none;
            }

            .home_scroll_mouse {
              width: 24px;
              height: 40px;
              border: 2px solid #94a3b8;
              border-radius: 12px;
              position: relative;
            }

            .home_scroll_wheel {
              width: 4px;
              height: 8px;
              background: #667eea;
              border-radius: 2px;
              position: absolute;
              top: 8px;
              left: 50%;
              transform: translateX(-50%);
              animation: home_scroll 2s infinite;
            }

            @keyframes home_scroll {
              0% { transform: translateX(-50%) translateY(0); opacity: 1; }
              100% { transform: translateX(-50%) translateY(12px); opacity: 0; }
            }

            .home_scroll_text {
              font-size: 0.8rem;
              font-weight: 500;
            }

            /* Fix for clickability issues */
            .home_text_content > * {
              pointer-events: auto;
              position: relative;
            }

            /* Responsive Design */
            @media screen and (max-width: 968px) {
              .home_content {
                grid-template-columns: 1fr;
                gap: 2rem;
                text-align: center;
              }

              .home_name {
                font-size: 2.8rem;
              }

              .home_image_desktop {
                display: none;
              }

              .home_image_mobile {
                display: flex;
              }

              .home_description {
                margin: 0 auto 2rem;
              }

              .home_buttons {
                justify-content: center;
              }

              .home_social_links {
                justify-content: center;
              }

              .home_tech_icons {
                justify-content: center;
              }
            }

            @media screen and (max-width: 768px) {
              .home_container {
                padding: 0 1rem;
              }

              .home_name {
                font-size: 2.5rem;
              }

              .home_title_text {
                font-size: 1.3rem;
              }

              .home_description {
                font-size: 1rem;
              }

              .home_image_container_mobile {
                width: 250px;
                height: 250px;
              }

              .home_scroll_indicator {
                display: none;
              }
            }

            @media screen and (max-width: 480px) {
              .home_name {
                font-size: 2rem;
              }

              .home_buttons {
                flex-direction: column;
                align-items: center;
              }

              .home_btn {
                width: 200px;
                justify-content: center;
              }

              .home_image_container_mobile {
                width: 220px;
                height: 220px;
              }

              .home_tech_icons {
                gap: 1rem;
              }

              .home_tech_icon {
                font-size: 1.7rem;
              }
            }

            @media screen and (max-width: 600px) {
              .home_section {
                min-height: calc(100vh - 80px);
              }
            }
          `}
        </style>
      </section>
      <div>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
};

export default Home;