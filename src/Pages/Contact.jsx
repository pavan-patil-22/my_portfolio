// import React, { useState, useEffect, useRef, useCallback } from "react";

// /* ══════════════════════════════════════════
//    SVG ICONS — zero react-icons dependency
// ══════════════════════════════════════════ */
// const I = {
//   Phone:     ({ s=18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
//   Mail:      ({ s=18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
//   WhatsApp:  ({ s=18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
//   Location:  ({ s=18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
//   LinkedIn:  ({ s=18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
//   Github:    ({ s=18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
//   LeetCode:  ({ s=18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>,
//   Send:      ({ s=18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
//   Rocket:    ({ s=16 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
//   Check:     ({ s=14 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
//   Spinner:   ({ s=18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" strokeOpacity="0.25"/><path d="M12 2a10 10 0 0110 10" strokeLinecap="round"/></svg>,
//   Star:      ({ s=12 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
//   User:      ({ s=24 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
// };

// /* ══════════════════════════════════════════
//    useInView hook
// ══════════════════════════════════════════ */
// function useInView(ref, threshold = 0.1) {
//   const [vis, setVis] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);
//   return vis;
// }

// /* ══════════════════════════════════════════
//    PARTICLE CANVAS
// ══════════════════════════════════════════ */
// function ParticleCanvas() {
//   const ref = useRef(null);
//   useEffect(() => {
//     const c = ref.current; if (!c) return;
//     const ctx = c.getContext("2d");
//     let w = c.width = window.innerWidth, h = c.height = window.innerHeight;
//     const pts = Array.from({ length: 40 }, () => ({
//       x: Math.random() * w, y: Math.random() * h,
//       vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
//       r: Math.random() * 1.4 + 0.4, o: Math.random() * 0.35 + 0.08,
//       hue: Math.random() > 0.5 ? "#4f8cff" : "#b06bff",
//     }));
//     let raf;
//     const draw = () => {
//       ctx.clearRect(0, 0, w, h);
//       pts.forEach(p => {
//         p.x += p.vx; p.y += p.vy;
//         if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
//         if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
//         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = p.hue + Math.round(p.o * 255).toString(16).padStart(2, "0");
//         ctx.fill();
//       });
//       pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
//         const d = Math.hypot(a.x - b.x, a.y - b.y);
//         if (d < 100) {
//           ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
//           ctx.strokeStyle = "#4f8cff" + Math.round((1 - d / 100) * 0.09 * 255).toString(16).padStart(2, "0");
//           ctx.lineWidth = 0.6; ctx.stroke();
//         }
//       }));
//       raf = requestAnimationFrame(draw);
//     };
//     draw();
//     const onResize = () => { w = c.width = window.innerWidth; h = c.height = window.innerHeight; };
//     window.addEventListener("resize", onResize);
//     return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
//   }, []);
//   return <canvas ref={ref} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, width: "100%", height: "100%" }} />;
// }

// /* ══════════════════════════════════════════
//    TOAST (inline, no library)
// ══════════════════════════════════════════ */
// function Toast({ msg, type, onDone }) {
//   const [vis, setVis] = useState(true);
//   useEffect(() => {
//     const t1 = setTimeout(() => setVis(false), 2800);
//     const t2 = setTimeout(onDone, 3200);
//     return () => { clearTimeout(t1); clearTimeout(t2); };
//   }, []);
//   return (
//     <div style={{
//       position: "fixed", top: "1.5rem", right: "1.5rem", zIndex: 9999,
//       background: type === "success" ? "rgba(6,214,160,0.12)" : "rgba(255,107,138,0.12)",
//       border: `1px solid ${type === "success" ? "rgba(6,214,160,0.35)" : "rgba(255,107,138,0.35)"}`,
//       color: type === "success" ? "#06d6a0" : "#ff6b8a",
//       borderRadius: "16px", padding: "0.9rem 1.4rem",
//       fontFamily: "'Space Mono', monospace", fontSize: "0.68rem",
//       fontWeight: 700, letterSpacing: "0.05em",
//       backdropFilter: "blur(20px)",
//       display: "flex", alignItems: "center", gap: "0.6rem",
//       maxWidth: "320px",
//       opacity: vis ? 1 : 0,
//       transform: vis ? "translateX(0)" : "translateX(30px)",
//       transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
//       boxShadow: type === "success" ? "0 8px 30px rgba(6,214,160,0.2)" : "0 8px 30px rgba(255,107,138,0.2)",
//     }}>
//       <span style={{ fontSize: "1rem" }}>{type === "success" ? "✓" : "!"}</span>
//       {msg}
//     </div>
//   );
// }

// /* ══════════════════════════════════════════
//    CONTACT DATA
// ══════════════════════════════════════════ */
// const CONTACT_INFO = [
//   { icon: <I.Phone s={18}/>, title: "Phone", value: "+91 91104 13455", sub: "Call anytime", color: "#06d6a0", url: "tel:+919110413455" },
//   { icon: <I.Mail s={18}/>, title: "Email", value: "pavanpatil2204@gmail.com", sub: "Usually replies in 24h", color: "#4f8cff", url: "mailto:pavanpatil2204@gmail.com" },
//   { icon: <I.WhatsApp s={18}/>, title: "WhatsApp", value: "+91 91104 13455", sub: "Instant messaging", color: "#25d366", url: "https://wa.me/9110413455" },
//   { icon: <I.Location s={18}/>, title: "Location", value: "Hargapur, Belagavi", sub: "Remote work ready", color: "#ff6b8a", url: "https://maps.app.goo.gl/WEtwUoSRjq7sNnFn8" },
// ];

