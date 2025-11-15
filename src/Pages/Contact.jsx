// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone, FaRocket, FaSmile, FaHeart } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false
    });

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast.error("Please enter your message! 💬", {
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

    // Creative WhatsApp message templates
    const messageTemplates = [
      `Hello Pavan! 👋\n\n${message}\n\nLooking forward to your response! 🚀`,
      `Hey Pavan! ✨\n\n${message}\n\nLet's create something amazing together! 💫`,
      `Hi Pavan! 🌟\n\n${message}\n\nExcited to connect with you! 🎯`
    ];

    const randomTemplate = messageTemplates[Math.floor(Math.random() * messageTemplates.length)];
    const whatsappMessage = encodeURIComponent(randomTemplate);
    const whatsappUrl = `https://wa.me/9110413455?text=${whatsappMessage}`;

    // Show success toast with fun emoji
    toast.success("🚀 Opening WhatsApp... Get ready to connect!", {
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
      description: "Let's have a chat! 📞",
      color: "hover:bg-green-600 border-green-500",
      bgColor: "bg-green-500",
      url: "tel:+919110413455",
      animation: "fade-up"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      value: "pavanpatil2204@gmail.com",
      description: "Drop me a line! 📧",
      color: "hover:bg-blue-600 border-blue-500",
      bgColor: "bg-blue-500",
      url: "mailto:pavanpatil2204@gmail.com",
      animation: "fade-up"
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      title: "WhatsApp",
      value: "+91 91104 13455",
      description: "Instant connection! 💚",
      color: "hover:bg-green-500 border-green-400",
      bgColor: "bg-green-400",
      url: "https://wa.me/9110413455",
      animation: "fade-up"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      value: "Hargapur,Belagavi India",
      description: "Remote work ready! 🌍",
      color: "hover:bg-red-600 border-red-500",
      bgColor: "bg-red-500",
      url: "https://maps.app.goo.gl/WEtwUoSRjq7sNnFn8",
      animation: "fade-up"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/pavanpatil",
      color: "hover:bg-blue-600 border-blue-500",
      bgColor: "bg-blue-500",
      animation: "flip-left"
    },
    {
      icon: <FaGithub className="text-xl" />,
      name: "GitHub",
      url: "https://github.com/pavanpatil",
      color: "hover:bg-gray-800 border-gray-700",
      bgColor: "bg-gray-700",
      animation: "flip-left"
    },
    {
      icon: <FaTwitter className="text-xl" />,
      name: "Twitter",
      url: "https://twitter.com/pavanpatil",
      color: "hover:bg-blue-400 border-blue-400",
      bgColor: "bg-blue-400",
      animation: "flip-left"
    },
    {
      icon: <FaInstagram className="text-xl" />,
      name: "Instagram",
      url: "https://instagram.com/pavanpatil",
      color: "hover:bg-pink-600 border-pink-500",
      bgColor: "bg-pink-500",
      animation: "flip-left"
    },
    {
      icon: <SiLeetcode className="text-xl" />,
      name: "LeetCode",
      url: "https://leetcode.com/pavanpatil",
      color: "hover:bg-orange-500 border-orange-500",
      bgColor: "bg-orange-500",
      animation: "flip-left"
    },
    {
      icon: <SiCodechef className="text-xl" />,
      name: "CodeChef",
      url: "https://codechef.com/users/pavanpatil",
      color: "hover:bg-red-500 border-red-500",
      bgColor: "bg-red-500",
      animation: "flip-left"
    }
  ];

  const suggestedMessages = [
    "Hi Pavan! I'm interested in collaborating on a project. Are you available? 🚀",
    "Hello! I have an exciting opportunity I'd like to discuss with you. 💫",
    "Hey Pavan! Loved your portfolio. Let's connect and discuss potential work! ✨",
    "Hi! I need a developer for my project. Are you taking on new clients? 💻"
  ];

  const insertSuggestedMessage = (suggestion) => {
    setMessage(suggestion);
  };

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

      {/* Animated Background Elements */}
      <div className="animated-bg">
        <div className="bg-blob-1"></div>
        <div className="bg-blob-2"></div>
        <div className="bg-blob-3"></div>
      </div>

      {/* Main Content */}
      <section className="main-content">
        <div className="content-grid">
          {/* Left Section - Contact Info & Social */}
          <div className="left-section">
            {/* Profile Header */}
            <div className="profile-header" data-aos="fade-down" data-aos-delay="200">
              <div className="profile-avatar" data-aos="zoom-in" data-aos-delay="400">
                <FaSmile className="avatar-icon" />
              </div>
              <h1 className="profile-name">Pavan Patil</h1>
              <p className="profile-title">MERN Stack Developer</p>
              
            </div>

            {/* Contact Information Cards */}
            <div className="contact-info-section">
              <h2 className="section-title" data-aos="fade-right" data-aos-delay="300">
                Get In Touch 📞
              </h2>
              <div className="contact-info-grid">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.url}
                    target={contact.url.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`contact-card ${contact.color}`}
                    data-aos={contact.animation}
                    data-aos-delay={400 + index * 100}
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

                      </div>

          {/* Right Section - Message Form */}
          <div className="right-section">
            <div className="form-container" data-aos="zoom-in" data-aos-delay="300">
              <div className="form-header" data-aos="fade-down" data-aos-delay="400">
                <div className="whatsapp-icon" data-aos="bounce" data-aos-delay="600">
                  <FaWhatsapp />
                </div>
                <h2 className="form-title">Let's Chat on WhatsApp! 💬</h2>
               
              </div>

              

              <form onSubmit={handleSubmit} className="message-form">
                <div className="form-group" data-aos="fade-up" data-aos-delay="600">
                  <label htmlFor="message" className="form-label">
                    Your Awesome Message ✨
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="6"
                    className="message-textarea"
                    placeholder="Hi Pavan! I'm excited to connect with you about... 🌟"
                    maxLength="500"
                  ></textarea>
                  <div className="char-count">
                    {message.length}/500 characters {message.length > 400 && "⚠️"}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !message.trim()}
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${!message.trim() ? 'disabled' : ''}`}
                  // data-aos="fade-in"
                  data-aos-delay="700"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Launching WhatsApp... 🚀
                    </>
                  ) : (
                    <>
                      <FaRocket className="btn-icon" />
                      Redirecting to WhatsApp…
                    </>
                  )}
                </button>

                <div className="whatsapp-note" data-aos="fade-up" data-aos-delay="800">
                  <FaWhatsapp className="note-icon" />
                  <p><strong>Pro Tip:</strong> Your message will open directly in WhatsApp for instant communication. Perfect for quick collaborations! 💫</p>
                </div>
              </form>
            </div>
          </div>

          
        </div>
      </section>

      {/* Fun CTA Section */}
      <section className="cta-section" data-aos="fade-up" data-aos-delay="400">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Create Magic? ✨</h2>
          <p className="cta-description">
            Let's turn your ideas into reality. Whether it's a startup, project, or collaboration, 
            I'm excited to help you build something extraordinary! 🎯
          </p>
          <div className="cta-buttons">
            <a href="https://wa.me/9110413455" className="cta-btn primary" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
              Start Chatting Now
            </a>
            <a href="mailto:pavan@example.com" className="cta-btn secondary">
              <FaEnvelope />
              Send Email
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #0f172a 100%);
          color: #fff;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          padding: 80px 1rem;
          position: relative;
          overflow: hidden;
        }

        /* Animated Background */
        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .bg-blob-1, .bg-blob-2, .bg-blob-3 {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.1;
        }

        .bg-blob-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          top: -100px;
          right: -100px;
          animation: float 20s ease-in-out infinite;
        }

        .bg-blob-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          bottom: -50px;
          left: -50px;
          animation: float 15s ease-in-out infinite reverse;
        }

        .bg-blob-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          top: 50%;
          left: 10%;
          animation: float 25s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        /* Main Content */
        .main-content {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
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
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 25px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
        }

        .profile-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: 0.5s;
        }

        .profile-header:hover::before {
          left: 100%;
        }

        .profile-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          border: 3px solid rgba(255, 255, 255, 0.2);
        }

        .avatar-icon {
          font-size: 2rem;
          color: white;
        }

        .profile-name {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #22c55e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .profile-title {
          font-size: 1.3rem;
          color: #cbd5e1;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .profile-description {
          font-size: 1.1rem;
          color: #94a3b8;
          line-height: 1.6;
          max-width: 400px;
          margin: 0 auto;
        }

        .heart-beat {
          color: #ef4444;
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* Section Titles */
        .section-title {
          font-size: 1.8rem;
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
          gap: 1.2rem;
        }

        .contact-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          padding: 1.8rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          border: 1px solid;
          text-decoration: none;
          color: #e2e8f0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(10px);
          min-height: 160px;
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: 0.5s;
        }

        .contact-card:hover::before {
          left: 100%;
        }

        .contact-card:hover {
          transform: translateY(-8px) scale(1.02);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }

        .contact-card:hover .contact-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .contact-content {
          flex: 1;
          width: 100%;
        }

        .contact-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #fff;
        }

        .contact-value {
          font-size: 1rem;
          color: #667eea;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .contact-description {
          color: #94a3b8;
          font-size: 0.9rem;
          margin: 0;
        }

        /* Social Media Section */
        .social-section {
          margin-bottom: 2rem;
        }

        .social-section.mobile-social {
          margin-top: 3rem;
          grid-column: 1 / -1;
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
        }

        .social-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.8rem;
          padding: 1.2rem 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 15px;
          border: 1px solid;
          text-decoration: none;
          color: #e2e8f0;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(10px);
          min-height: 100px;
        }

        .social-card:hover {
          transform: translateY(-5px) scale(1.05);
          background: rgba(255, 255, 255, 0.08);
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1rem;
          transition: transform 0.3s ease;
        }

        .social-card:hover .social-icon {
          transform: scale(1.2) rotate(10deg);
        }

        .social-name {
          font-weight: 600;
          font-size: 0.75rem;
          line-height: 1.2;
        }

        /* Form Section */
        .right-section {
          position: relative;
        }

        .form-container {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 30px;
          padding: 3rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          position: sticky;
          top: 2rem;
        }

        .form-header {
          text-align: center;
          margin-bottom: 2.5rem;
          position: relative;
        }

        .whatsapp-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2.5rem;
          color: white;
          box-shadow: 0 15px 30px rgba(34, 197, 94, 0.4);
        }

        .form-title {
          font-size: 2rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        .form-subtitle {
          color: #94a3b8;
          font-size: 1rem;
          line-height: 1.5;
        }

        /* Suggestions Section */
        .suggestions-section {
          margin-bottom: 2rem;
        }

        .suggestions-title {
          font-size: 1.1rem;
          color: #e2e8f0;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .suggestions-grid {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .suggestion-btn {
          padding: 1rem 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #cbd5e1;
          font-size: 0.85rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          line-height: 1.4;
        }

        .suggestion-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #667eea;
          transform: translateX(5px);
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
          min-height: 150px;
          font-family: inherit;
          line-height: 1.5;
        }

        .message-textarea:focus {
          outline: none;
          border-color: #22c55e;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
          transform: translateY(-2px);
        }

        .message-textarea::placeholder {
          color: #64748b;
        }

        .char-count {
          text-align: right;
          color: #64748b;
          font-size: 0.8rem;
          margin-top: 0.5rem;
          font-weight: 500;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1.4rem 2rem;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
          border: none;
          border-radius: 15px;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          margin-top: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .submit-btn:hover:not(.submitting):not(.disabled) {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px rgba(34, 197, 94, 0.5);
          background: linear-gradient(135deg, #16a34a, #22c55e);
        }

        .submit-btn.submitting {
          opacity: 0.8;
          cursor: not-allowed;
          transform: scale(0.98);
        }

        .submit-btn.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: #64748b;
          transform: none;
        }

        .btn-icon {
          font-size: 1.3rem;
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
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(34, 197, 94, 0.1);
          border-radius: 15px;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .note-icon {
          color: #22c55e;
          font-size: 1.5rem;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .whatsapp-note p {
          color: #cbd5e1;
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* CTA Section */
        .cta-section {
          padding: 5rem 2rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
          margin-top: 4rem;
          border-radius: 30px;
          position: relative;
          overflow: hidden;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        .cta-description {
          font-size: 1.2rem;
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
          padding: 1.3rem 2.5rem;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          font-size: 1.1rem;
        }

        .cta-btn.primary {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
          box-shadow: 0 15px 35px rgba(34, 197, 94, 0.4);
        }

        .cta-btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
          border: 2px solid rgba(102, 126, 234, 0.5);
          backdrop-filter: blur(10px);
        }

        .cta-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.6);
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

          .form-container {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .contact-page {
            padding: 1rem;
          }

          .profile-name {
            font-size: 2rem;
          }

          .profile-title {
            font-size: 1.1rem;
          }

          .contact-info-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }

          .contact-card {
            padding: 1.5rem 0.8rem;
            min-height: 140px;
          }

          .contact-icon {
            width: 50px;
            height: 50px;
          }

          .contact-title {
            font-size: 1rem;
          }

          .contact-value {
            font-size: 0.9rem;
          }

          .contact-description {
            font-size: 0.8rem;
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
            font-size: 2rem;
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

          /* Mobile specific social section */
          .social-section.mobile-social {
            order: 3;
            margin-top: 2rem;
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
            padding: 2rem 1.5rem;
          }

          .profile-name {
            font-size: 1.8rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .form-title {
            font-size: 1.4rem;
          }

          .cta-section {
            padding: 3rem 1rem;
            margin-top: 2rem;
          }

          .cta-title {
            font-size: 1.8rem;
          }

          .contact-card {
            min-height: 130px;
            padding: 1.2rem 0.5rem;
          }

          .contact-icon {
            width: 45px;
            height: 45px;
          }

          .social-card {
            min-height: 85px;
            padding: 0.8rem 0.4rem;
          }

          .social-icon {
            width: 32px;
            height: 32px;
          }

          .social-name {
            font-size: 0.7rem;
          }

          .suggestions-grid {
            gap: 0.6rem;
          }

          .suggestion-btn {
            padding: 0.8rem 1rem;
            font-size: 0.8rem;
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
            min-height: 120px;
            padding: 1rem 0.4rem;
          }

          .contact-value {
            font-size: 0.85rem;
          }

          .social-card {
            min-height: 80px;
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