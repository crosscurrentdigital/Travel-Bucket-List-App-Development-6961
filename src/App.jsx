import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import WishList from './pages/WishList';
import Deals from './pages/Deals';
import Profile from './pages/Profile';
import AddDestination from './pages/AddDestination';

function App() {
  return (
    <Router>
      <motion.div 
        className="min-h-screen bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-destination" element={<AddDestination />} />
          </Routes>
        </Layout>
      </motion.div>
    </Router>
  );
}

export default App;