// const SOCIALS = [
//   { icon: <I.LinkedIn s={17}/>, name: "LinkedIn", color: "#0a66c2", url: "https://www.linkedin.com/in/pavan-patil-279183369/" },
//   { icon: <I.Github s={17}/>, name: "GitHub", color: "#e8eaf6", url: "https://github.com/pavan-patil-22" },
//   { icon: <I.WhatsApp s={17}/>, name: "WhatsApp", color: "#25d366", url: "https://wa.me/9110413455" },
//   { icon: <I.LeetCode s={17}/>, name: "LeetCode", color: "#ffa116", url: "https://leetcode.com/u/pavan-patil-22/" },
//   { icon: <I.Mail s={17}/>, name: "Email", color: "#4f8cff", url: "mailto:pavanpatil2204@gmail.com" },
//   { icon: <I.Location s={17}/>, name: "Location", color: "#ff6b8a", url: "https://maps.app.goo.gl/WEtwUoSRjq7sNnFn8" },
// ];

// const QUICK_MSGS = [
//   "Hi Pavan! I'm interested in collaborating on a project. Are you available?",
//   "Hello! I have an exciting opportunity I'd like to discuss with you.",
// ];

// /* ══════════════════════════════════════════
//    CONTACT CARD
// ══════════════════════════════════════════ */
// function ContactCard({ data, idx }) {
//   const ref = useRef(null);
//   const vis = useInView(ref);
//   const [hov, setHov] = useState(false);
//   const cardRef = useRef(null);

//   const tilt = (e) => {
//     if (!cardRef.current) return;
//     const r = cardRef.current.getBoundingClientRect();
//     const rx = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * 8;
//     const ry = ((e.clientX - r.left - r.width / 2) / (r.width / 2)) * -8;
//     cardRef.current.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px) scale(1.03)`;
//   };
//   const resetTilt = () => {
//     if (cardRef.current) cardRef.current.style.transform = "perspective(700px) rotateX(0) rotateY(0) translateY(0) scale(1)";
//     setHov(false);
//   };

//   return (
//     <div ref={ref} style={{
//       opacity: vis ? 1 : 0,
//       transform: vis ? "translateY(0)" : "translateY(24px)",
//       transition: `opacity 0.65s cubic-bezier(.4,0,.2,1) ${idx * 90}ms, transform 0.65s cubic-bezier(.4,0,.2,1) ${idx * 90}ms`,
//     }}>
//       <a
//         ref={cardRef}
//         href={data.url}
//         target={data.url.startsWith("http") ? "_blank" : "_self"}
//         rel="noopener noreferrer"
//         onMouseEnter={() => setHov(true)}
//         onMouseMove={tilt}
//         onMouseLeave={resetTilt}
//         style={{
//           display: "flex", flexDirection: "column", alignItems: "center",
//           textAlign: "center", gap: "0.8rem", padding: "1.6rem 1rem",
//           background: hov ? "rgba(15,22,50,0.95)" : "rgba(11,16,35,0.65)",
//           border: `1px solid ${hov ? data.color + "55" : "rgba(255,255,255,0.08)"}`,
//           borderRadius: "20px", textDecoration: "none", color: "#e8eaf6",
//           transition: "background 0.3s, border 0.3s",
//           backdropFilter: "blur(20px)", position: "relative", overflow: "hidden",
//           boxShadow: hov ? `0 20px 50px ${data.color}18` : "none",
//           transformStyle: "preserve-3d",
//           transitionProperty: "background, border, box-shadow",
//         }}
//       >
//         {/* Shimmer */}
//         <div style={{
//           position: "absolute", inset: 0, pointerEvents: "none",
//           background: "linear-gradient(115deg,transparent 40%,rgba(255,255,255,0.06) 50%,transparent 60%)",
//           transform: hov ? "translateX(100%)" : "translateX(-100%)",
//           transition: "transform 0.6s ease",
//         }} />
//         {/* Top glow line */}
//         <div style={{
//           position: "absolute", top: 0, left: "20%", right: "20%", height: "1px",
//           background: `linear-gradient(90deg, transparent, ${data.color}88, transparent)`,
//           opacity: hov ? 1 : 0, transition: "opacity 0.3s",
//         }} />

//         {/* Icon */}
//         <div style={{
//           width: "52px", height: "52px", borderRadius: "15px",
//           background: `linear-gradient(135deg, ${data.color}28, ${data.color}10)`,
//           border: `1px solid ${data.color}44`,
//           display: "flex", alignItems: "center", justifyContent: "center",
//           color: data.color,
//           boxShadow: hov ? `0 8px 20px ${data.color}30` : "none",
//           transition: "all 0.3s",
//           transform: hov ? "scale(1.1) rotate(-4deg)" : "scale(1)",
//         }}>{data.icon}</div>

//         <div>
//           <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.85rem", fontWeight: 800, color: "#e8eaf6", marginBottom: "0.25rem" }}>{data.title}</div>
//           <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.6rem", fontWeight: 700, color: data.color, marginBottom: "0.2rem", wordBreak: "break-all" }}>{data.value}</div>
//           <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "0.75rem", color: "#6b7db3" }}>{data.sub}</div>
//         </div>
//       </a>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════
//    SOCIAL PILL
// ══════════════════════════════════════════ */
// function SocialPill({ data, idx }) {
//   const [hov, setHov] = useState(false);
//   return (
//     <a
//       href={data.url} target="_blank" rel="noopener noreferrer"
//       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
//       style={{
//         display: "flex", alignItems: "center", gap: "0.55rem",
//         fontFamily: "'Space Mono',monospace", fontSize: "0.62rem",
//         fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
//         background: hov ? `${data.color}18` : "rgba(255,255,255,0.04)",
//         color: hov ? data.color : "#6b7db3",
//         border: `1px solid ${hov ? data.color + "44" : "rgba(255,255,255,0.08)"}`,
//         borderRadius: "100px", padding: "0.5rem 1rem",
//         textDecoration: "none",
//         transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
//         transform: hov ? "translateY(-3px) scale(1.04)" : "translateY(0) scale(1)",
//         boxShadow: hov ? `0 6px 18px ${data.color}25` : "none",
//         animation: `ct-fadein 0.5s ease ${idx * 70}ms both`,
//       }}
//     >
//       <span style={{ transition: "transform 0.25s", transform: hov ? "rotate(-8deg) scale(1.15)" : "rotate(0) scale(1)" }}>
//         {data.icon}
//       </span>
//       {data.name}
//     </a>
//   );
// }

