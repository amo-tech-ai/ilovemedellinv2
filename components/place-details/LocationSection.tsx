import React from 'react';
import { MapPin, Phone, Navigation, ExternalLink } from 'lucide-react';
import { Place } from '../../types';

interface LocationSectionProps {
  place: Place;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ place }) => {
  return (
    <div className="space-y-3 pt-2 border-t border-gray-100">
      <h3 className="font-bold text-gray-900 mt-4">Location</h3>
      <div className="flex items-start gap-3 text-sm text-gray-600">
         <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
         <span>{place.address || 'Calle 10 # 30 - 12, El Poblado, Medellín'}</span>
      </div>
      {place.phone && (
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Phone className="w-4 h-4 shrink-0" />
          <span>{place.phone}</span>
        </div>
      )}
      
      {/* Map Preview */}
      <div className="mt-4 rounded-xl overflow-hidden border border-gray-200 h-32 relative group bg-slate-100">
         <img 
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Map_of_Medellin.png/600px-Map_of_Medellin.png" 
           className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all"
           alt="Map"
         />
         <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white px-4 py-2 rounded-lg shadow-sm font-semibold text-xs flex items-center gap-2 hover:bg-gray-50 transition-colors">
              <Navigation className="w-3 h-3" />
              View on Map
            </button>
         </div>
      </div>
      
      <button className="w-full py-2 text-sm text-medellin-600 font-medium hover:text-medellin-700 flex items-center justify-center gap-1">
         View on Google Maps <ExternalLink className="w-3 h-3" />
      </button>
    </div>
  );
};