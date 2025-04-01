import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, User, ChevronDown, Moon, Sun, Database, FileJson, Terminal, Figma as FigmaIcon, Monitor as MonitorCode, Boxes, GitBranch, MessageSquare, Wrench, Home, FileText } from 'lucide-react';
import carsadaImage from './assets/Carsada.png';
import tardyCareImage from './assets/TardyCare.png';
import smartPetFeederImage from './assets/Smart Pet Feeder with app base controll integration.jpg';
import leafyKitchenImage from './assets/The Leafy Kitchen Website.jpg';
import profileImage from './assets/me.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const [text, setText] = useState('');
  const fullText = "Jaycee Decepida";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Home size={20} />
                <span>Home</span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <User size={20} />
                <span>About</span>
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Wrench size={20} />
                <span>Skills</span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Code2 size={20} />
                <span>Projects</span>
              </button>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>
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
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
                <span className="inline-block">{text}</span>
                <span className="inline-block w-1 h-8 bg-indigo-600 dark:bg-indigo-400 ml-1 animate-pulse"></span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-2">
                Full Stack Developer & UI/UX Enthusiast
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:john@example.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <ChevronDown className="absolute bottom-8 animate-bounce text-gray-400 dark:text-gray-500" size={32} />
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors" id="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Profile"
                className="rounded-lg shadow-xl border-2 border-indigo-100 dark:border-indigo-900 shadow-indigo-100 dark:shadow-indigo-900/20"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 dark:text-white">
                <User className="text-indigo-600 dark:text-indigo-400" />
                About Me
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate full-stack developer with 5 years of experience building web applications.
                I specialize in React, Node.js, and modern web technologies. When I'm not coding,
                you'll find me contributing to open-source projects or writing technical blog posts.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-indigo-100 dark:border-indigo-900/30 shadow-sm shadow-indigo-100 dark:shadow-indigo-900/10">
                  <h3 className="font-semibold mb-2 dark:text-white">Frontend</h3>
                  <p className="text-gray-600 dark:text-gray-300">React, JavaScript, Tailwind CSS</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-indigo-100 dark:border-indigo-900/30 shadow-sm shadow-indigo-100 dark:shadow-indigo-900/10">
                  <h3 className="font-semibold mb-2 dark:text-white">Backend</h3>
                  <p className="text-gray-600 dark:text-gray-300">Node.js, Express, MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center flex items-center gap-3 justify-center dark:text-white">
            <Wrench className="text-indigo-600 dark:text-indigo-400 w-8 h-8" />
            Tech Stack
          </h2>
          <div className="max-w-5xl mx-auto space-y-10">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div 
                key={category} 
                className="bg-white dark:bg-gray-800 rounded-xl p-8 
                  border-2 border-indigo-100 dark:border-indigo-900/30 
                  shadow-[0_0_15px_rgba(99,102,241,0.1)] dark:shadow-[0_0_15px_rgba(99,102,241,0.1)]
                  hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]
                  hover:border-indigo-200 dark:hover:border-indigo-800
                  transition-all duration-300 ease-in-out
                  transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{category}</h3>
                <div className="flex flex-wrap gap-5">
                  {technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 px-6 py-3 
                        bg-indigo-50 dark:bg-gray-700 
                        text-indigo-600 dark:text-indigo-300 
                        rounded-lg text-base font-medium 
                        border border-indigo-100 dark:border-indigo-900/20
                        shadow-[0_0_10px_rgba(99,102,241,0.1)] dark:shadow-[0_0_10px_rgba(99,102,241,0.1)]
                        hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]
                        hover:bg-indigo-100 dark:hover:bg-gray-600 
                        hover:border-indigo-200 dark:hover:border-indigo-800
                        transition-all duration-300 ease-in-out
                        transform hover:-translate-y-0.5"
                    >
                      <span className="text-indigo-500 dark:text-indigo-400">
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
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center gap-2 justify-center dark:text-white">
            <Code2 className="text-indigo-600 dark:text-indigo-400" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-indigo-100 dark:border-indigo-900/30 shadow-indigo-100 dark:shadow-indigo-900/20 hover:shadow-indigo-200 dark:hover:shadow-indigo-900/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={project.docsUrl}
                      download={project.docsName}
                      className="inline-flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                    >
                      View Docs <FileText size={16} />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 ml-4"
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
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <a
            href="mailto:john@example.com"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Mail size={20} />
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          <p>© 2025 Jaycee Jaycee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;