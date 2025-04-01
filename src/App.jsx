import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, User, ChevronDown, Moon, Sun, Database, FileJson, Terminal, Figma as FigmaIcon, Monitor as MonitorCode, Boxes, GitBranch, MessageSquare, Wrench, Home, FileText } from 'lucide-react';
import carsadaImage from './assets/Carsada.png';
import tardyCareImage from './assets/TardyCare.png';
import smartPetFeederImage from './assets/Smart Pet Feeder with app base controll integration.jpg';
import leafyKitchenImage from './assets/The Leafy Kitchen Website.jpg';
import profileImage from './assets/me.jpg';
import acanaviImage from './assets/acanavi (2).png';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [text, setText] = useState('');
  const titles = [
    "Full Stack Developer",
    "IoT Developer",
    "UI/UX Designer"
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isErasing) {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(prev => prev.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsErasing(false);
        setCurrentIndex(0);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        return;
      }
    } else {
      if (currentIndex < currentTitle.length) {
        const timeout = setTimeout(() => {
          setText(prev => prev + currentTitle[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsErasing(true);
        }, 2000); // Wait 2 seconds before erasing
        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, text, isErasing, currentTitleIndex, titles]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset to account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const techStack = {
    'Programming Languages': [
      { name: 'JavaScript', icon: <FileJson className="w-6 h-6" /> },
      { name: 'Python', icon: <Terminal className="w-6 h-6" /> },
      { name: 'Java', icon: <MonitorCode className="w-6 h-6" /> },
      { name: 'C++', icon: <Code2 className="w-6 h-6" /> },
      { name: 'PHP', icon: <Terminal className="w-6 h-6" /> }
    ],
    'Web Technologies': [
      { name: 'Node.js', icon: <Terminal className="w-6 h-6" /> },
      { name: 'React', icon: <Boxes className="w-6 h-6" /> },
      { name: 'Express.js', icon: <Terminal className="w-6 h-6" /> }
    ],
    'Databases': [
      { name: 'MySQL', icon: <Database className="w-6 h-6" /> },
      { name: 'MongoDB', icon: <Database className="w-6 h-6" /> }
    ],
    'Tools': [
      { name: 'Git', icon: <GitBranch className="w-6 h-6" /> },
      { name: 'GitHub', icon: <Github className="w-6 h-6" /> },
      { name: 'Postman', icon: <MessageSquare className="w-6 h-6" /> },
      { name: 'Figma', icon: <FigmaIcon className="w-6 h-6" /> }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-40 border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              {/* Simplified JC Logo */}
              <div className="relative group">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text hover:from-cyan-300 hover:via-blue-300 hover:to-purple-300 transition-all duration-300">
                  JC
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
              </div>
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Home size={20} />
                <span>Home</span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <User size={20} />
                <span>About</span>
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Wrench size={20} />
                <span>Skills</span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Code2 size={20} />
                <span>Projects</span>
              </button>
            </div>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors border border-cyan-500/20 hover:border-cyan-500/40"
            >
              <Github size={24} className="text-cyan-400" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-12 mb-6">
            <div className="relative">
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-indigo-100 dark:border-indigo-900/30 shadow-[0_0_20px_rgba(99,102,241,0.2)] dark:shadow-[0_0_20px_rgba(99,102,241,0.1)] transform hover:scale-105 transition-transform duration-300">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
            </div>
            <div className="text-left flex flex-col justify-center">
              <span className="inline-block text-xl md:text-2xl text-cyan-400 dark:text-cyan-400 mb-4">
                Hello world, I'm
              </span>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="inline-block text-white dark:text-white">Jaycee Decepida</span>
                <span className="inline-block w-1 h-8 bg-cyan-400 dark:bg-cyan-400 ml-1 animate-pulse"></span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 mt-2">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">{text}</span>
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-3 justify-center dark:text-white">
              <User className="text-cyan-400 dark:text-cyan-400 w-10 h-10" />
              About Me
            </h2>
            <div className="relative">
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
              </div>

              {/* Main content */}
              <div className="relative z-10">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-8 mb-8 border border-cyan-100 dark:border-cyan-900/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    I'm a passionate student developer with a unique blend of software development, IoT design, and networking engineering expertise. 
                    My journey in technology combines academic learning with hands-on experience in creating innovative solutions. 
                    I specialize in developing web applications, IoT devices, and network infrastructure using CISCO Packet Tracer, 
                    bringing together the digital and physical worlds to create meaningful technological solutions.
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 border border-cyan-100 dark:border-cyan-900/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 dark:text-white">
                      <Code2 className="text-cyan-400" />
                      Frontend Development
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Crafting responsive and intuitive user interfaces using modern web technologies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 rounded-full text-sm">JavaScript</span>
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 rounded-full text-sm">Tailwind CSS</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 border border-cyan-100 dark:border-cyan-900/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 dark:text-white">
                      <Wrench className="text-cyan-400" />
                      IoT, Backend & Networking
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Building connected devices, robust backend systems, and network infrastructure for seamless integration.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 rounded-full text-sm">Express</span>
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 rounded-full text-sm">MongoDB</span>
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 rounded-full text-sm">IoT Design</span>
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 rounded-full text-sm">CISCO</span>
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 rounded-full text-sm">Networking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-colors" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center flex items-center gap-3 justify-center text-white">
            <Wrench className="text-cyan-400 w-8 h-8" />
            Tech Stack
          </h2>
          <div className="max-w-5xl mx-auto space-y-10">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div 
                key={category} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 
                  border border-cyan-500/20
                  shadow-[0_0_15px_rgba(34,211,238,0.1)]
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
                  hover:border-cyan-500/30
                  transition-all duration-300 ease-in-out
                  transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold mb-6 text-white">{category}</h3>
                <div className="flex flex-wrap gap-5">
                  {technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 px-6 py-3 
                        bg-gray-700/50 backdrop-blur-sm
                        text-cyan-300
                        rounded-lg text-base font-medium 
                        border border-cyan-500/20
                        shadow-[0_0_10px_rgba(34,211,238,0.1)]
                        hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]
                        hover:bg-gray-700
                        hover:border-cyan-500/30
                        transition-all duration-300 ease-in-out
                        transform hover:-translate-y-0.5"
                    >
                      <span className="text-cyan-400">
                        {tech.icon}
                      </span>
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-colors" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center gap-2 justify-center text-white">
            <Code2 className="text-cyan-400" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Acanavi",
                image: acanaviImage,
                description: "Acanavi helps students and teachers seamlessly track grades, quiz scores, and academic progress-all in one place.",
                docsUrl: "https://acanavi-alpha-test.onrender.com/",
                docsName: "Live Demo"
              },
              {
                title: "Carsada",
                image: carsadaImage,
                description: "A user-friendly jeepney navigation app featuring real-time route tracking, interactive maps, and step-by-step directions. Includes multi-language support, fare estimates, and mobile payment integration for a seamless commuting experience.",
                docsUrl: "/src/docs/CARSADA Presentation (1).pdf",
                docsName: "Carsada Documentation"
              },
              {
                title: "TardyCare",
                image: tardyCareImage,
                description: "A student attendance tracking system designed to monitor and record student class attendance, helping educational institutions maintain accurate attendance records efficiently.",
                docsUrl: "#",
                docsName: "Documentation Coming Soon"
              },
              {
                title: "Smart Pet Feeder",
                image: smartPetFeederImage,
                description: "An IoT-enabled pet feeding system with mobile app integration for remote monitoring and control of pet feeding schedules.",
                docsUrl: "/src/docs/Smart Pet Feeder with App-Based Control Integration.docx",
                docsName: "Smart Pet Feeder Documentation"
              },
              {
                title: "The Leafy Kitchen",
                image: leafyKitchenImage,
                description: "A comprehensive food recipe website offering a collection of culinary recipes and cooking inspiration for food enthusiasts.",
                docsUrl: "#",
                docsName: "Documentation Coming Soon"
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-cyan-500/20 shadow-cyan-500/10 hover:shadow-cyan-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={project.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300"
                    >
                      {project.docsName === "Live Demo" ? (
                        <>
                          Live Demo <ExternalLink size={16} />
                        </>
                      ) : (
                        <>
                          View Docs <FileText size={16} />
                        </>
                      )}
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 ml-4"
                    >
                      Source <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-colors" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transform hover:-translate-y-0.5"
          >
            <Mail size={20} />
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-colors">
        <div className="container mx-auto px-4 text-center text-gray-300">
          <p>© 2024 Jaycee Decepida. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;