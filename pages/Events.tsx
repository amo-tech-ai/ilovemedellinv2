import React, { useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Calendar as CalendarIcon, Map as MapIcon, ChevronDown, X } from 'lucide-react';
import EventCard from '../components/EventCard';
import EventDetailsPanel from '../components/EventDetailsPanel';
import { Event } from '../types';

const Events: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  // Mock Event Data (Real-world examples)
  const events: Event[] = [
    {
      id: 'evt-1',
      title: 'Salsa Night at El Eslabón Prendido',
      date: new Date('2024-10-18T21:00:00'),
      location: 'Centro, Medellín',
      category: 'Nightlife',
      price: '$20.000 COP',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
      aiHint: 'Authentic local experience. Great for dancing, but gets crowded after 11 PM.',
      description: 'El Eslabón Prendido is one of the most iconic salsa bars in downtown Medellín. Live bands every Tuesday and Friday. Expect a sweaty, high-energy night with locals and travelers alike. Dress comfortable for dancing.',
      tags: ['Salsa', 'Live Music', 'Dancing', 'Local Favorite'],
      attendees: 120,
      organizer: 'El Eslabón'
    },
    {
      id: 'evt-2',
      title: 'Rooftop Jazz & Cocktails',
      date: new Date('2024-10-19T19:30:00'),
      location: 'Envy Rooftop, El Poblado',
      category: 'Music',
      price: 'Free Entry',
      image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=800&q=80',
      aiHint: 'Perfect for a romantic date or a chill evening. Best sunset views in the city.',
      description: 'Enjoy smooth jazz and signature cocktails with a panoramic view of the Aburrá Valley. Arrive early to grab a seat by the edge. The dress code is smart casual.',
      tags: ['Jazz', 'Rooftop', 'Cocktails', 'Sunset', 'Romantic'],
      attendees: 85,
      organizer: 'The Charlee Hotel'
    },
    {
      id: 'evt-3',
      title: 'Medellín Specialty Coffee Tour',
      date: new Date('2024-10-20T09:00:00'),
      location: 'Laureles, Medellín',
      category: 'Food & Drink',
      price: '$45.000 COP',
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80',
      aiHint: 'A caffeine-fueled morning. You will visit 3 distinct cafes and learn cupping.',
      description: 'Discover why Colombian coffee is world-famous. This guided walking tour takes you through the leafy streets of Laureles to visit award-winning roasters. Includes tastings and a bag of beans.',
      tags: ['Coffee', 'Walking Tour', 'Morning', 'Foodie'],
      attendees: 12,
      organizer: 'Rituales Cafe'
    },
    {
      id: 'evt-4',
      title: 'Botanical Garden Yoga',
      date: new Date('2024-10-21T08:00:00'),
      location: 'Jardín Botánico',
      category: 'Wellness',
      price: 'Donation',
      image: 'https://images.unsplash.com/photo-1552674605-469523170d73?auto=format&fit=crop&w=800&q=80',
      aiHint: 'Start your week with zen. Bring your own mat and water bottle.',
      description: 'Connect with nature in the heart of the city. This open-air yoga session is suitable for all levels. Located near the Orchidarium structure. Pay what you can donation.',
      tags: ['Yoga', 'Nature', 'Wellness', 'Morning'],
      attendees: 45,
      organizer: 'Yoga al Parque'
    }
  ];

  const selectedEvent = useMemo(() => 
    events.find(e => e.id === selectedId), 
  [events, selectedId]);

  const handleEventClick = (id: string) => {
    setSearchParams(prev => {
      prev.set('id', id);
      return prev;
    });
  };

  const handleClosePanel = () => {
    setSearchParams(prev => {
      prev.delete('id');
      return prev;
    });
  };

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClosePanel();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex h-full relative overflow-hidden">
      {/* Center Panel (Feed) */}
      <div className={`flex-1 min-w-0 flex flex-col h-full transition-all duration-300 ${selectedId ? 'xl:mr-[400px]' : ''}`}>
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-slate-50/95 backdrop-blur-sm border-b border-gray-200 px-4 md:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Upcoming Events</h1>
            <div className="hidden md:flex items-center gap-2">
               <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 shadow-sm">
                  <CalendarIcon className="w-4 h-4" /> Date
               </button>
               <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 shadow-sm">
                  <Filter className="w-4 h-4" /> Filters
               </button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
             {['All Events', 'Today', 'This Weekend', 'Music', 'Culture', 'Free'].map((filter, i) => (
               <button 
                 key={filter}
                 className={`
                   whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium border transition-colors
                   ${i === 0 
                     ? 'bg-gray-900 text-white border-gray-900' 
                     : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'}
                 `}
               >
                 {filter}
               </button>
             ))}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {events.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto xl:mx-0">
              {events.map(event => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  isSelected={selectedId === event.id}
                  onClick={() => handleEventClick(event.id)}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
               <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                 <CalendarIcon className="w-10 h-10 text-gray-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-2">It's quiet here...</h3>
               <p className="text-gray-500 max-w-md mb-6">
                 Start exploring the city to discover events matching your vibe.
               </p>
               <button className="px-6 py-2.5 bg-white border border-gray-200 rounded-xl font-medium text-gray-900 hover:bg-gray-50 transition-colors">
                 Return to Explore
               </button>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - Logic for Responsive Behavior */}

      {/* 1. Desktop XL: Static Panel */}
      <div 
        className={`
          hidden xl:block 
          absolute right-0 top-0 bottom-0 w-[400px] border-l border-gray-200 bg-white shadow-xl z-20 
          transform transition-transform duration-300 ease-in-out
          ${selectedId ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {selectedEvent && <EventDetailsPanel event={selectedEvent} onClose={handleClosePanel} />}
      </div>

      {/* 2. Tablet Overlay (MD/LG) */}
      <div 
        className={`
          hidden md:block xl:hidden
          fixed inset-y-0 right-0 w-[420px] bg-white shadow-2xl z-40 border-l border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${selectedId ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {selectedEvent && <EventDetailsPanel event={selectedEvent} onClose={handleClosePanel} />}
      </div>

      {/* 3. Mobile Bottom Sheet */}
      <div 
        className={`
          md:hidden
          fixed inset-x-0 bottom-0 h-[85vh] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40 rounded-t-3xl overflow-hidden
          transform transition-transform duration-300 ease-in-out
          ${selectedId ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        {/* Mobile Drag Handle */}
        <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center bg-white z-10 border-b border-gray-50" onClick={handleClosePanel}>
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>
        <div className="h-full pt-8">
           {selectedEvent && <EventDetailsPanel event={selectedEvent} onClose={handleClosePanel} />}
        </div>
      </div>

      {/* Backdrop for Mobile/Tablet overlay (Soft blur) */}
      <div 
        className={`
          xl:hidden fixed inset-0 bg-white/60 backdrop-blur-sm z-30 transition-opacity duration-300
          ${selectedId ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={handleClosePanel}
      />

    </div>
  );
};

export default Events;