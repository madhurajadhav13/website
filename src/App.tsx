import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  BookOpen, 
  Code2, 
  Music, 
  Utensils,
  GraduationCap,
  ChevronRight,
  Download
} from 'lucide-react';
import { useState, useEffect } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-sky-500/30 selection:text-white">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter text-sky-400"
          >
            Madhura<span className="text-white opacity-40"> Jadhav</span>
          </motion.div>
          
          <nav className="hidden md:flex gap-8">
            {['About', 'Education', 'Skills', 'Hobbies', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-sky-400 transition-all">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Bento Grid Main Layout */}
      <main className="relative pt-32 px-6 pb-24 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
        
        {/* Hero Section */}
        <section id="hero" className="glass-card flex flex-col justify-center items-start lg:col-span-2">
          <div className="w-16 h-1 bg-sky-500 mb-8 rounded-full" />
          <div className="flex flex-col md:flex-row gap-12 items-center w-full justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-sky-400 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                Available for Collaborations
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-2">
                Madhura<br/>Jadhav
              </h1>
              
              <p className="text-sky-400 font-medium text-lg leading-relaxed">
                Second Year B.E. in IT
              </p>
              <p className="text-slate-400 text-sm">
                Mumbai University (RGIT)
              </p>
              
              <div className="pt-8 flex flex-wrap gap-4 items-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#education"
                  className="btn-glass flex items-center gap-2"
                >
                  View Education <ChevronRight className="w-4 h-4" />
                </motion.a>
                
                <div className="flex gap-3">
                  <motion.a 
                    whileHover={{ y: -2 }} 
                    href="https://www.linkedin.com/in/madhura-jadhav-280aa4384/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full glass border-white/5 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400/30 transition-all font-bold"
                  >
                    in
                  </motion.a>
                  <motion.a 
                    whileHover={{ y: -2 }} 
                    href="https://github.com/madhurajadhav13" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full glass border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative shrink-0 hidden md:block" // Hidden on mobile to save space, but you can change this
            >
              <div className="absolute inset-0 bg-sky-500/20 blur-2xl rounded-[40px] rotate-3" />
              <img 
                src="/IMG-20260323-WA0058(1).jpg" 
                alt="Madhura Jadhav" 
                className="w-56 h-72 md:w-64 md:h-80 object-cover object-top rounded-[40px] border border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.1)] relative z-10"
              />
            </motion.div>
          </div>
        </section>

        {/* Education Section (Spans 2 rows) */}
        <section id="education" className="glass-card flex flex-col lg:col-span-1 lg:row-span-2">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-black uppercase tracking-widest text-slate-500 mb-8"
          >
            Education
          </motion.h3>
          
          <div className="flex flex-col gap-6">
            {[
              {
                title: "Mumbai University (RGIT)",
                degree: "B.E. in Information Technology",
                date: "2024 — Present",
                icon: <GraduationCap className="w-4 h-4 text-sky-400" />,
                active: true,
              },
              {
                title: "Arya Gurukul",
                degree: "12th Grade (HSC)",
                date: "Completed",
                icon: <BookOpen className="w-4 h-4 text-indigo-400" />,
                active: false,
              },
              {
                title: "Dominic Savio Vidyalaya",
                degree: "10th Grade (SSC) — 82%",
                date: "Completed",
                icon: <Code2 className="w-4 h-4 text-cyan-400" />,
                active: false,
              }
            ].map((edu, i) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative pl-5 border-l-2 ${edu.active ? 'border-sky-500' : 'border-slate-700'} pb-2`}
              >
                <div className="absolute -left-[9px] top-0 bg-[#0f172a] p-1 rounded-full">
                  <div className={`w-2 h-2 rounded-full ${edu.active ? 'bg-sky-500 shadow-[0_0_10px_#38bdf8]' : 'bg-slate-600'}`} />
                </div>
                <p className="text-sm font-bold text-slate-200">{edu.title}</p>
                <p className="text-[12px] text-sky-400 mt-1">{edu.degree}</p>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">{edu.date}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 opacity-50 text-[10px] text-slate-500 font-medium uppercase tracking-widest">
            Academic Journey Overview
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="glass-card flex flex-col justify-center lg:col-span-2">
          <motion.h3 
            {...fadeInUp}
            className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6"
          >
            About Me
          </motion.h3>
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <motion.div {...fadeInUp} className="lg:col-span-3 text-slate-300 text-sm leading-loose space-y-4 font-medium">
              <p>
                A tech-driven IT student with a strong foundation in software development 
                and analytical problem-solving. Currently pursuing my engineering degree at 
                Mumbai University, I'm passionate about building scalable solutions and 
                exploring the depths of computer science.
              </p>
              <p>
                Beyond the screen, I’m a dancer who values rhythm and discipline, 
                bringing that same focus and creativity to my code. I'm also a food enthusiast 
                constantly exploring the diverse and vibrant flavors of Mumbai.
              </p>
            </motion.div>
            
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {[
                { icon: <Code2 className="w-5 h-5"/>, label: 'Developer', color: 'text-sky-400' },
                { icon: <Music className="w-5 h-5"/>, label: 'Dancer', color: 'text-pink-400' },
                { icon: <Utensils className="w-5 h-5"/>, label: 'Foodie', color: 'text-orange-400' },
                { icon: <BookOpen className="w-5 h-5"/>, label: 'Student', color: 'text-indigo-400' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.03] outline outline-1 outline-white/5 rounded-[20px] flex flex-col items-center justify-center text-center p-4 hover:bg-white/[0.06] transition-colors"
                >
                  <div className={`mb-2 ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="glass-card flex flex-col justify-center lg:col-span-2">
           <motion.h3 
            className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6"
          >
            Passions & Life
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 group"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center text-2xl glass border-pink-500/20 group-hover:scale-110 transition-transform">
                  💃
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1">The Dance Floor</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Artistic Expression</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 group"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-2xl glass border-orange-500/20 group-hover:scale-110 transition-transform">
                  🍜
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1">Mumbai Flavors</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Food Enthusiast</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section (Spans 2 rows) */}
        <section id="skills" className="glass-card flex flex-col lg:col-span-1 lg:row-span-2">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-black uppercase tracking-widest text-slate-500 mb-8"
          >
            Core Expertise
          </motion.h3>
          
          <div className="space-y-6 flex-grow">
            {[
              { name: "Python", level: 90, hex: "#38bdf8" },
              { name: "C++", level: 85, hex: "#818cf8" },
              { name: "Data Structures (DSA)", level: 80, hex: "#22d3ee" },
              { name: "Algorithms", level: 85, hex: "#0ea5e9" }
            ].map((skill, i) => (
              <motion.div key={skill.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                <div className="flex justify-between text-xs mb-1.5 font-bold">
                  <span className="text-slate-200">{skill.name}</span>
                  <span style={{ color: skill.hex }}>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="skill-progress"
                    style={{ backgroundColor: skill.hex, boxShadow: `0 0 12px ${skill.hex}90` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 mx-auto w-full">
            <div className="bg-[#0f172a]/50 p-4 rounded-2xl flex items-center justify-center glass border-white/5">
               <Code2 className="w-8 h-8 text-sky-400/50" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <footer id="contact" className="glass-card flex flex-col justify-center lg:col-span-2">
          <motion.h3 
            className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6"
          >
            Digital Identity
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h4 className="text-2xl font-bold">Let's Connect</h4>
              <p className="text-slate-400 text-sm font-medium">Open for internship opportunities & collaborations.</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <a href="mailto:madhurajdhv302@gmail.com" className="flex items-center gap-4 glass bg-white/5 p-3 rounded-xl border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-8 h-8 flex items-center justify-center text-sky-400 text-sm font-bold bg-[#0f172a] rounded-lg">
                  <Mail className="w-4 h-4"/>
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-300 group-hover:text-white">madhurajdhv302@gmail.com</span>
              </a>
              
              <div className="flex gap-3 justify-center md:justify-start mt-2">
                {[
                  { label: "Gh", link: "https://github.com/madhurajadhav13", title: "GitHub" },
                  { label: "Li", link: "https://www.linkedin.com/in/madhura-jadhav-280aa4384/", title: "LinkedIn" }
                ].map((sz) => (
                  <a 
                    key={sz.label} 
                    href={sz.link}
                    title={sz.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center text-xs font-bold hover:text-white hover:border-sky-400/30 transition-all text-slate-400"
                  >
                    {sz.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
