// src/pages/Project.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowRight,
  FaCode,
  FaMobileAlt,
  FaDesktop,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiCss3,
  SiPython,
  SiTensorflow,
  SiHtml5,
} from "react-icons/si";
import LiveProject from "./LiveProject";

const projects = [
  {
    id: 1,
    title: "Seek-AI",
    description:
      "An AI-based missing person detection and complaint management system with real-time CCTV analysis.",
    thumbnail: "t-seek-ai.png",
    technologies: [
      <SiReact />,
      <SiNodedotjs />,
      <SiMongodb />,
      <SiExpress />,
      <SiPython />,
      <SiTensorflow />,
    ],
    techNames: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Python",
      "TensorFlow",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/pavanpatil/seek-ai",
    category: "Full Stack / AI & Security",
    featured: true,
  },
  {
    id: 2,
    title: "Ligand Software Solutions – Official Website",
    description:
      "A fully responsive and modern corporate website built for Ligand Software Solutions, featuring service pages, project showcases, contact modules, and optimized performance for a professional client-facing experience.",
    thumbnail: "ligand.jpg",
    technologies: [<SiReact />, <SiNodedotjs />, <SiMongodb />],
    techNames: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://ligandsoftware.com",
    githubUrl: "https://github.com/pavanpatil/ligand-website", // optional
    category: "Full Stack",
    featured: true,
  },
  {
    id: 2,
    title: "SDVS'S BCA– Official Website",
    description:"Developed the official website for SDVS’s BCA College, Sankeshwar, providing a responsive, user-friendly platform to showcase academic programs, admissions, and institutional information with a clean and professional design.",
    thumbnail: "sdvsbca.png",
    technologies: [<SiReact />, <SiNodedotjs />, <SiMongodb />],
    techNames: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://sdvssbcasnk.com",
    githubUrl: "https://github.com/pavanpatil/ligand-website", // optional
    category: "Full Stack",
    featured: true,
  },

  {
    id: 2,
    title: "StegoFileShare",
    description:
      "A steganography-based secure file sharing system with password protection, wrong-attempt tracking, and admin monitoring.",
    thumbnail: "StegoFileShare.png",
    technologies: [
      <SiReact />,
      <SiNodedotjs />,
      <SiExpress />,
      <SiMongodb />,
      <SiHtml5 />,
      <SiCss3 />,
    ],
    techNames: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "",
    githubUrl: "https://github.com/pavanpatil/stegofileshare",
    category: "Full Stack / Security",
    featured: true,
  },

  {
    id: 3,
    title: "HeartScan AI",
    description:
      "An AI-powered cardiovascular risk assessment system that analyzes retinal images to predict heart health and offers doctor appointment scheduling.",
    thumbnail: "t-HeartScan AI.png",
    technologies: [
      <SiReact />,
      <SiNodedotjs />,
      <SiExpress />,
      <SiMongodb />,
      <SiPython />,
      <SiTensorflow />,
    ],
    techNames: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "TensorFlow",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/pavanpatil/heartscanai",
    category: "Full Stack / AI & HealthTech",
    featured: true,
  },

  {
    id: 5,
    title: "Gururaj Foundation – NGO Website",
    description:
      "Built a clean and responsive website for a local NGO to showcase missions, activities, donation details, and community programs with accessible navigation and well-structured content.",
    thumbnail: "gururaj.jpg",
    technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    techNames: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://gururajfoundation.com", // replace if needed
    githubUrl: "https://github.com/pavanpatil/gururaj-foundation", // optional
    category: "Frontend",
    featured: false,
  },
  {
    id: 7,
    title: "Ligand WorkSpace  (Ongoing)",
    description:
      "Designed and developed an advanced Learning Management System using the MERN stack as part of a 4-member team. Includes features such as attendance tracking, homework evaluation, fee management, project grouping, and secure admin-controlled access for students and teachers.",
    thumbnail: "workspace.jpg",
    technologies: [<SiReact />, <SiNodedotjs />, <SiMongodb />, <SiExpress />],
    techNames: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://liganddevelopers.vercel.app/", // replace if not deployed
    githubUrl: "https://github.com/pavanpatil/ligand-workspace", // optional
    category: "Full Stack",
    featured: true,
  },
];