// /* ══════════════════════════════════════════
//    MAIN COMPONENT
// ══════════════════════════════════════════ */
// export default function Contact() {
//   const [message, setMessage] = useState("");
//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [toast, setToast] = useState(null);
//   const [mounted, setMounted] = useState(false);
//   const [charAnim, setCharAnim] = useState(false);
//   const textareaRef = useRef(null);

//   const heroRef = useRef(null);
//   const heroVis = useInView(heroRef);
//   const formRef = useRef(null);
//   const formVis = useInView(formRef);
//   const ctaRef = useRef(null);
//   const ctaVis = useInView(ctaRef);
//   const socialRef = useRef(null);
//   const socialVis = useInView(socialRef);

//   useEffect(() => { window.scrollTo(0, 0); setTimeout(() => setMounted(true), 60); }, []);

//   // Char limit color animation
//   useEffect(() => {
//     if (message.length > 400) { setCharAnim(true); }
//     else { setCharAnim(false); }
//   }, [message.length]);

//   const showToast = (msg, type) => {
//     setToast({ msg, type, id: Date.now() });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!message.trim()) {
//       showToast("Please enter your message first", "error");
//       textareaRef.current?.focus();
//       return;
//     }
//     setSubmitting(true);
//     const templates = [
//       `Hello Pavan!\n\n${message}\n\nLooking forward to your response!`,
//       `Hey Pavan!\n\n${message}\n\nLet's create something amazing together!`,
//       `Hi Pavan!\n\n${message}\n\nExcited to connect with you!`,
//     ];
//     const body = encodeURIComponent(templates[Math.floor(Math.random() * templates.length)]);
//     showToast("Opening WhatsApp...", "success");
//     setTimeout(() => {
//       window.open(`https://wa.me/9110413455?text=${body}`, "_blank");
//       setMessage("");
//       setSubmitting(false);
//       setSubmitted(true);
//       setTimeout(() => setSubmitted(false), 3000);
//     }, 1800);
//   };

//   const pct = Math.round((message.length / 500) * 100);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;500;600&display=swap');

//         /* ── Keyframes ── */
//         @keyframes ct-fadein   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes ct-float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
//         @keyframes ct-spin     { to{transform:rotate(360deg)} }
//         @keyframes ct-spin-rev { to{transform:rotate(-360deg)} }
//         @keyframes ct-orbit    { 0%{transform:rotate(0deg) translateX(32px) rotate(0deg)} 100%{transform:rotate(360deg) translateX(32px) rotate(-360deg)} }
//         @keyframes ct-blink    { 0%,100%{opacity:1;box-shadow:0 0 6px currentColor} 50%{opacity:0.2;box-shadow:none} }
//         @keyframes ct-pulse    { 0%,100%{transform:scale(1);opacity:0.7} 50%{transform:scale(1.06);opacity:1} }
//         @keyframes ct-shimmer  { 0%{transform:translateX(-150%) skewX(-12deg)} 100%{transform:translateX(250%) skewX(-12deg)} }
//         @keyframes ct-waving   { 0%,100%{transform:rotate(0deg)} 20%,60%{transform:rotate(-15deg)} 40%,80%{transform:rotate(10deg)} }
//         @keyframes ct-blob     { 0%,100%{border-radius:60% 40% 30% 70% / 60% 30% 70% 40%;transform:rotate(0deg)} 50%{border-radius:30% 60% 70% 40% / 50% 60% 30% 60%;transform:rotate(180deg)} }
//         @keyframes ct-bounce   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
//         @keyframes ct-ping     { 0%{transform:scale(1);opacity:1} 75%,100%{transform:scale(2.2);opacity:0} }
//         @keyframes ct-glow     { 0%,100%{text-shadow:0 0 20px rgba(79,140,255,0.3)} 50%{text-shadow:0 0 40px rgba(79,140,255,0.7), 0 0 80px rgba(176,107,255,0.4)} }
//         @keyframes ct-typewriter { from{width:0} to{width:100%} }
//         @keyframes ct-cursor   { 0%,100%{border-color:transparent} 50%{border-color:#4f8cff} }
//         @keyframes ct-check    { 0%{stroke-dashoffset:30} 100%{stroke-dashoffset:0} }
//         @keyframes ct-rotate-dot { 0%{transform:rotate(0deg) translateX(26px)} 100%{transform:rotate(360deg) translateX(26px)} }
//         @keyframes ct-count    { from{opacity:0;transform:scale(0.5)} to{opacity:1;transform:scale(1)} }

//         * { box-sizing: border-box; margin: 0; padding: 0; }

