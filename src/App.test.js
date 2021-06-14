import { render, screen } from '@testing-library/react';
import App from './App';

it('Displays the header in the document', () => {
  render(<App />);
  const firstCardElement = screen.getByText(/Credit Cards Canada/i);
  expect(firstCardElement).toBeInTheDocument();
});
