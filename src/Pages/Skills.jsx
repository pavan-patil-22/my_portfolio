import React, { useEffect } from "react";
import {
  FaCode,
  FaGamepad,
  FaMusic,
  FaCamera,
  FaBook,
  FaGraduationCap,
  FaCoffee,
  FaFilm,
  FaUtensils,
  FaRunning,
  FaPalette,
  FaHeadphones,
  FaLaptopCode,
  FaRocket,
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
  SiTypescript,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { SiC,  SiFlask } from "react-icons/si";

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
    { name: "JavaScript", level: 90, icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "React", level: 85, icon: <SiReact />, color: "#61DAFB" },
    { name: "Node.js", level: 80, icon: <SiNodedotjs />, color: "#339933" },
    { name: "MongoDB", level: 75, icon: <SiMongodb />, color: "#47A248" },
    { name: "Express.js", level: 78, icon: <SiExpress />, color: "#000000" },
    { name: "Python", level: 65, icon: <SiPython />, color: "#3776AB" },
    { name: "Git", level: 82, icon: <SiGit />, color: "#F05032" },
    { name: "HTML5", level: 95, icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", level: 88, icon: <SiCss3 />, color: "#1572B6" },
    { name: "C Programming", level: 90, icon: <SiC />, color: "#3178C6" },
  { name: "Java", level: 50, icon: <DiJava />, color: "#007396" },
  { name: "Flask", level: 70, icon: <SiPython />, color: "#339933" },
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
                <div className="skill_header">
                  <div className="skill_icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="skill_name">{skill.name}</span>
                  <span className="skill_percentage">{skill.level}%</span>
                </div>
                <div className="skill_progress_container">
                  <div
                    className="skill_progress_bar"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(135deg, ${skill.color}, ${skill.color}99)`,
                    }}
                  >
                    <div className="skill_progress_glow"></div>
                  </div>
                </div>
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
                    className={`hobby_card ${index >= 4 ? "mobile-hidden" : ""}`}
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
              {/* Mobile View All button - visible only on small screens */}
              <div className="mobile_view_all_wrap">
                <button
                  className="mobile_view_all_btn"
                  onClick={() => {
                    const root = document.documentElement;
                    const expanded = root.getAttribute("data-hobbies-expanded") === "true";
                    root.setAttribute("data-hobbies-expanded", (!expanded).toString());
                  }}
                  aria-expanded={false}
                >
                  
                </button>
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

        {/* Single Fun Fact
        <div
          className="fun_facts_section"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h3 className="skills_section_title">Fun Fact</h3>
          <div className="fun_facts_container">
            <div
              className="fun_fact_card"
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              <div className="fact_icon">🚀</div>
              <h4>Projects Built</h4>
              <p>50+ personal projects completed</p>
            </div>
          </div>
        </div> */}
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

/* Technical Skills */
.skills_content_section {
  margin-bottom: 4rem;
}

.skills_grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.skill_card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
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

  .skill_card:hover .skill_progress_bar {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.4);
  }
}

.skill_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.skill_icon {
  font-size: 2rem;
  display: flex;
  align-items: center;
}

.skill_name {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  flex: 1;
  margin-left: 1rem;
}

.skill_percentage {
  color: #667eea;
  font-weight: 700;
  font-size: 1rem;
}

.skill_progress_container {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.skill_progress_bar {
  height: 100%;
  border-radius: 4px;
  position: relative;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: skill_progress_animate 1.5s ease-out;
}

@keyframes skill_progress_animate {
  0% { width: 0% !important; }
}

.skill_progress_glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: skill_progress_shine 2s ease-in-out infinite;
}

@keyframes skill_progress_shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Hobbies & Interests Container */
.skills_interests_container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

/* Hobbies Section */
.hobbies_grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

/* Single Fun Fact Section */
.fun_facts_section {
  margin-top: 3rem;
}

.fun_facts_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fun_fact_card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  max-width: 300px;
  width: 100%;
}

.fun_fact_card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

/* Desktop-only hover effects */
@media (hover: hover) and (pointer: fine) {
  .fun_fact_card:hover {
    transform: translateY(-8px) scale(1.05);
    border-color: #667eea;
    box-shadow: 0 25px 50px rgba(102, 126, 234, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }

  .fun_fact_card:hover::before {
    transform: scaleX(1);
  }

  .fun_fact_card:hover .fact_icon {
    transform: scale(1.3) rotate(10deg);
  }
}

.fact_icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  display: block;
}

.fun_fact_card h4 {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.fun_fact_card p {
  color: #94a3b8;
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.5;
}

/* Responsive Design */
@media screen and (max-width: 1024px) {
  .skills_interests_container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .hobbies_grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}

/* Mobile Styles - 3 cards per row */
@media screen and (max-width: 768px) {
  .skills_container {
    padding: 0 1rem;
  }
  
  .skills_title {
    font-size: 2.5rem;
  }
  
  .skills_section_title {
    font-size: 1.8rem;
  }
  
  /* Technical Skills - 3 cards per row on mobile */
  .skills_grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  
  .skill_card {
    padding: 1rem;
  }
  
  .skill_header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
  }
  
  .skill_icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .skill_name {
    font-size: 0.9rem;
    margin-left: 0;
    margin-bottom: 0.3rem;
  }
  
  .skill_percentage {
    font-size: 0.8rem;
    align-self: flex-end;
  }
  
  .skill_progress_container {
    height: 6px;
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
  }
  
  .hobby_icon {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
  
  .hobby_name {
    font-size: 0.9rem;
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
  
  /* Single Fun Fact */
  .fun_fact_card {
    padding: 2rem 1.5rem;
    max-width: 280px;
  }
  
  .fact_icon {
    font-size: 3.5rem;
  }
  
  .fun_fact_card h4 {
    font-size: 1.3rem;
  }
  
  .fun_fact_card p {
    font-size: 1rem;
  }
}

/* Mobile hiding for hobbies beyond first 4 */
@media screen and (max-width: 480px) {
  /* Hide hobby cards with class mobile-hidden by default */
  .hobby_card.mobile-hidden {
    display: none;
  }

  /* When root attribute data-hobbies-expanded=true, show all */
  :root[data-hobbies-expanded="true"] .hobby_card.mobile-hidden {
    display: flex;
  }

  .mobile_view_all_wrap {
    display: flex;
    justify-content: center;
    margin-top: 0.75rem;
  }

  .mobile_view_all_btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 0.6rem 1rem;
    border-radius: 999px;
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.2);
    cursor: pointer;
    font-weight: 600;
    transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
  }

  .mobile_view_all_btn:active {
    transform: translateY(1px) scale(0.995);
  }

  /* Toggle button text when expanded */
  :root[data-hobbies-expanded="true"] .mobile_view_all_btn::after {
    content: '   Show Less';
    font-weight: 600;
    margin-left: 6px;
  }

  :root:not([data-hobbies-expanded="true"]) .mobile_view_all_btn::after {
    content: '   View All';
    font-weight: 600;
    margin-left: 6px;
  }
}

@media screen and (max-width: 480px) {
  .skills_section {
    padding: 3rem 0;
  }
  
  .skills_title {
    font-size: 2rem;
  }
  
  .skills_subtitle {
    font-size: 1rem;
  }
  
  .skills_section_title {
    font-size: 1.5rem;
  }
  
  /* Technical Skills - 2 cards per row on very small screens */
  .skills_grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
  
  .skill_card {
    padding: 0.8rem;
  }
  
  .skill_icon {
    font-size: 1.3rem;
  }
  
  .skill_name {
    font-size: 0.8rem;
  }
  
  .skill_percentage {
    font-size: 0.75rem;
  }
  
  /* Hobbies - 2 cards per row on very small screens */
  .hobbies_grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
  
  .hobby_card {
    padding: 0.8rem;
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
    font-size: 1rem;
  }
  
  .interest_description {
    font-size: 0.8rem;
  }
  
  /* Single Fun Fact */
  .fun_fact_card {
    padding: 1.5rem 1rem;
    max-width: 250px;
  }
  
  .fact_icon {
    font-size: 3rem;
  }
  
  .fun_fact_card h4 {
    font-size: 1.2rem;
  }
  
  .fun_fact_card p {
    font-size: 0.9rem;
  }
}

/* Extra small devices */
@media screen and (max-width: 360px) {
  .skills_container {
    padding: 0 0.8rem;
  }
  
  .skills_grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  
  .hobbies_grid {
    grid-template-columns: 1fr;
  }
  
  .skill_card {
    padding: 1rem;
  }
  
  .hobby_card {
    padding: 1rem;
  }
  
  .interest_card {
    padding: 1rem;
  }
  
  .fun_fact_card {
    padding: 1.5rem 1rem;
    max-width: 100%;
  }
}
        `}
      </style>
    </section>
  );
};

export default Skills;