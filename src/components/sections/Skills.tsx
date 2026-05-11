"use client";

import { motion } from "framer-motion";
import { 
  Cloud, 
  Terminal, 
  Database, 
  Layers, 
  Wrench,
  Cpu
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "DevOps & Infrastructure",
    icon: <Cloud className="w-6 h-6" aria-hidden="true" />,
    color: "text-primary",
    skills: [
      { name: "GitHub Actions / CI/CD", level: 95 },
      { name: "Docker & Kubernetes", level: 90 },
      { name: "AWS (EC2, S3, VPC)", level: 85 },
      { name: "Terraform / IaC", level: 88 },
      { name: "Ansible", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    icon: <Cpu className="w-6 h-6" aria-hidden="true" />,
    color: "text-secondary",
    skills: [
      { name: "Python / FastAPI", level: 92 },
      { name: "Java", level: 75 },
      { name: "Bash Scripting", level: 90 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Tools & Testing",
    icon: <Wrench className="w-6 h-6" aria-hidden="true" />,
    color: "text-orange-500",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "JMeter / Load Testing", level: 85 },
      { name: "Grafana / Monitoring", level: 80 },
      { name: "Selenium WebDriver", level: 88 },
    ],
  },
];

export const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Technical <span className="text-primary">Arsenal</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical capabilities across the entire software 
          delivery lifecycle, optimized for scale and reliability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="glass-card p-8 rounded-3xl group hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>

            <div className="space-y-6">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                    <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
                  </div>
                  <div 
                    className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} proficiency`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + sIdx * 0.1 }}
                      className={`h-full bg-gradient-to-r from-primary to-primary/50 rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-4">
        {["Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions", "Python", "React", "PostgreSQL", "Grafana"].map((badge, i) => (
          <span 
            key={i} 
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-sm font-medium hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
          >
            {badge}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
};
