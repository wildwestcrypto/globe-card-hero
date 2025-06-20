// This interface defines the "shape" of our project data for TypeScript.
export interface Project {
  lat: number;
  lng: number;
  name: string;
  location: string;
  type: string;
  standard: string;
  tonnes: string;
  verification: string;
  hash: string;
}