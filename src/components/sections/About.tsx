"use client";

import { motion } from "framer-motion";
import { User, Code2, Rocket, ShieldCheck } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const highlights = [
  {
    icon: <Rocket className="w-5 h-5 text-primary" aria-hidden="true" />,
    title: "Fast Deployment",
    description: "Reduced cycle times from 3 days to 1 hour through robust CI/CD automation.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-secondary" aria-hidden="true" />,
    title: "System Reliability",
    description: "Maintaining a 95% pre-production defect detection rate via automated testing.",
  },
  {
    icon: <Code2 className="w-5 h-5 text-accent" aria-hidden="true" />,
    title: "IaC Expert",
    description: "Provisioning scalable cloud environments using Terraform and Ansible.",
  },
];

const stats = [
  { label: "Experience", value: "1+ Year" },
  { label: "Workflows", value: "50+" },
  { label: "Uptime", value: "99.9%" },
  { label: "Releases", value: "12+" },
];

export const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Visual & Stats */}
        <div className="relative">
          <div className="relative z-10 glass-card p-8 rounded-3xl overflow-hidden group border-white/10 hover:border-primary/20 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <User className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">DevOps Journey</h3>
                <p className="text-slate-400 text-sm">Bridging Dev & Ops since 2021</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-8">
              I am a passionate DevOps & Automation Engineer focused on building high-performance 
              software delivery pipelines. My journey started with a fascination for cloud-native 
              architectures and has evolved into a career dedicated to optimizing developer 
              productivity and system stability.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Background */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" aria-hidden="true" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -z-10" aria-hidden="true" />
        </div>

        {/* Right Column: Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Engineering <span className="text-primary">Scalability</span> <br />
              with Precision.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              As a DevOps Engineer at <span className="text-white font-medium">HanuAI</span>, 
              I specialize in transforming complex manual processes into streamlined, automated 
              workflows. I believe that great software isn&apos;t just about code—it&apos;s about the 
              resilience of the infrastructure it runs on.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button className="btn-outline group h-12">
              Full Professional Bio
              <Rocket className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
