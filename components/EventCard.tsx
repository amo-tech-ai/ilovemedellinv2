import React from 'react';
import { MapPin, Sparkles, Calendar, Users } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  isSelected?: boolean;
  onClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, isSelected, onClick }) => {
  // Format date parts
  const month = event.date.toLocaleString('default', { month: 'short' }).toUpperCase();
  const day = event.date.getDate();
  const time = event.date.toLocaleString('default', { hour: 'numeric', minute: '2-digit' });

  return (
    <div 
      onClick={onClick}
      className={`
        group flex bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer h-40
        ${isSelected 
          ? 'border-medellin-500 ring-2 ring-medellin-500/20 scale-[1.01]' 
          : 'border-gray-100 hover:border-medellin-200'}
      `}
    >
      {/* Date Column (Left) */}
      <div className="w-20 bg-gray-50 flex flex-col items-center justify-center border-r border-gray-100 shrink-0">
        <span className="text-xs font-bold text-medellin-600 tracking-wider">{month}</span>
        <span className="text-2xl font-bold text-gray-900 leading-none my-1">{day}</span>
        <span className="text-[10px] text-gray-400 font-medium">{time}</span>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col min-w-0">
        <div className="flex justify-between items-start mb-1">
          <div className="flex gap-2 items-center mb-1">
             <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wide">
               {event.category}
             </span>
             {event.price === 'Free' && (
               <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wide">
                 Free
               </span>
             )}
          </div>
        </div>

        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 line-clamp-1 group-hover:text-medellin-700 transition-colors">
          {event.title}
        </h3>

        <div className="flex items-center gap-4 text-xs text-gray-500 mb-auto">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate max-w-[120px]">{event.location}</span>
          </div>
          {event.attendees && (
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              <span>{event.attendees} going</span>
            </div>
          )}
        </div>

        {/* AI Hint Footer */}
        <div className="mt-3 flex items-start gap-2 pt-3 border-t border-gray-50">
          <Sparkles className="w-3.5 h-3.5 text-medellin-500 shrink-0 mt-0.5" />
          <p className="text-xs text-gray-500 line-clamp-1">
            <span className="font-medium text-gray-700">AI:</span> {event.aiHint}
          </p>
        </div>
      </div>

      {/* Image (Right) */}
      <div className="w-32 h-full hidden sm:block shrink-0">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
    </div>
  );
};

export default EventCard;