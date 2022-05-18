import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('should render a welcome message', () => {
    render(
      <>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </>
    );
    const welcomeMessage = screen.getByText(/Welcome/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
});
