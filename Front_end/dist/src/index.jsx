import React from 'react';
import{ createRoot } from 'react-dom/client';
import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
//if props must be passed to app make sure they are passed both here and in server.js
root.render(<App />);

