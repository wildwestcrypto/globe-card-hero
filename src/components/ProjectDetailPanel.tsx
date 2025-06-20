// src/components/ProjectDetailPanel.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiCopy, FiExternalLink } from 'react-icons/fi';
import { Project } from '../types/project';

interface PanelProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailPanel: React.FC<PanelProps> = ({ project, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  if (!project) return null;

  // --- Conditional Logic ---
  const isCreator = project.userType === 'Carbon Creator';
  
  // Define colors and labels based on userType
  const userTypeColorClass = isCreator 
    ? "bg-green-500/20 text-green-300 border-green-500/30" 
    : "bg-blue-500/20 text-blue-300 border-blue-500/30";

  const impactLabel = isCreator 
    ? 'Annual CO₂e Impact Generated' 
    : 'Annual CO₂e Impact Offset';

  const handleCopy = () => {
    navigator.clipboard.writeText(project.hash);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-dark/80 backdrop-blur-lg shadow-2xl z-50 p-6 flex flex-col"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-brand-off-white">Project Details</h2>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
          <FiX size={24} />
        </button>
      </div>

      <div className="flex-grow overflow-y-auto pr-2 space-y-6">
        {/* Project Name, Location, and User Type Button */}
        <div>
          <h3 className="text-2xl font-semibold text-brand-green">{project.name}</h3>
          <p className="text-brand-off-white/70 mb-4">{project.location}</p>
          <div className={`inline-block px-3 py-1 text-sm font-semibold rounded-full border ${userTypeColorClass}`}>
            {project.userType}
          </div>
        </div>

        {/* Credit & Impact Details */}
        <div className="space-y-4 border-t border-white/10 pt-4">
          <DetailRow label="Credit Type" value={project.type} />
          <DetailRow label="Certification" value="Embedded Impact Certification (EIC)" />
          <DetailRow label={impactLabel} value={project.tonnes} />
        </div>

        {/* Anchor Constitution */}
        <div className="space-y-3 border-t border-white/10 pt-4">
          <h4 className="font-semibold text-brand-off-white">Anchor Constitution</h4>
          <p className="text-sm text-brand-off-white/70">
            {project.constitutionText}
          </p>
          <a href={project.reportUrl} target="_blank" rel="noopener noreferrer" 
             className="inline-flex items-center gap-2 text-sm text-brand-green hover:underline">
            Click to see full report <FiExternalLink />
          </a>
        </div>

        {/* Immutability Proof */}
        <div className="border-t border-white/10 pt-4 space-y-4">
          <div>
            <h4 className="font-semibold text-brand-off-white mb-2">Proof of Immutability</h4>
            <p className="text-sm text-brand-off-white/70 mb-3">
              This project's verification data is anchored to the Bitcoin blockchain.
            </p>
            <div className="bg-black/30 p-3 rounded-lg flex items-center justify-between">
              <code className="text-sm text-brand-green break-all mr-4">{project.hash}</code>
              <button onClick={handleCopy} className="p-2 rounded-md hover:bg-white/10 transition-colors">
                {isCopied ? <span className="text-xs text-brand-green">Copied!</span> : <FiCopy />}
              </button>
            </div>
          </div>
          <a href={project.btcTxUrl} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-sm text-brand-green hover:underline">
            Goto BTC Transaction <FiExternalLink />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Helper component for consistent row styling
const DetailRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <p className="text-sm text-brand-off-white/60">{label}</p>
    <p className="text-md font-medium text-brand-off-white">{value}</p>
  </div>
);

export default ProjectDetailPanel;