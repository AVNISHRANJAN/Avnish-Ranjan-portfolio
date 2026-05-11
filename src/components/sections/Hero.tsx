"use client";

import { motion } from "framer-motion";
import { Typewriter } from "@/components/ui/Typewriter";
import { ArrowRight, Download, Send, Github, Linkedin } from "lucide-react";
import { scroller } from "react-scroll";

export const Hero = () => {
  const handleHireMe = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
    
    setTimeout(() => {
      const nameInput = document.getElementById("contact-name");
      if (nameInput) nameInput.focus();
    }, 1000);
  };

  const handleViewProjects = () => {
    scroller.scrollTo("projects", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const backgroundVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section 
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          variants={backgroundVariants}
          animate="animate"
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/15 rounded-full blur-[140px]"
        />
        <motion.div
          variants={backgroundVariants}
          animate="animate"
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary/10 rounded-full blur-[140px]"
        />
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute inset-0 bg-mesh-dark opacity-40" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full mx-auto flex flex-col items-center text-center z-10"
      >
        {/* Availability Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 md:mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-semibold text-slate-300 uppercase tracking-[0.2em]">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 sm:mb-8 text-white max-w-[1200px]"
        >
          Hi, I&apos;m <span className="text-primary glow-text">Avnish Ranjan</span> <br className="hidden sm:block" />
          <span className="text-slate-200">DevOps & Automation Engineer</span>
        </motion.h1>

        {/* Dynamic Sub-headline */}
        <motion.div
          variants={itemVariants}
          className="text-lg sm:text-2xl md:text-3xl text-slate-400 mb-10 sm:mb-12 font-medium h-auto sm:h-12 flex items-center justify-center flex-wrap gap-x-2"
        >
          <span className="text-slate-500">I specialize in</span>
          <Typewriter 
            words={["CI/CD Pipelines", "Cloud Infrastructure", "Kubernetes", "Automated Scaling"]} 
          />
        </motion.div>

        {/* Professional Summary */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl md:max-w-3xl mx-auto text-slate-400 text-base sm:text-lg md:text-xl mb-12 sm:mb-16 leading-relaxed px-4"
        >
          Architecting resilient cloud ecosystems and bridging the gap between development 
          and operations with high-performance automation.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-4"
        >
          <button 
            onClick={handleHireMe}
            className="btn-primary group w-full sm:w-auto min-w-[180px] h-14"
          >
            Hire Me
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <button 
            onClick={handleViewProjects}
            className="btn-secondary group w-full sm:w-auto min-w-[180px] h-14"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a 
            href="https://drive.google.com/file/d/1gaYBrLrCdFR0uwLA8g3HOcYcSSZgSuTG/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="btn-outline group w-full sm:w-auto min-w-[180px] h-14">
              Resume
              <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </a>
        </motion.div>

        {/* Social Connection */}
        <motion.div
          variants={itemVariants}
          className="mt-16 sm:mt-20 flex items-center justify-center gap-8"
        >
          <a 
            href="https://github.com/AVNISHRANJAN" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-2 text-slate-500 hover:text-white transition-all"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-mono tracking-widest hidden sm:block">GITHUB</span>
          </a>
          <div className="w-px h-8 bg-white/10 hidden sm:block" />
          <a 
            href="https://www.linkedin.com/in/avnishranjan/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-2 text-slate-500 hover:text-white transition-all"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-mono tracking-widest hidden sm:block">LINKEDIN</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
