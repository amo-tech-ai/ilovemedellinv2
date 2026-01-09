import React from 'react';
import { Star, Sparkles, MapPin } from 'lucide-react';
import { Place } from '../types';

interface PlaceCardProps {
  place: Place;
  isSelected?: boolean;
  onClick?: () => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        group bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer
        ${isSelected 
          ? 'border-medellin-500 ring-2 ring-medellin-500/20 shadow-lg scale-[1.02]' 
          : 'border-gray-100 hover:border-medellin-200'}
      `}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={place.image} 
          alt={place.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-bold text-gray-900">{place.rating}</span>
        </div>
        {place.priceLevel && (
          <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md text-xs font-medium text-white">
            {place.priceLevel}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{place.name}</h3>
        </div>
        
        <div className="flex items-center gap-1 text-gray-500 text-xs mb-3">
          <MapPin className="w-3 h-3" />
          <span>{place.distance || '1.2 km'} • {place.category}</span>
        </div>

        {/* AI Hint */}
        <div className={`mt-auto bg-medellin-50 border border-medellin-100 rounded-lg p-2.5 flex gap-2.5 items-start transition-colors ${isSelected ? 'bg-medellin-100 border-medellin-200' : ''}`}>
          <Sparkles className="w-4 h-4 text-medellin-600 shrink-0 mt-0.5" />
          <p className="text-xs text-medellin-900 leading-snug">
            <span className="font-semibold text-medellin-700">AI Tip:</span> {place.aiHint}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;