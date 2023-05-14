import styled from 'styled-components';
import Typography from '../typography';
import { theme } from '@/styles/theme';

interface ButtonTypes {
  variant: string;
  // container, outlined, text
  color?: string;
  //primary, secondary
  icon?: boolean;
  // icon/regular
}

export function colorDefine(color: string) {
  switch (color) {
    case 'primary':
      return theme.primary;
    case 'secondary':
      return theme.secondary;
    default:
      return 'transparent';
  }
}

export const Button = styled(Typography.button)<ButtonTypes>`
  width: ${({ icon }) => (icon ? '2.125rem' : 'auto')};
  height: 2.125rem;
  background-color: ${({ disabled }) =>
    disabled
      ? ({ theme }) => theme.border
      : ({ color }) => colorDefine(color!)};
  appearance: none;
  border: 1px solid;
  border-color: ${({ disabled }) =>
    disabled
      ? ({ theme }) => theme.border
      : ({ color }) => colorDefine(color!)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: ${({ icon }) => (icon ? '0.25rem' : '0.3125rem 0.625rem')};
  display: flex;
  align-items: center;
  appearance: none;
  justify-content: ${({ icon }) => (icon ? 'center' : 'start')};
  gap: 0.3125rem;
  color: ${({ theme }) => theme.secondaryText};
  border-radius: 0.5rem;
  &:hover,
  &:focus {
    background-color: ${({ disabled }) =>
      disabled ? ({ theme }) => theme.border : ({ theme }) => theme.hover};
    color: ${({ disabled }) =>
      disabled
        ? ({ theme }) => theme.secondaryText
        : ({ theme }) => theme.primaryText};
  }
`;
