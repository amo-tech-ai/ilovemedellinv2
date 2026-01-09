import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Place } from '../../types';

interface NearbyPlacesProps {
  places: Place[];
  onPlaceClick?: (id: string) => void;
}

export const NearbyPlaces: React.FC<NearbyPlacesProps> = ({ places, onPlaceClick }) => {
  if (!places || places.length === 0) return null;

  return (
    <div className="pt-6 border-t border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Nearby Attractions</h3>
      <div className="space-y-3">
        {places.map(nearby => (
          <div 
            key={nearby.id} 
            onClick={() => onPlaceClick?.(nearby.id)}
            className="flex gap-3 p-2.5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-transparent hover:border-gray-200 group"
          >
            <img 
              src={nearby.image} 
              alt={nearby.name} 
              className="w-16 h-16 rounded-lg object-cover shrink-0"
            />
            <div className="flex flex-col justify-center min-w-0 flex-1">
               <h4 className="font-semibold text-gray-900 text-sm truncate group-hover:text-medellin-700 transition-colors">{nearby.name}</h4>
               <p className="text-xs text-gray-500 mb-1">{nearby.category}</p>
               <div className="flex items-center gap-1 text-xs text-medellin-600 font-medium">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate">{nearby.distance || '1.5 km'}</span>
               </div>
            </div>
            <div className="self-center text-gray-300 group-hover:text-medellin-500 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};