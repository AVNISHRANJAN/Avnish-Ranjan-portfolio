"use client";

import { motion as framerMotion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const Education = () => {
  const courses = [
    "Operating Systems",
    "Computer Networks",
    "Database Management",
    "Data Structures & Algorithms",
    "Software Engineering"
  ];

  return (
    <SectionWrapper id="education">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Academic <span className="text-primary">Background</span>
        </h2>
      </div>

      <div className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-primary/20 transition-all duration-500">
        <GraduationCap className="absolute -right-8 -bottom-8 w-48 h-48 text-primary/5 -rotate-12 pointer-events-none group-hover:text-primary/10 transition-colors" aria-hidden="true" />

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-grow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">B.Tech in Computer Software Engineering</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-400 mt-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    Chandigarh University
                  </span>
                  <span className="flex items-center gap-1.5 text-sm">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    Mohali, India
                  </span>
                  <span className="flex items-center gap-1.5 text-sm">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    Aug 2021 — July 2025
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                Key Coursework
              </h4>
              <div className="flex flex-wrap gap-3">
                {courses.map((course, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm hover:border-primary/30 hover:bg-primary/5 transition-all"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
