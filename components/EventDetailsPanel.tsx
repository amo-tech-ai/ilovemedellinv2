import React from 'react';
import { 
  X, 
  Calendar, 
  MapPin, 
  Clock, 
  Sparkles, 
  Heart, 
  Share2, 
  PlusCircle, 
  Ticket,
  ExternalLink,
  Users
} from 'lucide-react';
import { Event } from '../types';

interface EventDetailsPanelProps {
  event: Event;
  onClose: () => void;
}

const EventDetailsPanel: React.FC<EventDetailsPanelProps> = ({ event, onClose }) => {
  const dateStr = event.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  const timeStr = event.date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

  return (
    <div className="h-full flex flex-col bg-white overflow-y-auto custom-scrollbar">
      {/* Hero Section */}
      <div className="relative h-72 shrink-0">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="flex items-center gap-2 mb-2">
             <span className="px-2.5 py-0.5 bg-medellin-500 rounded text-xs font-bold border border-white/10 uppercase tracking-wide">
                {event.category}
             </span>
             {event.price && (
                <span className="px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded text-xs font-bold border border-white/30">
                  {event.price}
                </span>
             )}
          </div>
          <h2 className="text-3xl font-bold leading-tight shadow-sm mb-2">{event.title}</h2>
          <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
             <Calendar className="w-4 h-4" />
             <span>{dateStr}</span>
             <span className="w-1 h-1 bg-white/50 rounded-full" />
             <span>{timeStr}</span>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-8 flex-1">
        
        {/* Primary Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="col-span-2 bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl active:scale-95">
            <PlusCircle className="w-4 h-4" />
            Add to Trip Itinerary
          </button>
          <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-2.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all">
            <Calendar className="w-4 h-4" />
            Add to Cal
          </button>
          <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-2.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all">
            <Ticket className="w-4 h-4" />
            Get Tickets
          </button>
        </div>

        {/* AI Insight Card */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-5 relative overflow-hidden shadow-sm">
          <div className="flex gap-4 relative z-10">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm text-indigo-600">
               <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">Why you'll like this</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {event.aiHint}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
           <h3 className="text-lg font-bold text-gray-900 mb-3">About the Event</h3>
           <p className="text-gray-600 leading-relaxed text-sm">
             {event.description}
           </p>
           {event.organizer && (
             <div className="mt-4 flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                  ORG
                </div>
                <div>
                  <p className="text-xs text-gray-500">Organized by</p>
                  <p className="text-sm font-semibold text-gray-900">{event.organizer}</p>
                </div>
             </div>
           )}
        </div>

        {/* Location Preview */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">Location</h3>
          <div className="rounded-xl overflow-hidden border border-gray-200 h-40 relative group bg-slate-100 mb-3">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Map_of_Medellin.png/600px-Map_of_Medellin.png" 
               className="w-full h-full object-cover opacity-80"
               alt="Map"
             />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center animate-bounce">
                  <MapPin className="w-4 h-4 text-white fill-white" />
                </div>
             </div>
          </div>
          <div className="flex justify-between items-start">
            <div className="text-sm">
               <p className="font-semibold text-gray-900">{event.location}</p>
               <p className="text-gray-500">Medellín, Colombia</p>
            </div>
            <button className="text-sm font-medium text-medellin-600 hover:text-medellin-700 flex items-center gap-1">
               Open Maps <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {event.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium text-gray-600 transition-colors cursor-default">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2">
           <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
              <Heart className="w-6 h-6" />
           </button>
           <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
              <Share2 className="w-6 h-6" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPanel;