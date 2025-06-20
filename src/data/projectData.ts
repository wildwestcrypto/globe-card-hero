// src/data/projectData.ts

import { Project } from '../types/project';

export const projectData: Project[] = [
  // --- NEW CARSON LOGISTICS DATA ---
  {
    lat: 25.2854, // Latitude for Doha, Qatar
    lng: 51.5310, // Longitude for Doha, Qatar
    name: 'Carson Logistics',
    location: 'Doha, Qatar',
    userType: 'Sustainability Client',
    type: 'Wind',
    tonnes: '28,156.28 kg',
    constitutionText: 'Mint #0005',
    reportUrl: 'https://drive.google.com/file/d/1EvmwPB4bAl3dc0sWKxtnUZxXi0Mtyn3I/view?usp=drive_link',
    btcTxUrl: 'https://mempool.space/tx/3f24b283b6b5026cc48e5f9c58d8d396242cd9d748720c06a0f98f7e205dab50',
    hash: '092e707ec03e0c864e91bc3960b7d556816547950ecab9df092f7a369b1c30f7',
  },
  // --- Existing Data ---
  {
    lat: 38.9966,
    lng: -105.5506,
    name: 'Rocky Mountain Forest Preservation',
    location: 'Colorado, USA',
    userType: 'Sustainability Client', // This project offsets impact
    type: 'Improved Forest Management (IFM)',
    tonnes: '95,000',
    constitutionText: 'This constitution outlines the legal framework for the long-term preservation of this critical ecosystem, governed by the American Carbon Registry standards.',
    reportUrl: 'https://example.com/rocky-mountain-report',
    btcTxUrl: 'https://mempool.space/tx/a441b15fe9a3cf56661190a0b93b9dec7301cb247115de661957c91c53e3295e',
    hash: 'a441b15fe9a3cf56661190a0b93b9dec7301cb247115de661957c91c53e3295e',
  },
  {
    lat: -1.2921,
    lng: 36.8219,
    name: 'Kenyan Geothermal Power Plant',
    location: 'Nairobi, Kenya',
    userType: 'Carbon Creator',
    type: 'Renewable Energy Generation',
    tonnes: '250,000',
    constitutionText: 'This project provides clean energy to the national grid, reducing reliance on fossil fuels under the Gold Standard certification for renewable projects.',
    reportUrl: 'https://example.com/kenya-report',
    btcTxUrl: 'https://mempool.space/tx/5d9a9f829a6b8a8b1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f',
    hash: '5d9a9f829a6b8a8b1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f',
  },
];