import React from 'react';
import { LucideIcon, Map, Calendar, Utensils, Home, Heart, FileQuestion } from 'lucide-react';

interface DashboardPlaceholderProps {
  title: string;
  icon: string;
}

const iconMap: Record<string, LucideIcon> = {
  map: Map,
  calendar: Calendar,
  utensils: Utensils,
  home: Home,
  heart: Heart,
};

const DashboardPlaceholder: React.FC<DashboardPlaceholderProps> = ({ title, icon }) => {
  const Icon = iconMap[icon] || FileQuestion;

  return (
    <div className="p-8 h-full flex flex-col overflow-y-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
      
      <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50/50 p-12 text-center min-h-[400px]">
        <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mb-6">
          <Icon className="w-10 h-10 text-gray-300" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">It's quiet here...</h3>
        <p className="text-gray-500 max-w-md mb-8">
          This feature is coming soon to the <b>I Love Medellín</b> platform. 
          Start by exploring the city to populate this list.
        </p>
        <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 font-medium shadow-sm hover:shadow-md transition-all">
          Return to Explore
        </button>
      </div>
    </div>
  );
};

export default DashboardPlaceholder;