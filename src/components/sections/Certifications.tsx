"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface Certification {
  title: string;
  issuer: string;
  link?: string;
}

const certifications: Certification[] = [
  {
    title: "Python for DevOps",
    issuer: "TrainWithShubham",
    link: "#",
  },
  {
    title: "DevOps Fundamentals",
    issuer: "TrainWithShubham",
    link: "#",
  },
  {
    title: "Selenium WebDriver",
    issuer: "Udemy",
    link: "#",
  },
];

export const Certifications = () => {
  return (
    <SectionWrapper id="certifications">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Professional <span className="text-secondary">Certifications</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="glass-card p-6 rounded-2xl group hover:border-secondary/30 transition-all duration-300 flex items-start gap-4"
          >
            <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
              <Award className="w-6 h-6 text-secondary" aria-hidden="true" />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-white group-hover:text-secondary transition-colors mb-1">
                {cert.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>
              
              <a 
                href={cert.link} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify ${cert.title} certificate`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-secondary transition-colors"
              >
                <ShieldCheck className="w-3 h-3" aria-hidden="true" />
                Verify Certificate
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
