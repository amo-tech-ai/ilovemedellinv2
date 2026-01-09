import React, { useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PlaceCard from '../components/PlaceCard';
import PlaceDetailsPanel from '../components/PlaceDetailsPanel';
import { Place } from '../types';
import { Search, Camera, Sparkles, Navigation, Map } from 'lucide-react';

const Tourist: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  // Tourist Attractions Data
  const attractions: Place[] = [
    {
      id: 'tour-1',
      name: 'Comuna 13 & Graffiti Tour',
      category: 'Culture & History',
      rating: 4.9,
      reviews: 12500,
      priceLevel: 'Free / Tour $',
      distance: '6 km',
      image: 'https://images.unsplash.com/photo-1599592233543-94c489b27453?auto=format&fit=crop&w=800&q=80',
      aiHint: 'Comuna 13 is the ultimate symbol of Medellín\'s transformation, turning a once-conflict-ridden district into a vibrant canvas of hope. The famous street murals narrate the community\'s resilient history, while the outdoor escalators showcase innovative urban planning. It offers a profound look into how art and infrastructure can heal a neighborhood.',
      description: 'Once one of the most dangerous neighborhoods, Comuna 13 is now a symbol of rebirth. Famous for its vibrant street art, breakdancing shows, and the electric escalators that replaced steep stairs. A guided tour is highly recommended to understand the deep history.',
      tags: ['Street Art', 'History', 'Must See', 'Guided Tour'],
      address: 'Comuna 13, San Javier, Medellín',
      duration: '3-4 hours',
      bestTime: 'Morning (9 AM) to beat the heat',
      safetyTips: 'Very safe during the day with tours. Stick to the main tourist path near the escalators.'
    },
    {
      id: 'tour-2',
      name: 'Plaza Botero',
      category: 'Art & Museums',
      rating: 4.6,
      reviews: 8400,
      priceLevel: 'Free',
      distance: '4.5 km',
      image: 'https://images.unsplash.com/photo-1596486488340-97746726207e?auto=format&fit=crop&w=800&q=80',
      aiHint: 'This open-air museum honors Fernando Botero, Colombia\'s most famous artist, known for his signature "voluminous" style. The 23 bronze sculptures set against the backdrop of the Rafael Uribe Uribe Palace provide a unique blend of colonial architecture and playful modern art. It is a cultural centerpiece that defines the artistic soul of the city center.',
      description: 'An open-air museum featuring 23 distinctively "voluminous" sculptures by Medellín\'s own Fernando Botero. It sits right in front of the Museum of Antioquia and the Rafael Uribe Uribe Palace of Culture.',
      tags: ['Art', 'Photography', 'City Center', 'Museums'],
      address: 'Av. Carabobo, La Candelaria, Medellín',
      duration: '1-2 hours',
      bestTime: 'Mid-morning or Early Afternoon',
      safetyTips: 'The city center is busy. Keep your phone and wallet secure in front pockets.'
    },
    {
      id: 'tour-3',
      name: 'Metrocable to Arví Park',
      category: 'Nature & Views',
      rating: 4.8,
      reviews: 6200,
      priceLevel: 'Ticket $',
      distance: '12 km',
      image: 'https://images.unsplash.com/photo-1629814493390-252a13dc6265?auto=format&fit=crop&w=800&q=80',
      aiHint: 'More than just transport, the Metrocable is a symbol of social inclusion, connecting remote hillside communities to the city\'s heart. The journey offers breathtaking aerial views before arriving at Parque Arví, a prehistoric cloud forest. It is a perfect example of how Medellín integrates urban living with its surrounding nature.',
      description: 'Take the K-Line Metrocable up to Santo Domingo, then transfer to the L-Line to reach Parque Arví. It is an ecological nature preserve perfect for hiking, local snacks, and escaping the urban bustle.',
      tags: ['Nature', 'Views', 'Public Transport', 'Hiking'],
      address: 'Santa Elena, Medellín',
      duration: 'Half Day (4-5 hours)',
      bestTime: 'Start early (8 AM) to avoid line closures',
      safetyTips: 'Bring a light jacket; it gets chilly up in the mountains.'
    },
    {
      id: 'tour-4',
      name: 'Guatapé & El Peñol',
      category: 'Day Trip',
      rating: 4.9,
      reviews: 15000,
      priceLevel: 'Bus/Tour $$',
      distance: '80 km',
      image: 'https://images.unsplash.com/photo-1591544660424-6338b725b842?auto=format&fit=crop&w=800&q=80',
      aiHint: 'Famous for having the most colorful zocalos (baseboards) in Colombia, Guatapé is a colonial architectural gem frozen in time. The towering Rock of El Peñol offers a challenging climb rewarded with arguably the best panoramic view in South America. It is an essential day trip for understanding the region\'s geography and colonial charm.',
      description: 'A colorful colonial town famous for its "zocalos" (skirting boards). The main attraction is the massive Rock of Guatapé (El Peñol). The view of the island network from the top is breathtaking.',
      tags: ['Day Trip', 'Hiking', 'Photography', 'Water Sports'],
      address: 'Guatapé, Antioquia',
      duration: 'Full Day (8-10 hours)',
      bestTime: 'Weekdays to avoid massive crowds',
      safetyTips: 'Wear comfortable shoes for the climb. Hydrate well.'
    },
    {
      id: 'tour-5',
      name: 'Jardín Botánico',
      category: 'Nature',
      rating: 4.7,
      reviews: 5000,
      priceLevel: 'Free',
      distance: '5 km',
      image: 'https://images.unsplash.com/photo-1589307705194-6725227d8258?auto=format&fit=crop&w=800&q=80',
      aiHint: 'A serene escape from the urban bustle, the Botanical Garden is centered around the "Orquideorama", a stunning architectural meshwork that collects rainwater and protects orchids. It serves as a living library of Colombia\'s immense biodiversity and a beloved gathering space for local families. The harmonious blend of modern structure and lush nature makes it culturally unique.',
      description: 'Medellín\'s Botanical Garden is a 34-acre green space featuring a butterfly house, lagoon, and the famous Orquideorama. It shares a plaza with the Explora Park (science museum).',
      tags: ['Relaxation', 'Architecture', 'Picnic', 'Family'],
      address: 'Cl. 73 #51D-14, Aranjuez, Medellín',
      duration: '1-2 hours',
      bestTime: 'Anytime during the day',
      safetyTips: 'Very safe enclosed park.'
    },
    {
      id: 'tour-6',
      name: 'El Poblado & Provenza',
      category: 'Neighborhoods',
      rating: 4.5,
      reviews: 9000,
      priceLevel: 'Free',
      distance: '0 km',
      image: 'https://images.unsplash.com/photo-1574484284008-86d4751c6d96?auto=format&fit=crop&w=800&q=80',
      aiHint: 'El Poblado is the cosmopolitan heartbeat of Medellín, blending upscale dining, designer boutiques, and vibrant nightlife in the Zona Rosa. While modern, it retains charm with tree-lined avenues and the Quebrada La Presidenta park running through it. It is the best place to experience the contemporary, entrepreneurial energy of the "Paisas".',
      description: 'The most modern and westernized neighborhood in Medellín. Filled with tree-lined streets, upscale restaurants, cafes, and rooftop bars. Provenza is the specific zone for pedestrian-friendly nightlife.',
      tags: ['Dining', 'Shopping', 'Nightlife', 'Walking'],
      address: 'El Poblado, Medellín',
      duration: '2-3 hours',
      bestTime: 'Late afternoon into evening',
      safetyTips: 'Generally safe, but watch drinks at night and avoid dark alleys.'
    }
  ];

  const selectedPlace = useMemo(() => 
    attractions.find(p => p.id === selectedId), 
  [attractions, selectedId]);

  // Derive nearby/related attractions (Mock logic: exclude current, take next 3)
  const nearbyPlaces = useMemo(() => {
    if (!selectedId) return [];
    return attractions.filter(p => p.id !== selectedId).slice(0, 3);
  }, [attractions, selectedId]);

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
    <div className="flex h-full w-full relative bg-slate-50">
      {/* Center Panel (Feed) */}
      <div className={`flex-1 min-w-0 flex flex-col h-full transition-all duration-300 ${selectedId ? 'xl:mr-[400px]' : ''}`}>
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-slate-50/95 backdrop-blur-sm border-b border-gray-200 px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
               <div className="flex items-center gap-2 mb-1 text-medellin-600">
                  <Camera className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Tourist Mode</span>
               </div>
               <h1 className="text-3xl font-bold text-gray-900">Tourist Attractions</h1>
               <p className="text-gray-500 mt-1">Must-see places, culture, and iconic experiences.</p>
            </div>
            
            <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl font-medium shadow-lg hover:bg-gray-800 transition-all active:scale-95">
               <Sparkles className="w-4 h-4 text-yellow-300" />
               Plan Tourist Day
            </button>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-3">
             <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search landmarks, tours..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-medellin-500/20 shadow-sm"
                  />
             </div>
             
             {/* Quick Filters */}
             <div className="flex gap-2 overflow-x-auto no-scrollbar items-center">
                <button className="whitespace-nowrap px-4 py-2.5 bg-gray-100 text-gray-900 rounded-xl text-sm font-semibold border border-transparent hover:bg-gray-200">
                   All
                </button>
                {['Culture & History', 'Nature', 'Art', 'Day Trips', 'Neighborhoods'].map(cat => (
                  <button key={cat} className="whitespace-nowrap px-4 py-2.5 bg-white text-gray-600 border border-gray-200 rounded-xl text-sm font-medium hover:border-gray-300 hover:bg-gray-50">
                    {cat}
                  </button>
                ))}
             </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50">
           {/* Context Banner */}
           <div className="mb-8 p-4 bg-white border border-medellin-100 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 bg-medellin-50 rounded-full flex items-center justify-center shrink-0">
                 <Navigation className="w-5 h-5 text-medellin-600" />
              </div>
              <div>
                 <h3 className="text-sm font-bold text-gray-900">First time in Medellín?</h3>
                 <p className="text-sm text-gray-600 mt-1">
                   Start with <b>Comuna 13</b> for history and <b>Plaza Botero</b> for art. 
                   For the best view, take the <b>Metrocable</b> to Arví Park.
                 </p>
              </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {attractions.map(place => (
                <PlaceCard 
                  key={place.id} 
                  place={place} 
                  isSelected={selectedId === place.id}
                  onClick={() => handlePlaceClick(place.id)}
                />
              ))}
           </div>
           
           <div className="mt-12 text-center text-gray-400 text-sm pb-8">
              End of list · <button className="text-medellin-600 font-medium hover:underline">Load more hidden gems</button>
           </div>
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
          <PlaceDetailsPanel 
            place={selectedPlace} 
            onClose={handleClosePanel} 
            nearbyPlaces={nearbyPlaces}
            onPlaceClick={handlePlaceClick}
          />
        ) : (
          /* Empty State for Right Panel on XL if nothing selected */
          <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-gray-50">
             <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-4 text-medellin-400">
               <Map className="w-8 h-8" />
             </div>
             <h3 className="text-lg font-bold text-gray-900 mb-2">Select an Attraction</h3>
             <p className="text-gray-500 text-sm max-w-xs">Click on any card to view details, AI insights, and nearby suggestions.</p>
          </div>
        )}
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
        {selectedPlace && (
          <PlaceDetailsPanel 
            place={selectedPlace} 
            onClose={handleClosePanel} 
            nearbyPlaces={nearbyPlaces}
            onPlaceClick={handlePlaceClick}
          />
        )}
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
           {selectedPlace && (
             <PlaceDetailsPanel 
               place={selectedPlace} 
               onClose={handleClosePanel} 
               nearbyPlaces={nearbyPlaces}
               onPlaceClick={handlePlaceClick}
             />
           )}
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

export default Tourist;