//         .ct-root {
//           min-height: 100vh;
//           background: #050814;
//           color: #e8eaf6;
//           font-family: 'Outfit', sans-serif;
//           overflow-x: hidden;
//           padding-bottom: 0;
//         }
//         .ct-ambient {
//           position: fixed; inset: 0; pointer-events: none; z-index: 0;
//           background:
//             radial-gradient(ellipse 55% 45% at 80% 10%, rgba(79,140,255,0.09) 0%, transparent 65%),
//             radial-gradient(ellipse 40% 35% at 10% 80%, rgba(176,107,255,0.07) 0%, transparent 65%),
//             radial-gradient(ellipse 30% 25% at 50% 50%, rgba(0,240,200,0.04) 0%, transparent 55%);
//         }
//         .ct-wrap {
//           max-width: 1100px; margin: 0 auto;
//           padding: 0 2rem 6rem;
//           position: relative; z-index: 2;
//         }

//         /* ── Hero header ── */
//         .ct-hero {
//           text-align: center;
//           padding: 5rem 1rem 3.5rem;
//         }
//         .ct-label {
//           font-family: 'Space Mono', monospace;
//           font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;
//           color: #4f8cff; border: 1px solid rgba(79,140,255,0.24);
//           border-radius: 100px; padding: 0.3rem 1rem;
//           display: inline-block; margin-bottom: 1.4rem;
//           background: rgba(79,140,255,0.07);
//           animation: ct-fadein 0.8s ease both;
//         }
//         .ct-title {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(2rem, 5vw, 3.8rem);
//           font-weight: 800; letter-spacing: -0.04em;
//           line-height: 1.06; margin-bottom: 0.9rem;
//           animation: ct-glow 4s ease infinite;
//         }
//         .ct-subtitle {
//           font-family: 'Outfit', sans-serif;
//           font-size: 1rem; color: #6b7db3;
//           line-height: 1.75; max-width: 500px;
//           margin: 0 auto 2.5rem;
//         }

//         /* Avatar area */
//         .ct-avatar-area {
//           display: flex; justify-content: center;
//           margin-bottom: 2.5rem;
//           position: relative;
//         }
//         .ct-avatar-ring-outer {
//           position: absolute; inset: -12px; border-radius: 50%;
//           border: 1px dashed rgba(79,140,255,0.2);
//           animation: ct-spin 18s linear infinite;
//         }
//         .ct-avatar-ring-inner {
//           position: absolute; inset: -4px; border-radius: 50%;
//           border: 1px solid rgba(176,107,255,0.2);
//           animation: ct-spin-rev 12s linear infinite;
//         }
//         .ct-avatar {
//           width: 90px; height: 90px; border-radius: 50%;
//           background: linear-gradient(135deg, rgba(79,140,255,0.2), rgba(176,107,255,0.15));
//           border: 1px solid rgba(79,140,255,0.35);
//           display: flex; align-items: center; justify-content: center;
//           color: #4f8cff; position: relative;
//           box-shadow: 0 0 40px rgba(79,140,255,0.2), inset 0 0 30px rgba(79,140,255,0.05);
//           animation: ct-pulse 3s ease infinite;
//         }
//         .ct-orbit-dot {
//           position: absolute; width: 8px; height: 8px; border-radius: 50%;
//           background: #4f8cff; box-shadow: 0 0 8px #4f8cff;
//           top: 50%; left: 50%; margin: -4px;
//           animation: ct-orbit 4s linear infinite;
//         }
//         .ct-orbit-dot-2 {
//           position: absolute; width: 5px; height: 5px; border-radius: 50%;
//           background: #b06bff; box-shadow: 0 0 6px #b06bff;
//           top: 50%; left: 50%; margin: -2.5px;
//           animation: ct-orbit 6s linear infinite reverse;
//         }
//         .ct-pulse-ring {
//           position: absolute; inset: -6px; border-radius: 50%;
//           border: 1px solid rgba(79,140,255,0.4);
//           animation: ct-ping 2.5s ease-out infinite;
//         }

//         /* ── Grid ── */
//         .ct-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 2rem;
//           align-items: start;
//         }

//         /* ── Section wrapper ── */
//         .ct-section-box {
//           background: rgba(11,16,35,0.7);
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 22px;
//           padding: 2rem;
//           backdrop-filter: blur(22px);
//           position: relative; overflow: hidden;
//         }
//         .ct-section-box::before {
//           content: ''; position: absolute;
//           top: 0; left: 0; right: 0; height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(79,140,255,0.25), transparent);
//         }
//         .ct-section-title {
//           font-family: 'Syne', sans-serif;
//           font-size: 0.9rem; font-weight: 800;
//           letter-spacing: -0.01em; color: "#e8eaf6";
//           margin-bottom: 1.4rem;
//           display: flex; align-items: center; gap: 0.6rem;
//         }
//         .ct-section-title-dot {
//           width: 6px; height: 6px; border-radius: 50%;
//           animation: ct-blink 2s infinite;
//         }

//         /* ── Contact cards grid ── */
//         .ct-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem; }

//         /* ── Social pills ── */
//         .ct-socials {
//           display: flex; flex-wrap: wrap; gap: 0.6rem;
//         }

//         /* ── Form ── */
//         .ct-form-box {
//           background: rgba(11,16,35,0.75);
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 22px; padding: 2rem;
//           backdrop-filter: blur(22px);
//           position: relative; overflow: hidden;
//         }
//         .ct-form-box::before {
//           content: ''; position: absolute;
//           top: 0; left: 0; right: 0; height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(37,211,102,0.3), transparent);
//         }

