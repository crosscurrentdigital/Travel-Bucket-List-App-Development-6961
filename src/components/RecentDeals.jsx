import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiCalendar, FiDollarSign } = FiIcons;

const RecentDeals = () => {
  const deals = [
    {
      destination: 'Tokyo, Japan',
      originalPrice: '$1,200',
      currentPrice: '$899',
      savings: '$301',
      date: 'Mar 15-22',
      type: 'Flight + Hotel'
    },
    {
      destination: 'Paris, France',
      originalPrice: '$950',
      currentPrice: '$720',
      savings: '$230',
      date: 'Apr 8-15',
      type: 'Flight'
    },
    {
      destination: 'Bali, Indonesia',
      originalPrice: '$800',
      currentPrice: '$620',
      savings: '$180',
      date: 'May 20-30',
      type: 'Package Deal'
    }
  ];

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      whileHover={{ scale: 1.01 }}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Deals Found</h3>
      <div className="space-y-4">
        {deals.map((deal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <SafeIcon icon={FiMapPin} className="w-4 h-4 text-gray-500" />
                <h4 className="font-medium text-gray-900">{deal.destination}</h4>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                  <span>{deal.date}</span>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {deal.type}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 line-through">{deal.originalPrice}</span>
                <span className="font-bold text-green-600">{deal.currentPrice}</span>
              </div>
              <p className="text-xs text-green-600">Save {deal.savings}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentDeals;