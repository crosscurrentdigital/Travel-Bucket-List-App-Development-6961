import React from 'react';
import { motion } from 'framer-motion';

const PriceChart = () => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      whileHover={{ scale: 1.01 }}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Trends</h3>
      <div className="h-64 bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Price tracking chart will be displayed here</p>
      </div>
    </motion.div>
  );
};

export default PriceChart;