//         /* WA header */
//         .ct-wa-head {
//           display: flex; align-items: center; gap: 1rem;
//           margin-bottom: 1.6rem;
//         }
//         .ct-wa-icon {
//           width: 52px; height: 52px; border-radius: 16px;
//           background: linear-gradient(135deg, rgba(37,211,102,0.2), rgba(37,211,102,0.08));
//           border: 1px solid rgba(37,211,102,0.35);
//           display: flex; align-items: center; justify-content: center;
//           color: #25d366; flex-shrink: 0;
//           animation: ct-bounce 2.5s ease infinite;
//           box-shadow: 0 4px 16px rgba(37,211,102,0.2);
//         }
//         .ct-wa-title {
//           font-family: 'Syne', sans-serif;
//           font-size: 1.1rem; font-weight: 800;
//           letter-spacing: -0.02em; color: "#e8eaf6";
//         }
//         .ct-wa-sub {
//           font-family: 'Outfit', sans-serif;
//           font-size: 0.8rem; color: "#6b7db3"; margin-top: 0.15rem;
//         }

//         /* Quick messages */
//         .ct-quick-title {
//           font-family: 'Space Mono', monospace;
//           font-size: 0.6rem; font-weight: 700;
//           letter-spacing: 0.12em; text-transform: uppercase;
//           color: #6b7db3; margin-bottom: 0.7rem;
//         }
//         .ct-quick-grid {
//           display: flex; flex-direction: column; gap: 0.45rem;
//           margin-bottom: 1.4rem;
//         }
//         .ct-quick-btn {
//           background: rgba(255,255,255,0.03);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 11px; padding: 0.7rem 0.9rem;
//           color: #7888bb; font-family: 'Outfit', sans-serif;
//           font-size: 0.8rem; text-align: left; cursor: pointer;
//           transition: all 0.25s cubic-bezier(.4,0,.2,1);
//           position: relative; overflow: hidden;
//         }
//         .ct-quick-btn::before {
//           content: ''; position: absolute; inset: 0;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
//           transform: translateX(-100%); transition: transform 0.4s;
//         }
//         .ct-quick-btn:hover::before { transform: translateX(100%); }
//         .ct-quick-btn:hover {
//           background: rgba(79,140,255,0.07);
//           border-color: rgba(79,140,255,0.3);
//           color: #c0ccee;
//           transform: translateX(4px);
//         }

//         /* Textarea */
//         .ct-label-row {
//           display: flex; justify-content: space-between; align-items: center;
//           margin-bottom: 0.7rem;
//         }
//         .ct-field-label {
//           font-family: 'Space Mono', monospace; font-size: 0.6rem;
//           font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6b7db3;
//         }
//         .ct-textarea {
//           width: 100%; padding: 1.1rem 1.2rem;
//           background: rgba(255,255,255,0.03);
//           border: 1.5px solid rgba(255,255,255,0.09);
//           border-radius: 14px; color: #e8eaf6;
//           font-family: 'Outfit', sans-serif; font-size: 0.9rem;
//           line-height: 1.7; resize: vertical; min-height: 140px;
//           transition: all 0.3s cubic-bezier(.4,0,.2,1);
//           margin-bottom: 0.5rem;
//         }
//         .ct-textarea:focus {
//           outline: none;
//           border-color: rgba(37,211,102,0.5);
//           background: rgba(37,211,102,0.03);
//           box-shadow: 0 0 0 3px rgba(37,211,102,0.1);
//           transform: translateY(-1px);
//         }
//         .ct-textarea::placeholder { color: #3d4f72; }

//         /* Progress ring */
//         .ct-progress-ring { transform: rotate(-90deg); }
//         .ct-progress-ring-track { fill: none; stroke: rgba(255,255,255,0.07); stroke-width: 2; }
//         .ct-progress-ring-fill {
//           fill: none; stroke-width: 2;
//           stroke-linecap: round;
//           transition: stroke-dasharray 0.3s, stroke 0.3s;
//         }

//         /* Submit btn */
//         .ct-submit {
//           width: 100%; padding: 1rem;
//           border-radius: 14px; border: none; cursor: pointer;
//           font-family: 'Space Mono', monospace;
//           font-size: 0.7rem; font-weight: 700;
//           letter-spacing: 0.1em; text-transform: uppercase;
//           display: flex; align-items: center; justify-content: center; gap: 0.6rem;
//           transition: all 0.3s cubic-bezier(.4,0,.2,1);
//           position: relative; overflow: hidden;
//           margin-top: 1rem;
//         }
//         .ct-submit::after {
//           content: ''; position: absolute; inset: 0;
//           background: rgba(255,255,255,0.08);
//           transform: translateX(-100%); border-radius: 14px;
//           transition: transform 0.5s ease;
//         }
//         .ct-submit:hover:not(:disabled)::after { transform: translateX(0); }
//         .ct-submit:hover:not(:disabled) {
//           transform: translateY(-3px);
//           box-shadow: 0 14px 36px rgba(37,211,102,0.35);
//         }
//         .ct-submit:active:not(:disabled) { transform: translateY(0) scale(0.98); }
//         .ct-submit:disabled { cursor: not-allowed; opacity: 0.6; }

//         /* Note box */
//         .ct-note {
//           display: flex; gap: 0.75rem; align-items: flex-start;
//           padding: 0.9rem 1rem; border-radius: 12px; margin-top: 1rem;
//           background: rgba(37,211,102,0.04);
//           border: 1px solid rgba(37,211,102,0.14);
//         }
//         .ct-note-icon { color: #25d366; flex-shrink: 0; margin-top: 1px; }
//         .ct-note p { font-family: 'Outfit',sans-serif; font-size: 0.78rem; color: #7888bb; line-height: 1.6; }

//         /* ── CTA ── */
//         .ct-cta {
//           margin-top: 2rem;
//           padding: 4rem 2rem; text-align: center;
//           background: linear-gradient(135deg, rgba(79,140,255,0.07) 0%, rgba(176,107,255,0.05) 100%);
//           border: 1px solid rgba(255,255,255,0.05);
//           border-radius: 28px; position: relative; overflow: hidden;
//         }
//         .ct-cta-blob {
//           position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.12; pointer-events: none;
//           animation: ct-blob 18s ease-in-out infinite;
//         }

