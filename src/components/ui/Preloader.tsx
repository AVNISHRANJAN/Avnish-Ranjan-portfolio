"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export const Preloader = () => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const fullText = "> Initializing cloud_ecosystem_v2.0...";

  useEffect(() => {
    setMounted(true);
    
    // Only show preloader on first visit per session
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setLoading(true);
      sessionStorage.setItem("hasVisited", "true");
      
      let index = 0;
      const interval = setInterval(() => {
        setText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 600);
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, []);

  // Avoid rendering on server or if not loading
  if (!mounted || !loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] bg-[#0f172a] flex flex-col items-center justify-center font-mono"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
              <Terminal className="w-12 h-12 text-primary animate-pulse" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">{text}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-2 h-5 bg-primary"
              />
            </div>
            <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 2, ease: "easeInOut" }}
                 className="h-full bg-primary"
               />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
