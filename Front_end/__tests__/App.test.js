import { render, screen } from '@testing-library/react';
import App from '../dist/src/index.jsx';

test('renders the landing page', () => {
  render(<App />);
});