//         /* Divider */
//         .ct-divider {
//           display: flex; align-items: center; gap: 1rem;
//           margin: 2.5rem 0;
//         }
//         .ct-div-line { flex: 1; height: 1px; background: linear-gradient(90deg,transparent,rgba(79,140,255,0.2),transparent); }
//         .ct-div-dot { width: 5px; height: 5px; border-radius: 50%; background: #4f8cff; box-shadow: 0 0 8px #4f8cff; }

//         /* ── Responsive ── */
//         @media (max-width: 900px) {
//           .ct-grid { grid-template-columns: 1fr; }
//           .ct-wrap { padding: 0 1.4rem 5rem; }
//         }
//         @media (max-width: 580px) {
//           .ct-cards { grid-template-columns: 1fr 1fr; gap: 0.7rem; }
//           .ct-wrap { padding: 0 1rem 4rem; }
//           .ct-hero { padding: 3.5rem 0.5rem 2.5rem; }
//           .ct-title { font-size: 2rem; }
//         }
//       `}</style>

//       <div className="ct-root">
//         <div className="ct-ambient" />
//         <ParticleCanvas />

//         {/* Toast */}
//         {toast && <Toast key={toast.id} msg={toast.msg} type={toast.type} onDone={() => setToast(null)} />}

//         <div className="ct-wrap">

//           {/* ── HERO ── */}
//           <div ref={heroRef} className="ct-hero">
//             <div style={{
//               opacity: mounted ? 1 : 0,
//               transform: mounted ? "translateY(0)" : "translateY(28px)",
//               transition: "all 0.9s cubic-bezier(.4,0,.2,1)",
//             }}>
//               <span className="ct-label">Get In Touch</span>

//               {/* Avatar */}
//               <div className="ct-avatar-area">
//                 <div style={{ position: "relative" }}>
//                   <div className="ct-avatar-ring-outer" />
//                   <div className="ct-avatar-ring-inner" />
//                   <div className="ct-avatar">
//                     <I.User s={38} />
//                     <div className="ct-pulse-ring" />
//                   </div>
//                   <div className="ct-orbit-dot" />
//                   <div className="ct-orbit-dot-2" />
//                 </div>
//               </div>

//               {/* Name + title */}
//               <h1 className="ct-title">
//                 <span style={{
//                   background: "linear-gradient(120deg, #e8eaf6 0%, #4f8cff 40%, #b06bff 70%, #00f0c8 100%)",
//                   WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
//                 }}>Let's Build Together</span>
//               </h1>
//               <p className="ct-subtitle">
//                 Have a project in mind, an opportunity, or just want to say hi?
//                 Drop a message and I'll get back to you!
//               </p>

//               {/* Availability badge */}
//               <div style={{
//                 display: "inline-flex", alignItems: "center", gap: "0.6rem",
//                 background: "rgba(6,214,160,0.08)", border: "1px solid rgba(6,214,160,0.25)",
//                 borderRadius: "100px", padding: "0.4rem 1rem",
//                 fontFamily: "'Space Mono',monospace", fontSize: "0.62rem",
//                 fontWeight: 700, letterSpacing: "0.1em", color: "#06d6a0",
//                 animation: "ct-fadein 1s ease 0.4s both",
//               }}>
//                 <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#06d6a0", boxShadow: "0 0 8px #06d6a0", display: "inline-block", animation: "ct-blink 2s infinite" }} />
//                 Available for new projects
//               </div>
//             </div>
//           </div>

//           {/* ── MAIN GRID ── */}
//           <div className="ct-grid">

//             {/* ── LEFT — Contact info + socials ── */}
//             <div>
//               {/* Contact info */}
//               <div className="ct-section-box" style={{
//                 opacity: heroVis ? 1 : 0, transform: heroVis ? "translateY(0)" : "translateY(28px)",
//                 transition: "all 0.8s cubic-bezier(.4,0,.2,1) 0.1s",
//                 marginBottom: "1.4rem",
//               }}>
//                 <div style={{
//                   position: "absolute", inset: 0, pointerEvents: "none", borderRadius: "22px",
//                   background: "radial-gradient(ellipse 60% 40% at 90% 0%, rgba(79,140,255,0.07) 0%, transparent 70%)",
//                 }} />
//                 <div className="ct-section-title" style={{ color: "#e8eaf6" }}>
//                   <span className="ct-section-title-dot" style={{ background: "#4f8cff", color: "#4f8cff", boxShadow: "0 0 6px #4f8cff" }} />
//                   Contact Info
//                 </div>
//                 <div className="ct-cards">
//                   {CONTACT_INFO.map((d, i) => <ContactCard key={i} data={d} idx={i} />)}
//                 </div>
//               </div>

//               {/* Social links */}
//               <div ref={socialRef} className="ct-section-box" style={{
//                 opacity: socialVis ? 1 : 0, transform: socialVis ? "translateY(0)" : "translateY(24px)",
//                 transition: "all 0.8s cubic-bezier(.4,0,.2,1) 0.2s",
//               }}>
//                 <div style={{
//                   position: "absolute", inset: 0, pointerEvents: "none", borderRadius: "22px",
//                   background: "radial-gradient(ellipse 50% 40% at 10% 90%, rgba(176,107,255,0.06) 0%, transparent 65%)",
//                 }} />
//                 <div className="ct-section-title" style={{ color: "#e8eaf6", marginBottom: "1rem" }}>
//                   <span className="ct-section-title-dot" style={{ background: "#b06bff", color: "#b06bff", boxShadow: "0 0 6px #b06bff" }} />
//                   Find Me Online
//                 </div>
//                 <div className="ct-socials">
//                   {SOCIALS.map((s, i) => <SocialPill key={i} data={s} idx={i} />)}
//                 </div>
//               </div>
//             </div>

