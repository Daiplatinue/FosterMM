import React from 'react';
import { motion } from 'framer-motion';
import { Child } from '../../types';

interface ChildCardProps {
  child: Child;
  onOpenDetails: (child: Child) => void;
}

const ChildCard: React.FC<ChildCardProps> = ({ child, onOpenDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    >
      <div className="relative h-64">
        <img
          src={child.image}
          alt={child.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{child.name}</h3>
        <p className="text-gray-600 mb-2">Age: {child.age}</p>
        <p className="text-gray-600 mb-4 line-clamp-2">{child.description}</p>
        <button
          onClick={() => onOpenDetails(child)}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default ChildCard;