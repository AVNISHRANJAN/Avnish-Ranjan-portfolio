"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  isCurrent?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: "HanuAI Pvt. Ltd",
    role: "DevOps & Automation Engineer",
    location: "Mohali, India",
    period: "May 2025 — Present",
    isCurrent: true,
    description: [
      "Architected end-to-end CI/CD pipelines with GitHub Actions, reducing deployment cycle time from 3 days to 1 hour.",
      "Containerized legacy and modern applications using Docker & Kubernetes (Kind/Minikube) for consistent cross-environment parity.",
      "Automated critical infrastructure tasks via Python and Bash, cutting manual operational effort by 70% across 50+ workflows.",
      "Conducted large-scale API load testing using JMeter for 10,000+ concurrent users, identifying and resolving critical bottlenecks.",
      "Maintained a 95% defect detection rate pre-production within Agile sprints."
    ],
    skills: ["GitHub Actions", "Kubernetes", "Docker", "Terraform", "Python", "JMeter", "Linux"],
  },
  {
    company: "Freelance / Contract",
    role: "Software Engineer",
    location: "Remote",
    period: "Dec 2024 — April 2025",
    description: [
      "Developed custom automation scripts in Python and Java to support specialized testing and deployment workflows for small-scale clients.",
      "Contributed to high-impact open-source projects, strengthening version control strategies and branching models using Git.",
      "Designed and validated Dockerized application environments, providing foundational scalability for client projects."
    ],
    skills: ["Python", "Java", "Docker", "Git", "Bash", "Open Source"],
  }
];

export const Experience = () => {
  return (
    <SectionWrapper id="experience" className="max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Professional <span className="text-primary">Journey</span>
        </h2>
        <p className="text-slate-400">
          A timeline of my professional growth and technical contributions.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-16 relative pl-10 md:pl-16"
          >
            {/* Timeline Indicator */}
            <div className="absolute left-[-9px] top-0 flex items-center justify-center">
              <div 
                className={`w-4 h-4 rounded-full border-4 border-background ${exp.isCurrent ? 'bg-primary animate-pulse' : 'bg-slate-700'}`} 
                aria-hidden="true"
              />
              {exp.isCurrent && (
                 <div className="absolute w-6 h-6 bg-primary/20 rounded-full animate-ping" aria-hidden="true" />
              )}
            </div>

            <div className="glass-card p-8 rounded-3xl group hover:border-primary/30 transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors flex flex-wrap items-center gap-3">
                    {exp.role}
                    {exp.isCurrent && (
                      <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                        Current Role
                      </span>
                    )}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400 font-medium mt-1">
                    <Briefcase className="w-4 h-4" aria-hidden="true" />
                    <span>{exp.company}</span>
                    <span className="hidden md:inline text-slate-600">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 font-mono bg-white/5 px-3 py-1 rounded-lg border border-white/5 w-fit">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  {exp.period}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {exp.description.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex gap-3 text-slate-400 leading-relaxed group/bullet">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/bullet:scale-110 transition-transform" aria-hidden="true" />
                    <p className="text-sm md:text-base">{bullet}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400 group-hover:border-primary/20 group-hover:text-slate-300 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <a 
          href="https://drive.google.com/file/d/1gaYBrLrCdFR0uwLA8g3HOcYcSSZgSuTG/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm font-medium"
        >
          View Full Resume (PDF)
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </SectionWrapper>
  );
};
