import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: auto;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.625rem;
`;

interface NavigationTypes {
  open: boolean;
}

export const Nav = styled.div<NavigationTypes>`
  width: ${({ open }) => (open ? '14.75rem' : ' 3.75rem')};
  height: calc(100vh - 1.25rem);
  background-color: ${({ theme }) => theme.primary};
  border-radius: 0.75rem;
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: ${({ open }) => (open ? 'start' : 'center')};
`;

export const Content = styled.div<NavigationTypes>`
  width: ${({ open }) =>
    open ? 'calc(100vw - 14.375rem)' : 'calc(100vw - 4.375rem)'};
  max-height: calc(100vh - 1.25rem);
  min-height: calc(100vh - 1.25rem);
`;

export const ContainerNavigation = styled.div<NavigationTypes>`
  width: ${({ open }) => (open ? '100%' : 'auto')};
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;
