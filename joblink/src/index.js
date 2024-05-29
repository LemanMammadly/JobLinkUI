import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchProvider } from './contexts/SearchContext';
import { AdvertisementFilterProvider } from './contexts/AdvertisementFilterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AdvertisementFilterProvider>
  <SearchProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </SearchProvider>
  </AdvertisementFilterProvider>
);
