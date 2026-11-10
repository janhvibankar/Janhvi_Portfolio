import React from 'react';
import { motion } from 'framer-motion';
import { useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { SoundProvider } from './context/SoundContext';
import { CustomCursor } from './components/CustomCursor/CustomCursor';
import { Preloader } from './components/Preloader/Preloader';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { HeroMarquee } from './components/HeroMarquee/HeroMarquee';
import { Skills } from './sections/Skills/Skills';
import { Projects } from './sections/Projects/Projects';
import { Achievements } from './sections/Achievements/Achievements';
import { Experience } from './sections/Experience/Experience';
import { Certificates } from './sections/Certificates/Certificates';
import { Contact } from './sections/Contact/Contact';
import { ProjectModal } from './components/ProjectModal/ProjectModal';
import { CertificateModal } from './components/CertificateModal/CertificateModal';
import { ResumeModal } from './components/ResumeModal/ResumeModal';
import { projectsData } from './data/projects';
import { useState } from 'react';

// Scroll progress bar component
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX }}
    />
  );
}

function PortfolioApp() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleSelectProjectById = (id) => {
    const proj = projectsData.find(p => p.id === id);
    if (proj) setSelectedProject(proj);
  };

  return (
    <div className="portfolio-root" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Scroll progress indicator */}
      <ScrollProgressBar />

      {/* Preloader */}
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Floating navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <HeroMarquee />
        <About />
        <Skills />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <Achievements onSelectProjectById={handleSelectProjectById} />
        <Experience />
        <Certificates onSelectCertificate={(c) => setSelectedCertificate(c)} />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <PortfolioApp />
      </SoundProvider>
    </ThemeProvider>
  );
}

export default App;
