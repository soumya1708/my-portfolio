import React, { useState, useEffect, useRef } from 'react';
import profileImg from './soumya.1708.jpg';
import aboutImg from './about.jpg';
import sanjeevaniImg from './sanjeevani.jpg'; 
import sanjeevaniVid from './Sanjeevani_demo.mp4'; 

// Import certificate images 
import tttImg from './Techno Trio Trot.jpg';
import qbImg from './QuizzBizz.jpg';
import hoImg from './HackOctober.jpg';
import hpImg from './Hult Prize.jpg';
import icImg from './Intra Cup.jpg';

// --- INJECT CUSTOM STYLES & FONTS ---
const StyleInject = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;700;900&display=swap');
    
    html, body {
      overflow-x: hidden !important;
      width: 100%;
      position: relative;
    }
    
    .font-sans { font-family: 'Inter', sans-serif; }
    .font-display { font-family: 'Space Grotesk', sans-serif; }
    
    .grain-overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      pointer-events: none;
      z-index: 9999;
      opacity: 0.04;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

    @keyframes glitch {
      0% { transform: translate(0) }
      20% { transform: translate(-2px, 1px) }
      40% { transform: translate(-1px, -1px) }
      60% { transform: translate(2px, 1px) }
      80% { transform: translate(1px, -1px) }
      100% { transform: translate(0) }
    }
    .hover-glitch:hover {
      animation: glitch 0.3s linear infinite;
      color: #22d3ee;
      text-shadow: 2px 0 #8b5cf6, -2px 0 #ef4444;
    }

    /* CUSTOM NEON SCROLLBAR */
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #030303;
      border-left: 1px solid #111;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #22d3ee, #8b5cf6);
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(to bottom, #06b6d4, #7c3aed);
    }

    /* INFINITE MARQUEE ANIMATION */
    @keyframes scrollMarquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-content {
      display: flex;
      width: 200%;
      animation: scrollMarquee 25s linear infinite;
    }
    .marquee-content:hover {
      animation-play-state: paused;
    }
  `}} />
);

// --- TERMINAL LOADER COMPONENT ---
const TerminalLoader = ({ onComplete }) => {
  const [text, setText] = useState("> System initializing...");
  
  useEffect(() => {
    setTimeout(() => setText("> Loading DSA modules..."), 800);
    setTimeout(() => setText("> Establishing secure connection to Soumya.Dev..."), 1600);
    setTimeout(() => setText("> Access granted. Welcome."), 2400);
    setTimeout(() => onComplete(), 3000);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[99999] bg-[#030303] flex flex-col items-center justify-center font-mono text-cyan-400">
      <div className="w-full max-w-lg p-6">
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <p className="text-lg md:text-xl animate-pulse">{text}<span className="inline-block w-2 h-5 bg-cyan-400 ml-1 translate-y-1"></span></p>
      </div>
    </div>
  );
};

// --- MAGNETIC BUTTON WRAPPER ---
const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 }); 
  };
  const reset = () => setPosition({ x: 0, y: 0 });

  return React.cloneElement(children, {
    ref,
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    style: { ...children.props.style, transform: `translate(${position.x}px, ${position.y}px)`, transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }
  });
};

// --- SPOTLIGHT HOVER CARD ---
const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-md border border-gray-800 transition-colors duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6,182,212,0.12), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// --- TYPEWRITER COMPONENT ---
const Typewriter = ({ text, speed = 100, delay = 0, loop = false }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [phase, setPhase] = useState('waiting'); 

  useEffect(() => {
    const startTimeout = setTimeout(() => setPhase('typing'), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (phase === 'typing') {
      if (displayedText.length < text.length) {
        const timeout = setTimeout(() => setDisplayedText(text.slice(0, displayedText.length + 1)), speed);
        return () => clearTimeout(timeout);
      } else {
        if (loop) {
          const timeout = setTimeout(() => setPhase('deleting'), 2000); 
          return () => clearTimeout(timeout);
        } else {
          setPhase('done');
        }
      }
    } else if (phase === 'deleting') {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => setDisplayedText(text.slice(0, displayedText.length - 1)), speed / 2); 
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setPhase('typing'), 500); 
        return () => clearTimeout(timeout);
      }
    }
  }, [phase, displayedText, text, speed, loop]);

  return (
    <>
      {displayedText}
      {phase !== 'done' && <span className="animate-pulse text-cyan-400 font-light ml-1">|</span>}
    </>
  );
};

// --- CONTINUOUS SCROLL REVEAL COMPONENT ---
const Reveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
      {children}
    </div>
  );
};

// --- CONTINUOUS 3D FLIP IMAGE COMPONENT ---
const FlipImage = ({ src, alt, className }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsFlipped(entry.isIntersecting), { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full relative z-10" style={{ perspective: '1000px' }}>
      <img
        src={src} alt={alt}
        className={`${className} transition-all duration-[1500ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]`}
        style={{ transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)', opacity: isFlipped ? 1 : 0 }}
      />
    </div>
  );
};

// --- INFINITE MARQUEE COMPONENT ---
const TechMarquee = () => {
  const techStack = ["Java", "Spring Boot", "MySQL", "React", "Tailwind CSS", "Vite", "Git", "GitHub", "Python", "C", "Gemini API", "REST APIs", "DSA", "Hibernate"];
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#030303] via-[#0a0a0a] to-[#030303] border-y border-gray-800/50 py-5 z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-[#030303] w-full z-10 pointer-events-none"></div>
      <div className="marquee-content flex gap-12 whitespace-nowrap text-cyan-500/40 font-mono text-xl font-bold uppercase tracking-widest">
        {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
          <span key={idx} className="inline-block hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300">{tech} •</span>
        ))}
      </div>
    </div>
  );
};

// --- HOVER VIDEO COMPONENT ---
const HoverVideo = ({ imageSrc, videoSrc, alt }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0; 
        videoRef.current.play().catch(err => console.log("Video play interrupted:", err));
      }
    }, 2000); 
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; 
    }
  };

  return (
    <div 
      className="w-full h-full relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={imageSrc} 
        alt={alt} 
        className={`w-full h-full object-cover object-top absolute inset-0 z-10 transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`} 
      />
      <video 
        ref={videoRef}
        src={videoSrc}
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover object-top absolute inset-0 z-0"
      />
    </div>
  );
};

// --- INTERACTIVE TERMINAL COMPONENT ---
const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { cmd: '', output: 'Initializing SoumyaOS v1.0.0...' },
    { cmd: '', output: 'Connection secured. Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      if (!cmd) return;

      let output = '';
      switch(cmd) {
        case 'help': 
          output = 'Available commands: \n  whoami    - Display developer profile\n  skills    - List technical stack\n  projects  - View active repositories\n  clear     - Clear terminal window\n  sudo      - Execute command as superuser'; 
          break;
        case 'whoami': 
          output = 'Soumya Mondal\nRole: Backend Developer & DSA Enthusiast\nStatus: Seeking Opportunities'; 
          break;
        case 'skills': 
          output = '[Backend]: Java, Spring Boot, MySQL, REST APIs, Hibernate\n[Frontend]: React, Tailwind CSS\n[Core]: Data Structures & Algorithms, C, Python'; 
          break;
        case 'projects': 
          output = '1. Sanjeevani (Med-Tech Matching System)\n2. VolunteerConnect (Social Impact)\n3. Read & Rant (E-commerce Platform)\n\nType "projects" to view the live dashboard below.'; 
          break;
        case 'sudo': 
          output = 'bash: sudo: nice try, but you do not have root privileges on this portfolio.'; 
          break;
        case 'clear': 
          setHistory([]); 
          setInput(''); 
          return;
        default: 
          output = `bash: command not found: ${cmd}. Type "help" for valid commands.`;
      }
      
      setHistory(prev => [...prev, { cmd, output }]);
      setInput('');
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  };

  return (
    <section id="console" className="space-y-8 relative z-20 pt-16">
      <h3 className="text-4xl md:text-5xl font-bold font-display text-white flex items-center gap-4 mb-8">
        <span className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M4 17h16a2 2 0 002-2V9a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
        </span>
        Developer Console
      </h3>
      
      <SpotlightCard className="w-full h-[350px] md:h-[400px] flex flex-col font-mono text-[13.2px] md:text-[15.4px] border border-gray-800 rounded-xl overflow-hidden shadow-2xl p-0">
        <div className="bg-[#111] p-3 flex gap-2 border-b border-gray-800 items-center">
           <div className="w-3 h-3 rounded-full bg-red-500"></div>
           <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
           <div className="w-3 h-3 rounded-full bg-green-500"></div>
           <span className="text-gray-500 text-xs ml-4 tracking-widest font-bold">soumya@dev:~</span>
        </div>
        <div className="p-4 flex-1 overflow-y-auto bg-[#050505] text-gray-300 space-y-3 [&::-webkit-scrollbar]:hidden">
           {history.map((line, i) => (
             <div key={i}>
               {line.cmd && <div className="text-cyan-400"><span className="text-violet-500 mr-2">soumya@dev:~$</span>{line.cmd}</div>}
               <div className="whitespace-pre-wrap mt-1 text-gray-400">{line.output}</div>
             </div>
           ))}
           <div className="flex items-center text-cyan-400 mt-2">
             <span className="text-violet-500 mr-2">soumya@dev:~$</span>
             <input
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               onKeyDown={handleCommand}
               className="flex-1 bg-transparent border-none outline-none text-cyan-400 font-mono"
               spellCheck="false"
               autoComplete="off"
             />
           </div>
           <div ref={bottomRef}></div>
        </div>
      </SpotlightCard>
    </section>
  );
};
// -------------------------------------------------------------

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  
  // LIGHTBOX (MODAL) STATE
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (imgSrc) => setSelectedImage(imgSrc);
  const closeModal = () => setSelectedImage(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(`${(totalScroll / windowHeight) * 100}%`);
    };

    // Scroll Spy for Navbar
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('section').forEach(sec => observer.observe(sec));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const certificateList = [
    { image: tttImg, description: "participation in Techno Trio Trot organised by CurBrain TMSL" },
    { image: qbImg, description: "participation in Quizz-Bizz organised by IIC TMSL" },
    { image: hoImg, description: "participation in the Hacktoberfest & Open Source Workshop organised by SAMARTH TMSL" },
    { image: hpImg, description: "participation in the Hult Prize organised by IIC TMSL" },
    { image: icImg, description: "participation in the IntraCup organised by Geekonix TMSL" }
  ];

  if (isLoading) return <TerminalLoader onComplete={() => setIsLoading(false)} />;

  return (
    <div className="min-h-screen bg-[#030303] text-gray-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden w-full max-w-[100vw]">
      <StyleInject />
      <div className="grain-overlay"></div>

      {/* TOP SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 z-[100] transition-all duration-150 ease-out" style={{ width: scrollProgress }}></div>

      {/* BACK TO TOP RADAR BUTTON */}
      <div className={`fixed bottom-8 right-8 z-[90] transition-all duration-500 ${scrollY > 500 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <Magnetic>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 bg-[#111] border border-gray-700 hover:border-cyan-400 rounded-full flex items-center justify-center group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 rounded-full border border-cyan-500/0 group-hover:animate-ping group-hover:border-cyan-400/50"></div>
            <svg className="w-6 h-6 text-cyan-400 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"></path></svg>
          </button>
        </Magnetic>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#030303]/80 backdrop-blur-md border-b border-gray-800/50 mt-1">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-[15.4px] font-medium">
          <Magnetic>
            <div className="flex items-center gap-2 hover-glitch">
              <span className="text-cyan-400 font-mono text-[17.6px]">{`>_`}</span>
              <span className="text-white font-bold text-lg font-display tracking-tighter">Soumya.Dev</span>
            </div>
          </Magnetic>
          <div className="hidden md:flex gap-8 text-gray-400 font-display">
            <Magnetic><a href="#home" className={`${activeSection === 'home' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'hover:text-cyan-400'} transition-all duration-300`}>Home</a></Magnetic>
            <Magnetic><a href="#about" className={`${activeSection === 'about' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'hover:text-cyan-400'} transition-all duration-300`}>About</a></Magnetic>
            <Magnetic><a href="#mastery" className={`${activeSection === 'mastery' || activeSection === 'cp' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'hover:text-cyan-400'} transition-all duration-300`}>Skills</a></Magnetic>
            <Magnetic><a href="#console" className={`${activeSection === 'console' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'hover:text-cyan-400'} transition-all duration-300`}>Console</a></Magnetic>
            <Magnetic><a href="#projects" className={`${activeSection === 'projects' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'hover:text-cyan-400'} transition-all duration-300`}>Projects</a></Magnetic>
          </div>
          <Magnetic>
            <a href="#contact" className="bg-white text-black px-5 py-2 rounded-md font-bold font-display hover:bg-cyan-400 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              Hire Me
            </a>
          </Magnetic>
        </div>
      </nav>

      {/* AMBIENT GLOW & PARALLAX DOT BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
        <div className="absolute w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] bg-cyan-600/10 rounded-full blur-[120px] md:blur-[180px] -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-violet-600/10 rounded-full blur-[100px] md:blur-[150px] translate-x-1/3 translate-y-1/3"></div>
        <div 
          className="absolute inset-0 transition-transform duration-75 ease-linear" 
          style={{ 
            backgroundImage: 'radial-gradient(rgba(34, 211, 238, 0.15) 1.5px, transparent 1.5px)', 
            backgroundSize: '48px 48px',
            transform: `translateY(${scrollY * -0.15}px)` 
          }}>
        </div>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32" style={{ scrollBehavior: 'smooth' }}>
        
        {/* HERO SECTION */}
        <section id="home" className="relative flex flex-col items-center justify-center min-h-[85vh] w-full mt-10 md:mt-0">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-12 md:gap-8 w-full max-w-full">
            
            <div className="flex-1 space-y-6 w-full min-w-0">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[13.2px] font-semibold rounded-full border border-cyan-500/20 mb-4 font-mono shadow-[0_0_15px_rgba(6,182,212,0.15)] w-fit">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                OPEN TO OPPORTUNITIES
              </div>

              {/* TYPING ANIMATION HEADERS */}
              <div className="space-y-3 min-w-0 w-full">
                <p className="text-[22px] md:text-[26.4px] text-cyan-400 font-mono tracking-tight">
                  Hi I am ..
                </p>
                
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-black font-display text-white tracking-tighter min-h-[1.2em] break-words drop-shadow-md">
                  <Typewriter text="Soumya Mondal" speed={100} delay={200} loop={false} />
                </h1>
                
                <h2 className="text-lg md:text-xl lg:text-2xl font-light text-gray-400 border-l-2 border-cyan-500/50 pl-4 min-h-[1.5em] block w-full">
                  <Typewriter text="DSA Enthusiast | Backend Developer | Java & Spring Boot" speed={60} delay={1800} loop={true} />
                </h2>
              </div>

              <p className="text-gray-400 max-w-lg text-[17.6px] leading-relaxed pt-2 animate-[fadeIn_1s_ease-out_2s_both] w-full">
                Engineering student building reliable applications from frontend interfaces to backend APIs. Focused on clean code, database architectures, and real-world system implementations.
              </p>
              
              {/* ACTION BUTTONS */}
              <div className="flex flex-row flex-wrap items-center gap-3 md:gap-4 pt-4 relative z-20 w-full pb-4 animate-[fadeIn_1s_ease-out_2.5s_both]">
                <Magnetic>
                  <a href="#projects" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-black font-bold font-display text-[17.6px] transition-all flex items-center gap-2 shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    View Projects <span>↓</span>
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="https://github.com/soumya1708" target="_blank" rel="noreferrer" className="px-5 md:px-6 py-3 bg-[#111] border border-gray-800 hover:border-cyan-500/50 rounded-lg text-white font-bold font-display text-[17.6px] transition-all flex items-center gap-2 shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    GitHub
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="https://www.linkedin.com/in/soumya-mondal-1b5030384" target="_blank" rel="noreferrer" className="px-5 md:px-6 py-3 bg-[#111] border border-gray-800 hover:border-violet-500/50 rounded-lg text-white font-bold font-display text-[17.6px] transition-all flex items-center gap-2 shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                    LinkedIn
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="#contact" className="px-5 md:px-6 py-3 bg-[#111] border border-gray-800 hover:border-red-500/50 rounded-lg text-white font-bold font-display text-[17.6px] transition-all flex items-center gap-2 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    Email
                  </a>
                </Magnetic>
              </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end shrink-0 w-full min-w-0 mt-8 md:mt-0">
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] rounded-full p-2 overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.15)] bg-[#050505] mx-auto md:mx-0">
                <div className="absolute inset-0 rounded-full border border-gray-800"></div>
                <div className="absolute inset-[-10px] rounded-full border-t-2 border-r-2 border-cyan-400 border-l-2 border-l-violet-500 animate-[spin_8s_linear_infinite] opacity-50"></div>
                <FlipImage 
                  src={profileImg} 
                  alt="Soumya Mondal" 
                  className="w-full h-full object-cover object-top rounded-full p-1"
                />
              </div>
            </div>
          </div>
          
          {/* Animated Scroll Down Indicator */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
             <span className="text-[11px] font-mono text-cyan-400 tracking-widest uppercase">Scroll</span>
             <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1 relative">
               <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-[bounce_1.5s_infinite]"></div>
             </div>
          </div>
        </section>

        {/* INFINITE SCROLLING TECH MARQUEE */}
        <Reveal>
          <TechMarquee />
        </Reveal>

        {/* ABOUT ME SECTION */}
        <Reveal>
          <section id="about" className="space-y-8 relative z-20 pt-16">
            <h3 className="text-4xl md:text-5xl font-bold font-display text-white flex items-center gap-4 mb-8">
              <span className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </span>
              About Me
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
              <div className="flex-1 space-y-6">
                <h4 className="text-2xl md:text-3xl font-bold font-display text-cyan-400 mb-6">
                  Bridging Logic & Engineering
                </h4>
                
                <div className="space-y-6 text-gray-300 leading-relaxed text-[15.4px] md:text-[17.6px]">
                  <p>
                    Hi, I'm <span className="font-semibold text-white">Soumya Mondal</span>. I'm currently pursuing my 4-year B.Tech journey at <span className="font-semibold text-white">Techno Main Salt Lake (Batch 2025 - 2029)</span> to dive deep into computer science and engineering.
                  </p>
                  <p>
                    My mathematical and computing core thrives heavily on mapping highly complex algorithmic structures, mastering multi-dimensional <span className="font-semibold text-white">Data Structures and Algorithms (DSA)</span> within Java environments, and configuring interactive full-stack modern network pipelines. Beyond pure computation, I possess deep technical fluency across agile development practices, code modularity, and operational layout automation systems.
                  </p>
                </div>
              </div>

              <div className="flex-1 flex justify-center md:justify-end shrink-0">
                <SpotlightCard className="p-2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full !bg-transparent border-none">
                  <div className="absolute inset-0 rounded-full border border-gray-800"></div>
                  <div className="absolute inset-[-5px] rounded-full border-b-2 border-l-2 border-violet-400 border-t-2 border-t-cyan-500 animate-[spin_6s_linear_infinite] opacity-40"></div>
                  <FlipImage 
                    src={aboutImg} 
                    alt="Soumya Mondal About" 
                    className="w-full h-full object-cover object-[center_20%] rounded-full p-2"
                  />
                </SpotlightCard>
              </div>
            </div>
          </section>
        </Reveal>

        {/* TIMELINE SECTION */}
        <Reveal>
          <section id="education" className="space-y-12">
            <h3 className="text-4xl md:text-5xl font-bold font-display text-white flex items-center gap-4 mb-8">
              <span className="p-3 bg-violet-500/10 rounded-xl border border-violet-500/20 text-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7.5"></path>
                </svg>
              </span>
              Education Timeline
            </h3>
            
            <div className="relative pl-8 md:pl-0 pt-4">
              <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-transparent -translate-x-1/2"></div>
              
              <div className="space-y-16">
                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center md:odd:flex-row-reverse group">
                  <div className="absolute left-[-33px] md:left-1/2 w-4 h-4 bg-[#050505] border-2 border-cyan-400 rounded-full -translate-x-1/2 z-10 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
                  
                  <div className="md:w-[45%] w-full mb-2 md:mb-0 flex flex-col md:items-end items-start text-left md:text-right md:group-odd:items-start md:group-odd:text-left gap-2">
                    <span className="inline-block px-4 py-1.5 bg-[#111] border border-gray-700 text-[13.2px] font-mono text-cyan-400 rounded-md shadow-lg">2025 - 2029 (Expected)</span>
                  </div>
                  
                  <SpotlightCard className="md:w-[45%] w-full p-6">
                    <h4 className="text-xl font-bold font-display text-white">Bachelor of Technology</h4>
                    <p className="text-cyan-400 text-[15.4px] mt-1 font-medium">Information Technology • Techno Main Salt Lake</p>
                    <p className="text-gray-400 text-[15.4px] mt-3 leading-relaxed">Core coursework focuses on Data Structures, Database Management Systems, and Object-Oriented Programming.</p>
                  </SpotlightCard>
                </div>

                 <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center md:odd:flex-row-reverse group">
                  <div className="absolute left-[-33px] md:left-1/2 w-4 h-4 bg-[#050505] border-2 border-gray-600 rounded-full -translate-x-1/2 z-10 group-hover:border-violet-400 group-hover:scale-125 transition-all duration-300"></div>
                  
                  <div className="md:w-[45%] w-full mb-2 md:mb-0 flex flex-col md:items-end items-start text-left md:text-right md:group-odd:items-start md:group-odd:text-left gap-2">
                    <span className="inline-block px-4 py-1.5 bg-[#111] border border-gray-800 text-[13.2px] font-mono text-gray-400 rounded-md">2023 - 2025</span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-[13.2px] font-mono text-violet-400 rounded-md">
                       84%
                    </span>
                  </div>

                  <SpotlightCard className="md:w-[45%] w-full p-6">
                    <h4 className="text-xl font-bold font-display text-white">Higher Secondary (12th)</h4>
                    <p className="text-gray-400 text-[15.4px] mt-1 font-medium">Science • S.K.S Public School</p>
                    <p className="text-gray-500 text-[15.4px] mt-3 leading-relaxed">Focused on core science subjects laying a strong foundation for engineering and analytical problem-solving.</p>
                  </SpotlightCard>
                </div>

                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center md:odd:flex-row-reverse group">
                  <div className="absolute left-[-33px] md:left-1/2 w-4 h-4 bg-[#050505] border-2 border-gray-600 rounded-full -translate-x-1/2 z-10 group-hover:border-violet-400 group-hover:scale-125 transition-all duration-300"></div>
                  
                  <div className="md:w-[45%] w-full mb-2 md:mb-0 flex flex-col md:items-end items-start text-left md:text-right md:group-odd:items-start md:group-odd:text-left gap-2">
                    <span className="inline-block px-4 py-1.5 bg-[#111] border border-gray-800 text-[13.2px] font-mono text-gray-400 rounded-md">Completed 2023</span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-[13.2px] font-mono text-violet-400 rounded-md">
                       93.6%
                    </span>
                  </div>

                  <SpotlightCard className="md:w-[45%] w-full p-6">
                    <h4 className="text-xl font-bold font-display text-white">Secondary (10th)</h4>
                    <p className="text-gray-400 text-[15.4px] mt-1 font-medium">General • S.K.S Public School</p>
                    <p className="text-gray-500 text-[15.4px] mt-3 leading-relaxed">Completed secondary education with a strong academic record and a focus on foundational mathematics and science.</p>
                  </SpotlightCard>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* SKILLS & MASTERY SECTION */}
        <Reveal>
          <section id="mastery" className="space-y-12 relative z-20">
            <div className="text-center pb-6">
              <h3 className="text-4xl md:text-5xl font-bold font-display text-white inline-flex items-center justify-center gap-4 relative pb-4">
                <span className="text-cyan-400">{`</>`}</span>
                Skills & Mastery
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full mt-2"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 pt-4 items-start">
              
              {/* Left Column: Technical Stack & Tools */}
<div className="space-y-6">
  <h4 className="text-xl font-bold font-display text-cyan-400 flex items-center gap-2 mb-6">
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
    Technical Stack & Tools
  </h4>

  <div className="grid grid-cols-[1fr_1fr] gap-4 items-start">

    {/* Languages */}
    <SpotlightCard className="p-6 row-span-2">
      <p className="text-[11px] text-gray-500 font-mono uppercase tracking-widest mb-4">
        Languages
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-white text-[15.4px] font-medium">
          <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h1a4 4 0 110 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8zM6 2v3M10 2v3M14 2v3"/>
          </svg>
          Java (Core + DSA)
        </div>

        <div className="flex items-center gap-3 text-white text-[15.4px] font-medium">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            className="w-5 h-5"
          />
          Python
        </div>

        <div className="flex items-center gap-3 text-white text-[15.4px] font-medium">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
            alt="C"
            className="w-5 h-5"
          />
          C Language
        </div>

        <div className="flex items-center gap-3 text-white text-[15.4px] font-medium">
          <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3-3.582 3-8 3-8-1.343-8-3z"></path>
            <path d="M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7"></path>
            <path d="M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3"></path>
          </svg>
          MySQL
        </div>
      </div>
    </SpotlightCard>

    {/* Backend Architecture */}
    <SpotlightCard className="p-6">
      <p className="text-[11px] text-gray-500 font-mono uppercase tracking-widest mb-4">
        Backend Architecture
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-white text-[15.4px] font-medium">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M12 2C6.477 2 2 6.477 2 12v8h8c5.523 0 10-4.477 10-10V2H12z"/>
          </svg>
          Spring Boot
        </div>

        <div className="flex items-center gap-3 text-white text-[15.4px] font-medium">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
          </svg>
          Hibernate
        </div>
      </div>
    </SpotlightCard>

    {/* Frontend Architecture */}
    <SpotlightCard className="p-6">
      <p className="text-[11px] text-gray-500 font-mono uppercase tracking-widest mb-4">
        Frontend Architecture
      </p>

      <div className="space-y-4">

        <div className="flex items-center gap-3 text-white text-[15.4px] font-medium">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="w-5 h-5"
          />
          JavaScript
        </div>

        <div className="flex items-center gap-3 text-white text-[15.4px] font-medium">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML"
            className="w-5 h-5"
          />
          HTML5
        </div>

        <div className="flex items-center gap-3 text-white text-[15.4px] font-medium">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
            className="w-5 h-5"
          />
          CSS3
        </div>

      </div>
    </SpotlightCard>

  </div>
</div>

              {/* Right Column: Professional Attributes (Progress Bars) */}
              <div className="space-y-6 lg:pl-8 mt-8 lg:mt-0">
                <h4 className="text-xl font-bold font-display text-violet-400 flex items-center gap-2 mb-8">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012-2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                  Professional Attributes
                </h4>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-[15.4px] font-bold text-white mb-2">
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
                        Problem Solving
                      </span>
                      <span className="text-cyan-400">90%</span>
                    </div>
                    <div className="w-full bg-[#111] h-2 rounded-full overflow-hidden border border-gray-800">
                      <div className="bg-gradient-to-r from-cyan-600 to-cyan-400 h-full rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" style={{ width: '90%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[15.4px] font-bold text-white mb-2">
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        Teamwork
                      </span>
                      <span className="text-cyan-400">90%</span>
                    </div>
                    <div className="w-full bg-[#111] h-2 rounded-full overflow-hidden border border-gray-800">
                      <div className="bg-gradient-to-r from-cyan-600 to-cyan-400 h-full rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" style={{ width: '90%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[15.4px] font-bold text-white mb-2">
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                        Creativity & Design Thinking
                      </span>
                      <span className="text-violet-400">85%</span>
                    </div>
                    <div className="w-full bg-[#111] h-2 rounded-full overflow-hidden border border-gray-800">
                      <div className="bg-gradient-to-r from-violet-600 to-violet-400 h-full rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[15.4px] font-bold text-white mb-2">
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        Communication
                      </span>
                      <span className="text-violet-400">75%</span>
                    </div>
                    <div className="w-full bg-[#111] h-2 rounded-full overflow-hidden border border-gray-800">
                      <div className="bg-gradient-to-r from-violet-600 to-violet-400 h-full rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* LIVE GITHUB STATS ROW */}
            <div className="grid md:grid-cols-2 gap-6 mt-12 w-full">
              <SpotlightCard className="p-1 h-full min-h-[180px] flex items-center justify-center group hover:border-cyan-500/50 w-full overflow-hidden">
                 <img
                   src="https://streak-stats.demolab.com?user=soumya1708&theme=transparent&hide_border=true&ring=22d3ee&fire=8b5cf6&currStreakLabel=22d3ee"
                   alt="GitHub Streak"
                   className="w-full h-full object-contain p-4 opacity-80 group-hover:opacity-100 transition-opacity"
                 />
              </SpotlightCard>
              
              {/* UPDATED TOP LANGUAGES API (Donut Chart up to 10 languages) */}
              <SpotlightCard className="p-1 h-full min-h-[180px] flex items-center justify-center group hover:border-violet-500/50 w-full overflow-hidden">
                 <img
                   src="https://github-readme-stats.vercel.app/api/top-langs/?username=soumya1708&layout=donut&theme=transparent&hide_border=true&title_color=8b5cf6&text_color=9ca3af&bg_color=0a0a0a&langs_count=10"
                   alt="Top Languages"
                   className="w-full h-full object-contain p-2 opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                 />
              </SpotlightCard>
            </div>
            
          </section>
        </Reveal>

        {/* COMPETITIVE PROGRAMMING SECTION */}
        <Reveal>
          <section id="cp" className="space-y-8 relative z-20">
            <h3 className="text-4xl md:text-5xl font-bold font-display text-white flex items-center gap-4 mb-8">
              <span className="p-3 bg-violet-500/10 rounded-xl border border-violet-500/20 text-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </span>
              Competitive Programming
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              
              {/* LIVE LEETCODE STATS CARD */}
              <SpotlightCard className="p-1 h-full min-h-[220px] flex items-center justify-center group hover:border-yellow-500/50 w-full overflow-hidden bg-[#0a0a0a]">
                 <a href="https://leetcode.com/u/Shiro_Oni1708/" target="_blank" rel="noreferrer" className="w-full h-full flex items-center justify-center">
                   <img
                     src="https://leetcard.jacoblin.cool/Shiro_Oni1708?theme=dark&font=Space%20Grotesk&ext=heatmap"
                     alt="Live LeetCode Stats"
                     className="w-full h-full object-contain p-2 opacity-90 group-hover:opacity-100 transition-opacity"
                   />
                 </a>
              </SpotlightCard>

              {/* HackerRank Detailed Card */}
              <SpotlightCard className="p-0 group hover:border-green-500/50">
                <a href="https://www.hackerrank.com/profile/soumya_mondal171" target="_blank" rel="noreferrer" className="block p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-2xl font-bold font-display text-white flex items-center gap-3">
                        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M11.986 2c-5.518 0-9.986 4.468-9.986 9.986 0 5.518 4.468 9.986 9.986 9.986 5.518 0 9.986-4.468 9.986-9.986C21.972 6.468 17.504 2 11.986 2zm4.331 14.5h-2.12v-3.784H9.774v3.784H7.654V7.5h2.12v3.815h4.423V7.5h2.12v9z"/></svg>
                        HackerRank
                      </h4>
                      <span className="text-gray-400 text-[15.4px] font-mono">@soumya_mondal171</span>
                    </div>
                    
                    <div className="flex gap-6 mb-8 text-[15.4px]">
                      <div>
                        <p className="text-gray-500 uppercase tracking-widest text-[11px] mb-1">Location</p>
                        <p className="text-white flex items-center gap-2 font-medium">India 🇮🇳</p>
                      </div>
                    </div>

                    <div className="border-t border-gray-800 pt-6">
                      <p className="text-[19.8px] font-bold font-display text-white mb-4">My Badges</p>
                    </div>
                  </div>
                  
                  <div className="mt-2 p-5 bg-[#111] border border-gray-800 rounded-xl flex items-center gap-5">
                    <div className="w-16 h-16 bg-[#1a1a1a] rounded-xl border border-gray-700 flex flex-col items-center justify-center text-white relative">
                       <svg className="absolute w-full h-full text-gray-800 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"></path></svg>
                       <svg className="w-6 h-6 text-cyan-400 relative z-10" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M53.8 4.3C38.4 4.3 35.9 11 35.9 11L35.8 24.9H54.4V30H34.8C34.8 30 15.4 29.2 15.4 48.3C15.4 67.2 32.2 66.2 32.2 66.2H37.3V57.3C37.3 47.1 45.9 38.8 56.4 38.8H75.5C75.5 38.8 85.5 39.2 85.5 29V13.6C85.5 13.6 86.9 4.3 73.8 4.3H53.8Z" fill="currentColor"/>
                          <path d="M56.2 105.7C71.6 105.7 74.1 99 74.1 99L74.2 85.1H55.5V80H75.1C75.1 80 94.5 80.8 94.5 61.7C94.5 42.8 77.7 43.8 77.7 43.8H72.6V52.7C72.6 62.9 64 71.2 53.5 71.2H34.4C34.4 71.2 24.4 70.8 24.4 81V96.4C24.4 96.4 23 105.7 36.1 105.7H56.2ZM64.1 97.3C61.9 97.3 60.1 95.5 60.1 93.3C60.1 91.1 61.9 89.3 64.1 89.3C66.3 89.3 68.1 91.1 68.1 93.3C68.1 95.5 66.3 97.3 64.1 97.3Z" fill="#FFE052"/>
                       </svg>
                    </div>
                    <div>
                      <p className="text-white text-[19.8px] font-bold flex items-center gap-2">
                         Python <span className="text-yellow-500 text-[13.2px]">★★★</span>
                      </p>
                      <p className="text-[15.4px] text-gray-400 mt-1 font-medium">Silver Level</p>
                      <p className="text-[13.2px] font-mono text-cyan-400 mt-1">150 Points Earned</p>
                    </div>
                  </div>
                </a>
              </SpotlightCard>

            </div>
          </section>
        </Reveal>

        {/* DEVELOPMENT SECTION */}
<Reveal>
  <section id="development" className="space-y-8 relative z-20">

    <h3 className="text-4xl md:text-5xl font-bold font-display text-white flex items-center gap-4 mb-8">
      <span className="p-3 bg-green-500/10 rounded-xl border border-green-500/20 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.2)]">

        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7l-4-4-4 4m4-4v18"
          />
        </svg>

      </span>

      Development
    </h3>

    <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
      My development journey is driven by consistency and continuous learning.
      The contribution graph below reflects my daily coding activity,
      open-source participation, project development and GitHub commits.
    </p>

    <SpotlightCard className="p-6 group hover:border-green-500/50 transition-all duration-300">

      <div className="flex justify-between items-center mb-6">

        <h4 className="text-2xl font-bold font-display text-white">
          GitHub Contribution Graph
        </h4>

        <a
          href="https://github.com/soumya1708"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white font-semibold transition"
        >
          View GitHub
        </a>

      </div>

      <img
        src="https://github-readme-activity-graph.vercel.app/graph?username=soumya1708&theme=github-compact&hide_border=true&bg_color=0a0a0a&color=22d3ee&line=8b5cf6&point=22d3ee&area=true&area_color=22d3ee"
        alt="GitHub Contribution Graph"
        className="w-full rounded-xl"
      />

    </SpotlightCard>

  </section>
</Reveal>

        {/* INTERACTIVE DEVELOPER CONSOLE SECTION */}
        <Reveal>
          <InteractiveTerminal />
        </Reveal>

        {/* ENGINEERING PROJECTS */}
        <Reveal>
          <section id="projects" className="space-y-12 relative z-20">
            <h3 className="text-4xl md:text-5xl font-bold font-display text-white flex items-center gap-4 mb-8">
              <span className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </span>
              Engineering Projects
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <SpotlightCard className="p-0 group flex flex-col hover:border-cyan-500/50">
                <div className="h-56 border-b border-gray-800 overflow-hidden relative">
                  
                  {/* --- NEW HOVER VIDEO PLACED HERE --- */}
                  <HoverVideo 
                    imageSrc={sanjeevaniImg} 
                    videoSrc={sanjeevaniVid} 
                    alt="Sanjeevani Dashboard" 
                  />
                  
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold font-display text-cyan-400 group-hover:text-cyan-300 transition-colors">Sanjeevani</h4>
                  </div>
                  
                  <p className="text-gray-400 text-[15.4px] leading-relaxed mb-6 flex-grow">
                    A hyper-local medical matching application featuring an AI-integrated backend architecture. Automatically routes emergency requests for blood and organ donors using robust API connectivity and secure database synchronization.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-2 py-1 bg-[#111] border border-gray-800 rounded flex items-center gap-1 text-[13.2px] text-gray-400 font-mono">
                      <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h1a4 4 0 110 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8zM6 2v3M10 2v3M14 2v3"></path></svg>
                      Java
                    </span>
                    <span className="px-2 py-1 bg-[#111] border border-gray-800 rounded flex items-center gap-1 text-[13.2px] text-gray-400 font-mono">
                      <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M12 2C6.477 2 2 6.477 2 12v8h8c5.523 0 10-4.477 10-10V2H12z"></path></svg>
                      Spring Boot
                    </span>
                    <span className="px-2 py-1 bg-[#111] border border-gray-800 rounded flex items-center gap-1 text-[13.2px] text-gray-400 font-mono">
                      <svg className="w-3 h-3 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3-3.582 3-8 3-8-1.343-8-3z"></path><path d="M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7"></path><path d="M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3"></path></svg>
                      MySQL
                    </span>
                    <span className="px-2 py-1 bg-[#111] border border-gray-800 rounded flex items-center gap-1 text-[13.2px] text-gray-400 font-mono">
                      <svg className="w-3 h-3 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                      Gemini API
                    </span>
                  </div>

                  <Magnetic>
                    <a href="https://github.com/soumya1708/Sanjeevani" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 px-5 py-3 bg-cyan-600/10 text-cyan-400 font-bold text-[15.4px] font-display tracking-wide uppercase rounded-lg hover:bg-cyan-500 hover:text-black transition-colors border border-cyan-500/20 w-full md:w-auto">
                       Visit Project
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  </Magnetic>
                </div>
              </SpotlightCard>

            </div>
          </section>
        </Reveal>

        {/* CERTIFICATES & RECOGNITION SECTION WITH LIGHTBOX */}
        <Reveal>
          <section id="certificates" className="space-y-12 relative z-20">
            <h3 className="text-4xl md:text-5xl font-bold font-display text-white flex items-center gap-4 mb-8">
              <span className="p-3 bg-violet-500/10 rounded-xl border border-violet-500/20 text-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </span>
              Certificates & Recognition
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificateList.map((cert, index) => (
                <SpotlightCard key={index} className="p-4 hover:border-violet-500/50">
                  <div className="overflow-hidden rounded-lg border border-gray-800 mb-4 h-48 relative group cursor-pointer">
                    <img 
                      src={cert.image} 
                      alt={`Certificate ${index + 1}`} 
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                      onClick={() => openModal(cert.image)}
                    />
                    <div 
                      className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => openModal(cert.image)}
                    >
                       <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                    </div>
                  </div>
                  <div className="border-l-2 border-violet-500 pl-3">
                    <p className="text-[13.2px] font-mono text-gray-500 uppercase tracking-widest mb-1">Participation</p>
                    <p className="text-[15.4px] text-gray-300 leading-relaxed font-medium">This is my {cert.description}.</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </section>
        </Reveal>

        {/* GET IN TOUCH / CONTACT SECTION */}
        <Reveal>
          <section id="contact" className="max-w-5xl mx-auto space-y-12 relative z-20 pt-10">
            
            <h3 className="text-4xl md:text-5xl font-bold font-display text-white flex items-center justify-center gap-4">
              <span className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </span>
              Get In Touch
            </h3>

            <div className="grid md:grid-cols-2 gap-16 items-start pt-8">
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-3xl font-bold font-display text-white mb-4">Let's build something beautiful together.</h4>
                  <p className="text-gray-400 text-[15.4px] md:text-[17.6px] leading-relaxed">
                    Engineering student focused on robust backend systems. Whether you want to discuss algorithmic optimizations, a full-stack project, or just want to chat about code and design—drop me a line!
                  </p>
                </div>

                <div className="space-y-4">
                  <Magnetic>
                    <a href="mailto:soumya.mondal1708@gmail.com" className="flex items-center gap-5 p-4 bg-[#0a0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-cyan-500 transition-colors group">
                      <div className="w-14 h-14 bg-[#111] border border-gray-800 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                         <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </div>
                      <div>
                        <p className="text-[13.2px] font-mono text-gray-500 uppercase tracking-widest mb-1">Email Me</p>
                        <p className="text-white font-medium text-[15.4px] md:text-[17.6px] truncate max-w-[200px] md:max-w-full">soumya.mondal1708@gmail.com</p>
                      </div>
                    </a>
                  </Magnetic>

                  <Magnetic>
                    <a href="tel:8158056468" className="flex items-center gap-5 p-4 bg-[#0a0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-violet-500 transition-colors group">
                      <div className="w-14 h-14 bg-[#111] border border-gray-800 rounded-xl flex items-center justify-center group-hover:bg-violet-500/10 transition-colors">
                         <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      </div>
                      <div>
                        <p className="text-[13.2px] font-mono text-gray-500 uppercase tracking-widest mb-1">Call Me</p>
                        <p className="text-white font-medium text-[15.4px] md:text-[17.6px]">+91 8158056468</p>
                      </div>
                    </a>
                  </Magnetic>
                </div>
              </div>

              <SpotlightCard className="p-8 h-fit">
                <form 
                  className="space-y-6" 
                  action="https://formsubmit.co/soumya.mondal1708@gmail.com" 
                  method="POST"
                >
                  {/* FormSubmit Hidden Configuration Tags */}
                  <input type="hidden" name="_subject" value="New message from Soumya.Dev Portfolio!" />
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[13.2px] font-mono text-gray-400 uppercase tracking-widest mb-2">Your Name</label>
                      <input type="text" name="name" required placeholder="e.g. Neha Singh" className="w-full bg-[#13131f] border border-gray-800 rounded-lg p-4 text-white text-[17.6px] focus:outline-none focus:border-cyan-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[13.2px] font-mono text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                      <input type="email" name="email" required placeholder="e.g. abc@gmail.com" className="w-full bg-[#13131f] border border-gray-800 rounded-lg p-4 text-white text-[17.6px] focus:outline-none focus:border-cyan-500 transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13.2px] font-mono text-gray-400 uppercase tracking-widest mb-2">Contact Number</label>
                    <input type="tel" name="phone" placeholder="e.g. +91 XXXXX XXXXX" className="w-full bg-[#13131f] border border-gray-800 rounded-lg p-4 text-white text-[17.6px] focus:outline-none focus:border-cyan-500 transition-colors" />
                  </div>

                  <div>
                    <label className="block text-[13.2px] font-mono text-gray-400 uppercase tracking-widest mb-2">Your Message</label>
                    <textarea name="message" required rows="4" placeholder="e.g. I'd love to collaborate on a project with you..." className="w-full bg-[#13131f] border border-gray-800 rounded-lg p-4 text-white text-[17.6px] focus:outline-none focus:border-cyan-500 transition-colors"></textarea>
                  </div>
                  
                  <Magnetic>
                    <button type="submit" className="w-fit bg-gradient-to-r from-cyan-400 to-violet-500 hover:from-cyan-300 hover:to-violet-400 text-white font-bold font-display py-3 px-8 rounded-xl text-[17.6px] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] mt-4">
                      Send Message 
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    </button>
                  </Magnetic>
                </form>
              </SpotlightCard>

            </div>
          </section>
        </Reveal>

      </main>

      {/* FOOTER */}
      <Reveal>
        <footer className="border-t border-gray-800 bg-[#020202] py-10 px-6 relative z-20 mt-20">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-xl font-bold font-display text-white flex items-center justify-center md:justify-start gap-2 hover-glitch">
                <span className="text-cyan-400">{`>_`}</span> Soumya.dev
              </h2>
              <p className="text-[13.2px] text-gray-600 font-mono tracking-widest uppercase">
                © {new Date().getFullYear()} Soumya Mondal. Engineered for Performance.
              </p>
            </div>

            <div className="flex gap-4">
              <Magnetic>
                <a href="https://github.com/soumya1708" target="_blank" rel="noreferrer" className="p-3 bg-[#111] border border-gray-800 rounded-lg hover:border-cyan-500/50 hover:text-white transition-colors block">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5 text-current" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="https://www.linkedin.com/in/soumya-mondal-1b5030384" target="_blank" rel="noreferrer" className="p-3 bg-[#111] border border-gray-800 rounded-lg hover:border-violet-500/50 hover:text-white transition-colors block">
                   <span className="sr-only">LinkedIn</span>
                   <svg className="w-5 h-5 text-current" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
              </Magnetic>
            </div>

          </div>
        </footer>
      </Reveal>

      {/* LIGHTBOX (MODAL) VIEW */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal} 
        >
          <img 
            src={selectedImage} 
            alt="Certificate Full View" 
            className="max-w-full max-h-[90vh] rounded-xl border-2 border-gray-700 shadow-2xl transition-transform transform scale-100"
            onClick={(e) => e.stopPropagation()} 
          />
          <Magnetic>
            <button 
              className="absolute top-6 right-6 p-4 bg-[#111] rounded-full text-white hover:bg-red-500 hover:text-white transition-colors border border-gray-700 shadow-xl"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </Magnetic>
        </div>
      )}

    </div>
  );
}