import React from 'react';
import { Place } from '../types';
import { HeroSection } from './place-details/HeroSection';
import { ActionButtons } from './place-details/ActionButtons';
import { AIInsight } from './place-details/AIInsight';
import { TouristInfo } from './place-details/TouristInfo';
import { QuickInfo } from './place-details/QuickInfo';
import { OverviewSection } from './place-details/OverviewSection';
import { LocationSection } from './place-details/LocationSection';
import { NearbyPlaces } from './place-details/NearbyPlaces';

interface PlaceDetailsPanelProps {
  place: Place;
  onClose: () => void;
  nearbyPlaces?: Place[];
  onPlaceClick?: (id: string) => void;
}

const PlaceDetailsPanel: React.FC<PlaceDetailsPanelProps> = ({ place, onClose, nearbyPlaces, onPlaceClick }) => {
  // Simple check to see if we should show reservation options
  const isDining = ['Restaurant', 'Fine Dining', 'Fusion', 'Coffee', 'Brunch', 'Bistro'].some(c => place.category.includes(c));
  const isTourist = !!(place.duration || place.safetyTips || place.bestTime);

  return (
    <div className="h-full flex flex-col bg-white overflow-y-auto custom-scrollbar">
      {/* Hero Section */}
      <HeroSection place={place} onClose={onClose} />

      {/* Content Container */}
      <div className="p-6 space-y-6 flex-1">
        
        {/* Actions Row */}
        <ActionButtons isDining={isDining} isTourist={isTourist} />

        {/* AI Insight Card */}
        <AIInsight aiHint={place.aiHint} isTourist={isTourist} />

        {/* Tourist Specific Info */}
        {isTourist && <TouristInfo place={place} />}

        {/* Quick Info Chips (Generic) */}
        {!isTourist && <QuickInfo place={place} />}

        {/* Tags & Description */}
        <OverviewSection place={place} />

        {/* Location & Contact */}
        <LocationSection place={place} />

        {/* Nearby Attractions */}
        <NearbyPlaces places={nearbyPlaces || []} onPlaceClick={onPlaceClick} />
      </div>
    </div>
  );
};

export default PlaceDetailsPanel;