const Project = () => {
  const navigate = useNavigate();
  return (
    <div className="projects-page">
      {/* Header Section */}
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1 className="projects-main-title">
            My <span className="highlight">Projects</span>
          </h1>
          <p className="projects-subtitle">
            Here are some of my recent works that showcase my skills in
            full-stack development, responsive design, and modern web
            technologies.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="projects-container">
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`project-card ${project.featured ? "" : ""} ${
                  idx >= 2 ? "mobile-hidden" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={project.id * 100}
              >
                {/* Project Thumbnail */}
                <div className="project-image-container">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="project-thumbnail"
                  />
                  <div className="project-overlay">
                    <div className="project-links"></div>
                  </div>
                  {/* <div className="project-category">
                    {project.category}
                  </div> */}
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Technologies
                  <div className="project-technologies">
                    <div className="tech-icons">
                      {project.technologies.map((tech, index) => (
                        <div key={index} className="tech-icon" title={project.techNames[index]}>
                          {tech}
                        </div>
                      ))}
                    </div>
                    <span className="tech-count">{project.technologies.length} techs</span>
                  </div> */}

                  {/* Action Buttons - Show Live Link if available, else View Details */}
                  <div className="project-actions">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-details-btn"
                      >
                        Live Link <FaExternalLinkAlt />
                      </a>
                    ) : (
                      <Link
                        to={`/projects/${project.id}`}
                        className="project-details-btn"
                      >
                        View Details <FaArrowRight />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile View All button - toggles showing all projects on small screens */}
          <div className="mobile_projects_view_wrap">
            <button
              className="mobile_projects_view_btn"
              onClick={() => {
                const root = document.documentElement;
                const expanded =
                  root.getAttribute("data-projects-expanded") === "true";
                root.setAttribute(
                  "data-projects-expanded",
                  (!expanded).toString()
                );
              }}
              aria-expanded={false}
            >
              {/* text handled by CSS ::after content for consistent styling */}
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="cta-content">
          <h2>Have a project in mind?</h2>
          <p>Let's work together to bring your ideas to life</p>
          <button className="cta-button" onClick={() => navigate("/contact")}>
            Get In Touch <FaArrowRight />
          </button>
        </div>
      </section>

      <style>
        {`
        .projects-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%);
        }

        /* Hero Section */
        .projects-hero {
          padding: 2rem 2rem 2rem;
          text-align: center;
          // background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        }

        .projects-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .projects-main-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .projects-subtitle {
          font-size: 1.2rem;
          color: #94a3b8;
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .projects-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .stat-icon {
          font-size: 2rem;
          color: #667eea;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        /* Projects Section */
        .projects-section {
          padding: 4rem 2rem;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .projects-filter {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.8rem 1.5rem;
          border: 2px solid #334155;
          background: transparent;
          color: #94a3b8;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: transparent;
          color: white;
          transform: translateY(-2px);
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.3);
        }

        .project-card.featured {
          border: 2px solid #667eea;
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          z-index: 2;
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* Project Image */
        .project-image-container {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .project-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-thumbnail {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        // .project-card:hover .project-overlay {
        //   opacity: 1;
        // }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          transform: scale(1.1);
        }

        .project-category {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(0, 0, 0, 0.8);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          color: #667eea;
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* Project Content */
        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .project-description {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-technologies {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .tech-icons {
          display: flex;
          gap: 0.8rem;
        }

        .tech-icon {
          font-size: 1.5rem;
          color: #667eea;
          transition: transform 0.3s ease;
        }

        .tech-icon:hover {
          transform: scale(1.2);
        }

        .tech-count {
          color: #64748b;
          font-size: 0.8rem;
        }

        .project-actions {
          display: flex;
          justify-content: flex-end;
        }

        .project-details-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: transparent;
          border: 2px solid #667eea;
          color: #667eea;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .project-details-btn:hover {
          background: #667eea;
          color: white;
          transform: translateX(5px);
        }

        /* CTA Section */
        .projects-cta {
          padding: 4rem 2rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        }

        .cta-content h2 {
          font-size: 2.5rem;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .cta-content p {
          color: #94a3b8;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .cta-button {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 auto;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        /* Responsive Design */
        @media screen and (max-width: 768px) {
          .projects-hero {
            padding: 4rem 1rem 3rem;
          }

          .projects-main-title {
            font-size: 2.5rem;
          }

          .projects-stats {
            gap: 2rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .projects-filter {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.6rem 1rem;
            font-size: 0.9rem;
          }

          .project-image-container {
            height: 200px;
          }

          .cta-content h2 {
            font-size: 2rem;
          }
        }

        @media screen and (max-width: 480px) {
          .projects-main-title {
            font-size: 2rem;
          }

          .projects-subtitle {
            font-size: 1rem;
          }

          .projects-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .project-content {
            padding: 1rem;
          }

          .project-title {
            font-size: 1.3rem;
          }
          /* Hide extra project cards by default on very small screens */
          .project-card.mobile-hidden {
            display: none;
          }

          /* When expanded, show all project cards */
          :root[data-projects-expanded="true"] .project-card.mobile-hidden {
            display: block;
          }

          .mobile_projects_view_wrap {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
          }

          .mobile_projects_view_btn {
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

          .mobile_projects_view_btn:active {
            transform: translateY(1px) scale(0.995);
          }

          /* Button label toggles using CSS content */
          :root[data-projects-expanded="true"] .mobile_projects_view_btn::after {
            content: '   Show Less';
            font-weight: 600;
            margin-left: 6px;
          }

          :root:not([data-projects-expanded="true"]) .mobile_projects_view_btn::after {
            content: '   View All';
            font-weight: 600;
            margin-left: 6px;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Project;
