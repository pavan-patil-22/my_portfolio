import React, { useState, useEffect } from "react";
import {
  FaExternalLinkAlt,
  FaCopy,
  FaCheck,
  FaCertificate,
  FaSearch,
  FaAward,
  FaBuilding,
  FaMicrosoft,
} from "react-icons/fa";
import { SiMeta, SiPython, SiC, SiCoursera } from "react-icons/si";
import { DiJava } from "react-icons/di";
import AOS from "aos";
import "aos/dist/aos.css";

const certificatesData = [
  {
    id: 1,
    title: "C Programming Data Structures in Kannada",
    issuer: "algorithm 365",
    issueDate: "Aug 2026",
    credentialId: "130552572265271733568692",
    credentialUrl: "https://storage.googleapis.com/learnyst-user-assets/certificates/schools/173356/certificates/226527/users/13055257/pdf/13055257_226527.pdf",
    category: "Programming",
    icon: <SiC />,
    logoBg: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    brandColor: "#3178C6",
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    issuer: "O.P. Jindal Global University (JGU)",
    issueDate: "Jun 2026",
    credentialId: "QL9FGKJD9EWS",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/QL9FGKJD9EWS",
    category: "AI & ML",
    icon: <FaAward />,
    logoBg: "linear-gradient(135deg, #00223E 0%, #1D976C 100%)",
    brandColor: "#1D976C",
  },
  {
    id: 3,
    title: "Introduction to Networking and Cloud Computing",
    issuer: "Microsoft",
    issueDate: "Jun 2026",
    credentialId: "M0BO7M7B09OV",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/M0BO7M7B09OV",
    category: "Cloud & Network",
    icon: <FaMicrosoft />,
    logoBg: "linear-gradient(135deg, #0078D4 0%, #002050 100%)",
    brandColor: "#0078D4",
  },
  {
    id: 4,
    title: "Java: Algorithms",
    issuer: "Codio",
    issueDate: "Jun 2026",
    credentialId: "S0DDJNRKDIC5",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/S0DDJNRKDIC5",
    category: "Programming",
    icon: <DiJava />,
    logoBg: "linear-gradient(135deg, #0052CC 0%, #002A66 100%)",
    brandColor: "#0052CC",
  },
  {
    id: 5,
    title: "Certificate of Participation in RIFT '26 - Hackathon of Unstop Freedom Festival IN",
    issuer: "PW (PhysicsWallah)",
    issueDate: "Feb 2026",
    credentialId: "2511d2f1-dd27-41c3-8906-aa4f6934e568",
    credentialUrl: "https://unstop.com/certificate-preview/2511d2f1-dd27-41c3-8906-aa4f6934e568",
    category: "Hackathons",
    icon: <FaBuilding />,
    logoBg: "linear-gradient(135deg, #111111 0%, #333333 100%)",
    brandColor: "#E53E3E",
  },
  {
    id: 6,
    title: "Certificate of Participation in Hack-A-Day of Robofiesta",
    issuer: "RV College Of Engineering",
    issueDate: "Dec 2025",
    credentialId: "37b7ce1a-fd40-48b7-9201-3a2d1c40628e",
    credentialUrl: "https://unstop.com/certificate-preview/37b7ce1a-fd40-48b7-9201-3a2d1c40628e",
    category: "Hackathons",
    icon: <FaCertificate />,
    logoBg: "linear-gradient(135deg, #4A0E17 0%, #1A0006 100%)",
    brandColor: "#9B2C2C",
  },
  {
    id: 7,
    title: "Programming in Python",
    issuer: "Meta",
    issueDate: "Nov 2025",
    credentialId: "C33B5LBRR2WM",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/C33B5LBRR2WM",
    category: "Programming",
    icon: <SiMeta />,
    logoBg: "linear-gradient(135deg, #0668E1 0%, #003882 100%)",
    brandColor: "#0668E1",
  },
  {
  id: 8,
  title: "Data Interpretation & Insights: Exam & Recruitment Prep",
  issuer: "Board Infinity",
  issueDate: "May 2026",
  credentialId: "C38B5LBRR2PL",
  credentialUrl: "https://www.coursera.org/account/accomplishments/verify/BKN1TR0ZZYGO",
  category: "Aptitude",
  icon: <SiCoursera />,
  logoBg: "linear-gradient(135deg, #0056D2 0%, #003B8F 100%)",
  brandColor: "#0056D2",
},
{
  id: 9,
  title: "Logical & Analytical Reasoning — Exam & Recruitment Prep",
  issuer: "Board Infinity",
  issueDate: "May 2026",
  credentialId: "C33P2LAXM2LM",
  credentialUrl: "https://www.coursera.org/account/accomplishments/verify/TEOWLSWDHF4Q",
  category: "Aptitude",
  icon: <SiCoursera />,
  logoBg: "linear-gradient(135deg, #0056D2 0%, #003B8F 100%)",
  brandColor: "#0056D2",
},
{
  id: 10,
  title: "Quantitative Aptitude Mastery— Exam & Recruitment Prep",
  issuer: "Board Infinity",
  issueDate: "April 2026",
  credentialId: "C225DBRR2SH",
  credentialUrl: "https://www.coursera.org/account/accomplishments/verify/VEUP6NI4V15Z",
  category: "Aptitude",
  icon: <SiCoursera />,
  logoBg: "linear-gradient(135deg, #0056D2 0%, #003B8F 100%)",
  brandColor: "#0056D2",
},
{
  id: 11,
  title: "Verbal Mastery: Grammar, RC, Reasoning for Exams & Job Tests",
  issuer: "Board Infinity",
  issueDate: "April 2026",
  credentialId: "C33B5LSNE2WM",
  credentialUrl: "https://www.coursera.org/account/accomplishments/verify/W4A8O3SVQTZ5",
  category: "Aptitude",
  icon: <SiCoursera />,
  logoBg: "linear-gradient(135deg, #0056D2 0%, #003B8F 100%)",
  brandColor: "#0056D2",
},
];

