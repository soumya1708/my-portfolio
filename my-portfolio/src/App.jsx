import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-teal-500/30">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-sm font-medium">
          <span className="text-white font-bold text-lg tracking-tighter">Soumya.Dev</span>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
          </div>
          <a href="#contact" className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
            Hire Me
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-20 pb-24 space-y-32">
        
        {/* HERO SECTION */}
        <section className="space-y-6 pt-10">
          <div className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-full border border-green-500/20">
            ● OPEN TO OPPORTUNITIES
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Soumya Mondal
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-400">
            Backend Developer | Java & Spring Boot
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Engineering student building robust backend architectures, APIs, and AI-integrated applications. Focused on writing clean code and creating scalable systems that solve real-world problems.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/yourusername" className="px-6 py-2.5 bg-[#1a1a1a] border border-gray-800 hover:border-gray-600 rounded-md text-white font-medium transition-all">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" className="px-6 py-2.5 bg-[#1a1a1a] border border-gray-800 hover:border-gray-600 rounded-md text-white font-medium transition-all">LinkedIn</a>
            <a href="mailto:your.email@example.com" className="px-6 py-2.5 bg-[#1a1a1a] border border-gray-800 hover:border-gray-600 rounded-md text-white font-medium transition-all">Email</a>
          </div>
        </section>

        {/* EDUCATION & CLUBS */}
        <section id="education" className="space-y-8">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-gray-600">/</span> Education & Involvement
          </h3>
          <div className="border-l-2 border-gray-800 pl-6 space-y-10">
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 h-3 w-3 bg-gray-400 rounded-full border-4 border-[#0a0a0a]"></div>
              <h4 className="text-lg font-bold text-white">Bachelor of Technology</h4>
              <p className="text-teal-400 text-sm font-medium mb-2">Information Technology • Techno Main Salt Lake, Kolkata</p>
              <p className="text-xs text-gray-500 mb-3">2025 - 2029 (Expected)</p>
              <p className="text-gray-400 text-sm">
                Focusing on core computer science fundamentals, backend engineering, data structures, and database management systems.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 h-3 w-3 bg-gray-600 rounded-full border-4 border-[#0a0a0a]"></div>
              <h4 className="text-lg font-bold text-white">The Astronomy Club</h4>
              <p className="text-teal-400 text-sm font-medium mb-2">Active Member • Techno Main Salt Lake</p>
              <p className="text-xs text-gray-500 mb-3">Dec 2025 - Present</p>
              <p className="text-gray-400 text-sm">
                Participating in technical campus initiatives, telescope operations, and sky-watching events.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNICAL ARSENAL */}
        <section id="skills" className="space-y-8">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-gray-600">/</span> Technical Arsenal
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-3">
              <h4 className="text-white font-semibold border-b border-gray-800 pb-2">Languages</h4>
              <ul className="text-sm space-y-2 text-gray-400">
                <li>Java</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold border-b border-gray-800 pb-2">Backend & APIs</h4>
              <ul className="text-sm space-y-2 text-gray-400">
                <li>Spring Boot</li>
                <li>Spring Data JPA</li>
                <li>Hibernate</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold border-b border-gray-800 pb-2">Databases & Tools</h4>
              <ul className="text-sm space-y-2 text-gray-400">
                <li>MySQL</li>
                <li>Git & GitHub</li>
                <li>Vercel</li>
                <li>JavaFX</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold border-b border-gray-800 pb-2">Innovation</h4>
              <ul className="text-sm space-y-2 text-gray-400">
                <li>Generative AI APIs</li>
                <li>Google Gemini Integration</li>
                <li>Claude API</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ENGINEERING PROJECTS */}
        <section id="projects" className="space-y-8">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-gray-600">/</span> Engineering Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-colors flex flex-col justify-between group">
              <div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">Sanjeevani</h4>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                  A healthcare-focused application featuring an integrated backend architecture and intelligent AI features. Built with robust API connectivity and database synchronization.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
                <span className="bg-[#1a1a1a] px-2 py-1 rounded">Java</span>
                <span className="bg-[#1a1a1a] px-2 py-1 rounded">Spring Boot</span>
                <span className="bg-[#1a1a1a] px-2 py-1 rounded">MySQL</span>
                <span className="bg-[#1a1a1a] px-2 py-1 rounded">AI API</span>
              </div>
            </div>

            <div className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-colors flex flex-col justify-between group">
              <div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">VolunteerConnect</h4>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                  A matching platform pairing volunteers with non-governmental organizations. Developed for competitive project presentations with a focus on data mapping and operational impact.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
                <span className="bg-[#1a1a1a] px-2 py-1 rounded">Backend Design</span>
                <span className="bg-[#1a1a1a] px-2 py-1 rounded">System Architecture</span>
              </div>
            </div>

            <div className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-colors flex flex-col justify-between group">
              <div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">SkipIt</h4>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                  A feasibility analysis and system design project tackling canteen queue management. Included target market analysis, revenue modeling, and operational flow architectures.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
                <span className="bg-[#1a1a1a] px-2 py-1 rounded">System Design</span>
                <span className="bg-[#1a1a1a] px-2 py-1 rounded">Pitch Deck</span>
              </div>
            </div>

            <div className="bg-[#111] border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-colors flex flex-col justify-between group">
              <div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">Hospital Management System</h4>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                  A desktop-based management system using Data Access Object (DAO) patterns for clean architecture, seamless database operations, and structured MVC folders.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
                <span className="bg-[#1a1a1a] px-2 py-1 rounded">JavaFX</span>
                <span className="bg-[#1a1a1a] px-2 py-1 rounded">MySQL</span>
                <span className="bg-[#1a1a1a] px-2 py-1 rounded">DAO Pattern</span>
              </div>
            </div>

          </div>
        </section>

        {/* IMPACT & RECOGNITION (Hackathons & Certs) */}
        <section id="achievements" className="space-y-8">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-gray-600">/</span> Impact & Recognition
          </h3>
          <div className="grid gap-4">
            <div className="flex justify-between items-center p-4 bg-[#111] border border-gray-800 rounded-lg">
              <div>
                <h4 className="text-white font-bold">Google Solution Challenge 2026</h4>
                <p className="text-sm text-gray-400">Active participant leveraging technology for community impact.</p>
              </div>
              <span className="text-sm text-gray-500 font-mono">2026</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#111] border border-gray-800 rounded-lg">
              <div>
                <h4 className="text-white font-bold">Unstop Hack-Your-Way & INTRA Cup</h4>
                <p className="text-sm text-gray-400">Competed in rapid prototyping and software development challenges.</p>
              </div>
              <span className="text-sm text-gray-500 font-mono">2026</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#111] border border-gray-800 rounded-lg">
              <div>
                <h4 className="text-white font-bold">Google AI Agents Intensive</h4>
                <p className="text-sm text-gray-400">Course completion in context engineering and multi-agent systems.</p>
              </div>
              <span className="text-sm text-gray-500 font-mono">2025</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#111] border border-gray-800 rounded-lg">
              <div>
                <h4 className="text-white font-bold">Kaggle Python Coder Badge</h4>
                <p className="text-sm text-gray-400">Recognized for Python programming proficiency on the Kaggle platform.</p>
              </div>
              <span className="text-sm text-gray-500 font-mono">2025</span>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER & CONTACT */}
      <footer id="contact" className="border-t border-gray-800 bg-[#050505] py-16">
        <div className="max-w-xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl font-bold text-white">Start a Conversation</h2>
          <p className="text-gray-400 text-sm">
            Interested in working together on a hackathon, open-source project, or backend system? I am always open to discussing new opportunities and technical challenges.
          </p>
          <a href="mailto:your.email@example.com" className="inline-block bg-white text-black px-8 py-3 rounded-md font-bold hover:bg-gray-200 transition-colors mt-4">
            Get In Touch
          </a>
          <p className="text-xs text-gray-600 pt-12">
            © 2026 Soumya Mondal. Engineered for Performance.
          </p>
        </div>
      </footer>

    </div>
  );
}