//             {/* ── RIGHT — Form ── */}
//             <div ref={formRef} style={{
//               opacity: formVis ? 1 : 0, transform: formVis ? "translateY(0)" : "translateY(28px)",
//               transition: "all 0.85s cubic-bezier(.4,0,.2,1) 0.15s",
//             }}>
//               <div className="ct-form-box">
//                 {/* Ambient radial */}
//                 <div style={{ position: "absolute", inset: 0, pointerEvents: "none", borderRadius: "22px", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,211,102,0.06) 0%, transparent 65%)" }} />

//                 {/* WA header */}
//                 <div className="ct-wa-head">
//                   <div className="ct-wa-icon"><I.WhatsApp s={24} /></div>
//                   <div>
//                     <div className="ct-wa-title" style={{ color: "#e8eaf6" }}>Send a Message</div>
//                     <div className="ct-wa-sub" style={{ color: "#6b7db3" }}>Opens directly in WhatsApp</div>
//                   </div>
//                 </div>

//                 {/* Quick messages */}
//                 <div className="ct-quick-title">Quick Templates</div>
//                 <div className="ct-quick-grid">
//                   {QUICK_MSGS.map((q, i) => (
//                     <button key={i} className="ct-quick-btn" onClick={() => setMessage(q)}
//                       style={{ animationDelay: `${i * 80}ms` }}>
//                       {q}
//                     </button>
//                   ))}
//                 </div>

//                 {/* Textarea */}
//                 <div className="ct-label-row">
//                   <span className="ct-field-label">Your Message</span>
//                   {/* Progress circle */}
//                   <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
//                     <svg width="24" height="24" className="ct-progress-ring">
//                       <circle className="ct-progress-ring-track" cx="12" cy="12" r="9" />
//                       <circle className="ct-progress-ring-fill"
//                         cx="12" cy="12" r="9"
//                         stroke={message.length > 450 ? "#ff6b8a" : message.length > 350 ? "#ffd166" : "#06d6a0"}
//                         strokeDasharray={`${(pct / 100) * 56.5} 56.5`}
//                       />
//                     </svg>
//                     <span style={{
//                       fontFamily: "'Space Mono',monospace", fontSize: "0.6rem",
//                       color: message.length > 450 ? "#ff6b8a" : "#6b7db3",
//                       transition: "color 0.3s",
//                     }}>{message.length}/500</span>
//                   </div>
//                 </div>

//                 <textarea
//                   ref={textareaRef}
//                   className="ct-textarea"
//                   value={message}
//                   onChange={e => setMessage(e.target.value)}
//                   placeholder="Hi Pavan! I'm excited to connect with you about..."
//                   maxLength={500}
//                   rows={6}
//                 />

//                 {/* Submit */}
//                 <button
//                   className="ct-submit"
//                   onClick={handleSubmit}
//                   disabled={submitting || !message.trim()}
//                   style={{
//                     background: submitted
//                       ? "linear-gradient(135deg, #06d6a0, #00b388)"
//                       : submitting
//                       ? "rgba(37,211,102,0.3)"
//                       : !message.trim()
//                       ? "rgba(255,255,255,0.06)"
//                       : "linear-gradient(135deg, #25d366, #128c4a)",
//                     color: !message.trim() ? "#6b7db3" : "#fff",
//                     border: !message.trim() ? "1px solid rgba(255,255,255,0.1)" : "none",
//                     boxShadow: submitted ? "0 8px 28px rgba(6,214,160,0.35)" : submitting ? "0 4px 16px rgba(37,211,102,0.2)" : "none",
//                   }}
//                 >
//                   {submitted ? (
//                     <>
//                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 30, strokeDashoffset: 0, animation: "ct-check 0.4s ease both" }}>
//                         <polyline points="20 6 9 17 4 12"/>
//                       </svg>
//                       Sent!
//                     </>
//                   ) : submitting ? (
//                     <>
//                       <span style={{ animation: "ct-spin 0.8s linear infinite", display: "inline-flex" }}><I.Spinner s={16}/></span>
//                       Opening WhatsApp...
//                     </>
//                   ) : (
//                     <>
//                       <I.Send s={15}/> Send via WhatsApp
//                     </>
//                   )}
//                 </button>

//                 {/* Note */}
//                 <div className="ct-note">
//                   <span className="ct-note-icon"><I.Check s={14}/></span>
//                   <p>Your message opens directly in WhatsApp for instant communication — perfect for quick collaborations and project discussions.</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── DIVIDER ── */}
//           <div className="ct-divider">
//             <div className="ct-div-line" />
//             <div className="ct-div-dot" />
//             <div className="ct-div-line" />
//           </div>

//           {/* ── CTA ── */}
//           <div ref={ctaRef} className="ct-cta" style={{
//             opacity: ctaVis ? 1 : 0, transform: ctaVis ? "translateY(0)" : "translateY(28px)",
//             transition: "all 0.85s cubic-bezier(.4,0,.2,1)",
//           }}>
//             <div className="ct-cta-blob" style={{ width: "300px", height: "300px", background: "linear-gradient(135deg,#4f8cff,#b06bff)", top: "-80px", right: "-60px", animationDelay: "0s" }} />
//             <div className="ct-cta-blob" style={{ width: "200px", height: "200px", background: "linear-gradient(135deg,#25d366,#06d6a0)", bottom: "-50px", left: "-40px", animationDelay: "-9s" }} />

