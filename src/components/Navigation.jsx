import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiHeart, FiTrendingDown, FiUser, FiPlus } = FiIcons;

const Navigation = () => {
  const navItems = [
    { path: '/', icon: FiHome, label: 'Dashboard' },
    { path: '/wishlist', icon: FiHeart, label: 'My Wishlist' },
    { path: '/deals', icon: FiTrendingDown, label: 'Hot Deals' },
    { path: '/profile', icon: FiUser, label: 'Profile' },
  ];

  return (
    <motion.nav 
      className="fixed left-0 top-16 h-full w-64 bg-white shadow-lg border-r border-gray-200 p-6"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <SafeIcon icon={item.icon} className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
        
        <motion.div className="pt-4 mt-6 border-t border-gray-200">
          <NavLink
            to="/add-destination"
            className="flex items-center space-x-3 px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <SafeIcon icon={FiPlus} className="w-5 h-5" />
            <span className="font-medium">Add Destination</span>
          </NavLink>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;