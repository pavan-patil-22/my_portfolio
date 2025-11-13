import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaBriefcase,
  FaUserTie,
  FaCode,
  FaTrophy,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaArrowLeft,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ExperienceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  // Sample data - you can move this to a separate data file
  const experiencesData = {
    1: {
      id: 1,
      type: "work",
      title: "Web Developer",
      company: "Ligand Software Solution",
      period: "2025 - Present",
      location: "Sankeshwar, Karnataka",
      icon: <FaBriefcase />,
      description:
        "Full-stack web development using MERN stack, building responsive web applications under the guidance of experienced mentors.",
      image: "/images/ligand-software.jpg",
      mentors: [
        {
          name: "Abhishek Sir",
          role: "Founder & CEO",
          contribution:
            "Motivated me throughout the journey, offered valuable suggestions, and provided excellent career guidance and mentorship.",
        },
        {
          name: "Sachin Sir",
          role: "Co-founder & CEO",
          contribution:
            "Teached and guided me in learning new technologies, provided strong project support, discussed innovative ideas, and Mentored on advanced technologies.",
        },
      ],
      responsibilities: [
        "Developed and maintained web applications using React.js and Node.js",
        "Implemented responsive designs and optimized user experience across devices",
        "Integrated RESTful APIs and third-party services",
        "Participated in code reviews and agile development processes",
        "Deployed applications and managed cloud infrastructure",
        "Collaborated with team members using GitHub for version control and project management",
        "Gathered and fulfilled client requirements to ensure complete satisfaction",
      ],

      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Git",
        "AI Integration",
      ],
      projectTypes: [
        {
          type: "MERN Stack Projects",
          description:
            "Full-stack applications with MongoDB, Express, React, and Node.js",
        },
        {
          type: "AI Projects",
          description:
            "Artificial Intelligence integrated web applications with ML features",
        },
      ],
      links: [
        { icon: <FaExternalLinkAlt />, url: "#", label: "Company Website" },
        { icon: <FaGithub />, url: "#", label: "Project Repository" },
      ],
    },
    2: {
      id: 2,
      type: "leadership",
      title: "Technical Lead & Developer (Team Project)",
      company: "Tech CivilWar - College Event",
      period: "2023",
      location: "SDVS'S BCA College, Sankeshwar",
      icon: <FaUserTie />,
      description:
        "Collaborated as part of the Logic Legends team to design and develop comprehensive digital platforms for college-level coding and quiz competitions for BCA 1st and 2nd year students.",

      team: "Logic Legends",

      appreciation:
        "🤝 This success belongs to Logic Legends — a team powered by creativity, dedication, and passion. 💪 Thank you to our BCA faculty for trusting us and giving us full responsibility for the event. Your support made this achievement possible.",

      image: "/images/tech-civilwar.jpg",

      responsibilities: [
        "Worked as a team under Logic Legends to lead technical development and web design",
        "Developed event registration and information portal websites",
        "Built dedicated platforms for coding competitions and technical events",
        "Managed complete digital infrastructure enabling a fully paperless event",
        "Coordinated with quiz teams for pre-developed software integration",
      ],

      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Git",
        "React.js",
        "Node.js",
        "MongoDB",
      ],

      achievements: [
        "Successfully contributed to the first fully digital college event in department history",
        "Played a key role in planning and developing the entire coding event platform at the college level",
        "Handled technical development, event website, and digital registration system",
        "60+ participants across multiple coding and quiz competitions",
        "Achieved zero paper usage throughout the event, promoting an eco-friendly approach",
        "Enabled real-time result processing and live score display for internal event management",
        "Collected participant feedback to improve future events and platform features",
      ],

      eventPlatforms: [
        {
          name: "Coding Competition Platform",
          description:
            "Custom-built platform for real-time coding challenges and submissions",
        },
        {
          name: "Event Registration Portal",
          description: "Online registration system with participant management",
        },
      ],

      links: [
        {
          icon: <FaGlobe />,
          url: "https://pavan-patil22.github.io/Bit-Battle/",
          label: "Event Website",
        },
        {
          icon: <FaGlobe />,
          url: "https://logic-legends2k25.github.io/Bit-Battle-R2/",
          label: "Event Website",
        },
      ],
    },
  };

  const experience = experiencesData[id];

  if (!experience) {
    return (
      <div className="not-found">
        <h2>Experience not found</h2>
        <button onClick={() => navigate("/experience")}>
          Back to Experience
        </button>
      </div>
    );
  }

  return (
    <div className="experience_details">
      {/* Back Button */}

      <div className="details_container">
        {/* Header Section */}
        <div className="details_header" data-aos="fade-down">
          <div className="header_icon" data-aos="zoom-in">
            {experience.icon}
          </div>
          <div className="header_content">
            <h1 className="details_title">{experience.title}</h1>
            <h2 className="details_company">{experience.company}</h2>
            <div className="details_meta">
              <span className="details_period">{experience.period}</span>
              <span className="details_location">{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="details_description" data-aos="fade-up">
          <p>{experience.description}</p>
        </div>

        {/* Mentors Section */}
        {experience.mentors && (
          <div className="details_section" data-aos="fade-up">
            <h3 className="section_title">
              <FaLightbulb className="section_icon" />
              Mentors & Guidance
            </h3>
            <div className="mentors_grid">
              {experience.mentors.map((mentor, idx) => (
                <div key={idx} className="mentor_card" data-aos="zoom-in">
                  <h4>{mentor.name}</h4>
                  <p className="mentor_role">{mentor.role}</p>
                  <p className="mentor_contribution">{mentor.contribution}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Responsibilities */}
        <div className="details_section" data-aos="fade-up">
          <h3 className="section_title">
            <FaCode className="section_icon" />
            Key Responsibilities
          </h3>
          <ul className="responsibilities_list">
            {experience.responsibilities.map((item, idx) => (
              <li key={idx} data-aos="fade-right" data-aos-delay={idx * 100}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="details_section" data-aos="fade-up">
          <h3 className="section_title">
            <FaCode className="section_icon" />
            Technologies Used
          </h3>
          <div className="technologies_grid">
            {experience.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="tech_badge"
                data-aos="zoom-in"
                data-aos-delay={idx * 50}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        {experience.achievements && (
          <div className="details_section" data-aos="fade-up">
            <h3 className="section_title">
              <FaTrophy className="section_icon" />
              Achievements
            </h3>
            <div className="achievements_list">
              {experience.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="achievement_item"
                  data-aos="fade-left"
                  data-aos-delay={idx * 100}
                >
                  <FaTrophy className="achievement_icon" />
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {experience.links && (
          <div className="details_section" data-aos="fade-up">
            <h3 className="section_title">Related Links</h3>
            <div className="links_grid">
              {experience.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className="link_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .experience_details {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          padding: 2rem;
          color: white;
        }

        .back_button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(102, 126, 234, 0.2);
          color: #667eea;
          border: 1px solid rgba(102, 126, 234, 0.3);
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          cursor: pointer;
          margin-bottom: 2rem;
          transition: all 0.3s ease;
        }

        .back_button:hover {
          background: rgba(102, 126, 234, 0.3);
          transform: translateX(-5px);
        }

        .details_container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .details_header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header_icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2rem;
          color: white;
        }

        .details_title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .details_company {
          font-size: 1.5rem;
          color: #667eea;
          margin-bottom: 1rem;
        }

        .details_meta {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .details_period {
          background: rgba(102, 126, 234, 0.2);
          color: #667eea;
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-weight: 500;
        }

        .details_location {
          color: #94a3b8;
        }

        .details_description {
          text-align: center;
          font-size: 1.1rem;
          line-height: 1.7;
          color: #e2e8f0;
          margin-bottom: 3rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .details_section {
          margin-bottom: 3rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .section_title {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.4rem;
          color: #667eea;
          margin-bottom: 1.5rem;
        }

        .section_icon {
          font-size: 1.2rem;
        }

        .mentors_grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .mentor_card {
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mentor_card h4 {
          color: white;
          margin-bottom: 0.5rem;
        }

        .mentor_role {
          color: #667eea;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .mentor_contribution {
          color: #94a3b8;
          line-height: 1.5;
        }

        .responsibilities_list {
          list-style: none;
          padding: 0;
        }

        .responsibilities_list li {
          padding: 0.8rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
          position: relative;
          padding-left: 1.5rem;
        }

        .responsibilities_list li:before {
          content: "▹";
          position: absolute;
          left: 0;
          color: #667eea;
        }

        .technologies_grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .tech_badge {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 0.6rem 1.2rem;
          border-radius: 20px;
          border: 1px solid rgba(102, 126, 234, 0.3);
          font-weight: 500;
        }

        .achievements_list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .achievement_item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          border-left: 4px solid #ffd700;
        }

        .achievement_icon {
          color: #ffd700;
          flex-shrink: 0;
        }

        .links_grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .link_button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          text-decoration: none;
          border: 1px solid rgba(102, 126, 234, 0.3);
          transition: all 0.3s ease;
        }

        .link_button:hover {
          background: rgba(102, 126, 234, 0.2);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .experience_details {
            padding: 1rem;
          }

          .details_title {
            font-size: 2rem;
          }

          .details_meta {
            flex-direction: column;
            gap: 1rem;
          }

          .details_section {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ExperienceDetails;
