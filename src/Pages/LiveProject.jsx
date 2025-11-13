// src/pages/LiveProject.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaCode, FaMobileAlt, FaDesktop, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";

const liveProjects = [
  {
    id: 4,
    title: "Ligand Software Solutions",
    description: "A fully responsive and modern corporate website built for Ligand Software Solutions, featuring service pages, project showcases, contact modules, and optimized performance.",
    thumbnail: "ligand.jpg",
    technologies: [<SiReact />, <SiNodedotjs />, <SiMongodb />],
    techNames: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://ligandsoftware.com",
    githubUrl: "https://github.com/pavanpatil/ligand-website",
    category: "Full Stack",
    featured: true
  },
  {
    id: 5,
    title: "Gururaj Foundation",
    description: "Built a clean and responsive website for a local NGO to showcase missions, activities, donation details, and community programs with accessible navigation.",
    thumbnail: "gururaj.jpg",
    technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    techNames: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://gururajfoundation.org",
    githubUrl: "https://github.com/pavanpatil/gururaj-foundation",
    category: "Frontend",
    featured: false
  },
  {
    id: 7,
    title: "Ligand WorkSpace LMS",
    description: "Designed and developed an advanced Learning Management System using the MERN stack with attendance tracking, homework evaluation, and project management features.",
    thumbnail: "workspace.jpg",
    technologies: [<SiReact />, <SiNodedotjs />, <SiMongodb />, <SiExpress />],
    techNames: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://ligand-workspace-demo.com",
    githubUrl: "https://github.com/pavanpatil/ligand-workspace",
    category: "Full Stack",
    featured: true
  }
];

