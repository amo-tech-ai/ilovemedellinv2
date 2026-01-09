import React from 'react';
import { X, Star } from 'lucide-react';
import { Place } from '../../types';

interface HeroSectionProps {
  place: Place;
  onClose: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ place, onClose }) => {
  return (
    <div className="relative h-64 shrink-0">
      <img 
        src={place.image} 
        alt={place.name} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-colors"
        aria-label="Close details"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="absolute bottom-4 left-4 right-4 text-white">
        <div className="flex items-center gap-2 mb-1">
           <span className="px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded text-xs font-bold border border-white/30 uppercase tracking-wide">
              {place.category}
           </span>
           {place.priceLevel && (
              <span className="px-2.5 py-0.5 bg-black/40 backdrop-blur-md rounded text-xs font-bold border border-white/10">
                {place.priceLevel}
              </span>
           )}
        </div>
        <h2 className="text-2xl font-bold leading-tight shadow-sm mb-1">{place.name}</h2>
        <div className="flex items-center gap-1.5 text-sm font-medium text-white/90">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-bold text-white">{place.rating}</span>
          <span className="text-white/70">({place.reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
};