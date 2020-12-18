import { render, screen } from '@testing-library/react';
import Home from './Home';

test('Renders h1 tag', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home Page/i);
  expect(linkElement).toBeInTheDocument();
});