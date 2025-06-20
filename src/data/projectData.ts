import { Project } from '../types/project';

// We tell TypeScript that this array will contain objects matching the Project interface.
export const projectData: Project[] = [
  {
    lat: -3.4653,
    lng: -52.2297,
    name: 'Amazon Reforestation Initiative',
    location: 'Pará, Brazil',
    type: 'Reforestation & Afforestation (ARR)',
    standard: 'Verra VCS',
    tonnes: '150,000',
    verification: 'Landsat-8 Satellite Imagery',
    hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  },
  {
    lat: 38.9966,
    lng: -105.5506,
    name: 'Rocky Mountain Forest Preservation',
    location: 'Colorado, USA',
    type: 'Improved Forest Management (IFM)',
    standard: 'American Carbon Registry (ACR)',
    tonnes: '95,000',
    verification: 'LiDAR-based Canopy Analysis',
    hash: 'a441b15fe9a3cf56661190a0b93b9dec7301cb247115de661957c91c53e3295e',
  },
  {
    lat: -1.2921,
    lng: 36.8219,
    name: 'Kenyan Geothermal Power Plant',
    location: 'Nairobi, Kenya',
    type: 'Renewable Energy Generation',
    standard: 'Gold Standard',
    tonnes: '250,000',
    verification: 'Grid Metering & SCADA Data',
    hash: '5d9a9f829a6b8a8b1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f',
  },
];