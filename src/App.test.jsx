import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  it('renders hello world message', () => {
    render(<App />);
    const helloElement = screen.getByText(/hello world/i);
    expect(helloElement).toBeInTheDocument();
  });

  it('has the correct styling classes', () => {
    render(<App />);
    const divElement = screen.getByText(/hello world/i);
    expect(divElement).toHaveClass('text-3xl', 'font-bold', 'underline', 'text-center');
  });
});
