import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { Place } from '../../types';

interface QuickInfoProps {
  place: Place;
}

export const QuickInfo: React.FC<QuickInfoProps> = ({ place }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
        <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
          <Clock className="w-3.5 h-3.5" />
          <span className="uppercase tracking-wider font-semibold">Status</span>
        </div>
        <p className="text-sm font-medium text-green-600">Open Now</p>
        <p className="text-xs text-gray-500">{place.hours || '09:00 AM - 10:00 PM'}</p>
      </div>
      <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
        <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
          <MapPin className="w-3.5 h-3.5" />
          <span className="uppercase tracking-wider font-semibold">Distance</span>
        </div>
        <p className="text-sm font-medium text-gray-900">{place.distance || '1.2 km'}</p>
        <p className="text-xs text-gray-500">From city center</p>
      </div>
    </div>
  );
};