import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TripWizard from './TripWizard';
import { Menu } from 'lucide-react';
import { User } from '../types';

const Layout: React.FC = () => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const user: User = {
    name: 'Alex Morgan',
    status: 'Exploring · El Poblado',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-gray-900 overflow-hidden">
      <Sidebar 
        user={user} 
        onOpenWizard={() => setIsWizardOpen(true)} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col min-w-0 h-full">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shrink-0 z-20">
          <div className="flex items-center gap-3">
             <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 hover:bg-gray-100 rounded-lg text-gray-600"
            >
              <Menu className="w-6 h-6" />
            </button>
            <span className="font-bold text-gray-900">I Love Medellín</span>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
            <img src={user.avatar} alt="User" className="w-full h-full object-cover" />
          </div>
        </header>

        {/* Main Content Area - Changed to overflow-hidden to allow children to scroll */}
        <main className="flex-1 overflow-hidden relative flex flex-col">
          <Outlet />
        </main>
      </div>

      <TripWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
    </div>
  );
};

export default Layout;