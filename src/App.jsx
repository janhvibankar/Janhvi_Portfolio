import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SoundProvider } from './context/SoundContext';
import { CustomCursor } from './components/CustomCursor/CustomCursor';
import { Preloader } from './components/Preloader/Preloader';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
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
      {/* Refined Quick Preloader */}
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}

      {/* Custom Context Cursor (Desktop fine pointer only) */}
      <CustomCursor />

      {/* Floating Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Editorial Sections: 7-Part Rhythm */}
      <main>
        {/* 1. Hero */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About + Skills */}
        <About />
        <Skills />

        {/* 3 & 4. Featured Projects + More Projects */}
        <Projects onSelectProject={(p) => setSelectedProject(p)} />

        {/* 5. Achievements + Experience */}
        <Achievements onSelectProjectById={handleSelectProjectById} />
        <Experience />

        {/* 6. Certificates */}
        <Certificates onSelectCertificate={(c) => setSelectedCertificate(c)} />

        {/* 7. Contact & Expressive Footer */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Certificate Inspection Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      {/* Resume Modal Sheet */}
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
