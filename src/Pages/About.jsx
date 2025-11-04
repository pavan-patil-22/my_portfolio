import React, { useEffect } from 'react';
import { FaGraduationCap, FaCode, FaGamepad, FaMusic, FaCamera, FaBook } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    });
  }, []);

  const interests = [
    { icon: <FaCode />, name: 'Coding', description: 'Building innovative web solutions' },
    { icon: <FaGamepad />, name: 'Gaming', description: 'Exploring virtual worlds' },
    { icon: <FaMusic />, name: 'Music', description: 'Listening & creating melodies' },
    { icon: <FaCamera />, name: 'Photography', description: 'Capturing life moments' },
    { icon: <FaBook />, name: 'Reading', description: 'Tech blogs & novels' },
    { icon: <FaGraduationCap />, name: 'Learning', description: 'New technologies' }
  ];

  return (
    <section id="about" className="about_section">
      <div className="about_container">
        {/* Section Header */}
        <div className="about_header" data-aos="fade-up">
          <h2 className="about_title">About Me</h2>
          <div className="about_title_underline"></div>
          <p className="about_subtitle">Get to know the person behind the code</p>
        </div>

        {/* Main Content - Image and Text Side by Side */}
        <div className="about_main_content">
          {/* Image Section */}
          <div className="about_image_section" data-aos="fade-right" data-aos-delay="200">
            <div className="about_image_container">
              <img 
                src={`${process.env.PUBLIC_URL}/pavan_profile.jpg`}
                alt="Pavan Patil - MERN Stack Developer" 
                className="about_profile_image"
              />
              <div className="about_image_border"></div>
              
              {/* Floating Badges */}
              <div className="about_floating_badge about_badge_1" data-aos="zoom-in" data-aos-delay="600">
                <FaCode />
                <span>2+ Years</span>
              </div>
              <div className="about_floating_badge about_badge_2" data-aos="zoom-in" data-aos-delay="800">
                <FaGraduationCap />
                <span>MCA Student</span>
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="about_text_section" data-aos="fade-left" data-aos-delay="400">
            <div className="about_text_group">
              <h3 className="about_text_title">My Journey</h3>
              <p className="about_text_paragraph">
               I’m a passionate MERN Stack Developer and MCA student with over 4 months of hands-on experience in building dynamic, responsive, and user-focused web applications. My journey in web development began during my college days, where I discovered my love for turning ideas into functional, visually appealing digital products using technologies like MongoDB, Express.js, React, and Node.js.
              </p>
              <p className="about_text_paragraph">
               Over time, I’ve worked on multiple web and live projects, gaining practical experience in both frontend and backend development. I focus on writing clean, efficient code and continuously improving my skills to deliver smooth, impactful, and scalable web solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section - Side by Side Cards */}
        <div className="about_education_section">
          <h3 className="about_education_title" data-aos="fade-up">Education</h3>
          <div className="about_education_grid">
            {/* MCA Card */}
            <div className="about_education_card" data-aos="fade-right" data-aos-delay="200">
              <div className="about_education_header">
                <div className="about_education_icon">
                  <FaGraduationCap />
                </div>
                <div className="about_education_title_content">
                  <h4>Master of Computer Applications (MCA)</h4>
                  <p className="about_college_name"> Presidency University,Bengaluru</p>
                  <p className="about_college_name"> Presidency College,Bengaluru</p>
                </div>
              </div>
              <div className="about_education_details">
                <p className="about_education_year">2025 - 2027 | Currently Studying</p>
                <p className="about_education_desc">
                  Currently pursuing my Master's degree with focus on advanced computer 
                  science concepts, software engineering, and modern web technologies. 
                  Enhancing my skills in full-stack development and system design.
                </p>
                <div className="about_education_progress">
                  <div className="about_progress_bar">
                    <div className="about_progress_fill" style={{width: '10%'}}></div>
                  </div>
                  <span className="about_progress_text">10% Completed</span>
                </div>
              </div>
            </div>

            {/* BCA Card */}
            <div className="about_education_card" data-aos="fade-left" data-aos-delay="400">
              <div className="about_education_header">
                <div className="about_education_icon">
                  <FaGraduationCap />
                </div>
                <div className="about_education_title_content">
                  <h4>Bachelor of Computer Applications (BCA)</h4>
                  <p className="about_college_name">Rani Channamma University, Belagavi</p>
                   <p className="about_college_name">SDVS'S BCA College Sankeshwar</p>
                </div>
              </div>
              <div className="about_education_details">
                <p className="about_education_year">2022 - 2025 | Completed</p>
                
                <p className="about_education_desc">
                  Graduated with distinction, focusing on software development, 
                  database management, and web technologies. Completed various 
                  projects including web applications and database systems.
                </p>
                <div className="about_education_achievement">
                  <span className="about_achievement_badge">Distinction</span>
                  <span className="about_achievement_badge">Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        {/* <div className="about_interests_section">
          <h3 className="about_interests_title" data-aos="fade-up">Interests & Hobbies</h3>
          <div className="about_interests_grid">
            {interests.map((interest, index) => (
              <div 
                key={index} 
                className="about_interest_card" 
                data-aos="zoom-in" 
                data-aos-delay={index * 100}
              >
                <div className="about_interest_icon">
                  {interest.icon}
                </div>
                <h4 className="about_interest_name">{interest.name}</h4>
                <p className="about_interest_desc">{interest.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <style>
        {`
        /* About Section */
.about_section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
}

