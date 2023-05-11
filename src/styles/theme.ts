import { DefaultTheme } from 'styled-components';
import { breakpoints } from './breakpoints';

export const defaultTheme: DefaultTheme = {
  background: '#30373f',
  primary: '#0e1420',
  primaryText: '#f7fafc',
  secondary: '#111926',
  secondaryText: '#a1a6ad',
  hover: '#222836',
  border: '#394049',
  info: '#5bc0de',
  error: '#d9534f',
  warning: '#f0ad4e',
  success: ' #5cb85c',
};

const theme = { ...defaultTheme, ...breakpoints };

export { theme };
