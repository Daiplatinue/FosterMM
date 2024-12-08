import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Child } from '../../types';

interface ChildDetailsProps {
  child: Child | null;
  onClose: () => void;
  onInquire: (child: Child) => void;
}

const ChildDetails: React.FC<ChildDetailsProps> = ({ child, onClose, onInquire }) => {
  if (!child) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg transition-all hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={child.image}
              alt={child.name}
              className="w-full h-80 object-cover rounded-t-3xl"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{child.name}</h2>
            <p className="text-gray-600 mb-6 text-lg">Age: {child.age}</p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">About {child.name}</h3>
                <p className="text-gray-600 leading-relaxed">{child.description}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Background</h3>
                <p className="text-gray-600 leading-relaxed">{child.background}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {child.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <button
                onClick={() => onInquire(child)}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Inquire About {child.name}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ChildDetails;