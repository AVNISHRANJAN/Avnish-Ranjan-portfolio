"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Instagram,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export const Contact = () => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setFormState("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset after 5 seconds
      setTimeout(() => setFormState("idle"), 5000);
    } catch (err: any) {
      console.error("Form Error:", err);
      setFormState("error");
      setErrorMessage(err.message || "Failed to send message. Please try again.");
      setTimeout(() => setFormState("idle"), 4000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: "Email",
      value: "avnishranjan7@gmail.com",
      link: "mailto:avnishranjan7@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      label: "Phone",
      value: "+91 9660346509",
      link: "tel:+919660346509"
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      label: "Location",
      value: "Mohali, Punjab, India",
      link: "https://www.google.com/maps/search/Mohali,+Punjab,+India"
    }
  ];

  const socials = [
    { 
      icon: <Github className="w-6 h-6" />, 
      link: "https://github.com/AVNISHRANJAN", 
      label: "GitHub",
      color: "hover:text-white hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      link: "https://www.linkedin.com/in/avnishranjan/", 
      label: "LinkedIn",
      color: "hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:shadow-[0_0_20px_rgba(0,119,181,0.2)]"
    },
    { 
      icon: <Instagram className="w-6 h-6" />, 
      link: "https://www.instagram.com/_abhi_vats_12/", 
      label: "Instagram",
      color: "hover:text-[#e4405f] hover:border-[#e4405f]/30 hover:shadow-[0_0_20px_rgba(228,64,95,0.2)]"
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Let&apos;s Build Something <span className="text-primary">Scalable.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                Interested in automation, cloud architecture, or just want to chat about DevOps? 
                Drop me a message and I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-surface transition-colors border border-transparent hover:border-border"
                >
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">{item.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <p className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-6">Follow Me</p>
              <div className="flex gap-4">
                {socials.map((social, idx) => (
                  <motion.a 
                    key={idx} 
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-2xl bg-surface border border-border text-slate-500 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-[2.5rem] relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-500 ml-1">Name</label>
                  <input 
                    required
                    id="contact-name"
                    name="name"
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-500 ml-1">Email</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-500 ml-1">Subject</label>
                <input 
                  required
                  name="subject"
                  type="text" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-500 ml-1">Message</label>
                <textarea 
                  required
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              {formState === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                  <AlertCircle className="w-4 h-4" />
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                disabled={formState === "submitting"}
                className={`w-full btn-primary py-4 rounded-xl flex items-center justify-center gap-3 transition-all ${
                  formState === "submitting" ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {formState === "idle" && (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
                {formState === "submitting" && (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </div>
                )}
                {formState === "success" && (
                  <>
                    Message Sent!
                    <CheckCircle2 className="w-5 h-5" />
                  </>
                )}
                {formState === "error" && (
                  <>
                    Try Again
                    <AlertCircle className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <AnimatePresence>
              {formState === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-background/80 backdrop-blur-md flex flex-col items-center justify-center rounded-[2.5rem] z-20"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-slate-400 text-center px-8">
                    Your message has been received. I&apos;ll get back to you shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
