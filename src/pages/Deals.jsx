import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import DealCard from '../components/DealCard';

const { FiTrendingDown, FiClock, FiMapPin } = FiIcons;

const Deals = () => {
  const deals = [
    {
      id: 1,
      destination: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400',
      originalPrice: 1299,
      dealPrice: 899,
      savings: 400,
      discount: 31,
      timeLeft: '2 days',
      type: 'Flight + Hotel',
      dates: 'Mar 15-22, 2024',
      provider: 'Expedia',
      features: ['Free Cancellation', '4★ Hotel', 'Direct Flight']
    },
    {
      id: 2,
      destination: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400',
      originalPrice: 950,
      dealPrice: 720,
      savings: 230,
      discount: 24,
      timeLeft: '5 hours',
      type: 'Flight',
      dates: 'Apr 8-15, 2024',
      provider: 'Skyscanner',
      features: ['1 Stop', 'Refundable', 'Seat Selection']
    },
    {
      id: 3,
      destination: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400',
      originalPrice: 1100,
      dealPrice: 750,
      savings: 350,
      discount: 32,
      timeLeft: '1 day',
      type: 'Package Deal',
      dates: 'May 20-30, 2024',
      provider: 'Booking.com',
      features: ['Beach Resort', 'All Inclusive', 'Spa Access']
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
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Hot Deals</h1>
          <p className="text-gray-600 mt-1">Limited-time offers matching your wishlist</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <SafeIcon icon={FiClock} className="w-4 h-4" />
          <span>Updated 5 minutes ago</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <motion.div
            key={deal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <DealCard deal={deal} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Deals;