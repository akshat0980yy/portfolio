import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, MessageSquare } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online store with payment integration and admin dashboard",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tech: ["Next.js", "Firebase", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather app with location-based forecasts",
      tech: ["React", "OpenWeather API", "Chart.js"],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Netlify"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-purple-400 transition-colors ${
                    activeSection === section ? 'text-purple-400' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-purple-900/50 rounded-md transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-5xl font-bold mx-auto">
              YN
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Your Name
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Building beautiful, responsive web applications with modern technologies
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all transform hover:scale-105"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-purple-400 hover:bg-purple-900/50 px-6 py-3 rounded-full transition-all"
            >
              Contact Me
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-purple-400 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <User className="mr-3 text-purple-400" size={32} />
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
              With experience in modern web technologies, I specialize in building responsive, user-friendly applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge with the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Briefcase className="mr-3 text-purple-400" size={32} />
            <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-3 text-purple-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-900/50 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Code className="mr-3 text-purple-400" size={32} />
            <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <MessageSquare className="mr-3 text-purple-400" size={32} />
            <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert('Thank you for your message! This is a demo - integrate with your email service.');
                }}
                className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-purple-500/20">
        <p>© 2024 Your Name. Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Portfolio;
