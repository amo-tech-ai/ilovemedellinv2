import React from 'react';
import { Place } from '../../types';

interface OverviewSectionProps {
  place: Place;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ place }) => {
  return (
    <>
      {place.tags && (
        <div className="flex flex-wrap gap-2">
          {place.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      )}

      {place.description && (
        <div>
          <h3 className="font-bold text-gray-900 mb-2">About</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {place.description}
          </p>
        </div>
      )}
    </>
  );
};