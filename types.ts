export interface Place {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  priceLevel?: string;
  distance?: string;
  image: string;
  aiHint: string;
  description?: string;
  address?: string;
  tags?: string[];
  hours?: string;
  phone?: string;
  coordinates?: { lat: number; lng: number };
  // Tourist specific fields
  duration?: string;
  bestTime?: string;
  safetyTips?: string;
}

export interface Event {
  id: string;
  title: string;
  date: Date;
  location: string;
  category: string;
  price: string;
  image: string;
  aiHint: string;
  description: string;
  tags: string[];
  attendees?: number;
  organizer?: string;
}

export interface User {
  name: string;
  status: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon: string;
}