.about_container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header */
.about_header {
  text-align: center;
  margin-bottom: 4rem;
}

.about_title {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.about_title_underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 0 auto 1rem;
  border-radius: 2px;
  animation: about_underline_pulse 3s ease-in-out infinite;
}

@keyframes about_underline_pulse {
  0%, 100% { transform: scaleX(1); }
  50% { transform: scaleX(1.2); }
}

.about_subtitle {
  font-size: 1.2rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
}

/* Main Content Layout */
.about_main_content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 5rem;
}

/* Image Section */
.about_image_section {
  position: relative;
}

.about_image_container {
  position: relative;
  border-radius: 20px;
  overflow: visible;
}

.about_profile_image {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 20px;
  position: relative;
  z-index: 2;
  filter: grayscale(0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.about_image_border {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 3px solid transparent;
  border-radius: 25px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: 1;
}

/* Floating Badges */
.about_floating_badge {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  padding: 0.8rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  z-index: 4;
  animation: about_badge_float 4s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.about_badge_1 {
  top: 30px;
  right: -20px;
  animation-delay: 0s;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.about_badge_2 {
  bottom: 40px;
  left: -20px;
  animation-delay: 2s;
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

@keyframes about_badge_float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-8px) rotate(1deg); }
  66% { transform: translateY(-4px) rotate(-1deg); }
}

/* Text Section */
.about_text_section {
  color: #e2e8f0;
}

.about_text_group {
  margin-bottom: 2rem;
}

.about_text_title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1rem;
}

.about_text_title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

.about_text_paragraph {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #94a3b8;
  margin-bottom: 1.5rem;
}

/* Education Section */
.about_education_section {
  margin-bottom: 5rem;
}

.about_education_title {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: #667eea;
  margin-bottom: 3rem;
  position: relative;
}

.about_education_title::after {
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

.about_education_grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.about_education_card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.about_education_card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
  transition: left 0.6s ease;
}

@media (hover: hover) and (pointer: fine) {
  .about_education_card:hover {
    transform: translateY(-8px);
    border-color: #667eea;
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.25);
    background: rgba(255, 255, 255, 0.08);
  }

  .about_education_card:hover::before {
    left: 100%;
  }

  .about_education_card:hover .about_education_icon {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }
}

