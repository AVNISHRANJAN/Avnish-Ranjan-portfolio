"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Rocket } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface Project {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "RoadAthena CI/CD Ecosystem",
    description: "A comprehensive automation engine for the RoadAthena platform, transforming manual delivery into a streamlined cloud-native pipeline.",
    features: [
      "Cycle time reduction: 3 days → 8 hours",
      "Self-healing Dockerized build nodes",
      "Automated Extent Reports integration",
      "Multi-stage environment gating"
    ],
    tech: ["GitHub Actions", "Docker", "Git", "Python", "Bash"],
    githubUrl: "https://github.com/AVNISHRANJAN",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1667372333374-0d3c88338421?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "AWS Cloud Architect",
    description: "Production-grade infrastructure provisioning using IaC principles to deploy scalable, secure, and reproducible multi-tier environments.",
    features: [
      "Terraform-managed VPC & Subnets",
      "Auto-scaling EC2 clusters",
      "IAM Role-based security policies",
      "Zero-touch resource deployment"
    ],
    tech: ["Terraform", "AWS", "Ansible", "Linux"],
    githubUrl: "https://github.com/AVNISHRANJAN",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  }
];

export const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            Engineering solutions that scale. These projects represent my focus on 
            automation, infrastructure efficiency, and robust software delivery.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
           <div className="h-px w-12 bg-white/10 hidden md:block" aria-hidden="true" />
           <span className="text-sm font-mono text-slate-500 uppercase tracking-widest">Selected Work</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group glass-card rounded-[2rem] overflow-hidden flex flex-col h-full hover:border-primary/30 transition-all duration-500"
          >
            {/* Image Header */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
              <img 
                src={project.image} 
                alt={`${project.title} - ${project.category} Project`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute top-6 left-6 z-20">
                <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a 
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {project.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-500">
                    <Rocket className="w-3 h-3 text-primary flex-shrink-0" aria-hidden="true" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-slate-500 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a 
          href="https://github.com/AVNISHRANJAN" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="btn-secondary group h-12">
            See All Open Source Work
            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" aria-hidden="true" />
          </button>
        </a>
      </div>
    </SectionWrapper>
  );
};
