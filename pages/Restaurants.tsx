import React, { useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PlaceCard from '../components/PlaceCard';
import PlaceDetailsPanel from '../components/PlaceDetailsPanel';
import { Place } from '../types';
import { Search, Filter, Utensils, Map as MapIcon, ChevronDown, Flame, Coffee, Wine, Sparkles } from 'lucide-react';

const Restaurants: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  // Mock Recommendations Data (AI Powered)
  const recommendations: Place[] = [
    {
      id: 'rec-1',
      name: 'Restaurante Hatoviejo',
      category: 'Colombian',
      rating: 4.8,
      reviews: 3200,
      priceLevel: '$$$',
      distance: '1.5 km',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      aiHint: 'Because you love "Authentic Local Food", this is the definitive spot for Bandeja Paisa. The sophisticated setting also suits your preference for "Quiet Dining".',
      description: 'A classic destination for traditional Colombian food. Known for its elegant colonial architecture and impeccable service.',
      tags: ['Traditional', 'Business', 'Lunch'],
      hours: '12:00 PM - 10:00 PM',
      address: 'Las Palmas, Medellín',
      phone: '+57 4 1234567'
    },
    {
      id: 'rec-2',
      name: 'Kaime',
      category: 'Vegetarian',
      rating: 4.9,
      reviews: 450,
      priceLevel: '$$',
      distance: '0.4 km',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
      aiHint: 'You prioritized "Healthy Options", and this has the highest-rated plant-based menu in Poblado. The ingredients are locally sourced, matching your "Sustainability" value.',
      description: 'Creative vegetarian and vegan cuisine that surprises even the most devoted meat eaters. The atmosphere is calm and filled with plants.',
      tags: ['Vegan', 'Healthy', 'Casual'],
      hours: '11:00 AM - 9:00 PM',
      address: 'El Poblado, Medellín',
      phone: '+57 300 9876543'
    },
     {
      id: 'rec-3',
      name: 'Mosquito',
      category: 'Asian Fusion',
      rating: 4.7,
      reviews: 820,
      priceLevel: '$$$',
      distance: '0.2 km',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      aiHint: 'Perfect match for your "Spicy" craving—the Szechuan dumplings are legendary. The dim, moody lighting also hits your "Vibrant Nightlife" preference.',
      description: 'A trendy spot for asian tapas and cocktails. The dimly lit ambiance makes it perfect for a dinner before a night out.',
      tags: ['Dinner', 'Cocktails', 'Spicy'],
      hours: '5:00 PM - 12:00 AM',
      address: 'Provenza, Medellín',
      phone: '+57 4 5555555'
    }
  ];

  // Mock Restaurant Data (Main Feed)
  const restaurants: Place[] = [
    {
      id: 'rest-1',
      name: 'El Cielo Restaurant',
      category: 'Fine Dining',
      rating: 4.9,
      reviews: 1450,
      priceLevel: '$$$$',
      distance: '0.8 km',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
      aiHint: 'A sensory journey. Reserve the "Experience" menu weeks in advance.',
      description: 'El Cielo offering is based on modern Colombian cuisine. Chef Juan Manuel Barrientos creates an avant-garde tasting menu that involves all the senses. It is more than dinner; it is a performance.',
      tags: ['Michelin Star', 'Molecular', 'Romantic', 'Special Occasion'],
      hours: '6:30 PM - 11:00 PM',
      address: 'Cl. 7D #43c36, El Poblado, Medellín',
      phone: '+57 310 123 4567'
    },
    {
      id: 'rest-2',
      name: 'Oci.Mde',
      category: 'Slow Food',
      rating: 4.8,
      reviews: 980,
      priceLevel: '$$$',
      distance: '0.6 km',
      image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80',
      aiHint: 'The braised short rib is non-negotiable. Best for sharing plates.',
      description: 'Dedicated to the art of slow cooking. The industrial-chic atmosphere sets the stage for comfort food elevated to fine dining standards. Great cocktails too.',
      tags: ['Sharing Plates', 'Industrial Chic', 'Cocktails', 'Dinner'],
      hours: '12:00 PM - 10:00 PM',
      address: 'Cra. 33 #7-21, El Poblado, Medellín'
    },
    {
      id: 'rest-3',
      name: 'Alambique',
      category: 'Latin Fusion',
      rating: 4.7,
      reviews: 2100,
      priceLevel: '$$',
      distance: '1.1 km',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      aiHint: 'Hidden gem vibes. You enter through a gallery. Try the brisket.',
      description: 'A rooftop laboratory of flavors. This rustic, plant-filled space feels like a treehouse. The menu features Colombian ingredients with a twist.',
      tags: ['Rooftop', 'Hidden Gem', 'Live Music', 'Casual'],
      hours: '5:00 PM - 1:00 AM',
      address: 'Cll 10 #43A-30, El Poblado, Medellín'
    },
    {
      id: 'rest-4',
      name: 'Mondongo\'s',
      category: 'Traditional',
      rating: 4.6,
      reviews: 5400,
      priceLevel: '$$',
      distance: '2.5 km',
      image: 'https://images.unsplash.com/photo-1574484284008-86d4751c6d96?auto=format&fit=crop&w=800&q=80',
      aiHint: 'The quintessential Paisa experience. Portions are huge.',
      description: 'An institution in Medellín. Famous for its Mondongo (tripe soup) and Bandeja Paisa. It’s loud, fast, friendly, and absolutely authentic.',
      tags: ['Authentic', 'Family Friendly', 'Lunch', 'Classic'],
      hours: '11:30 AM - 9:00 PM',
      address: 'Cl. 10 #42-46, El Poblado, Medellín'
    },
    {
      id: 'rest-5',
      name: 'Carmen',
      category: 'Fusion',
      rating: 4.8,
      reviews: 890,
      priceLevel: '$$$',
      distance: '0.5 km',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
      aiHint: 'Elegant garden dining. The crab tacos are legendary.',
      description: 'Contemporary cuisine in a stunning house in El Poblado. The lush garden setting provides a tranquil escape. Focus on local ingredients with global techniques.',
      tags: ['Garden', 'Romantic', 'Seafood', 'Wine List'],
      hours: '12:00 PM - 10:30 PM',
      address: 'Cra. 36 #10A-27, El Poblado, Medellín'
    },
    {
      id: 'rest-6',
      name: 'Pergamino Cafe',
      category: 'Coffee',
      rating: 4.9,
      reviews: 3200,
      priceLevel: '$$',
      distance: '0.3 km',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      aiHint: 'Digital nomad HQ. World-class coffee roast.',
      description: 'Sourcing beans directly from their own farms. Pergamino is the standard-bearer for Medellín coffee culture. Excellent pastries and vibe.',
      tags: ['Coffee', 'Work Friendly', 'Breakfast', 'Bakery'],
      hours: '8:00 AM - 9:00 PM',
      address: 'Cra. 37 #8A-37, El Poblado, Medellín'
    }
  ];

  // Merge datasets for selection lookup
  const allPlaces = useMemo(() => [...recommendations, ...restaurants], [recommendations, restaurants]);

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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
               <h1 className="text-2xl font-bold text-gray-900">Restaurants</h1>
               <p className="text-sm text-gray-500">Discover amazing dining experiences in Medellín</p>
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
               <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search places, vibes..." 
                    className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-medellin-500/20 shadow-sm"
                  />
               </div>
               <button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">
                  <Filter className="w-4 h-4" />
               </button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
             <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-gray-900 text-white border border-gray-900">
                All
             </button>
             <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50">
                <Flame className="w-3.5 h-3.5" /> Trending
             </button>
             <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50">
                <Wine className="w-3.5 h-3.5" /> Romantic
             </button>
             <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50">
                <Coffee className="w-3.5 h-3.5" /> Cafés
             </button>
             <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50">
                <Utensils className="w-3.5 h-3.5" /> Local Food
             </button>
             <button className="whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50">
                Price: $$-$$$
             </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          
          {/* AI Recommendations Section */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-medellin-500 to-teal-600 rounded-xl text-white shadow-md shadow-medellin-500/20">
                 <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 leading-tight">AI Picks for You</h2>
                <p className="text-sm text-gray-500">Based on "Healthy", "Spicy" & "Local" preferences</p>
              </div>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar snap-x snap-mandatory">
              {recommendations.map(place => (
                 <div key={place.id} className="min-w-[280px] md:min-w-[320px] snap-center">
                    <PlaceCard 
                      place={place} 
                      isSelected={selectedId === place.id}
                      onClick={() => handlePlaceClick(place.id)}
                    />
                 </div>
              ))}
            </div>
          </section>

          {/* Main Grid */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4">All Restaurants</h2>
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
        </div>
      </div>

      {/* Right Panel Logic */}

      {/* 1. Desktop XL: Static Panel */}
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
        ) : null}
      </div>

      {/* 2. Tablet Overlay (MD/LG) */}
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

      {/* 3. Mobile Bottom Sheet */}
      <div 
        className={`
          md:hidden
          fixed inset-x-0 bottom-0 h-[85vh] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40 rounded-t-3xl overflow-hidden
          transform transition-transform duration-300 ease-in-out
          ${selectedId ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
         <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center bg-white z-10 border-b border-gray-50" onClick={handleClosePanel}>
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>
        <div className="h-full pt-8">
           {selectedPlace && <PlaceDetailsPanel place={selectedPlace} onClose={handleClosePanel} />}
        </div>
      </div>

      {/* Backdrop */}
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

export default Restaurants;