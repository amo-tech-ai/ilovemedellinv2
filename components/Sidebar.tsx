import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Compass, 
  Map, 
  Calendar, 
  Utensils, 
  Home, 
  Heart, 
  Sparkles, 
  LogOut,
  Settings,
  Camera
} from 'lucide-react';
import { User } from '../types';

interface SidebarProps {
  user: User;
  onOpenWizard: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, onOpenWizard, isOpen, setIsOpen }) => {
  const navItems = [
    { label: 'Explore', path: '/app/explore', icon: Compass },
    { label: 'Trips', path: '/app/trips', icon: Map },
    { label: 'Tourist', path: '/app/tourist', icon: Camera },
    { label: 'Events', path: '/app/events', icon: Calendar },
    { label: 'Restaurants', path: '/app/restaurants', icon: Utensils },
    { label: 'Rentals', path: '/app/rentals', icon: Home },
    { label: 'Saved', path: '/app/saved', icon: Heart },
    { label: 'Concierge', path: '/app/concierge', icon: Sparkles },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside 
        className={`
          fixed md:sticky top-0 left-0 z-30
          h-full w-64 bg-white border-r border-gray-200
          flex flex-col transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-100 flex items-center gap-3">
          <div className="w-8 h-8 bg-medellin-500 rounded-lg flex items-center justify-center text-white font-bold">
            M
          </div>
          <Link to="/" className="text-xl font-bold text-gray-900 tracking-tight">
            I Love Medellín
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          <div className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Discovery
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)} // Close on mobile select
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${isActive 
                  ? 'bg-medellin-50 text-medellin-900' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
              `}
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-medellin-600' : 'text-gray-400'}`} />
                  {item.label}
                  {item.label === 'Concierge' && (
                    <span className="ml-auto bg-gradient-to-r from-purple-500 to-indigo-500 text-[10px] text-white px-1.5 py-0.5 rounded-full font-bold">
                      AI
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Button */}
        <div className="p-4">
          <button 
            onClick={onOpenWizard}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-medium transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>Plan New Trip</span>
          </button>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
              <p className="text-xs text-medellin-600 truncate">{user.status}</p>
            </div>
            <Settings className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;