.about_education_header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.about_education_icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.about_education_title_content h4 {
  color: white;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.about_college_name {
  color: #667eea;
  font-weight: 500;
  font-size: 1rem;
}

.about_education_year {
  color: #94a3b8;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.about_education_desc {
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Progress Bar */
.about_education_progress {
  margin-top: 1.5rem;
}

.about_progress_bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.about_progress_fill {
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  transition: width 1s ease-in-out;
}

.about_progress_text {
  color: #667eea;
  font-size: 0.9rem;
  font-weight: 600;
}

/* Achievement Badges */
.about_education_achievement {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.about_achievement_badge {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Interests Section */
.about_interests_section {
  margin-top: 3rem;
}

.about_interests_title {
  font-size: 2rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
}

.about_interests_title::after {
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

.about_interests_grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.about_interest_card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem 1rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.about_interest_card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

@media (hover: hover) and (pointer: fine) {
  .about_interest_card:hover {
    transform: translateY(-10px) scale(1.05);
    background: rgba(102, 126, 234, 0.15);
    border-color: #667eea;
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.25);
  }

  .about_interest_card:hover::before {
    transform: scaleX(1);
  }
  
  .about_interest_card:hover .about_interest_icon {
    transform: scale(1.2) rotate(8deg);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }
}

.about_interest_icon {
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.8rem;
  color: #667eea;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.about_interest_name {
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.about_interest_desc {
  color: #94a3b8;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}

/* Responsive Design */
@media screen and (max-width: 1024px) {
  .about_main_content {
    gap: 3rem;
  }
  
  .about_profile_image {
    height: 400px;
  }
}

@media screen and (max-width: 968px) {
  .about_main_content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .about_image_section {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .about_profile_image {
    height: 400px;
  }
  
  .about_education_grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about_interests_grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .about_container {
    padding: 0 1.5rem;
  }
  
  .about_title {
    font-size: 2.5rem;
  }
  
  .about_profile_image {
    height: 350px;
  }
  
  .about_floating_badge {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
  
  .about_badge_1 {
    right: -10px;
  }
  
  .about_badge_2 {
    left: -10px;
  }
  
  .about_education_card {
    padding: 1.5rem;
  }
  
  .about_education_header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .about_education_icon {
    margin: 0 auto;
  }
  
  .about_interests_grid {
    gap: 1rem;
  }
  
  .about_interest_card {
    padding: 1.5rem 1rem;
  }
}

@media screen and (max-width: 640px) {
  .about_section {
    padding: 3rem 0;
  }
  
  .about_title {
    font-size: 2.2rem;
  }
  
  .about_subtitle {
    font-size: 1rem;
  }
  
  .about_profile_image {
    height: 300px;
  }
  
  .about_interests_grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .about_floating_badge {
    position: relative;
    display: inline-flex;
    margin: 0.5rem;
    animation: none;
  }
  
  .about_badge_1,
  .about_badge_2 {
    position: relative;
    top: auto;
    bottom: auto;
    left: auto;
    right: auto;
    margin: 1rem auto;
    display: inline-block;
  }
  
  .about_image_container {
    text-align: center;
  }
  
  .about_text_paragraph {
    font-size: 1rem;
  }
  
  .about_interest_card {
    padding: 1.5rem 1rem;
  }
  
  .about_interest_icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 480px) {
  .about_container {
    padding: 0 1rem;
  }
  
  .about_title {
    font-size: 2rem;
  }
  
  .about_education_title,
  .about_interests_title {
    font-size: 1.7rem;
  }
  
  .about_profile_image {
    height: 280px;
  }
  
  .about_education_card {
    padding: 1.2rem;
  }
  
  .about_text_title {
    font-size: 1.3rem;
  }
  
  .about_education_title_content h4 {
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 360px) {
  .about_container {
    padding: 0 0.8rem;
  }
  
  .about_title {
    font-size: 1.8rem;
  }
  
  .about_profile_image {
    height: 250px;
  }
  
  .about_education_card {
    padding: 1rem;
  }
  
  .about_interests_grid {
    gap: 0.8rem;
  }
  
  .about_interest_card {
    padding: 1.2rem 0.8rem;
  }
}
        `}
      </style>
    </section>
  );
};

export default About;