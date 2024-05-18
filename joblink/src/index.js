import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchProvider } from './contexts/SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SearchProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </SearchProvider>
);
