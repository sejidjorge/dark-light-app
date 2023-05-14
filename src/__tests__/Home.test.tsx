import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import React from 'react';

describe('Home', () => {
  it('should render loading text', () => {
    render(<Home />);
    const loadingText = screen.getByText('Carregando...');

    expect(loadingText).toBeInTheDocument();
  });
});
