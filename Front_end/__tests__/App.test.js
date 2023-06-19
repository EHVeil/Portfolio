import { render, screen } from '@testing-library/react';
import App from '../dist/src/App.jsx';
import React from 'react';

test('renders the landing page', () => {
  render(<App />);
});
