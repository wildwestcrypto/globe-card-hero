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
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .backgroundColor('rgba(0,0,0,0)')
      .showAtmosphere(true)
      .atmosphereColor('#3a228a')
      .atmosphereAltitude(0.25)
      .pointsData(projectData)
      .pointColor(() => '#33FF99')
      .pointAltitude(0.01)
      .pointRadius(0.35)
      .pointLabel((d: any) => `<div class="bg-brand-dark/50 backdrop-blur-sm text-brand-off-white text-sm p-2 rounded-md">${d.name}</div>`)
      .onPointClick((point: any) => {
        onMarkerClick(point);
        globe.pointOfView({ lat: point.lat, lng: point.lng, altitude: 1.5 }, 1000);
      });

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.3;
    globe.controls().enableZoom = false;

    // Clean up on component unmount
    return () => {
      globe._destructor();
    };
  }, [projectData, onMarkerClick]);

  return <div ref={globeEl} className="w-full h-full cursor-grab active:cursor-grabbing" />;
};

export default InteractiveGlobe;