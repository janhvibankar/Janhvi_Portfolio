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
import { Research } from './sections/Research/Research';
import { Achievements } from './sections/Achievements/Achievements';
import { Experience } from './sections/Experience/Experience';
import { Certificates } from './sections/Certificates/Certificates';
import { GithubSection } from './sections/Github/Github';
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
      {/* Preloader */}
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}

      {/* Custom Context Cursor (Desktop fine pointer only) */}
      <CustomCursor />

      {/* Subtle Architectural Ambient Grid Pattern */}
      <div className="ambient-grid" aria-hidden="true" />

      {/* Floating Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <Research />
        <Achievements onSelectProjectById={handleSelectProjectById} />
        <Experience />
        <Certificates onSelectCertificate={(c) => setSelectedCertificate(c)} />
        <GithubSection />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      {/* Resume Modal */}
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

