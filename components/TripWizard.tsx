import React, { useState } from 'react';
import { X, Calendar, MapPin, DollarSign, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

interface TripWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

const TripWizard: React.FC<TripWizardProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  const totalSteps = 4;

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">When are you visiting?</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-xl p-4 hover:border-medellin-500 cursor-pointer transition-colors bg-gray-50">
                <span className="block text-sm text-gray-500 mb-1">Start Date</span>
                <span className="font-medium">Oct 12, 2024</span>
              </div>
              <div className="border rounded-xl p-4 hover:border-medellin-500 cursor-pointer transition-colors bg-gray-50">
                <span className="block text-sm text-gray-500 mb-1">End Date</span>
                <span className="font-medium">Oct 19, 2024</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">Currently seeing average prices for this season.</p>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
             <h3 className="text-lg font-semibold text-gray-900">What's your vibe?</h3>
             <div className="flex flex-wrap gap-2">
                {['Nightlife', 'Nature', 'Foodie', 'History', 'Relaxation', 'Art', 'Coffee'].map(tag => (
                  <button key={tag} className="px-4 py-2 rounded-full border border-gray-200 hover:bg-medellin-50 hover:border-medellin-200 hover:text-medellin-700 text-sm font-medium transition-colors">
                    {tag}
                  </button>
                ))}
             </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Budget per day?</h3>
             <div className="space-y-2">
               {['Backpacker ($30-50)', 'Comfort ($50-150)', 'Luxury ($150+)'].map(opt => (
                 <div key={opt} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                   <div className="w-4 h-4 rounded-full border border-gray-300 mr-3"></div>
                   <span className="text-sm font-medium">{opt}</span>
                 </div>
               ))}
             </div>
          </div>
        );
      case 4:
        return (
           <div className="text-center py-6">
             <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
               <CheckCircle2 className="w-8 h-8" />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-2">Trip Ready!</h3>
             <p className="text-gray-500 text-sm">Our AI has curated a 7-day itinerary based on your preferences for El Poblado and Laureles.</p>
           </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Trip Wizard</h2>
            <p className="text-xs text-gray-500">Plan your Medellín adventure</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-100 h-1.5">
          <div 
            className="bg-medellin-500 h-1.5 transition-all duration-300 ease-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 overflow-y-auto">
          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
          {step > 1 ? (
             <button 
               onClick={() => setStep(s => s - 1)}
               className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1"
             >
               <ChevronLeft className="w-4 h-4" /> Back
             </button>
          ) : (
            <div></div>
          )}

          {step < totalSteps ? (
            <button 
              onClick={() => setStep(s => s + 1)}
              className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2"
            >
              Next Step <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button 
              onClick={onClose}
              className="bg-medellin-600 hover:bg-medellin-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all shadow-lg hover:shadow-medellin-500/30"
            >
              Finish & View
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripWizard;