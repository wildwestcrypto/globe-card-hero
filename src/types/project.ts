// src/types/project.ts

// This interface defines the "shape" of our project data for TypeScript.
export interface Project {
  lat: number;
  lng: number;
  name: string;
  location: string;
  // NEW: Determines the role and styling
  userType: 'Carbon Creator' | 'Sustainability Client';
  type: string; // Credit Type
  tonnes: string; // The CO2e value
  // NEW: Text and URL for the constitution report
  constitutionText: string;
  reportUrl: string;
  // NEW: URL for the BTC transaction
  btcTxUrl: string;
  hash: string;
  imageUrl?: string; // NEW: Add the image URL property. It's optional (?).
}