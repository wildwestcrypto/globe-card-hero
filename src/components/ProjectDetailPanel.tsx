import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiCopy } from 'react-icons/fi';
import { Project } from '../types/project';

interface PanelProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailPanel: React.FC<PanelProps> = ({ project, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-brand-off-white">Project Details</h2>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
          <FiX size={24} />
        </button>
      </div>

      <div className="flex-grow overflow-y-auto pr-2">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-brand-green">{project.name}</h3>
          <p className="text-brand-off-white/70">{project.location}</p>
        </div>
        <div className="space-y-3 mb-6 border-t border-white/10 pt-4">
          <DetailRow label="Credit Type" value={project.type} />
          <DetailRow label="Verification Standard" value={project.standard} />
          <DetailRow label="Est. Annual Tonnes CO₂e" value={project.tonnes} />
        </div>
        <div className="space-y-3 mb-6 border-t border-white/10 pt-4">
          <DetailRow label="Primary Data Input" value={project.verification} />
        </div>
        <div className="border-t border-white/10 pt-4">
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
      </div>
    </motion.div>
  );
};

const DetailRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <p className="text-sm text-brand-off-white/60">{label}</p>
    <p className="text-md font-medium text-brand-off-white">{value}</p>
  </div>
);

export default ProjectDetailPanel;