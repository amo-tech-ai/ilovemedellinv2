import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import PlaceCard from '../components/PlaceCard';
import PlaceDetailsPanel from '../components/PlaceDetailsPanel';
import { Place } from '../types';
import { Search, MapPin, Filter, Map as MapIcon, ChevronDown, X } from 'lucide-react';

const Explore: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  // Enhanced Mock Data
  const restaurants: Place[] = [
    {
      id: '1',
      name: 'El Cielo Restaurant',
      category: 'Fine Dining',
      rating: 4.9,
      reviews: 1240,
      priceLevel: '$$$$',
      distance: '0.8 km',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
      aiHint: 'Must-visit for molecular gastronomy lovers. Reserve 2 weeks ahead.',
      description: 'Experience an avant-garde tasting menu that takes you through the diverse landscapes of Colombia. Chef Juan Manuel Barrientos creates edible art that engages all five senses.',
      tags: ['Michelin Star', 'Romantic', 'Tasting Menu', 'Wine Pairing'],
      hours: '6:00 PM - 11:00 PM',
      address: 'Cl. 7D #43c36, El Poblado, Medellín',
      phone: '+57 310 123 4567'
    },
    {
      id: '2',
      name: 'Carmen',
      category: 'Fusion',
      rating: 4.8,
      reviews: 890,
      priceLevel: '$$$',
      distance: '0.5 km',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
      aiHint: 'Try the crab tacos. Perfect for a romantic date night.',
      description: 'Elegant venue serving contemporary cuisine with Colombian ingredients. The lush garden setting provides a tranquil escape in the heart of Poblado.',
      tags: ['Garden Dining', 'Cocktails', 'Seafood', 'Date Night'],
      hours: '12:00 PM - 10:30 PM',
      address: 'Cra. 36 #10A-27, El Poblado, Medellín'
    },
    {
        id: '3',
        name: 'Pergamino Cafe',
        category: 'Coffee',
        rating: 4.7,
        reviews: 2100,
        priceLevel: '$$',
        distance: '0.2 km',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
        aiHint: 'Best workspace for digital nomads. Try the cold brew.',
        description: 'A staple of Medellín coffee culture. Pergamino sources beans directly from local farmers and roasts them to perfection. Great Wi-Fi and outdoor seating.',
        tags: ['Specialty Coffee', 'Laptop Friendly', 'Bakery', 'Outdoor Seating'],
        hours: '8:00 AM - 8:00 PM',
        address: 'Cra. 37 #8A-37, El Poblado, Medellín'
      },
  ];

  const activities: Place[] = [
    {
      id: '4',
      name: 'Comuna 13 Graffiti Tour',
      category: 'Culture',
      rating: 5.0,
      reviews: 5000,
      distance: '3.5 mi',
      image: 'https://images.unsplash.com/photo-1599592233543-94c489b27453?auto=format&fit=crop&w=800&q=80',
      aiHint: 'Go early (9 AM) to avoid the biggest crowds and heat.',
      description: 'Explore the transformation of Comuna 13 through its vibrant street art, music, and dance. Take the famous outdoor escalators for panoramic city views.',
      tags: ['History', 'Art', 'Walking Tour', 'Photography'],
      hours: '9:00 AM - 5:00 PM'
    },
    {
      id: '5',
      name: 'Arví Park',
      category: 'Nature',
      rating: 4.6,
      reviews: 1200,
      distance: '8.0 mi',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
      aiHint: 'Take the cable car for the best views. Bring a light jacket.',
      description: 'An expansive ecological nature preserve. Perfect for hiking, picnicking, and escaping the city bustle. Accessible via the Metrocable.',
      tags: ['Hiking', 'Nature', 'Bird Watching', 'Picnic'],
      hours: '9:00 AM - 6:00 PM (Closed Mondays)'
    },
  ];

  const stays: Place[] = [
    {
        id: '6',
        name: 'The Click Clack Hotel',
        category: 'Hotel',
        rating: 4.7,
        reviews: 450,
        priceLevel: '$180/night',
        distance: '0.1 km',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        aiHint: 'Rooftop brunch is legendary here. Very social vibe.',
        description: 'A design-forward hotel with an edgy aesthetic. Features a popular rooftop pool bar and multiple dining options on-site.',
        tags: ['Boutique', 'Rooftop Pool', 'Design', 'Nightlife'],
        address: 'Cl. 10B #37-42, El Poblado, Medellín'
    }
  ];

  // Combine all places for lookup
  const allPlaces = useMemo(() => [...restaurants, ...activities, ...stays], [restaurants, activities, stays]);
  
  const selectedPlace = useMemo(() => 
    allPlaces.find(p => p.id === selectedId), 
  [allPlaces, selectedId]);

  const handlePlaceClick = (id: string) => {
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
      {/* Left/Main Content */}
      <div className={`flex-1 min-w-0 flex flex-col h-full transition-all duration-300 ${selectedId ? 'xl:mr-[400px]' : ''}`}>
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth">
          
          {/* Top Controls */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-500 hover:text-gray-900 cursor-pointer group">
                <div className="p-2 bg-white border border-gray-200 rounded-full shadow-sm group-hover:border-gray-300">
                  <MapPin className="w-4 h-4 text-medellin-600" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">Exploring</span>
                  <div className="flex items-center gap-1">
                      <span className="font-bold text-lg text-gray-900">El Poblado</span>
                      <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search places, vibes, or cravings..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-medellin-500/20 focus:border-medellin-500 transition-all shadow-sm"
                  />
                </div>
                <button className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 gap-2 no-scrollbar">
              <button className="whitespace-nowrap px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium">
                All
              </button>
              {['Restaurants', 'Things to Do', 'Stays', 'Coffee', 'Nightlife', 'Coworking'].map(cat => (
                <button key={cat} className="whitespace-nowrap px-4 py-2 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 rounded-full text-sm font-medium transition-colors">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Section: Restaurants */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Restaurants</h2>
              <button className="text-sm font-medium text-medellin-600 hover:text-medellin-700">See all</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map(place => (
                <PlaceCard 
                  key={place.id} 
                  place={place} 
                  isSelected={selectedId === place.id}
                  onClick={() => handlePlaceClick(place.id)}
                />
              ))}
            </div>
          </section>

          {/* Section: Things to Do */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Things to Do</h2>
              <button className="text-sm font-medium text-medellin-600 hover:text-medellin-700">See all</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {activities.map(place => (
                <PlaceCard 
                  key={place.id} 
                  place={place} 
                  isSelected={selectedId === place.id}
                  onClick={() => handlePlaceClick(place.id)}
                />
              ))}
            </div>
          </section>

          {/* Section: Stays */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Stays</h2>
              <button className="text-sm font-medium text-medellin-600 hover:text-medellin-700">See all</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stays.map(place => (
                <PlaceCard 
                  key={place.id} 
                  place={place} 
                  isSelected={selectedId === place.id}
                  onClick={() => handlePlaceClick(place.id)}
                />
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Right Panel Container */}
      {/* Desktop: Static Right Column (occupies flow) if selected, else Overlay/Hidden depending on logic */}
      {/* We use fixed positioning on <XL and static flow on >XL */}
      
      {/* 1. Static Panel (XL screens only) */}
      <div 
        className={`
          hidden xl:block 
          absolute right-0 top-0 bottom-0 w-[400px] border-l border-gray-200 bg-white shadow-xl z-20 
          transform transition-transform duration-300 ease-in-out
          ${selectedId ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {selectedPlace ? (
          <PlaceDetailsPanel place={selectedPlace} onClose={handleClosePanel} />
        ) : (
           /* Default Map State when nothing selected but panel is "visible" in layout logic (if we wanted it always open) */
           /* For now, we slide it away when closed, but we could keep the Abstract Map here if we changed logic */
           null
        )}
      </div>

      {/* 1.b Placeholder Map when NO selection on XL (Optional, per original design) */}
      {!selectedId && (
        <div className="hidden xl:block absolute right-0 top-0 bottom-0 w-96 border-l border-gray-200 bg-gray-100">
           <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
             <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Map_of_Medellin.png/600px-Map_of_Medellin.png')] bg-cover bg-center grayscale" />
             <div className="relative z-10 text-center p-6">
               <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4 text-medellin-500">
                  <MapIcon className="w-8 h-8" />
               </div>
               <h3 className="font-semibold text-gray-900 mb-2">Interactive Map</h3>
               <p className="text-sm text-gray-500 mb-4">Select a place to view details.</p>
             </div>
          </div>
        </div>
      )}

      {/* 2. Tablet Overlay (MD/LG screens) - Slide Over */}
      <div 
        className={`
          hidden md:block xl:hidden
          fixed inset-y-0 right-0 w-[400px] bg-white shadow-2xl z-40 border-l border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${selectedId ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {selectedPlace && <PlaceDetailsPanel place={selectedPlace} onClose={handleClosePanel} />}
      </div>

      {/* 3. Mobile Bottom Sheet (<MD screens) */}
      <div 
        className={`
          md:hidden
          fixed inset-x-0 bottom-0 h-[85vh] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40 rounded-t-3xl overflow-hidden
          transform transition-transform duration-300 ease-in-out
          ${selectedId ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        {/* Mobile Drag Handle */}
        <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center bg-white z-10" onClick={handleClosePanel}>
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>
        <div className="h-full pt-6">
           {selectedPlace && <PlaceDetailsPanel place={selectedPlace} onClose={handleClosePanel} />}
        </div>
      </div>

      {/* Backdrop for Mobile/Tablet */}
      {selectedId && (
        <div 
          className="xl:hidden fixed inset-0 bg-black/20 backdrop-blur-[2px] z-30 transition-opacity"
          onClick={handleClosePanel}
        />
      )}
    </div>
  );
};

export default Explore;