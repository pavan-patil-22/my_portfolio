import React, { useEffect } from "react";
import {
  FaCode,
  FaGamepad,
  FaMusic,
  FaCamera,
  FaBook,
  FaGraduationCap,
  FaFilm,
  FaRocket,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPython,
  SiGit,
  SiCss3,
  SiHtml5,
  SiC,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  const technicalSkills = [
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Express.js", icon: <SiExpress />, color: "#000000" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { name: "C Programming", icon: <SiC />, color: "#3178C6" },
    { name: "Java", icon: <DiJava />, color: "#007396" },
    { name: "Flask", icon: <SiPython />, color: "#339933" },
  ];

  const hobbies = [
    {
      icon: <FaCode />,
      name: "Coding",
      description: "Building projects & solving problems",
    },
    {
      icon: <FaGamepad />,
      name: "Gaming",
      description: "Strategy & adventure games",
    },
    {
      icon: <FaMusic />,
      name: "Music",
      description: "Listening to various genres",
    },
    {
      icon: <FaCamera />,
      name: "Photography",
      description: "Capturing moments & nature",
    },
    {
      icon: <FaBook />,
      name: "Reading",
      description: "Tech blogs & fiction novels",
    },
    {
      icon: <FaFilm />,
      name: "Movies",
      description: "Sci-fi & thriller genres",
    },
    {
      icon: <FaRocket />,
      name: "Tech Exploration",
      description: "Exploring new frameworks & modern web trends",
    },
    {
      icon: <FaLaptopCode />,
      name: "Web Development",
      description: "Creating interactive & modern web apps",
    },
    {
      icon: <FaGraduationCap />,
      name: "Learning",
      description: "New tech & frameworks",
    },
  ];

  const interests = [
    {
      name: "Web Development",
      emoji: "⛓️",
      description: "MERN and Flask Technology",
    },
    {
      name: "AI & ML",
      emoji: "🤖",
      description: "Artificial Intelligence trends",
    },
    { name: "UI/UX", emoji: "🎨", description: "User experience design" },
  ];

  return (
    <section id="skills" className="skills_section">
      <div className="skills_container">
        {/* Section Header */}
        <div className="skills_header" data-aos="fade-up">
          <h2 className="skills_title">Skills & Interests</h2>
          <div className="skills_title_underline"></div>
          <p className="skills_subtitle">
            Technologies I work with and things I love
          </p>
        </div>

        {/* Technical Skills Section */}
        <div
          className="skills_content_section"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="skills_section_title">Technical Skills</h3>
          <div className="skills_grid">
            {technicalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill_card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="skill_icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span className="skill_name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills_interests_container">
          {/* Hobbies Section */}
          <div
            className="hobbies_section"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <h3 className="skills_section_title">Hobbies & Passions</h3>
            <div className="hobbies_grid">
              {hobbies.map((hobby, index) => (
                <div
                  key={hobby.name}
                  className="hobby_card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <div className="hobby_icon">{hobby.icon}</div>
                  <div className="hobby_content">
                    <h4 className="hobby_name">{hobby.name}</h4>
                    <p className="hobby_description">{hobby.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests Section */}
          <div
            className="interests_section"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <h3 className="skills_section_title">Areas of Interest</h3>
            <div className="interests_grid">
              {interests.map((interest, index) => (
                <div
                  key={interest.name}
                  className="interest_card"
                  data-aos="flip-up"
                  data-aos-delay={index * 100}
                >
                  <div className="interest_emoji">{interest.emoji}</div>
                  <div className="interest_content">
                    <h4 className="interest_name">{interest.name}</h4>
                    <p className="interest_description">
                      {interest.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        /* Skills Section */
        .skills_section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          position: relative;
          overflow: hidden;
        }

        .skills_container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header */
        .skills_header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .skills_title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .skills_title_underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin: 0 auto 1rem;
          border-radius: 2px;
          animation: skills_underline_pulse 3s ease-in-out infinite;
        }

        @keyframes skills_underline_pulse {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(1.2); }
        }

        .skills_subtitle {
          font-size: 1.2rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Section Titles */
        .skills_section_title {
          font-size: 2rem;
          font-weight: 600;
          color: #667eea;
          margin-bottom: 2rem;
          text-align: center;
          position: relative;
        }

        .skills_section_title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }

        /* Technical Skills Grid */
        .skills_grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 1.5rem;
          justify-content: center;
        }

        .skill_card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 140px;
          position: relative;
          overflow: hidden;
        }

        .skill_card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          transition: left 0.6s ease;
        }

        /* Desktop-only hover effects */
        @media (hover: hover) and (pointer: fine) {
          .skill_card:hover {
            transform: translateY(-8px);
            border-color: #667eea;
            box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
            background: rgba(255, 255, 255, 0.08);
          }

          .skill_card:hover::before {
            left: 100%;
          }
        }

        .skill_icon {
          font-size: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .skill_card:hover .skill_icon {
          transform: scale(1.2);
        }

        .skill_name {
          color: white;
          font-weight: 600;
          font-size: 1rem;
        }

        /* Hobbies & Interests Container */
        .skills_interests_container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-top: 4rem;
        }

        /* Hobbies Section */
        .hobbies_grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
        }

        .hobby_card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        /* Desktop-only hover effects */
        @media (hover: hover) and (pointer: fine) {
          .hobby_card:hover {
            transform: translateY(-5px) scale(1.02);
            border-color: #667eea;
            background: rgba(102, 126, 234, 0.1);
            box-shadow: 0 15px 30px rgba(102, 126, 234, 0.2);
          }

          .hobby_card:hover .hobby_icon {
            transform: scale(1.2) rotate(5deg);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
        }

        .hobby_icon {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: #667eea;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .hobby_content {
          flex: 1;
        }

        .hobby_name {
          color: white;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .hobby_description {
          color: #94a3b8;
          font-size: 0.85rem;
          margin: 0;
          line-height: 1.4;
        }

        /* Interests Section */
        .interests_grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .interest_card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        /* Desktop-only hover effects */
        @media (hover: hover) and (pointer: fine) {
          .interest_card:hover {
            transform: translateY(-5px) scale(1.05);
            border-color: #764ba2;
            background: rgba(118, 75, 162, 0.1);
            box-shadow: 0 15px 30px rgba(118, 75, 162, 0.2);
          }

          .interest_card:hover .interest_emoji {
            transform: scale(1.3) rotate(10deg);
            filter: brightness(1.2);
          }
        }

        .interest_emoji {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
          display: block;
        }

        .interest_name {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .interest_description {
          color: #94a3b8;
          font-size: 0.9rem;
          margin: 0;
          line-height: 1.4;
        }

        /* Responsive Design */
        @media screen and (max-width: 1024px) {
          .skills_interests_container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .hobbies_grid {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          }
        }

        /* Mobile Styles - 3 cards per row */
        @media screen and (max-width: 768px) {
          .skills_container {
            padding: 0 1.5rem;
          }
          
          .skills_title {
            font-size: 2.2rem;
          }
          
          .skills_section_title {
            font-size: 1.7rem;
          }
          
          /* Technical Skills - 3 cards per row on mobile */
          .skills_grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
          
          .skill_card {
            padding: 1.2rem;
            min-height: 120px;
          }
          
          .skill_icon {
            font-size: 2rem;
            margin-bottom: 0.8rem;
          }
          
          .skill_name {
            font-size: 0.9rem;
            font-weight: 500;
          }
          
          /* Hobbies - 3 cards per row on mobile */
          .hobbies_grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.8rem;
          }
          
          .hobby_card {
            padding: 1rem;
            flex-direction: column;
            text-align: center;
            gap: 0.8rem;
            min-height: 140px;
          }
          
          .hobby_icon {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
          }
          
          .hobby_name {
            font-size: 0.9rem;
            margin-bottom: 0.2rem;
          }
          
          .hobby_description {
            font-size: 0.75rem;
            line-height: 1.3;
          }
          
          .interest_card {
            padding: 1.2rem;
          }
          
          .interest_emoji {
            font-size: 2rem;
          }
          
          .interest_name {
            font-size: 1rem;
          }
          
          .interest_description {
            font-size: 0.8rem;
          }
        }

        /* Medium Mobile Screens */
        @media screen and (max-width: 640px) {
          .skills_section {
            padding: 3.5rem 0;
          }
          
          .skills_title {
            font-size: 2rem;
          }
          
          .skills_subtitle {
            font-size: 1rem;
            padding: 0 1rem;
          }
          
          .skills_section_title {
            font-size: 1.5rem;
          }
          
          /* Technical Skills - 3 cards with proper spacing */
          .skills_grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.8rem;
            margin: 0 auto;
            max-width: 500px;
          }
          
          .skill_card {
            padding: 1rem 0.5rem;
            min-height: 110px;
            margin: 0;
          }
          
          .skill_icon {
            font-size: 1.8rem;
            margin-bottom: 0.6rem;
          }
          
          .skill_name {
            font-size: 0.85rem;
          }
          
          /* Hobbies - 2 cards per row on smaller screens */
          .hobbies_grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
          }
          
          .hobby_card {
            padding: 1rem;
            min-height: 130px;
          }
          
          .hobby_icon {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }
          
          .hobby_name {
            font-size: 0.85rem;
          }
          
          .hobby_description {
            font-size: 0.7rem;
          }
        }

        /* Small Mobile Screens */
        @media screen and (max-width: 480px) {
          .skills_container {
            padding: 0 1rem;
          }
          
          .skills_title {
            font-size: 1.8rem;
          }
          
          .skills_header {
            margin-bottom: 3rem;
          }
          
          /* Technical Skills - 3 cards with tighter spacing */
          .skills_grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.6rem;
          }
          
          .skill_card {
            padding: 0.8rem 0.4rem;
            min-height: 100px;
            border-radius: 10px;
          }
          
          .skill_icon {
            font-size: 1.6rem;
            margin-bottom: 0.5rem;
          }
          
          .skill_name {
            font-size: 0.8rem;
          }
          
          /* Hobbies - 2 cards per row */
          .hobbies_grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.6rem;
          }
          
          .hobby_card {
            padding: 0.8rem;
            min-height: 120px;
            border-radius: 10px;
          }
          
          .hobby_icon {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }
          
          .hobby_name {
            font-size: 0.8rem;
          }
          
          .hobby_description {
            font-size: 0.7rem;
          }
          
          .interest_card {
            padding: 1rem;
          }
          
          .interest_emoji {
            font-size: 1.8rem;
          }
          
          .interest_name {
            font-size: 0.9rem;
          }
          
          .interest_description {
            font-size: 0.75rem;
          }
        }

        /* Extra small devices */
        @media screen and (max-width: 360px) {
          .skills_grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
          }
          
          .skill_card {
            padding: 0.7rem 0.3rem;
            min-height: 90px;
          }
          
          .skill_icon {
            font-size: 1.4rem;
          }
          
          .skill_name {
            font-size: 0.75rem;
          }
          
          .hobbies_grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
          }
          
          .hobby_card {
            padding: 0.7rem;
            min-height: 110px;
          }
          
          .hobby_icon {
            width: 32px;
            height: 32px;
            font-size: 0.9rem;
          }
          
          .hobby_name {
            font-size: 0.75rem;
          }
          
          .hobby_description {
            font-size: 0.65rem;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Skills;