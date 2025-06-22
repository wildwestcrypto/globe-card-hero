// src/data/projectData.ts

import { Project } from '../types/project';

// We are going back to a simple, named export.
export const projectData: Project[] = [
  {
    lat: 25.2854,
    lng: 51.5310,
    name: 'Carson Logistics',
    location: 'Doha, Qatar',
    userType: 'Sustainability Client',
    type: 'Wind',
    tonnes: '28,156.28 kg',
    constitutionText: 'Mint #0005',
    reportUrl: 'https://drive.google.com/file/d/1EvmwPB4bAl3dc0sWKxtnUZxXi0Mtyn3I/view?usp=drive_link',
    btcTxUrl: 'https://mempool.space/tx/3f24b283b6b5026cc48e5f9c58d8d396242cd9d748720c06a0f98f7e205dab50',
    hash: '092e707ec03e0c864e91bc3960b7d556816547950ecab9df092f7a369b1c30f7',
    imageUrl: 'https://static.wixstatic.com/media/7eafaa_1a65c05ca2564bc2817c45d87c0e7fdf~mv2.png/v1/fill/w_556,h_340,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Carson_Logo_Transparent-Photoroom.png', // Image of a cargo ship
  },
  {
    lat: 41.0850,
    lng: -74.8272,
    name: 'Swartzwood Deli',
    location: 'New Jersey, USA',
    userType: 'Sustainability Client',
    type: 'Wind',
    tonnes: '.026',
    constitutionText: 'Need public Link to show this',
    reportUrl: 'https://drive.google.com/file/d/1EvmwPB4bAl3dc0sWKxtnUZxXi0Mtyn3I/view?usp=drive_link',
    btcTxUrl: 'https://mempool.space/tx/3f24b283b6b5026cc48e5f9c58d8d396242cd9d748720c06a0f98f7e205dab50',
    hash: '092e707ec03e0c864e91bc3960b7d556816547950ecab9df092f7a369b1c30f7',
    imageUrl: 'https://static.wixstatic.com/media/7eafaa_aae32b60ba30402f9af7e9275f5a1391~mv2.jpg/v1/fill/w_556,h_358,al_c,lg_1,q_80,enc_avif,quality_auto/swartswood-deli.jpg',
  },
  {
    lat: 15.5992,
    lng: 101.5087,
    name: 'Chaiyaphum Wind Farm',
    location: 'Chaiyaphum, Thailand',
    userType: 'Carbon Creator',
    type: 'Wind',
    tonnes: '10',
    constitutionText: 'Need public Link to show this',
    reportUrl: 'https://drive.google.com/file/d/1EvmwPB4bAl3dc0sWKxtnUZxXi0Mtyn3I/view?usp=drive_link',
    btcTxUrl: 'https://mempool.space/tx/3f24b283b6b5026cc48e5f9c58d8d396242cd9d748720c06a0f98f7e205dab50',
    hash: '092e707ec03e0c864e91bc3960b7d556816547950ecab9df092f7a369b1c30f7',
    imageUrl: 'https://static.wixstatic.com/media/7eafaa_f449dec37bcb4565919548934699541b~mv2.png/v1/fill/w_544,h_340,al_c,lg_1,q_85,enc_avif,quality_auto/EGCO-Group-Logo_%E0%B8%AA_cXC8YGI.png',
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
    imageUrl: 'https://static.wixstatic.com/media/f64772_8bc103e4562e43e3989333405aca1fba~mv2.png/v1/fill/w_496,h_496,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ayen-banner-07.png',
  },
];