// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast.error("Please enter your message!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setIsSubmitting(true);

    // Format message for WhatsApp
    const whatsappMessage = `Hello Pavan! 👋%0A%0A${encodeURIComponent(message)}%0A%0ALooking forward to your response!`;
    const whatsappUrl = `https://wa.me/9110413455?text=${whatsappMessage}`;

    // Show success toast
    toast.success("Opening WhatsApp... 🚀", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });

    // Open WhatsApp after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setMessage("");
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-xl" />,
      title: "Phone",
      value: "+91 91104 13455",
      description: "Available for calls",
      color: "hover:bg-green-600 border-green-500",
      bgColor: "bg-green-500",
      url: "tel:+919110413455"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      value: "pavan@example.com",
      description: "Send me an email",
      color: "hover:bg-blue-600 border-blue-500",
      bgColor: "bg-blue-500",
      url: "mailto:pavan@example.com"
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      title: "WhatsApp",
      value: "+91 91104 13455",
      description: "Instant messaging",
      color: "hover:bg-green-500 border-green-400",
      bgColor: "bg-green-400",
      url: "https://wa.me/9110413455"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      value: "Mumbai, India",
      description: "Available for remote work",
      color: "hover:bg-red-600 border-red-500",
      bgColor: "bg-red-500",
      url: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/pavanpatil",
      color: "hover:bg-blue-600 border-blue-500",
      bgColor: "bg-blue-500"
    },
    {
      icon: <FaGithub className="text-xl" />,
      name: "GitHub",
      url: "https://github.com/pavanpatil",
      color: "hover:bg-gray-800 border-gray-700",
      bgColor: "bg-gray-700"
    },
    {
      icon: <FaTwitter className="text-xl" />,
      name: "Twitter",
      url: "https://twitter.com/pavanpatil",
      color: "hover:bg-blue-400 border-blue-400",
      bgColor: "bg-blue-400"
    },
    {
      icon: <FaInstagram className="text-xl" />,
      name: "Instagram",
      url: "https://instagram.com/pavanpatil",
      color: "hover:bg-pink-600 border-pink-500",
      bgColor: "bg-pink-500"
    },
    {
      icon: <SiLeetcode className="text-xl" />,
      name: "LeetCode",
      url: "https://leetcode.com/pavanpatil",
      color: "hover:bg-orange-500 border-orange-500",
      bgColor: "bg-orange-500"
    },
    {
      icon: <SiCodechef className="text-xl" />,
      name: "CodeChef",
      url: "https://codechef.com/users/pavanpatil",
      color: "hover:bg-red-500 border-red-500",
      bgColor: "bg-red-500"
    }
  ];

  return (
    <div className="contact-page">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Main Content */}
      <section className="main-content">
        <div className="content-grid">
          {/* Left Section - Contact Info & Social */}
          <div className="left-section" data-aos="fade-zoom">
            {/* Profile Header */}
            <div className="profile-header" data-aos="fade-up">
              <h1 className="profile-name">Pavan Patil</h1>
              <p className="profile-title">MERN Stack Developer</p>
              <p className="profile-description">
                Passionate about creating seamless digital experiences. Let's build something amazing together!
              </p>
            </div>

            {/* Contact Information Cards */}
            <div className="contact-info-section">
              <h2 className="section-title">Contact Information</h2>
              <div className="contact-info-grid">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.url}
                    target={contact.url.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`contact-card ${contact.color}`}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className={`contact-icon ${contact.bgColor}`}>
                      {contact.icon}
                    </div>
                    <div className="contact-content">
                      <h3 className="contact-title">{contact.title}</h3>
                      <p className="contact-value">{contact.value}</p>
                      <p className="contact-description">{contact.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media Section */}
            <div className="social-section">
              <h2 className="section-title">Follow Me</h2>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-card ${social.color}`}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100 + 400}
                  >
                    <div className={`social-icon ${social.bgColor}`}>
                      {social.icon}
                    </div>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Message Form */}
          <div className="right-section" data-aos="zoon-out">
            <div className="form-container">
              <div className="form-header">
                <h2 className="form-title">Send Message via WhatsApp</h2>
                <p className="form-subtitle">
                  Type your message below and it will open directly in WhatsApp
                </p>
              </div>

              <form onSubmit={handleSubmit} className="message-form">
                <div className="form-group" data-aos="fade-up" data-aos-delay="200">
                  <label htmlFor="message" className="form-label">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="8"
                    className="message-textarea"
                    placeholder="Hi Pavan, I'm interested in working with you on..."
                    maxLength="500"
                  ></textarea>
                  <div className="char-count">
                    {message.length}/500 characters
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !message.trim()}
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${!message.trim() ? 'disabled' : ''}`}
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <FaWhatsapp className="btn-icon" />
                      Send via WhatsApp
                    </>
                  )}
                </button>

                <div className="whatsapp-note" data-aos="fade-up" data-aos-delay="400">
                  <FaWhatsapp className="note-icon" />
                  <p>Your message will open directly in WhatsApp for instant communication</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      
      <style jsx>{`
        .contact-page {
          background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%);
          color: #fff;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          padding: 2rem 1rem;
        }

        /* Main Content */
        .main-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        /* Profile Header */
        .profile-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .profile-name {
          font-size: 2.2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #22c55e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .profile-title {
          font-size: 1.2rem;
          color: #cbd5e1;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .profile-description {
          font-size: 1rem;
          color: #94a3b8;
          line-height: 1.6;
          max-width: 400px;
          margin: 0 auto;
        }

        /* Section Titles */
        .section-title {
          font-size: 1.6rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        /* Contact Information Cards */
        .contact-info-section {
          margin-bottom: 3rem;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .contact-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.8rem;
          padding: 1.5rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 15px;
          border: 1px solid;
          text-decoration: none;
          color: #e2e8f0;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          min-height: 140px;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .contact-content {
          flex: 1;
          width: 100%;
        }

        .contact-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
          color: #fff;
        }

        .contact-value {
          font-size: 0.9rem;
          color: #667eea;
          margin-bottom: 0.3rem;
          font-weight: 600;
        }

        .contact-description {
          color: #94a3b8;
          font-size: 0.8rem;
          margin: 0;
        }

        /* Social Media Section */
        .social-section {
          margin-bottom: 2rem;
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0.8rem;
        }

        .social-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.6rem;
          padding: 1rem 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid;
          text-decoration: none;
          color: #e2e8f0;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          min-height: 90px;
        }

        .social-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
        }

        .social-icon {
          width: 35px;
          height: 35px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.9rem;
        }

        .social-name {
          font-weight: 600;
          font-size: 0.7rem;
          line-height: 1.2;
        }

        /* Form Section */
        .right-section {
          /* Removed sticky positioning */
        }

        .form-container {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 25px;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .form-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .form-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .form-subtitle {
          color: #94a3b8;
          font-size: 0.95rem;
        }

        /* Message Form */
        .message-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          color: #e2e8f0;
          margin-bottom: 0.8rem;
          font-weight: 600;
          font-size: 1rem;
        }

        .message-textarea {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
          resize: vertical;
          min-height: 180px;
          font-family: inherit;
        }

        .message-textarea:focus {
          outline: none;
          border-color: #22c55e;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
        }

        .message-textarea::placeholder {
          color: #64748b;
        }

        .char-count {
          text-align: right;
          color: #64748b;
          font-size: 0.8rem;
          margin-top: 0.5rem;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 1.2rem 2rem;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
          border: none;
          border-radius: 15px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .submit-btn:hover:not(.submitting):not(.disabled) {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(34, 197, 94, 0.4);
        }

        .submit-btn.submitting {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .submit-btn.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: #64748b;
        }

        .btn-icon {
          font-size: 1.2rem;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .whatsapp-note {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem;
          background: rgba(34, 197, 94, 0.1);
          border-radius: 15px;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .note-icon {
          color: #22c55e;
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .whatsapp-note p {
          color: #cbd5e1;
          margin: 0;
          font-size: 0.85rem;
          line-height: 1.4;
        }

        /* CTA Section */
        .cta-section {
          padding: 5rem 2rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
          margin-top: 4rem;
          border-radius: 30px;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .cta-description {
          font-size: 1.1rem;
          color: #cbd5e1;
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1.1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .cta-btn.primary {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
          box-shadow: 0 10px 30px rgba(34, 197, 94, 0.4);
        }

        .cta-btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
          border: 2px solid rgba(102, 126, 234, 0.5);
          backdrop-filter: blur(10px);
        }

        .cta-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .social-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }

          .social-card {
            padding: 1.2rem 0.8rem;
            min-height: 100px;
          }

          .social-icon {
            width: 40px;
            height: 40px;
          }

          .social-name {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 768px) {
          .contact-page {
            padding: 1rem;
          }

          .profile-name {
            font-size: 1.8rem;
          }

          .profile-title {
            font-size: 1.1rem;
          }

          .contact-info-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.8rem;
          }

          .contact-card {
            padding: 1.2rem 0.8rem;
            min-height: 130px;
          }

          .contact-icon {
            width: 40px;
            height: 40px;
          }

          .contact-title {
            font-size: 0.9rem;
          }

          .contact-value {
            font-size: 0.85rem;
          }

          .contact-description {
            font-size: 0.75rem;
          }

          .social-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.8rem;
          }

          .social-card {
            padding: 1rem 0.5rem;
            min-height: 90px;
          }

          .social-icon {
            width: 35px;
            height: 35px;
          }

          .social-name {
            font-size: 0.75rem;
          }

          .form-container {
            padding: 2rem;
          }

          .form-title {
            font-size: 1.6rem;
          }

          .cta-title {
            font-size: 1.8rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .contact-info-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.8rem;
          }

          .social-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.6rem;
          }

          .profile-header {
            padding: 1.5rem;
          }

          .profile-name {
            font-size: 1.6rem;
          }

          .section-title {
            font-size: 1.4rem;
          }

          .form-title {
            font-size: 1.4rem;
          }

          .cta-section {
            padding: 3rem 1rem;
            margin-top: 2rem;
          }

          .cta-title {
            font-size: 1.6rem;
          }

          .contact-card {
            min-height: 120px;
            padding: 1rem 0.5rem;
          }

          .contact-icon {
            width: 35px;
            height: 35px;
          }

          .social-card {
            min-height: 80px;
            padding: 0.8rem 0.4rem;
          }

          .social-icon {
            width: 30px;
            height: 30px;
          }

          .social-name {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 360px) {
          .contact-info-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.6rem;
          }

          .social-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
          }

          .contact-card {
            min-height: 110px;
            padding: 0.8rem 0.4rem;
          }

          .contact-value {
            font-size: 0.8rem;
          }

          .social-card {
            min-height: 75px;
            padding: 0.7rem 0.3rem;
          }

          .social-name {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;