const LiveProject = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const handleLiveLinkClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const handleGithubLinkClick = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Determine which projects to show based on screen size and state
  const projectsToShow = showAll ? liveProjects : liveProjects.slice(0, 2);

  return (
    <div className="live-projects-page">
      {/* Header Section */}
      <section className="live-projects-hero">
        <div className="live-projects-hero-content">
          <h1 className="live-projects-main-title">
            Live <span className="highlight">Projects</span>
          </h1>
          <p className="live-projects-subtitle">
            Explore my deployed projects that are currently live and accessible. Each project demonstrates real-world applications and responsive design.
          </p>
          
          <div className="live-projects-stats">
            <div className="stat">
              <FaDesktop className="stat-icon" />
              <div className="stat-number">{liveProjects.length}</div>
              <div className="stat-label">Live Projects</div>
            </div>
            <div className="stat">
              <FaExternalLinkAlt className="stat-icon" />
              <div className="stat-number">100%</div>
              <div className="stat-label">Deployed</div>
            </div>
            <div className="stat">
              <FaMobileAlt className="stat-icon" />
              <div className="stat-number">100%</div>
              <div className="stat-label">Responsive</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Projects Grid */}
      <section className="live-projects-section">
        <div className="live-projects-container">
          <div className="live-projects-grid">
            {projectsToShow.map((project, idx) => (
              <div 
                key={project.id} 
                className={`live-project-card ${project.featured ? 'featured' : ''}`}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {project.featured && (
                  <div className="featured-badge">
                    Featured
                  </div>
                )}

                {/* Project Thumbnail */}
                <div className="live-project-image-container">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="live-project-thumbnail"
                  />
                  <div className="live-project-overlay">
                    <div className="live-project-links">
                      <button 
                        className="live-project-link"
                        onClick={() => handleLiveLinkClick(project.liveUrl)}
                        title="Visit Live Site"
                      >
                        <FaExternalLinkAlt />
                      </button>
                      {project.githubUrl && (
                        <button 
                          className="live-project-link"
                          onClick={(e) => handleGithubLinkClick(e, project.githubUrl)}
                          title="View Source Code"
                        >
                          <FaGithub />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="live-project-category">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="live-project-content">
                  <h3 className="live-project-title">{project.title}</h3>
                  <p className="live-project-description">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="live-project-technologies">
                    <div className="tech-icons">
                      {project.technologies.map((tech, index) => (
                        <div key={index} className="tech-icon" title={project.techNames[index]}>
                          {tech}
                        </div>
                      ))}
                    </div>
                    <span className="tech-count">{project.technologies.length} techs</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="live-project-actions">
                    <button 
                      className="live-project-btn"
                      onClick={() => handleLiveLinkClick(project.liveUrl)}
                    >
                      Visit Live Site <FaExternalLinkAlt />
                    </button>
                    {project.githubUrl && (
                      <button 
                        className="github-project-btn"
                        onClick={(e) => handleGithubLinkClick(e, project.githubUrl)}
                      >
                        Source Code <FaGithub />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View More Button */}
          {liveProjects.length > 2 && (
            <div className="view-more-container">
              <button 
                className="view-more-btn"
                onClick={toggleShowAll}
              >
                {showAll ? (
                  <>
                    Show Less <FaChevronUp />
                  </>
                ) : (
                  <>
                    View All Projects <FaChevronDown />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="live-projects-cta">
        <div className="cta-content">
          <h2>Want to see more projects?</h2>
          <p>Check out my detailed project portfolio with in-depth case studies</p>
          <button className="cta-button" onClick={() => navigate('/projects')}>
            View All Projects <FaArrowRight />
          </button>
        </div>
      </section>

      <style>
        {`
        .live-projects-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%);
        }

        /* Hero Section */
        .live-projects-hero {
          padding: 2rem 2rem 2rem;
          text-align: center;
        }

        .live-projects-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .live-projects-main-title {
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

        .live-projects-subtitle {
          font-size: 1.2rem;
          color: #94a3b8;
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .live-projects-stats {
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

        /* Live Projects Section */
        .live-projects-section {
          padding: 4rem 2rem;
        }

        .live-projects-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Live Projects Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */
        .live-projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .live-project-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .live-project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
          border-color: rgba(102, 126, 234, 0.5);
        }

        .live-project-card.featured {
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
          color: white;
        }

        /* Project Image */
        .live-project-image-container {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .live-project-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .live-project-card:hover .live-project-thumbnail {
          transform: scale(1.1);
        }

        .live-project-overlay {
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

        .live-project-card:hover .live-project-overlay {
          opacity: 1;
        }

        .live-project-links {
          display: flex;
          gap: 1rem;
        }

        .live-project-link {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }

        .live-project-link:hover {
          transform: scale(1.1);
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        }

        .live-project-category {
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
        .live-project-content {
          padding: 1.5rem;
        }

        .live-project-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .live-project-description {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .live-project-technologies {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .tech-icons {
          display: flex;
          gap: 0.6rem;
        }

        .tech-icon {
          font-size: 1.3rem;
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

        .live-project-actions {
          display: flex;
          gap: 0.8rem;
          justify-content: space-between;
        }

        .live-project-btn, .github-project-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.7rem 1.2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 0.85rem;
          flex: 1;
          justify-content: center;
          border: none;
          white-space: nowrap;
        }

        .live-project-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .live-project-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .github-project-btn {
          background: transparent;
          border: 2px solid #333;
          color: #94a3b8;
        }

        .github-project-btn:hover {
          background: #333;
          color: white;
          transform: translateY(-2px);
        }

        /* View More Button */
        .view-more-container {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }

        .view-more-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .view-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        /* Hide view more button on desktop */
        .view-more-container {
          display: none;
        }

        /* CTA Section */
        .live-projects-cta {
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
          font-size: 1rem;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        /* Responsive Design */
        @media screen and (max-width: 1200px) {
          .live-projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media screen and (max-width: 768px) {
          .live-projects-hero {
            padding: 2rem 1rem;
          }

          .live-projects-main-title {
            font-size: 2.5rem;
          }

          .live-projects-stats {
            gap: 2rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .live-projects-section {
            padding: 3rem 1rem;
          }

          .live-projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.2rem;
          }

          .live-project-image-container {
            height: 180px;
          }

          .live-project-content {
            padding: 1.2rem;
          }

          .live-project-title {
            font-size: 1.2rem;
          }

          .live-project-description {
            font-size: 0.85rem;
          }

          .live-project-actions {
            flex-direction: column;
            gap: 0.6rem;
          }

          .live-project-btn, .github-project-btn {
            padding: 0.6rem 1rem;
            font-size: 0.8rem;
          }

          .cta-content h2 {
            font-size: 2rem;
          }
        }

        @media screen and (max-width: 640px) {
          .live-projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          /* Show only 2 projects initially on mobile */
          .live-projects-grid .live-project-card:nth-child(n+3) {
            display: none;
          }

          /* When showAll is true, show all projects */
          .live-projects-grid.show-all .live-project-card {
            display: block !important;
          }

          /* Show view more button only on mobile */
          .view-more-container {
            display: flex;
          }
        }

        @media screen and (max-width: 480px) {
          .live-projects-main-title {
            font-size: 2rem;
          }

          .live-projects-subtitle {
            font-size: 1rem;
          }

          .live-projects-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .live-project-title {
            font-size: 1.1rem;
          }

          .live-project-description {
            font-size: 0.8rem;
          }

          .live-project-content {
            padding: 1rem;
          }

          .tech-icons {
            gap: 0.4rem;
          }

          .tech-icon {
            font-size: 1.1rem;
          }

          .view-more-btn {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
        }

        @media screen and (max-width: 360px) {
          .live-projects-grid {
            grid-template-columns: 1fr;
          }
          
          .live-project-card {
            margin: 0 0.2rem;
          }
        }
        `}
      </style>
    </div>
  );
};

export default LiveProject;