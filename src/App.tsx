import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import HeroText from './components/HeroText';
import InteractiveGlobe from './components/InteractiveGlobe';
import ProjectDetailPanel from './components/ProjectDetailPanel';
import { projectData } from './data/projectData';
import { Project } from './types/project';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleMarkerClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handlePanelClose = () => {
    setSelectedProject(null);
  };

  return (
    <main className="relative w-full h-screen bg-brand-dark overflow-hidden">
      {/* WRAPPER FOR TEXT: Add z-10 to bring it to the front */}
      <div className="absolute top-0 left-0 w-full h-1/2 flex items-start justify-center z-10">
        <HeroText />
      </div>

      {/* WRAPPER FOR GLOBE: Add z-0 to place it in the background */}
      <div className="absolute -bottom-[50%] md:-bottom-[40%] lg:-bottom-[35%] w-full h-[100vh] z-0">
        <InteractiveGlobe
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