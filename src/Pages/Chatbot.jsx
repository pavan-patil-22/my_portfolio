import { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaCompress, FaUser, FaBriefcase, FaGraduationCap, FaCode, FaProjectDiagram } from "react-icons/fa";

const API_KEY = process.env.REACT_APP_GROQ_API_KEY;
const API_URL = process.env.REACT_APP_GROQ_API_URL || "https://api.groq.com/openai/v1/chat/completions";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const chatContainerRef = useRef(null);
    const viewportHeight = useRef(window.innerHeight);

    // Quick action buttons data
    const quickActions = [
        {
            id: 1,
            label: "Experience",
            icon: <FaBriefcase size={14} />,
            question: "What is Pavan's work experience?",
            color: "#667eea"
        },
        {
            id: 2,
            label: "Education",
            icon: <FaGraduationCap size={14} />,
            question: "What is Pavan's educational background?",
            color: "#764ba2"
        },
        {
            id: 3,
            label: "Skills",
            icon: <FaCode size={14} />,
            question: "What technical skills does Pavan have?",
            color: "#667eea"
        },
        {
            id: 4,
            label: "Projects",
            icon: <FaProjectDiagram size={14} />,
            question: "What projects has Pavan worked on?",
            color: "#764ba2"
        }
    ];

    const RESUME_CONTEXT = `
               
Candidate Name: Pavan I Patil
Current Status:Currently pursuing a Master of Computer Applications (MCA) at Presidency College (Autonomous), Bengaluru.
Primary Focus: Full Stack Web Development and AI-based Applications

Contact Information:
- Email ID: pavanpatil2204@gmail.com
- Phone Number: 9110413455

Professional Overview:
Computer Applications graduate currently pursuing a Master of Computer Applications (MCA), with hands-on industry experience as a MERN Stack Intern. Proficient in full stack development, backend integration, and AI-driven systems. Strong programming foundation in C, Java, Python, and JavaScript, with practical experience in machine learning, model training, Flask-based applications, and live MERN stack projects.

Academic Background:
- Master of Computer Applications (Ongoing)
  Presidency College, Kempapura Hebbal, Bengaluru
  Duration: 2025 – 2027

- Bachelor of Computer Applications
  SDVS'S BCA College Sankeshwar
  Duration: 2022 – 2025
  CGPA: 8.42

- Pre-University Course
  SJPN PU College, Nidasoshi
  Duration: 2020 – 2022
  Score: 63.3%

- Secondary School Education,SSLC
  Bharatesh PU College High School, Bagewadi
  Year: 2020
  Score: 76.68%

Industry Experience:
Position: Web Developer Intern  
Organization: Ligand Software Solutions  
Period: February 2025 – Present

Key Responsibilities:
- Developing web applications using the MERN stack
- Building AI-powered systems using Flask
- Designing responsive and interactive user interfaces
- Implementing RESTful APIs and backend logic
- Participating in real-time production projects

Project Portfolio:

1.Seek_AI – AI-Based Missing person  Detection and complaint management Platform  
2. StegoFileShare - A steganography-based secure file sharing system.
3.HeartScan_AI - An AI-powered Heart attack predication using retinal. 
-live project
4. Ligand Software Solutions – Official Corporate Website  
5. Gururaj Foundation – NGO Information Website  
6.SDVS'S BCA College - Official College Website 
7. Ligand Work-Space – Learning Management System (In Progress)

Project Description:

Seek-AI – AI-Powered Surveillance and Complaint Management System
	An intelligent surveillance and missing person detection platform designed to improve public safety through AI-driven facial recognition and real-time CCTV analysis.

Core Highlights:
-Enables citizens to register missing person complaints with image uploads
-Uses AI-based facial recognition to scan live CCTV feeds for matches
-Sends instant alerts with location details and visual evidence upon detection
-Provides an admin dashboard for verification, monitoring, and management
-Ensures secure handling of sensitive complaint and user data

Technologies Used:
-React, Node.js, Express.js, MongoDB, Python,OpenCV, YOLO, DeepFace, TensorFlow

HeartScan AI – AI-Powered Heart Attack Risk Prediction System
	A deep learning–based healthcare application that predicts cardiovascular risk by analyzing retinal scan images using AI.
Core Highlights:
-Uses deep learning models to analyze retinal images for heart risk prediction
-Provides non-invasive, AI-assisted health assessment
-Generates detailed prediction reports with visual insights
-Supports secure upload and processing of medical images
-Designed with a user-friendly interface for patients and medical professionals

Technologies Used:
-React, Python, Flask, TensorFlow, Node.js, MongoDB, CSS




StegoFileShare – Steganography-Based Secure File Sharing System
	A secure web-based file sharing solution that hides confidential data inside images using steganography and advanced access control mechanisms.

Core Highlights:
-Embeds secret files within images to prevent direct data exposure
-Protects files using custom password-based authentication
-Automatically blocks users after multiple incorrect access attempts
-Captures intruder images using device camera for admin review
-Includes an admin panel for monitoring user activity and security events

Technologies Used:
-React, Node.js, Express.js, MongoDB, Python (Steganography), HTML, OpenCV

Ligand Software Solutions – Corporate Website
Official business website built with a modern MERN architecture.

Features:
- Dynamic content management via admin dashboard
- Dark-themed UI with animations and custom cursor
- Database-driven content updates without code modification

Technology Stack:
React.js, Node.js, Express.js, MongoDB

Gururaj Foundation – NGO Website
A responsive website designed to present the NGO’s mission and initiatives.

Features:
- Simple and accessible user interface
- Optimized for mobile, tablet, and desktop
- Informative content layout for social awareness

Technologies:
React.js, HTML, CSS, JavaScript

SDVS'S BCA COLLAGE Sankeshwar – official College Website 
Official College website built with a modern MERN architecture.

Features:
- Dynamic content management via admin dashboard
- professional and responsive UI With own trained data chatbot
- Database-driven content updates without code modification

Technology Stack:
React.js, Node.js, Express.js, MongoDB


Ligand Work-Space – Learning Management System
A comprehensive LMS platform currently under development.

Key Modules:
- Role-based access (Admin, Trainer, Student)
- Secure login and authorization
- Attendance tracking system
- Assignment submission and evaluation
- Fee management and payment records
- Project grouping and monitoring
- Centralized admin control panel

Technology Stack:
React.js, Node.js, Express.js, MongoDB
Frontend Deployment: Vercel

Current Status:
Project is under active development with ongoing feature additions.

Important Note:
- GitHub repository links must not be shared for any project.

Technical Skills:
React.js, Node.js, Express.js, MongoDB, JavaScript, Python, Java, C, SQL, Flask, REST APIs, Git/GitHub, Deployment, Machine Learning Fundamentals



AIM/GOAL:
Career Aim / Objective:
To build a career as a Full Stack Developer and AI Engineer, delivering scalable and impactful software solutions through continuous learning.

Languages Known:
English, Hindi, Kannada

Online Profiles:
- LinkedIn: https://www.linkedin.com/in/pavanpatil22/
- GitHub: https://github.com/pavan-patil-22
- LeetCode: https://leetcode.com/u/pavan-patil-22/
- Portfolio Website: https://pavanpatil.vercel.app/

Personal Information:
Residential Address: Haragapur, Sankeshwar, Belagavi District, Karnataka
Date of Birth: 22 September 2004

certifications
-Meta’s Programming in Python course on Coursera.
-i get LeetCode 50 Days Badge –2025 
- Academic project "Seek-AI" at Ligand Software Solutions
Interaction Rules:

Interaction Rules:
1. Respond strictly using only the information mentioned in this context not more like over content act like a chatbot .
2. Do not answer questions unrelated to pavan's academic, professional, or project profile.
   If asked, respond with:
   "Sorry, I am not able to respond. Please ask questions related to Pavan."
3. If asked about projects, only provide project names without explanation.
4. Provide detailed explanation only when a specific project name is explicitly mentioned.
5. Do not combine multiple project explanations unless requested.
6. Never share GitHub links for projects.
7.In project expliantion don't add other content untill user ask send this only
8. whene user ask who developed you than say Pavan 
9/ if any greeting comes for use add proffetional  coding realted short wish again as a respose with emojis and thank you or same to you realted to user question
9. If information is missing, respond with:
   "Sorry, this information is not available. Please contact PAVAN at 9110413455."

    `;

    // Detect mobile and keyboard visibility
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
            viewportHeight.current = window.innerHeight;
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        // Detect keyboard on mobile
        const handleResize = () => {
            const heightDiff = Math.abs(viewportHeight.current - window.innerHeight);
            setKeyboardVisible(heightDiff > 100 && isMobile);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, keyboardVisible]);

    useEffect(() => {
        if (isOpen && !isMinimized && inputRef.current) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [isOpen, isMinimized]);

    const sendMessage = async (messageContent = input) => {
        if ((!messageContent.trim() && !input.trim()) || loading) return;

        const userMessage = { role: "user", content: messageContent };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setLoading(true);
        setShowWelcome(false);

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [
                        { role: "system", content: RESUME_CONTEXT },
                        ...updatedMessages,
                    ],
                    temperature: 0.2,
                    max_tokens: 512,
                }),
            });

            if (!res.ok) throw new Error("Groq request failed");
            
            const data = await res.json();
            const botReply = data.choices[0].message.content;

            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: botReply },
            ]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [
                ...prev,
                { 
                    role: "assistant", 
                    content: "Sorry, I encountered an error. Please try again." 
                },
            ]);
        } finally {
            setLoading(false);
            setTimeout(() => {
                inputRef.current?.focus();
                scrollToBottom();
            }, 100);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey && !loading) {
            e.preventDefault();
            sendMessage();
        }
    };

    // Handle quick action button click
    const handleQuickAction = (question) => {
        sendMessage(question);
    };

    const clearChat = () => {
        setMessages([]);
        setShowWelcome(true);
        setTimeout(() => {
            inputRef.current?.focus();
            scrollToBottom();
        }, 100);
    };

    if (isMinimized) {
        return (
            <div 
                style={styles.minimizedContainer} 
                onClick={() => setIsMinimized(false)}
            >
                <div style={styles.minimizedContent}>
                    <FaRobot style={styles.minimizedIcon} />
                    <span style={styles.minimizedText}>Ask about Pavan</span>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Floating Avatar */}
            {!isOpen && (
                <div 
                    style={styles.avatarContainer}
                    onMouseEnter={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                    onClick={() => {
                        setIsOpen(true);
                        setTimeout(() => {
                            inputRef.current?.focus();
                        }, 200);
                    }}
                >
                    <div style={styles.avatar}>
                        <FaRobot style={styles.avatarIcon} />
                    </div>
                    {isVisible && !isMobile && (
                        <div style={styles.speechBubble}>
                            Hi! Ask me about Pavan.
                        </div>
                    )}
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div 
                    ref={chatContainerRef}
                    style={{
                        ...(isMobile ? styles.mobileChatContainer : styles.chatContainer),
                        ...(isMobile && keyboardVisible && styles.keyboardOpen)
                    }}
                >
                    <div style={styles.chatWrapper}>
                        {/* Header */}
                        <div style={styles.chatHeader}>
                            <div style={styles.headerLeft}>
                                <div style={styles.avatarCircle}>
                                    <FaRobot style={styles.headerIcon} />
                                </div>
                                <div>
                                    <h3 style={styles.headerTitle}>Pavan's AI Assistant</h3>
                                    <p style={styles.headerSubtitle}>Ask about skills, projects & experience</p>
                                </div>
                            </div>
                            <div style={styles.headerActions}>
                                <button 
                                    onClick={() => setIsMinimized(true)}
                                    style={styles.iconButton}
                                    title="Minimize"
                                >
                                    <FaCompress size={14} />
                                </button>
                                <button 
                                    onClick={clearChat}
                                    style={styles.clearButton}
                                    title="Clear Chat"
                                >
                                    Clear
                                </button>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    style={styles.closeButton}
                                    title="Close"
                                >
                                    <FaTimes size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div style={{
                            ...styles.messagesContainer,
                            ...(isMobile && keyboardVisible && styles.messagesContainerKeyboard)
                        }}>
                            {showWelcome && (
                                <div style={styles.welcomeMessage}>
                                    <div style={styles.botMessageWrapper}>
                                        <div style={styles.messageAvatar}>
                                            <FaRobot style={styles.botAvatarIcon} />
                                        </div>
                                        <div style={styles.botMessage}>
                                            <div style={styles.messageHeader}>
                                                <strong>AI Assistant</strong>
                                            </div>
                                            <div style={styles.messageText}>
                                                <p>Hello! I'm Pavan's AI assistant. You can ask me about:</p>
                                                <p>Try asking: "What projects has Pavan worked on?"</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {messages.map((msg, i) => (
                                <div 
                                    key={i} 
                                    style={msg.role === "user" ? styles.userMessageWrapper : styles.botMessageWrapper}
                                >
                                    {msg.role === "assistant" && (
                                        <div style={styles.messageAvatar}>
                                            <FaRobot style={styles.botAvatarIcon} />
                                        </div>
                                    )}
                                    <div style={msg.role === "user" ? styles.userMessage : styles.botMessage}>
                                        <div style={styles.messageHeader}>
                                            <strong>{msg.role === "user" ? "You" : "AI Assistant"}</strong>
                                        </div>
                                        <div style={styles.messageText}>
                                            {msg.content.split('\n').map((line, idx) => (
                                                <p key={idx} style={styles.messageParagraph}>
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    {msg.role === "user" && (
                                        <div style={styles.messageAvatar}>
                                            <FaUser style={styles.userAvatarIcon} />
                                        </div>
                                    )}
                                </div>
                            ))}
                            
                            {loading && (
                                <div style={styles.botMessageWrapper}>
                                    <div style={styles.messageAvatar}>
                                        <FaRobot style={styles.botAvatarIcon} />
                                    </div>
                                    <div style={styles.botMessage}>
                                        <div style={styles.typingContainer}>
                                            <div style={styles.typingIndicator}>
                                                <span style={styles.typingDot}></span>
                                                <span style={styles.typingDot}></span>
                                                <span style={styles.typingDot}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} style={styles.bottomSpacer} />
                        </div>

                        {/* Quick Action Buttons */}
                        <div style={{
                            ...styles.quickActionsContainer,
                            ...(isMobile && keyboardVisible && styles.hiddenOnKeyboard)
                        }}>
                            {quickActions.map((action) => (
                                <button
                                    key={action.id}
                                    onClick={() => handleQuickAction(action.question)}
                                    style={{
                                        ...styles.quickActionButton,
                                        background: action.color
                                    }}
                                    disabled={loading}
                                    title={action.question}
                                >
                                    {action.icon}
                                    <span style={styles.quickActionLabel}>{action.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div style={{
                            ...styles.inputContainer,
                            ...(isMobile && keyboardVisible && styles.inputContainerKeyboard)
                        }}>
                            <input
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask about Pavan's skills, projects, education..."
                                style={styles.input}
                                disabled={loading}
                            />
                            <button
                                onClick={() => sendMessage()}
                                style={{
                                    ...styles.sendButton,
                                    opacity: (loading || !input.trim()) ? 0.6 : 1
                                }}
                                disabled={loading || !input.trim()}
                            >
                                {loading ? "..." : "Send"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                }

                @keyframes typing {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                    100% { transform: translateY(0px); }
                }

                .typing-dot {
                    animation: typing 1s infinite ease-in-out;
                }

                /* Mobile optimization */
                @media (max-width: 768px) {
                    input, button {
                        font-size: 16px; /* Prevents zoom on iOS */
                    }
                }
            `}</style>
        </>
    );
};

const styles = {
    // Floating Avatar
    avatarContainer: {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 10000,
        cursor: 'pointer',
        animation: 'float 3s ease-in-out infinite',
    },
    avatar: {
        width: '90px',
        height: '60px',
        borderRadius: '30px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
        border: '3px solid #fff'
    },
    avatarIcon: { 
        width: '28px', 
        height: '28px' 
    },
    speechBubble: {
        position: 'absolute',
        bottom: '70px',
        right: '0',
        padding: '10px 14px',
        borderRadius: '12px',
        background: '#fff',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        color: '#333',
        fontSize: '14px',
        maxWidth: '250px',
        animation: 'fadeIn 0.3s ease-out',
        border: '1px solid #eee'
    },

    // Minimized State
    minimizedContainer: {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 10000,
        cursor: 'pointer',
    },
    minimizedContent: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 16px',
        borderRadius: '30px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
        border: '2px solid #fff'
    },
    minimizedIcon: { 
        width: '18px', 
        height: '18px' 
    },
    minimizedText: { 
        fontSize: '14px', 
        fontWeight: '600' 
    },

    // Chat Container
    chatContainer: {
        position: 'fixed',
        right: '30px',
        bottom: '10px',
        width: '400px',
        height: '600px',
        maxHeight: '70vh',
        zIndex: 10000,
        animation: 'fadeIn 0.3s ease-out'
    },
    mobileChatContainer: {
        position: 'fixed',
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        zIndex: 10000,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'flex-end',
    },
    keyboardOpen: {
        top: '0',
        background: 'rgba(0, 0, 0, 0.7)',
    },
    chatWrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#fff',
        borderRadius: '20px 20px 0 0',
        boxShadow: '0 -5px 25px rgba(0,0,0,0.2)',
        overflow: 'hidden',
        width: '100%',
        maxHeight: '100%',
    },

    // Header
    chatHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        flexShrink: 0,
    },
    headerLeft: {
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flex: 1,
    },
    avatarCircle: {
        width: '40px',
        height: '40px',
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        flexShrink: 0,
    },
    headerIcon: { 
        width: '20px', 
        height: '20px' 
    },
    headerTitle: { 
        margin: '0', 
        fontSize: '16px', 
        fontWeight: '700',
        lineHeight: '1.2',
    },
    headerSubtitle: { 
        margin: '2px 0 0 0', 
        fontSize: '11px', 
        opacity: '0.9',
        lineHeight: '1.2',
    },
    headerActions: {
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        flexShrink: 0,
    },
    iconButton: {
        background: 'rgba(255, 255, 255, 0.2)',
        border: 'none',
        width: '34px',
        height: '34px',
        borderRadius: '17px',
        cursor: 'pointer',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.2s',
        flexShrink: 0,
    },
    clearButton: {
        background: 'rgba(255, 255, 255, 0.2)',
        border: 'none',
        padding: '6px 12px',
        borderRadius: '17px',
        cursor: 'pointer',
        color: '#fff',
        fontSize: '12px',
        fontWeight: '600',
        transition: 'background 0.2s',
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    closeButton: {
        background: 'rgba(255, 255, 255, 0.2)',
        border: 'none',
        width: '34px',
        height: '34px',
        borderRadius: '17px',
        cursor: 'pointer',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.2s',
        flexShrink: 0,
    },

    // Messages Area
    messagesContainer: {
        padding: '15px',
        overflowY: 'auto',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        minHeight: 0,
    },
    messagesContainerKeyboard: {
        maxHeight: 'calc(100vh - 300px)',
    },
    welcomeMessage: {
        marginBottom: '10px',
    },
    
    // Message Layout - User messages on RIGHT, AI on LEFT
    botMessageWrapper: {
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        maxWidth: '90%',
    },
    userMessageWrapper: {
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
        alignSelf: 'flex-end',
        flexDirection: 'row-reverse',
        maxWidth: '90%',
    },
    
    // Message Bubbles
    botMessage: {
        background: '#f0f2ff',
        padding: '12px 16px',
        borderRadius: '18px',
        borderTopLeftRadius: '6px',
        maxWidth: '100%',
        wordBreak: 'break-word',
    },
    userMessage: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        padding: '12px 16px',
        borderRadius: '18px',
        borderTopRightRadius: '6px',
        maxWidth: '100%',
        wordBreak: 'break-word',
    },
    
    // Message Content
    messageAvatar: {
        width: '32px',
        height: '32px',
        borderRadius: '16px',
        background: '#f0f2ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: '0',
        marginTop: '3px',
    },
    botAvatarIcon: {
        color: '#667eea',
        width: '16px',
        height: '16px',
    },
    userAvatarIcon: {
        color: '#764ba2',
        width: '16px',
        height: '16px',
    },
    messageHeader: {
        marginBottom: '4px',
        fontSize: '12px',
        opacity: '0.8',
    },
    messageText: {
        fontSize: '14px',
        lineHeight: '1.4',
    },
    messageParagraph: {
        margin: '0 0 6px 0',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
    },
    
    // Typing Indicator
    typingContainer: {
        padding: '8px 12px',
    },
    typingIndicator: {
        display: 'flex',
        gap: '6px',
        alignItems: 'center',
    },
    typingDot: {
        display: 'inline-block',
        width: '8px',
        height: '8px',
        borderRadius: '4px',
        background: '#667eea',
        animation: 'typing 1s infinite ease-in-out',
    },
    bottomSpacer: {
        height: '10px',
        flexShrink: 0,
    },

    // Quick Action Buttons
    quickActionsContainer: {
        display: 'flex',
        gap: '8px',
        padding: '10px 15px',
        background: '#fafafa',
        borderTop: '1px solid #eee',
        borderBottom: '1px solid #eee',
        overflowX: 'auto',
        flexShrink: 0,
    },
    hiddenOnKeyboard: {
        display: 'none',
    },
    quickActionButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '8px 12px',
        borderRadius: '18px',
        border: 'none',
        color: '#fff',
        fontSize: '12px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s',
        whiteSpace: 'nowrap',
        flexShrink: 0,
    },
    quickActionLabel: {
        marginLeft: '4px',
    },

    // Input Area
    inputContainer: {
        display: 'flex',
        padding: '15px',
        gap: '10px',
        background: '#fff',
        borderTop: '1px solid #eee',
        flexShrink: 0,
    },
    inputContainerKeyboard: {
        paddingBottom: 'calc(15px + env(safe-area-inset-bottom, 0px))',
    },
    input: {
        flex: '1',
        padding: '12px 16px',
        borderRadius: '22px',
        border: '2px solid #e0e0e0',
        fontSize: '15px',
        outline: 'none',
        transition: 'border 0.2s',
        background: '#fff',
        minHeight: '46px',
    },
    sendButton: {
        padding: '12px 20px',
        borderRadius: '22px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '600',
        transition: 'transform 0.2s, opacity 0.2s',
        minWidth: '70px',
        flexShrink: 0,
    }
};

export default Chatbot;