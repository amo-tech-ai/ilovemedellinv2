import React from 'react';
import { PlusCircle, CalendarCheck, Navigation, Bookmark } from 'lucide-react';

interface ActionButtonsProps {
  isDining: boolean;
  isTourist: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ isDining, isTourist }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button className="col-span-2 bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95">
        <PlusCircle className="w-4 h-4" />
        Add to Trip Itinerary
      </button>
      
      {isDining && (
        <button className="bg-white border border-gray-200 hover:bg-medellin-50 hover:border-medellin-200 hover:text-medellin-700 text-gray-700 py-2.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all">
          <CalendarCheck className="w-4 h-4" />
          Reserve
        </button>
      )}

      {isTourist && (
         <button className="bg-white border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 text-gray-700 py-2.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all">
            <Navigation className="w-4 h-4" />
            Get Directions
         </button>
      )}

      <button className={`bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-2.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${(!isDining && !isTourist) ? 'col-span-1' : ''}`}>
         <Bookmark className="w-4 h-4" />
         Save
      </button>
    </div>
  );
};