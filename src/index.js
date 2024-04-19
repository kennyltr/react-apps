import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

// This is how it it is done from React 18 onwards
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App color="navy" size="50px"/>);