const categories = ["All", "Programming", "AI & ML", "Cloud & Network", "Hackathons"];

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  const handleCopy = (id, credId) => {
    navigator.clipboard.writeText(credId);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredCertificates = certificatesData.filter((cert) => {
    const matchesCategory =
      selectedCategory === "All" || cert.category === selectedCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.credentialId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certificates" className="certificates_section">
      <div className="certificates_container">
        {/* Header */}
        <div className="certificates_header" data-aos="fade-down">
          <h2 className="certificates_title">
            Licenses & <span className="certificates_highlight">Certifications</span>
          </h2>
          <div className="certificates_title_underline"></div>
          <p className="certificates_subtitle">
            Verified qualifications, professional certifications, and hackathon accomplishments
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="certificates_filter_bar" data-aos="fade-up">
          <div className="certificates_search">
            <FaSearch className="search_icon" />
            <input
              type="text"
              placeholder="Search by title, issuer, or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="certificates_search_input"
            />
          </div>

          <div className="certificates_categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category_btn ${
                  selectedCategory === cat ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="certificates_grid">
          {filteredCertificates.length > 0 ? (
            filteredCertificates.map((cert, index) => (
              <div
                key={cert.id}
                className="certificate_card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="cert_card_header">
                  <div
                    className="cert_logo_box"
                    style={{ background: cert.logoBg }}
                  >
                    {cert.icon}
                  </div>
                  <div className="cert_issuer_wrap">
                    <span className="cert_category_badge">{cert.category}</span>
                    <span className="cert_issue_date">Issued {cert.issueDate}</span>
                  </div>
                </div>

                <div className="cert_card_body">
                  <h3 className="cert_card_title">{cert.title}</h3>
                  <p className="cert_issuer_name">{cert.issuer}</p>

                  <div className="cert_credential_box">
                    <span className="cert_id_label">Credential ID:</span>
                    <span className="cert_id_value" title={cert.credentialId}>
                      {cert.credentialId}
                    </span>
                    <button
                      className="copy_id_btn"
                      onClick={() => handleCopy(cert.id, cert.credentialId)}
                      title="Copy Credential ID"
                    >
                      {copiedId === cert.id ? (
                        <FaCheck style={{ color: "#48BB78" }} />
                      ) : (
                        <FaCopy />
                      )}
                    </button>
                  </div>
                </div>

                <div className="cert_card_footer">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="see_credential_btn"
                  >
                    See credential <FaExternalLinkAlt className="link_icon" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="no_certificates_found">
              <FaCertificate className="no_cert_icon" />
              <h3>No certifications match your criteria</h3>
              <p>Try resetting search or filter filters.</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .certificates_section {
          padding: 6rem 0 5rem;
          background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%);
          min-height: 100vh;
        }

        .certificates_container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header */
        .certificates_header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .certificates_title {
          font-size: 3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .certificates_highlight {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .certificates_title_underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin: 0 auto 1rem;
          border-radius: 2px;
        }

        .certificates_subtitle {
          font-size: 1.15rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Filter & Search */
        .certificates_filter_bar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3.5rem;
          align-items: center;
        }

        .certificates_search {
          position: relative;
          width: 100%;
          max-width: 500px;
        }

        .search_icon {
          position: absolute;
          left: 1.2rem;
          top: 50%;
          transform: translateY(-50%);
          color: #667eea;
          font-size: 1.1rem;
        }

        .certificates_search_input {
          width: 100%;
          padding: 0.9rem 1.2rem 0.9rem 3rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50px;
          color: #ffffff;
          font-size: 0.95rem;
          outline: none;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .certificates_search_input:focus {
          border-color: #667eea;
          box-shadow: 0 0 15px rgba(102, 126, 234, 0.3);
          background: rgba(255, 255, 255, 0.08);
        }

        .certificates_categories {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .category_btn {
          padding: 0.5rem 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          border-radius: 30px;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .category_btn:hover,
        .category_btn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
          transform: translateY(-2px);
        }

        /* Grid Layout */
        .certificates_grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
        }

        .certificate_card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          backdrop-filter: blur(10px);
          transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }

        .certificate_card:hover {
          transform: translateY(-8px);
          border-color: rgba(102, 126, 234, 0.5);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(102, 126, 234, 0.2);
          background: rgba(255, 255, 255, 0.07);
        }

        /* Card Header */
        .cert_card_header {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 1.2rem;
        }

        .cert_logo_box {
          width: 55px;
          height: 55px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          flex-shrink: 0;
        }

        .cert_issuer_wrap {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .cert_category_badge {
          background: rgba(102, 126, 234, 0.15);
          color: #a5b4fc;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.6rem;
          border-radius: 12px;
          display: inline-block;
          width: fit-content;
          border: 1px solid rgba(102, 126, 234, 0.3);
        }

        .cert_issue_date {
          font-size: 0.85rem;
          color: #94a3b8;
          font-weight: 500;
        }

        /* Card Body */
        .cert_card_body {
          flex: 1;
          margin-bottom: 1.5rem;
        }

        .cert_card_title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.5rem 0;
          line-height: 1.4;
        }

        .cert_issuer_name {
          font-size: 0.95rem;
          color: #cbd5e1;
          font-weight: 500;
          margin: 0 0 1.2rem 0;
        }

        .cert_credential_box {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 0.6rem 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cert_id_label {
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 600;
        }

        .cert_id_value {
          font-size: 0.82rem;
          color: #94a3b8;
          font-family: monospace;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1;
        }

        .copy_id_btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 0.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        .copy_id_btn:hover {
          color: #667eea;
        }

        /* Footer Link */
        .cert_card_footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 1rem;
        }

        .see_credential_btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #667eea;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .see_credential_btn:hover {
          color: #a5b4fc;
          transform: translateX(4px);
        }

        .link_icon {
          font-size: 0.85rem;
        }

        /* Empty State */
        .no_certificates_found {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem 2rem;
          color: #94a3b8;
        }

        .no_cert_icon {
          font-size: 3rem;
          color: #667eea;
          margin-bottom: 1rem;
          opacity: 0.6;
        }

        @media screen and (max-width: 768px) {
          .certificates_container {
            padding: 0 1.5rem;
          }
          .certificates_title {
            font-size: 2.3rem;
          }
          .certificates_grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Certificates;
