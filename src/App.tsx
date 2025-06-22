// src/App.tsx - CALLING PAUSE/RESUME

import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import HeroText from './components/HeroText';
import InteractiveGlobe, { GlobeHandle } from './components/InteractiveGlobe';
import ProjectDetailPanel from './components/ProjectDetailPanel';
import { projectData } from './data/projectData';
import { Project } from './types/project';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const globeRef = useRef<GlobeHandle>(null);

  const handleMarkerClick = (project: Project) => {
    setSelectedProject(project);
    // NEW: Pause the globe's rotation when a marker is clicked
    globeRef.current?.pauseAnimation();
  };

  const handlePanelClose = () => {
    setSelectedProject(null);
    globeRef.current?.resetGlobeView();
    // NEW: Resume the globe's rotation when the panel is closed
    globeRef.current?.resumeAnimation();
  };

  return (
    <main className="relative w-full h-screen bg-brand-dark overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 flex items-start justify-center z-10">
        <HeroText />
      </div>

      <div className="absolute -bottom-[50%] md:-bottom-[40%] lg:-bottom-[35%] w-full h-[100vh] z-0">
        <InteractiveGlobe
          ref={globeRef}
          projectData={projectData}
          onMarkerClick={handleMarkerClick}
        />
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailPanel
            project={selectedProject}
            onClose={handlePanelClose}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;