//             <div style={{ position: "relative", zIndex: 1, maxWidth: "520px", margin: "0 auto" }}>
//               <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#4f8cff", marginBottom: "1rem" }}>
//                 Let's Collaborate
//               </div>
//               <h2 style={{
//                 fontFamily: "'Syne',sans-serif",
//                 fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
//                 fontWeight: 800, letterSpacing: "-0.03em",
//                 background: "linear-gradient(120deg, #e8eaf6 0%, #4f8cff 50%, #b06bff 100%)",
//                 WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
//                 marginBottom: "0.9rem", lineHeight: 1.1,
//               }}>Ready to bring your idea to life?</h2>
//               <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: "0.95rem", color: "#6b7db3", lineHeight: 1.75, marginBottom: "2rem" }}>
//                 Whether it's a startup MVP, a full-stack product, or just a quick chat —
//                 I'm always excited to build something extraordinary.
//               </p>
//               <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
//                 {[
//                   { href: "https://wa.me/9110413455", label: "Chat on WhatsApp", icon: <I.WhatsApp s={14}/>, primary: true },
//                   { href: "mailto:pavanpatil2204@gmail.com", label: "Send an Email", icon: <I.Mail s={14}/>, primary: false },
//                 ].map((btn, i) => (
//                   <a key={i} href={btn.href} target={btn.primary ? "_blank" : "_self"} rel="noopener noreferrer"
//                     style={{
//                       display: "inline-flex", alignItems: "center", gap: "0.5rem",
//                       fontFamily: "'Space Mono',monospace", fontSize: "0.68rem",
//                       fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
//                       background: btn.primary ? "linear-gradient(135deg,#25d366,#128c4a)" : "rgba(79,140,255,0.1)",
//                       color: btn.primary ? "#fff" : "#4f8cff",
//                       border: btn.primary ? "none" : "1px solid rgba(79,140,255,0.3)",
//                       borderRadius: "100px", padding: "0.8rem 1.6rem", textDecoration: "none",
//                       transition: "all 0.28s cubic-bezier(.4,0,.2,1)",
//                       boxShadow: btn.primary ? "0 8px 24px rgba(37,211,102,0.3)" : "none",
//                     }}
//                     onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = btn.primary ? "0 14px 36px rgba(37,211,102,0.4)" : "0 8px 24px rgba(79,140,255,0.25)"; }}
//                     onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = btn.primary ? "0 8px 24px rgba(37,211,102,0.3)" : "none"; }}
//                   >
//                     {btn.icon} {btn.label}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }


// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone, FaRocket, FaSmile, FaHeart } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ⚠️ Replace this import path with your actual image location


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

    const messageTemplates = [
      `Hello Pavan! 👋\n\n${message}\n\nLooking forward to your response! 🚀`,
      `Hey Pavan! ✨\n\n${message}\n\nLet's create something amazing together! 💫`,
      `Hi Pavan! 🌟\n\n${message}\n\nExcited to connect with you! 🎯`
    ];

    const randomTemplate = messageTemplates[Math.floor(Math.random() * messageTemplates.length)];
    const whatsappMessage = encodeURIComponent(randomTemplate);
    const whatsappUrl = `https://wa.me/9110413455?text=${whatsappMessage}`;

    toast.success("🚀 Opening WhatsApp... Get ready to connect!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });

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
      value: "Hargapur, Belagavi India",
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
            <a href="mailto:pavanpatil2204@gmail.com" className="cta-btn secondary">
              <FaEnvelope />
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* ===== HERO BANNER IMAGE SECTION ===== */}
      <section className="hero-banner-section" data-aos="fade-up" data-aos-delay="200">
        <div className="hero-banner-wrapper">
          <img
            src='Contact_page_pic.jpeg'
            alt="Pavan Patil - Full Stack & AI Developer - Let's Build Something Amazing Together"
            className="hero-banner-img"
          />
          {/* Gradient overlay at bottom for smooth page end */}
          <div className="hero-banner-gradient"></div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #0f172a 100%);
          color: #fff;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          padding: 80px 1rem 0 1rem;
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
          z-index: 1;
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

        /* ===== HERO BANNER IMAGE SECTION ===== */
        .hero-banner-section {
          width: calc(100% + 2rem);
          margin-left: -1rem;
          margin-right: -1rem;
          margin-top: 4rem;
          position: relative;
          z-index: 1;
        }

        .hero-banner-wrapper {
          width: 100%;
          hight: 90vh;
          position: relative;
          overflow: hidden;
          line-height: 0;
        }

        .hero-banner-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          object-position: center center;
          transition: transform 0.8s ease;
        }

        .hero-banner-wrapper:hover .hero-banner-img {
          transform: scale(1.02);
        }

        /* Gradient overlay — smooth fade into page bg at top */
        .hero-banner-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 180px;
          background: linear-gradient(to bottom, #0c0c0c 0%, transparent 100%);
          pointer-events: none;
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .form-container {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .contact-page {
            padding: 1rem 1rem 0 1rem;
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

          .hero-banner-section {
            margin-top: 2rem;
            width: calc(100% + 2rem);
          }

          .hero-banner-gradient {
            height: 100px;
          }
        }

        @media (max-width: 480px) {
          .contact-info-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.8rem;
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

          .hero-banner-section {
            margin-top: 1.5rem;
          }

          .hero-banner-gradient {
            height: 60px;
          }
        }

        @media (max-width: 360px) {
          .contact-info-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.6rem;
          }

          .contact-card {
            min-height: 120px;
            padding: 1rem 0.4rem;
          }

          .contact-value {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;