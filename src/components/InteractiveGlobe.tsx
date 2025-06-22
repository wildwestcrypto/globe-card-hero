// src/components/InteractiveGlobe.tsx - WITH PAUSE/RESUME ANIMATION

import React, { useEffect, useImperativeHandle, useRef } from 'react';
import Globe, { GlobeInstance } from 'globe.gl';
import { Project } from '../types/project';

interface GlobeProps {
  projectData: Project[];
  onMarkerClick: (project: Project) => void;
}

export interface GlobeHandle {
  resetGlobeView: () => void;
  pauseAnimation: () => void;
  resumeAnimation: () => void;
}

const InteractiveGlobe = React.forwardRef<GlobeHandle, GlobeProps>(({ projectData, onMarkerClick }, ref) => {
  const globeEl = useRef<HTMLDivElement>(null);
  const globeInstanceRef = useRef<GlobeInstance | null>(null);

  useImperativeHandle(ref, () => ({
    resetGlobeView() {
      if (globeInstanceRef.current) {
        globeInstanceRef.current.pointOfView({ altitude: 2.5 }, 1000);
      }
    },
    // NEW: Expose a function to pause the globe's rotation
    pauseAnimation() {
      if (globeInstanceRef.current) {
        globeInstanceRef.current.controls().autoRotate = false;
      }
    },
    // NEW: Expose a function to resume the globe's rotation
    resumeAnimation() {
      if (globeInstanceRef.current) {
        globeInstanceRef.current.controls().autoRotate = true;
      }
    },
  }));

  useEffect(() => {
    if (!globeEl.current || globeInstanceRef.current) return;

    const globe = Globe()(globeEl.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .backgroundColor('rgba(0,0,0,0)')
      .showAtmosphere(true)
      .atmosphereColor('#455a64')
      .atmosphereAltitude(0.2)
      .pointsData(projectData)
      .pointColor((d: any) => d.userType === 'Carbon Creator' ? '#33FF99' : '#58A6FF')
      .pointRadius(1)
      .pointAltitude(0.01)
      .pointLabel((d: any) => `<div class="bg-brand-dark/50 backdrop-blur-sm text-brand-off-white text-sm p-2 rounded-md">${d.name}</div>`)
      .onPointClick((point: any) => {
        onMarkerClick(point);
        // This existing code already centers the globe on the point
        globe.pointOfView({ lat: point.lat, lng: point.lng, altitude: 1.5 }, 1000);
      });

    globe.pointOfView({ altitude: 2.5 }, 0);

    const controls = globe.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;

    globeInstanceRef.current = globe;

    return () => {
      if (globeInstanceRef.current) {
        globeInstanceRef.current._destructor();
        globeInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={globeEl} className="w-full h-full cursor-grab active:cursor-grabbing" />;
});

export default InteractiveGlobe;