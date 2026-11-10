# Janhvi Bankar — Editorial & Creative Developer Portfolio

An award-winning editorial and creative technologist portfolio representing **Janhvi Bankar**: Computer Science Engineer, Full-Stack Developer, AI/ML Enthusiast, and Smart India Hackathon 2025 Grand Winner.

Designed and engineered with an editorial, architectural aesthetic that merges technical rigor with creative motion and interactive systems.

---

## 🎨 Visual Identity & Design System

The portfolio features two completely designed, high-contrast, theme-persisted palettes avoiding generic neon AI gradients:

### Light Mode (Warm Ivory & Terracotta)
- **Background**: `#F5F0E8` (Warm Ivory)
- **Typography**: `#20201E` (Deep Charcoal)
- **Accent**: `#E66B48` (Terracotta)
- **Muted Olive**: `#A4A58A`
- **Soft Sand**: `#D9CBB9`

### Dark Mode (Deep Charcoal & Burnt Orange)
- **Background**: `#171715` (Deep Charcoal)
- **Typography**: `#F5F0E8` (Warm Off-White)
- **Accent**: `#E66B48` (Burnt Orange / Terracotta)
- **Muted Olive**: `#92977B`
- **Surfaces**: `#252521`

### Typography Hierarchy
- **Display Headings**: `Space Grotesk` (bold, geometric, architectural)
- **Body & Sans**: `Inter` (neutral, legible, accessible)
- **Technical & Metadata**: `JetBrains Mono` (telemetry, badges, code blocks)

---

## ⚡ Technical Stack

- **Core**: React 19, Vite
- **Motion & Physics**: Framer Motion
- **Icons**: Lucide React + Custom SVG Brand Glyphs
- **Audio Synthesis**: Native Web Audio API (zero external assets, non-blocking)
- **Celebration FX**: Canvas Confetti
- **Deployment**: GitHub Pages, Vercel, Netlify

---

## 📂 Project Architecture

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Custom monogram favicon
│   └── resume.pdf              # Downloadable curriculum vitae document
├── src/
│   ├── main.jsx                # Application root mount
│   ├── App.jsx                 # Master application orchestrator & modal coordinator
│   ├── index.css               # Global CSS, reset, utility classes, themes
│   ├── components/
│   │   ├── CustomCursor/       # Context-sensitive trailing cursor (VIEW PROJECT, EXPLORE)
│   │   ├── Preloader/          # Initials animation (JB), progress counter (0-100%)
│   │   ├── Navbar/             # Floating pill navigation, active section tracking, sound toggle
│   │   ├── ThemeToggle/        # Animated Sun/Moon switch with localStorage persistence
│   │   ├── MagneticButton/     # Physics-based cursor attraction
│   │   ├── SectionHeader/      # Numbered editorial section headings (01 // ABOUT)
│   │   ├── Marquee/            # Infinite horizontal technology marquee
│   │   ├── ProjectModal/       # Deep immersion project inspector (flow diagram, metrics)
│   │   ├── CertificateModal/   # Verified credential preview & verification links
│   │   ├── ResumeModal/        # In-browser interactive CV viewer & printable sheet
│   │   └── Icons.jsx           # Clean SVG brand glyphs (GitHub, LinkedIn)
│   ├── context/
│   │   ├── ThemeContext.jsx    # System preference detection & theme state
│   │   └── SoundContext.jsx    # Subtle UI sound effects controller
│   ├── data/
│   │   ├── profile.js          # Biography, education, CPI, coordinates, JSON manifest
│   │   ├── projects.js         # Curated project gallery & architectural telemetry
│   │   ├── skills.js           # Categorized skills (Production/Core levels - NO fake %)
│   │   ├── achievements.js     # SIH 2025 Grand Winner & academic milestones
│   │   ├── experience.js       # Timeline (OysterCodeClub, CryptexClub, Research)
│   │   └── certificates.js     # NPTEL, IIT, Infosys, and Google credentials
│   ├── sections/
│   │   ├── Hero/               # Oversized typography, IST clock, availability status
│   │   ├── About/              # CS background at RIT, CPI 8.37, developer_identity.json
│   │   ├── Skills/             # Categorized toolkit & marquee
│   │   ├── Projects/           # Asymmetrical digital gallery with category filters
│   │   ├── Research/           # PQC & Multi-Cloud Intelligent Workload Scheduling
│   │   ├── Achievements/       # SIH 2025 celebration card with interactive confetti
│   │   ├── Experience/         # Interactive timeline & leadership breakdown
│   │   ├── Certificates/       # Accredited credentials & inspection modal
│   │   ├── Github/             # Public repo telemetry & developer activity
│   │   └── Contact/            # Transmission payload form, direct email, footer
│   ├── styles/
│   │   └── variables.css       # Complete CSS variables for light & dark modes
│   └── utils/
│       └── sound.js            # Web Audio API sound generator
├── index.html                  # HTML entry point with Open Graph & SEO tags
├── package.json
└── vite.config.js              # Vite config with base: './' for GitHub Pages
```

---

## 🛠️ How to Customize Your Content

All personal data, projects, certificates, and achievements are centralized in `src/data/` so you can update them without touching any layout code:

### 1. Update Personal Profile & Contact
Edit `src/data/profile.js`:
- Name, headline, bio, contact email, social links, CPI, and education.

### 2. Add or Edit Projects
Edit `src/data/projects.js`:
- Add a new object to `projectsData` with title, category (`"AI/ML"`, `"Full Stack"`, `"Mobile Applications"`, `"Systems & IoT"`), status, technologies, metrics, and architecture flow.

### 3. Add Certificates
Edit `src/data/certificates.js`:
- Add new credential entries with title, issuing body, issue date, credential ID, and verification URL.

### 4. Replace Resume PDF
Replace `public/resume.pdf` with your updated PDF file. The download button in the navigation, hero, and modal will automatically link to it.

---

## 🚀 Development & Deployment

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
# Build production bundle into dist/
npm run build

# Preview build locally
npm run preview
```

### Deploy to GitHub Pages
1. Push your repository to GitHub (`Main` branch).
2. Go to repository **Settings** → **Pages**.
3. Under **Source**, choose **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site!

