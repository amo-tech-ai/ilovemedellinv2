import React from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Explore from './pages/Explore';
import Events from './pages/Events';
import Restaurants from './pages/Restaurants';
import DashboardPlaceholder from './pages/DashboardPlaceholder';
import Concierge from './pages/Concierge';
import Marketing from './pages/Marketing';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Marketing / Landing Pages */}
        <Route path="/" element={<Marketing pageType="home" />} />
        <Route path="/about" element={<Marketing pageType="about" />} />
        <Route path="/features" element={<Marketing pageType="features" />} />
        <Route path="/services" element={<Marketing pageType="services" />} />
        <Route path="/media" element={<Marketing pageType="media" />} />
        <Route path="/blog" element={<Marketing pageType="blog" />} />
        <Route path="/contact" element={<Marketing pageType="contact" />} />

        {/* Dashboard App Routes */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Navigate to="/app/explore" replace />} />
          <Route path="explore" element={<Explore />} />
          <Route path="trips" element={<DashboardPlaceholder title="My Trips" icon="map" />} />
          <Route path="events" element={<Events />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="rentals" element={<DashboardPlaceholder title="Vacation Rentals" icon="home" />} />
          <Route path="saved" element={<DashboardPlaceholder title="Saved Places" icon="heart" />} />
          <Route path="concierge" element={<Concierge />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;