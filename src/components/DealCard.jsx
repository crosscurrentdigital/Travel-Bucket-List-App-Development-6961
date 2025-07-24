import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiMapPin, FiCalendar, FiCheck, FiExternalLink } = FiIcons;

const DealCard = ({ deal }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
    >
      <div className="relative">
        <img 
          src={deal.image} 
          alt={deal.destination}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          -{deal.discount}%
        </div>
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
          {deal.type}
        </div>
        <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-red-500 text-white px-2 py-1 rounded text-sm">
          <SafeIcon icon={FiClock} className="w-3 h-3" />
          <span>{deal.timeLeft} left</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{deal.destination}</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
              <SafeIcon icon={FiCalendar} className="w-4 h-4" />
              <span>{deal.dates}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 line-through">${deal.originalPrice}</div>
            <div className="text-xl font-bold text-green-600">${deal.dealPrice}</div>
          </div>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-green-800">You save</span>
            <span className="font-bold text-green-600">${deal.savings}</span>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          {deal.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
              <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <span>Provider: {deal.provider}</span>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
        >
          <span>Book Now</span>
          <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DealCard;