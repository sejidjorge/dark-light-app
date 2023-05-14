import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Button, colorDefine } from '../components/buttons/index';
import { theme } from '@/styles/theme';

describe('Button', () => {
  it('should render the button component', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button variant="contained">Click me</Button>
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should apply correct styles when disabled', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" disabled>
          Click me
        </Button>
      </ThemeProvider>
    );
    expect(getByText('Click me')).toHaveStyle(`
      background-color: ${theme.border};
      border: 1px solid;
      border-color: ${theme.border};
      cursor: not-allowed;
      color: ${theme.secondaryText};
    `);
  });

  it('should apply correct styles when not disabled', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
          Click me
        </Button>
      </ThemeProvider>
    );
    expect(getByText('Click me')).toHaveStyle(`
      background-color: ${theme.primary};
      border: 1px solid;
      border-color: ${theme.primary};
      cursor: pointer;
      color: ${theme.secondaryText};
    `);
  });
});

describe('colorDefine', () => {
  it('should return the correct color when given "primary"', () => {
    expect(colorDefine('primary')).toBe(theme.primary);
  });

  it('should return the correct color when given "secondary"', () => {
    expect(colorDefine('secondary')).toBe(theme.secondary);
  });

  it('should return "transparent" when given an unknown color', () => {
    expect(colorDefine('unknown')).toBe('transparent');
  });
});