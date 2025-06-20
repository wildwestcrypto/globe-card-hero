// src/components/InteractiveGlobe.tsx

import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';
import { Project } from '../types/project';

interface GlobeProps {
  projectData: Project[];
  onMarkerClick: (project: Project) => void;
}

const InteractiveGlobe: React.FC<GlobeProps> = ({ projectData, onMarkerClick }) => {
  const globeEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeEl.current) return;

    const globe = Globe()(globeEl.current)
      // --- 1. CHANGE GLOBE COLOR/BRIGHTNESS HERE ---
      // We are changing from 'earth-dark.jpg' to 'earth-blue-marble.jpg' for a lighter look.
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .backgroundColor('rgba(0,0,0,0)')
      .showAtmosphere(true)
      .atmosphereColor('#3a228a')
      .atmosphereAltitude(0.25)
      .pointsData(projectData)
      
      // --- 2. CHANGE DOT COLOR HERE ---
      // This function now checks the 'userType' for each data point (d).
      // It returns green for a 'Carbon Creator' and a bright blue for a 'Sustainability Client'.
      .pointColor((d: any) => d.userType === 'Carbon Creator' ? '#33FF99' : '#58A6FF')
      
      .pointAltitude(0.01)
      
      // --- 3. CHANGE DOT SIZE HERE ---
      // We are increasing the radius from 0.35 to 0.5 for more visibility.
      .pointRadius(0.9)
      
      .pointLabel((d: any) => `<div class="bg-brand-dark/50 backdrop-blur-sm text-brand-off-white text-sm p-2 rounded-md">${d.name}</div>`)
      .onPointClick((point: any) => {
        onMarkerClick(point);
        globe.pointOfView({ lat: point.lat, lng: point.lng, altitude: 1.5 }, 1000);
      });

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.3;
    globe.controls().enableZoom = false;

    return () => {
      globe._destructor();
    };
  }, [projectData, onMarkerClick]);

  return <div ref={globeEl} className="w-full h-full cursor-grab active:cursor-grabbing" />;
};

export default InteractiveGlobe;