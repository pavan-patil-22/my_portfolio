// src/pages/ProjectDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  FaGithub, FaArrowLeft, FaArrowRight, 
  FaCalendarAlt, FaCode, FaRocket,  FaCheckCircle,
  FaUsers, FaLightbulb, FaExpand, FaCompress, FaTimes
} from "react-icons/fa";
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss,
  SiJavascript, SiCss3, SiHtml5, SiVite, SiVercel,
  SiPython,
  SiTensorflow,
  SiFlask
} from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
 {
  id: 1,
  title: "Seek-AI",
  tagline: "AI-Powered Surveillance and Complaint Management System",
  description: "An AI-based missing person detection and complaint management system leveraging facial recognition and real-time CCTV analysis to enhance public safety and response time.",
  longDescription: [
    "Seek-AI is a web-based intelligent surveillance and complaint management system designed to assist in identifying and locating missing persons using AI-driven facial recognition and live CCTV feed analysis.",
    "The platform allows citizens to register missing person complaints by uploading photos and details, which are verified by authorized personnel. Once verified, the system integrates with surveillance cameras to automatically scan live feeds for potential matches using advanced detection algorithms.",
    "Powered by deep learning models like YOLO for object detection and DeepFace for facial recognition, Seek-AI ensures high accuracy and real-time monitoring. When a match is detected, instant alerts are sent to the complainant and concerned authorities with location details and captured footage. Built on the MERN stack, the system provides a secure, scalable, and efficient public safety solution."
  ],
  challenges: [
    "Building accurate and efficient facial recognition for real-time CCTV footage",
    "Handling large volumes of live video data with minimal latency",
    "Ensuring system security and data privacy for sensitive information"
  ],
  solutions: [
    "Integrated YOLO and DeepFace models for real-time object and face detection",
    "Implemented efficient backend data pipelines using Node.js and MongoDB",
    "Used secure authentication and encryption to protect user and complaint data"
  ],
  technologies: ["React", "Node.js", "Express", "MongoDB", "Python", "YOLO", "DeepFace", "TensorFlow"],
  techIcons: [<SiReact />, <SiNodedotjs />, <SiExpress />, <SiMongodb />, <SiPython />, <SiTensorflow />],
  features: [
    "AI-powered facial recognition and detection",
    "Complaint registration and tracking system",
    "Real-time CCTV feed analysis and monitoring",
    "Automated alerts with location and footage details",
    "Admin dashboard for verification and management",
    "Role-based access control for police and administrators",
    "Secure data storage and encryption",
    "Responsive and user-friendly web interface"
  ],
  images: [
    "/seek-ai1.png",
    "/seek-ai2.png",
    "/seek-ai3.png",
    "/seek-ai4.png",
    "/seek-ai5.png",
    "/seek-ai6.png",
    "/seek-ai7.png",
    "/seek-ai8.png",
    "/seek-ai9.png",
  ],
  github: "https://github.com/pavanpatil/seek-ai",
  demo: "https://seek-ai-demo.vercel.app/",
  status: "Completed",
  duration: "4 months",
  category: "Full Stack / AI Integration",
  teamSize: "2 developers",
  impact: "Enabled faster and automated missing person detection with real-time alerts for improved public safety"
},

  {
  id: 2,
  title: "StegoFileShare",
  tagline: "Steganography-Based Secure File Sharing System",
  description: "A React-based secure file sharing platform using steganography to hide files within images, featuring password protection, wrong-attempt tracking, and admin monitoring.",
  longDescription: [
    "StegoFileShare is a security-focused web application that enables users to share confidential files safely through steganography — the art of hiding data within images. This system ensures privacy and security by embedding secret files inside image containers before sharing.",
    "Users can upload a file, set a custom password, and generate a stego file that conceals the data. The receiver downloads the stego file and uses the extract tool to retrieve the hidden content using the correct password. After three consecutive wrong attempts, the user is automatically blocked to prevent unauthorized access.",
    "For every wrong attempt, the system captures an image using the user's device camera and records the timestamp for admin review. Admins can manage users, view failed login images, and track file download activity. The platform provides a robust balance between usability and security, built using the MERN stack and integrated Python-based steganography and OpenCV modules."
  ],
  challenges: [
    "Ensuring secure file transfer without direct exposure of sensitive data",
    "Implementing efficient steganography and password protection in web-based systems",
    "Tracking unauthorized access attempts in real-time"
  ],
  solutions: [
    "Integrated Python steganography algorithms for file hiding and extraction",
    "Implemented three-strike password protection with automatic user blocking",
    "Added camera-based intruder capture and real-time admin monitoring"
  ],
  technologies: ["React", "Node.js", "Express", "MongoDB",  "HTML"],
  techIcons: [<SiReact />, <SiNodedotjs />, <SiExpress />, <SiMongodb />, <SiHtml5/>,<SiHtml5/>],
  features: [
    "Steganography-based secure file embedding and extraction",
    "Custom password protection for each file",
    "Three-attempt lockout and auto-block mechanism",
    "Intruder detection via device camera capture",
    "Admin dashboard for monitoring and user management",
    "Detailed download and activity logs",
    "Role-based authentication system",
    "Responsive and modern UI for seamless user experience"
  ],
  images: [
    "/stegofile1.png",
    "/stegofile2.png",
    "/stegofile3.png",
    "/stegofile4.png",
    "/stegofile5.png",
    "/stegofile6.png",
    "/stegofile7.png",
    "/stegofile8.png",
    "/stegofile9.png",
  ],
  github: "https://github.com/pavanpatil/stegofileshare",
  demo: "https://stegofileshare-demo.vercel.app/",
  status: "Completed",
  duration: "3 months",
  category: "Full Stack / Security & Steganography",
  teamSize: "2 developers",
  impact: "Enhanced digital file sharing privacy and introduced AI-assisted intrusion tracking for secure communication"
},
{
  id: 3,
  title: "HeartScan AI",
  tagline: "AI-Powered Heart Attack Risk Prediction from Retinal Scans",
  description:
    "HeartScan AI is a deep learning-based healthcare platform that predicts cardiovascular risks, such as heart attack probability, using retinal scan images — enabling early detection and preventive care through AI insights.",
  longDescription: [
    "HeartScan AI is an innovative healthcare application that leverages advanced deep learning algorithms to analyze retinal images and assess cardiovascular health risks. The system detects early signs of potential heart-related conditions by identifying subtle retinal biomarkers that correlate with heart health.",
    "Built for medical professionals and diagnostic centers, HeartScan AI enables faster, non-invasive health assessments. It processes retinal images through trained neural networks to predict risk levels and provide detailed, AI-assisted diagnostic reports.",
    "The platform also offers a modern, user-friendly interface where users can upload retinal scans, view prediction results, and receive AI-generated recommendations for preventive action. The project demonstrates the integration of healthcare and artificial intelligence for early risk prediction and improved patient outcomes."
  ],
  challenges: [
    "Developing a high-accuracy AI model for retinal image analysis",
    "Ensuring reliable prediction results for medical use",
    "Designing an intuitive, accessible UI for both medical and non-technical users"
  ],
  solutions: [
    "Trained CNN-based AI models for retinal image classification and heart risk prediction",
    "Integrated explainable AI (XAI) components to visualize prediction insights",
    "Built a modern, responsive UI with clear data visualization and accessibility in mind"
  ],
  technologies: ["React", "TensorFlow", "Flask", "Python", "Node.js", "MongoDB", "CSS"],
  techIcons: [
    <SiReact />,
    <SiTensorflow />,
    <SiFlask />,
    <SiPython />,
    <SiNodedotjs />,
    <SiMongodb />,
    <SiCss3 />,
  ],
  features: [
    "AI-based heart attack risk prediction using retinal scans",
    "Deep learning model with high-accuracy classification",
    "Interactive report generation and visual insights",
    "Secure scan upload and analysis system",
    "Explainable AI visualization (Grad-CAM heatmaps)",
    "User-friendly dashboard for patients and doctors",
    "Scalable architecture for future healthcare integrations",
    "Responsive, minimal, and elegant UI"
  ],
  images: [
    "/heartscan1.png",
    "/heartscan2.png",
    "/heartscan3.png",
    "/heartscan4.png",
    "/heartscan5.png",
    "/heartscan6.png",
    "/heartscan7.png",
    "/heartscan8.png",
    "/heartscan9.png",
    "/heartscan5.png",
  ],
  github: "https://github.com/pavanpatil/heartscan-ai",
  demo: "https://heartscan-ai.vercel.app/",
  status: "In Progress",
  duration: "3 months",
  category: "AI / Deep Learning / Healthcare",
  teamSize: "2 developers",
  impact:
    "Bringing early heart attack risk prediction to the forefront of digital healthcare, enabling proactive medical intervention through AI-driven retinal image analysis."
}


];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
  }, []);

  // Auto-slide carousel with smooth transitions
  useEffect(() => {
    if (!project || !isAutoPlaying || isFullscreen) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    
    return () => clearInterval(interval);
  }, [project, isAutoPlaying, currentImageIndex, isFullscreen]);

  const nextImage = () => {
    setCurrentImageIndex(current => 
      current === project.images.length - 1 ? 0 : current + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(current => 
      current === 0 ? project.images.length - 1 : current - 1
    );
  };

  const openFullscreen = (index) => {
    setCurrentImageIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  // Handle keyboard navigation in fullscreen
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isFullscreen) return;
      
      switch(e.key) {
        case 'Escape':
          closeFullscreen();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, currentImageIndex]);

  if (!project) {
    return (
      <div className="project-not-found" data-aos="fade-in">
        <h2>Project not found 😢</h2>
        <Link to="/projects" className="back-home-btn">
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      {/* Back Navigation */}
      
      {/* Hero Section */}
      <section className="project-hero" data-aos="fade-up">
        <div className="hero-content">
         

          <h1 className="project-title">{project.title}</h1>
          <p className="project-tagline">{project.tagline}</p>
          <p className="project-description">{project.description}</p>

          
          
        </div>
      </section>

      {/* Image Carousel */}
      <section className="carousel-section" data-aos="fade-up" data-aos-delay="200">
        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {project.images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img 
                  src={image} 
                  alt={`${project.title} screenshot ${index + 1}`}
                  onClick={() => openFullscreen(index)}
                  className="carousel-image"
                />
                <button 
                  className="expand-btn"
                  onClick={() => openFullscreen(index)}
                  aria-label="Expand image to fullscreen"
                >
                  <FaExpand />
                </button>
              </div>
            ))}
          </div>
          
          <button className="carousel-btn prev" onClick={prevImage}>
            <FaArrowLeft />
          </button>
          <button className="carousel-btn next" onClick={nextImage}>
            <FaArrowRight />
          </button>
          
          <div className="carousel-indicators">
            {project.images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
          
          <div className="carousel-controls">
            <button 
              className={`play-pause-btn ${isAutoPlaying ? 'paused' : ''}`}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              {isAutoPlaying ? '❚❚' : '▶'}
            </button>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fullscreen-modal">
          <div className="fullscreen-content">
            <button className="close-btn" onClick={closeFullscreen}>
              <FaTimes />
            </button>
            
            <button className="nav-btn prev" onClick={prevImage}>
              <FaArrowLeft />
            </button>
            
            <div className="fullscreen-image-container">
              <img 
                src={project.images[currentImageIndex]} 
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="fullscreen-image"
              />
            </div>
            
            <button className="nav-btn next" onClick={nextImage}>
              <FaArrowRight />
            </button>

            <div className="fullscreen-indicators">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  className={`fullscreen-indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>

            <div className="image-counter">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>
      )}

      {/* Detailed Description */}
      <section className="description-section">
        <div className="section-header" data-aos="fade-up">
          <h2>Project Deep Dive</h2>
          <p>Understanding the vision and execution</p>
        </div>
        
        <div className="description-grid">
          {project.longDescription.map((paragraph, index) => (
            <div 
              key={index} 
              className="description-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="description-number">0{index + 1}</div>
              <p>{paragraph}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="challenges-section">
        <div className="challenges-grid">
          <div className="challenges-column" data-aos="fade-zoom">
            <h3><FaLightbulb /> Challenges Faced</h3>
            <div className="challenges-list">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="challenge-item">
                  <span className="challenge-number">0{index + 1}</span>
                  <p>{challenge}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="solutions-column" data-aos="fade-zoom">
            <h3><FaCheckCircle /> Solutions Implemented</h3>
            <div className="solutions-list">
              {project.solutions.map((solution, index) => (
                <div key={index} className="solution-item">
                  <span className="solution-number">0{index + 1}</span>
                  <p>{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Features */}
      <section className="tech-features-section">
        <div className="tech-section" data-aos="fade-zoom">
          <h3><FaCode /> Technology Stack</h3>
          <div className="technologies-grid">
            {project.technologies.map((tech, index) => (
              <div key={tech} className="tech-item" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="tech-icon-wrapper">
                  {project.techIcons[index] || <SiJavascript />}
                </div>
                <span className="tech-name">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="features-section" data-aos="fade-zoom">
          <h3><FaCheckCircle /> Key Features</h3>
          <div className="features-masonry">
            {project.features.map((feature, index) => (
              <div key={index} className="feature-card" data-aos="flip-up" data-aos-delay={index * 100}>
                <FaCheckCircle className="feature-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      <style jsx>{`
        .project-details-page {
          background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%);
          color: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .back-nav {
          padding: 1.5rem 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(15, 15, 15, 0.8);
          backdrop-filter: blur(20px);
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.4rem;
          border-radius: 50px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }
        .back-btn:hover { 
          color: #667eea; 
          background: rgba(102, 126, 234, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .project-hero {
          padding: 4rem 2rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-content::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .project-badge {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .project-category, .project-status {
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-category {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .project-status {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .project-title {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { text-shadow: 0 0 20px rgba(102, 126, 234, 0.5); }
          to { text-shadow: 0 0 30px rgba(102, 126, 234, 0.8), 0 0 40px rgba(102, 126, 234, 0.6); }
        }

        .project-tagline {
          font-size: 1.5rem;
          color: #cbd5e1;
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .project-description {
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto 3rem;
          font-size: 1.2rem;
          line-height: 1.6;
        }

        .project-meta-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto 3rem;
        }

        .meta-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 1.5rem;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .meta-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .meta-card-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #667eea;
        }

        .meta-label {
          display: block;
          color: #94a3b8;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .meta-value {
          display: block;
          color: #fff;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .project-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .action-btn.primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        .action-btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
          border: 2px solid rgba(102, 126, 234, 0.5);
        }

        .action-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
        }

        /* Carousel Styles */
        .carousel-section {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          height: 600px;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
        }

        .carousel-track {
          display: flex;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          height: 100%;
        }

        .carousel-slide {
          min-width: 100%;
          height: 100%;
          position: relative;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #000;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .carousel-image:hover {
          transform: scale(1.02);
        }

        .expand-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.7);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 10;
        }

        .expand-btn:hover {
          background: rgba(102, 126, 234, 0.8);
          transform: scale(1.1);
          border-color: #667eea;
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.7);
          border: none;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          z-index: 10;
        }

        .carousel-btn:hover {
          background: rgba(102, 126, 234, 0.8);
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-btn.prev { left: 2rem; }
        .carousel-btn.next { right: 2rem; }

        .carousel-indicators {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #667eea;
          transform: scale(1.3);
        }

        .carousel-controls {
          position: absolute;
          top: 2rem;
          right: 2rem;
          z-index: 10;
        }

        .play-pause-btn {
          background: rgba(0, 0, 0, 0.7);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        /* Fullscreen Modal */
        .fullscreen-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .fullscreen-content {
          position: relative;
          width: 95vw;
          height: 95vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 1001;
          font-size: 1.5rem;
        }

        .close-btn:hover {
          background: rgba(239, 68, 68, 0.8);
          transform: scale(1.1);
          border-color: #ef4444;
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 1001;
          font-size: 1.5rem;
        }

        .nav-btn:hover {
          background: rgba(102, 126, 234, 0.8);
          transform: translateY(-50%) scale(1.1);
          border-color: #667eea;
        }

        .nav-btn.prev { left: 2rem; }
        .nav-btn.next { right: 2rem; }

        .fullscreen-image-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fullscreen-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 10px;
        }

        .fullscreen-indicators {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.8rem;
          z-index: 1001;
        }

        .fullscreen-indicator {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .fullscreen-indicator.active {
          background: #667eea;
          transform: scale(1.4);
        }

        .image-counter {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Description Section */
        .description-section {
          padding: 6rem 2rem;
          background: rgba(255, 255, 255, 0.02);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 3rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .section-header p {
          color: #94a3b8;
          font-size: 1.2rem;
        }

        .description-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          gap: 2rem;
        }

        .description-card {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          border-radius: 20px;
          padding: 3rem;
          position: relative;
          border: 1px solid rgba(102, 126, 234, 0.2);
          transition: all 0.3s ease;
        }

        .description-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(102, 126, 234, 0.3);
        }

        .description-number {
          position: absolute;
          top: -20px;
          left: 2rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.2rem;
        }

        .description-card p {
          color: #e2e8f0;
          line-height: 1.8;
          font-size: 1.1rem;
          margin: 0;
        }

        /* Challenges & Solutions */
        .challenges-section {
          padding: 6rem 2rem;
        }

        .challenges-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .challenges-column h3, .solutions-column h3 {
          font-size: 2rem;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #fff;
        }

        .challenges-list, .solutions-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .challenge-item, .solution-item {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          transition: all 0.3s ease;
          border-left: 4px solid #667eea;
        }

        .challenge-item:hover, .solution-item:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(10px);
        }

        .challenge-number, .solution-number {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .challenge-item p, .solution-item p {
          color: #e2e8f0;
          margin: 0;
          line-height: 1.6;
        }

        /* Tech & Features */
        .tech-features-section {
          padding: 6rem 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .tech-section h3, .features-section h3 {
          font-size: 2rem;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #fff;
        }

        .technologies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }

        .tech-item {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tech-item:hover {
          background: rgba(102, 126, 234, 0.2);
          transform: translateY(-5px) scale(1.05);
          border-color: #667eea;
        }

        .tech-icon-wrapper {
          font-size: 2.5rem;
          color: #667eea;
        }

        .tech-name {
          color: #e2e8f0;
          font-weight: 600;
          text-align: center;
        }

        .features-masonry {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .feature-card {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05));
          border-radius: 15px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .feature-card:hover {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1));
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);
        }

        .feature-icon {
          color: #22c55e;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .feature-card span {
          color: #e2e8f0;
          line-height: 1.5;
        }

        /* CTA Section */
        .project-cta {
          padding: 6rem 2rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          position: relative;
          overflow: hidden;
        }

        .project-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23667eea' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
          animation: backgroundMove 20s linear infinite;
        }

        @keyframes backgroundMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-100px, -100px); }
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-content h2 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-content p {
          font-size: 1.3rem;
          color: #94a3b8;
          margin-bottom: 3rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 1.2rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
        }

        .cta-btn.primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
        }

        .cta-btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
          border: 2px solid rgba(102, 126, 234, 0.5);
          backdrop-filter: blur(10px);
        }

        .cta-btn.tertiary {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
          box-shadow: 0 15px 35px rgba(34, 197, 94, 0.4);
        }

        .cta-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.6);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .project-title {
            font-size: 2.5rem;
          }

          .project-meta-grid {
            grid-template-columns: 1fr;
          }

          .challenges-grid,
          .tech-features-section {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .carousel-container {
            height: 400px;
          }

          .carousel-btn {
            width: 50px;
            height: 50px;
          }

          .carousel-btn.prev { left: 1rem; }
          .carousel-btn.next { right: 1rem; }

          .description-card {
            padding: 2rem 1.5rem 2rem 2.5rem;
          }

          .cta-content h2 {
            font-size: 2.5rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .features-masonry {
            grid-template-columns: 1fr;
          }

          /* Fullscreen mobile adjustments */
          .fullscreen-content {
            width: 100vw;
            height: 100vh;
          }

          .nav-btn {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }

          .nav-btn.prev { left: 1rem; }
          .nav-btn.next { right: 1rem; }

          .close-btn {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
            top: 1rem;
            right: 1rem;
          }

          .image-counter {
            bottom: 1rem;
            right: 1rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .project-hero {
            padding: 2rem 1rem;
          }

          .project-title {
            font-size: 2rem;
          }

          .project-tagline {
            font-size: 1.2rem;
          }

          .carousel-container {
            height: 300px;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .description-section,
          .challenges-section,
          .tech-features-section,
          .project-cta {
            padding: 3rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;