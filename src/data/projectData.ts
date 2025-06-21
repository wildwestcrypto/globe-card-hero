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
    lat: 41.0850,
    lng: -74.8272,
    name: 'Swartzwood Deli',
    location: 'New Jersey, USA',
    userType: 'Sustainability Client', // This project offsets impact
    type: 'Wind',
    tonnes: '.026',
    constitutionText: 'Need public Link to show this',
    reportUrl: 'https://drive.google.com/file/d/1EvmwPB4bAl3dc0sWKxtnUZxXi0Mtyn3I/view?usp=drive_link',
    btcTxUrl: 'https://mempool.space/tx/3f24b283b6b5026cc48e5f9c58d8d396242cd9d748720c06a0f98f7e205dab50',
    hash: '092e707ec03e0c864e91bc3960b7d556816547950ecab9df092f7a369b1c30f7',
  },
    // --- Existing Data ---
    {
      lat: 15.5992,
      lng: 101.5087,
      name: 'Chaiyaphum Wind Farm',
      location: 'Chaiyaphum, Thailand',
      userType: 'Carbon Creator', // This project offsets impact
      type: 'Wind',
      tonnes: '10',
      constitutionText: 'Need public Link to show this',
      reportUrl: 'https://drive.google.com/file/d/1EvmwPB4bAl3dc0sWKxtnUZxXi0Mtyn3I/view?usp=drive_link',
      btcTxUrl: 'https://mempool.space/tx/3f24b283b6b5026cc48e5f9c58d8d396242cd9d748720c06a0f98f7e205dab50',
      hash: '092e707ec03e0c864e91bc3960b7d556816547950ecab9df092f7a369b1c30f7',
    },
  {
    lat: 37.4636,
    lng: 27.4122,
    name: 'Akbuk Wind Farm',
    location: 'Didim, Turkey',
    userType: 'Carbon Creator',
    type: 'Renewable Energy Generation',
    tonnes: '30',
    constitutionText: 'This project provides clean energy from wind power',
    reportUrl: 'https://www.theevergreenexchange.com/producer-profile-akbuk',
    btcTxUrl: 'https://mempool.space/tx/3f24b283b6b5026cc48e5f9c58d8d396242cd9d748720c06a0f98f7e205dab50',
    hash: '092e707ec03e0c864e91bc3960b7d556816547950ecab9df092f7a369b1c30f7',
  },
];