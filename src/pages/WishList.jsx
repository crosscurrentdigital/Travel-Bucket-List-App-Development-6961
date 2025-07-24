import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import DestinationCard from '../components/DestinationCard';

const { FiFilter, FiGrid, FiList } = FiIcons;

const WishList = () => {
  const [viewMode, setViewMode] = useState('grid');
  
  const destinations = [
    {
      id: 1,
      name: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400',
      budget: '$1,500',
      timeframe: 'Spring 2024',
      status: 'watching',
      currentPrice: '$1,299',
      savings: '$201',
      category: 'City Break'
    },
    {
      id: 2,
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400',
      budget: '$2,000',
      timeframe: 'Summer 2024',
      status: 'deal-found',
      currentPrice: '$1,750',
      savings: '$250',
      category: 'Beach'
    },
    {
      id: 3,
      name: 'Machu Picchu, Peru',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400',
      budget: '$1,800',
      timeframe: 'Fall 2024',
      status: 'planning',
      currentPrice: '$2,100',
      savings: '-$300',
      category: 'Adventure'
    },
    {
      id: 4,
      name: 'Iceland Northern Lights',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      budget: '$2,500',
      timeframe: 'Winter 2024',
      status: 'watching',
      currentPrice: '$2,299',
      savings: '$201',
      category: 'Nature'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <SafeIcon icon={FiFilter} className="w-4 h-4" />
            <span>Filter</span>
          </motion.button>
          
          <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
            >
              <SafeIcon icon={FiGrid} className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
            >
              <SafeIcon icon={FiList} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {destinations.map((destination, index) => (
          <motion.div
            key={destination.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <DestinationCard destination={destination} viewMode={viewMode} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WishList;