export interface Pillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  image: string;
  iconName: string;
  highlight: string;
}

export interface Program {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  outcomes: string[];
  icon: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'outbound' | 'sains' | 'pertanian' | 'spiritual';
  image: string;
  caption: string;
  location: string;
}

export interface RegistrationFormData {
  studentName: string;
  gender: string;
  birthPlaceDate: string;
  originSchool: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  address: string;
  programInterest: string;
  notes?: string;
}

export interface OfficialLogos {
  schoolLogo: string | null;
  foundationLogo: string | null;
  networkLogo: string | null;
}
