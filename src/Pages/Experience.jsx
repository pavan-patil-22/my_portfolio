import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBriefcase, FaUserTie } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    });
  }, []);

  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Web Developer',
      company: 'Ligand Software Solution',
      period: '2025 - Present',
      location: 'Sankeshwar, Karnataka',
      icon: <FaBriefcase />,
      description: 'Full-stack web development using MERN stack, building responsive web applications under the guidance of experienced mentors.',
      image: '/images/ligand-software.jpg', // Add your image path
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'TypeScript']
    },
    {
      id: 2,
      type: 'leadership',
      title: 'Technical Lead & Developer',
      company: 'Tech CivilWar - College Event',
      period: '2025',
      location: "SDVS'S BCA College, Sankeshwar",
      icon: <FaUserTie />,
      description: 'Led the development of comprehensive digital platforms for college-level coding and quizzes competition.',
      image: '/images/tech-civilwar.jpg', // Add your image path
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap']
    }
  ];

  const handleCardClick = (experienceId) => {
    navigate(`/experience/${experienceId}`);
  };

  return (
    <section id="experience" className="experience_section">
      <div className="experience_container">
        {/* Section Header */}
        <div className="experience_header" data-aos="fade-down">
          <h2 className="experience_title">Experience</h2>
          <div className="experience_title_underline"></div>
          <p className="experience_subtitle">Click on cards to view detailed experience</p>
        </div>

        {/* Simple Cards Grid */}
        <div className="simple_cards_grid">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id}
              className="simple_experience_card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              onClick={() => handleCardClick(experience.id)}
            >
              {/* Card Image */}
              <div className="card_image_container">
                <div className="card_image_placeholder">
                  {experience.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="simple_card_content">
                <div className="card_header_simple">
                  <h3 className="experience_role_simple">{experience.title}</h3>
                  <span className="company_name_simple">{experience.company}</span>
                </div>
                
                <div className="card_meta_simple">
                  <span className="period_simple">{experience.period}</span>
                  <span className="location_simple">{experience.location}</span>
                </div>

                <p className="description_simple">{experience.description}</p>

                {/* Technologies Preview */}
                <div className="technologies_preview">
                  {experience.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tech_badge_simple">
                      {tech}
                    </span>
                  ))}
                  {experience.technologies.length > 3 && (
                    <span className="tech_more">+{experience.technologies.length - 3} more</span>
                  )}
                </div>

                {/* Click Hint */}
                <div className="click_hint">
                  Click to view details →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience_section {
          padding: 4rem 0;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          min-height: 100vh;
        }

        .experience_container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header */
        .experience_header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .experience_title {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .experience_title_underline {
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin: 0 auto 1rem;
          border-radius: 2px;
        }

        .experience_subtitle {
          color: #94a3b8;
          font-size: 1.1rem;
        }

        /* Simple Cards Grid */
        .simple_cards_grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          padding: 0 1rem;
        }

        .simple_experience_card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .simple_experience_card:hover {
          transform: translateY(-8px);
          border-color: #667eea;
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
        }

        /* Card Image */
        .card_image_container {
          height: 160px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .card_image_placeholder {
          font-size: 3rem;
          color: white;
          opacity: 0.9;
        }

        /* Card Content */
        .simple_card_content {
          padding: 2rem;
        }

        .card_header_simple {
          margin-bottom: 1rem;
        }

        .experience_role_simple {
          font-size: 1.4rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
        }

        .company_name_simple {
          color: #667eea;
          font-weight: 500;
          font-size: 1.1rem;
        }

        .card_meta_simple {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .period_simple {
          background: rgba(102, 126, 234, 0.2);
          color: #667eea;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .location_simple {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .description_simple {
          color: #e2e8f0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        /* Technologies Preview */
        .technologies_preview {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech_badge_simple {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-size: 0.8rem;
          border: 1px solid rgba(102, 126, 234, 0.3);
        }

        .tech_more {
          color: #94a3b8;
          font-size: 0.8rem;
          align-self: center;
        }

        /* Click Hint */
        .click_hint {
          text-align: center;
          color: #667eea;
          font-weight: 500;
          font-size: 0.9rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .simple_experience_card:hover .click_hint {
          color: #764ba2;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .simple_cards_grid {
            grid-template-columns: 1fr;
            padding: 0;
          }
          
          .simple_card_content {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .experience_container {
            padding: 0 1rem;
          }
          
          .experience_title {
            font-size: 2rem;
          }
          
          .card_meta_simple {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;