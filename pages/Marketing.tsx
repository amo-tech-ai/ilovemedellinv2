import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain } from 'lucide-react';

interface MarketingProps {
  pageType: string;
}

const Marketing: React.FC<MarketingProps> = ({ pageType }) => {
  const content = {
    title: pageType.charAt(0).toUpperCase() + pageType.slice(1),
    description: 'Experience the magic of the City of Eternal Spring.',
  };

  if (pageType === 'home') {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
        {/* Nav */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-medellin-500 text-white rounded-lg flex items-center justify-center">M</div>
            I Love Medellín
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <Link to="/about" className="hover:text-gray-900">About</Link>
            <Link to="/features" className="hover:text-gray-900">Features</Link>
            <Link to="/blog" className="hover:text-gray-900">Blog</Link>
            <Link to="/contact" className="hover:text-gray-900">Contact</Link>
          </div>
          <div className="flex gap-4">
             <Link to="/app" className="px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-lg shadow-gray-200">
               Launch App
             </Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50 via-white to-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6 border border-orange-100">
            Now Live in Beta
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 max-w-4xl">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-medellin-600 to-teal-500">Medellín</span> like a local.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
            The AI-powered guide for digital nomads and travelers. Find the best coffee, hidden rooftops, and authentic cultural experiences instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/app/explore" className="px-8 py-4 bg-medellin-600 text-white rounded-2xl font-bold text-lg hover:bg-medellin-700 transition-all shadow-xl shadow-medellin-200 flex items-center justify-center gap-2">
              Start Exploring <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/about" className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center">
              Learn More
            </Link>
          </div>
          
          <div className="mt-20 opacity-40">
            <Mountain className="w-full h-32 text-gray-200" strokeWidth={0.5} />
          </div>
        </div>

        {/* Footer Placeholder */}
        <footer className="py-8 border-t border-gray-100 text-center text-sm text-gray-400">
          © 2024 I Love Medellín. Made with ❤️ in Colombia.
        </footer>
      </div>
    );
  }

  // Generic Marketing Page
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
       <nav className="flex justify-between items-center p-6 bg-white border-b border-gray-100">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
             <div className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center">M</div>
          </Link>
          <Link to="/app" className="text-sm font-medium text-medellin-600 hover:text-medellin-700">Go to App &rarr;</Link>
       </nav>

       <div className="flex-1 max-w-4xl mx-auto w-full p-8 md:p-16">
          <div className="h-4 w-24 bg-medellin-500 mb-8 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{content.title}</h1>
          <p className="text-xl text-gray-500 mb-12">{content.description}</p>
          
          <div className="space-y-8">
            <div className="h-64 bg-gray-200 rounded-3xl animate-pulse"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="h-40 bg-gray-200 rounded-2xl animate-pulse"></div>
                <div className="h-40 bg-gray-200 rounded-2xl animate-pulse"></div>
                <div className="h-40 bg-gray-200 rounded-2xl animate-pulse"></div>
            </div>
            <div className="space-y-4 max-w-2xl">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
            </div>
          </div>
       </div>
    </div>
  );
};

export default Marketing;