# 🚀 Premium DevOps Portfolio v2.0

A high-performance, ultra-modern portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Designed specifically for DevOps and Automation Engineers, focusing on impact-driven narratives and a "Cyber-Industrial" aesthetic.

![Portfolio Preview](https://via.placeholder.com/1200x630/0f172a/10b981?text=Avnish+Ranjan+Portfolio+Preview)

## ✨ Features

- ⚡ **High Performance:** Built with Next.js 14 for optimized loading and zero layout shift.
- 🎨 **Cyber-Industrial Aesthetic:** A premium dark-mode design with glassmorphism and emerald accents.
- 📱 **Fully Responsive:** Fluid transitions from mobile to ultra-wide desktops.
- 🛠️ **DevOps Focused:** Custom sections for CI/CD projects, IaC skills, and automated system metrics.
- 🖱️ **Interactive UX:** Custom animated cursor, terminal-style preloader, and magnetic hover effects.
- 🌑 **Dark/Light Mode:** Seamless theme switching with `next-themes`.
- 🔍 **SEO Optimized:** Full metadata configuration for LinkedIn, Twitter, and Search Engines.
- ♿ **Accessible:** WCAG-compliant color contrast and ARIA landmarks.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theme:** [Next Themes](https://github.com/pacocoursey/next-themes)
- **Smooth Scroll:** [React Scroll](https://github.com/fabe/react-scroll)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Project Structure

```bash
├── src/
│   ├── app/                # Next.js App Router (Layouts, Pages, Globals)
│   ├── components/
│   │   ├── layout/         # Global UI (Navbar, Footer, Providers)
│   │   ├── sections/       # Main portfolio sections (Hero, About, etc.)
│   │   └── ui/             # Reusable UI atoms (Buttons, CustomCursor, etc.)
│   └── lib/                # Utility functions (shadcn-like helpers)
├── public/                 # Static assets (Images, Resume PDF)
├── tailwind.config.ts      # Design system tokens
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/AVNISHRANJAN/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the result.

---

## 🏗️ Build & Production

### Generate static build
```bash
npm run build
```

### Preview production build
```bash
npm run start
```

---

## 🌐 Deployment Guide

### **Deploy to Vercel (Recommended)**
1. Push your code to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard).
3. Click "New Project" and select your repository.
4. Click **Deploy**. Vercel will automatically detect Next.js settings.

### **Deploy to Netlify**
1. Push code to GitHub.
2. Go to [Netlify](https://www.netlify.com/).
3. Add a new site from Git.
4. Build Command: `next build`
5. Publish directory: `.next`

### **Deploy to AWS (S3 + CloudFront)**
1. Update `next.config.mjs` to set `output: 'export'`.
2. Run `npm run build`.
3. Upload the contents of the `out/` folder to an S3 bucket.
4. Configure CloudFront for HTTPS and global CDN delivery.

---

## 📝 Customization Guide

### Updating Content
Most of the content is managed within the component files in `src/components/sections/`.
- **Hero:** Edit `Hero.tsx` for titles and intro.
- **Experience:** Update the `experiences` array in `Experience.tsx`.
- **Projects:** Add new projects to the `projects` array in `Projects.tsx`.

### Changing Theme Colors
Update the `colors` object in `tailwind.config.ts`:
```typescript
primary: {
  DEFAULT: "#10b981", // Change your main accent color here
}
```

---

## 🤝 Contact

**Avnish Ranjan**  
📧 [avnishranjan7@gmail.com](mailto:avnishranjan7@gmail.com)  
🔗 [LinkedIn](https://linkedin.com/in/avnishranjan)  
🐙 [GitHub](https://github.com/AVNISHRANJAN)

---
*Built with precision for the modern web.*
