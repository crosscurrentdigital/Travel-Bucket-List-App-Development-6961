import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import StatsCard from '../components/StatsCard';
import RecentDeals from '../components/RecentDeals';
import PriceChart from '../components/PriceChart';

const { FiMapPin, FiDollarSign, FiBell, FiTrendingUp } = FiIcons;

const Dashboard = () => {
  const stats = [
    {
      title: 'Destinations',
      value: '12',
      change: '+2 this month',
      icon: FiMapPin,
      color: 'blue'
    },
    {
      title: 'Total Budget',
      value: '$15,400',
      change: '+$2,300 added',
      icon: FiDollarSign,
      color: 'green'
    },
    {
      title: 'Active Alerts',
      value: '8',
      change: '3 triggered today',
      icon: FiBell,
      color: 'yellow'
    },
    {
      title: 'Savings Found',
      value: '$2,847',
      change: '+18% vs last month',
      icon: FiTrendingUp,
      color: 'purple'
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
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your bucket list.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <StatsCard {...stat} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <PriceChart />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <RecentDeals />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;