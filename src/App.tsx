import React from 'react';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Explore from './pages/Explore';
import Events from './pages/Events';
import Restaurants from './pages/Restaurants';
import Tourist from './pages/Tourist';
import DashboardPlaceholder from './pages/DashboardPlaceholder';
import Concierge from './pages/Concierge';
import Marketing from './pages/Marketing';

const router = createHashRouter([
  {
    path: "/",
    element: <Marketing pageType="home" />,
  },
  {
    path: "/about",
    element: <Marketing pageType="about" />,
  },
  {
    path: "/features",
    element: <Marketing pageType="features" />,
  },
  {
    path: "/services",
    element: <Marketing pageType="services" />,
  },
  {
    path: "/media",
    element: <Marketing pageType="media" />,
  },
  {
    path: "/blog",
    element: <Marketing pageType="blog" />,
  },
  {
    path: "/contact",
    element: <Marketing pageType="contact" />,
  },
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/app/explore" replace />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "trips",
        element: <DashboardPlaceholder title="My Trips" icon="map" />,
      },
      {
        path: "tourist",
        element: <Tourist />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "restaurants",
        element: <Restaurants />,
      },
      {
        path: "rentals",
        element: <DashboardPlaceholder title="Vacation Rentals" icon="home" />,
      },
      {
        path: "saved",
        element: <DashboardPlaceholder title="Saved Places" icon="heart" />,
      },
      {
        path: "concierge",
        element: <Concierge />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;