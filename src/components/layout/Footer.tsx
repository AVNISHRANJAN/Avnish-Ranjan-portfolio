import { Github, Linkedin, Mail, Terminal, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-white tracking-tighter">
              AVNISH<span className="text-primary">.DEV</span>
            </span>
          </div>
          <p className="text-sm text-slate-500 max-w-xs text-center md:text-left">
            Automating the future, one pipeline at a time. Built with Next.js & Framer Motion.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-4">
           <div className="flex items-center gap-6">
              <a href="https://github.com/AVNISHRANJAN" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/avnishranjan/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:avnishranjan7@gmail.com" className="text-slate-500 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
           </div>
           <p className="text-xs font-mono text-slate-600 tracking-widest">
             &copy; {currentYear} AVNISH RANJAN. ALL RIGHTS RESERVED.
           </p>
        </div>

        {/* Credit */}
        <div className="text-xs text-slate-600 flex items-center gap-1">
          Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by Avnish
        </div>
      </div>

      {/* Background Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[100px] bg-primary/5 blur-[80px] -z-10" />
    </footer>
  );
};
