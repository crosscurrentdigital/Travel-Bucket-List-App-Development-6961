import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiDollarSign, FiTrendingDown, FiTrendingUp, FiEye, FiShoppingCart } = FiIcons;

const DestinationCard = ({ destination, viewMode }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'deal-found': return 'bg-green-100 text-green-800';
      case 'watching': return 'bg-blue-100 text-blue-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'deal-found': return 'Deal Found!';
      case 'watching': return 'Watching';
      case 'planning': return 'Planning';
      default: return 'Unknown';
    }
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div className="flex items-center space-x-6">
          <img 
            src={destination.image} 
            alt={destination.name}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(destination.status)}`}>
                {getStatusText(destination.status)}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiDollarSign} className="w-4 h-4" />
                <span>Budget: {destination.budget}</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                <span>{destination.timeframe}</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon 
                  icon={destination.savings.startsWith('-') ? FiTrendingUp : FiTrendingDown} 
                  className={`w-4 h-4 ${destination.savings.startsWith('-') ? 'text-red-500' : 'text-green-500'}`} 
                />
                <span className={destination.savings.startsWith('-') ? 'text-red-600' : 'text-green-600'}>
                  {destination.savings}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  {destination.category}
                </span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
            >
              <SafeIcon icon={FiEye} className="w-4 h-4" />
            </motion.button>
            {destination.status === 'deal-found' && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <SafeIcon icon={FiShoppingCart} className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
    >
      <div className="relative">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(destination.status)}`}>
            {getStatusText(destination.status)}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-2 py-1 bg-black bg-opacity-50 text-white text-xs rounded">
            {destination.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{destination.name}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <SafeIcon icon={FiDollarSign} className="w-4 h-4" />
              <span>Budget: {destination.budget}</span>
            </div>
            <span className="font-medium text-gray-900">{destination.currentPrice}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <SafeIcon icon={FiCalendar} className="w-4 h-4" />
              <span>{destination.timeframe}</span>
            </div>
            <div className="flex items-center space-x-1">
              <SafeIcon 
                icon={destination.savings.startsWith('-') ? FiTrendingUp : FiTrendingDown} 
                className={`w-4 h-4 ${destination.savings.startsWith('-') ? 'text-red-500' : 'text-green-500'}`} 
              />
              <span className={`font-medium ${destination.savings.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>
                {destination.savings}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-4 py-2 text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
          >
            View Details
          </motion.button>
          
          {destination.status === 'deal-found' && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <SafeIcon icon={FiShoppingCart} className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;