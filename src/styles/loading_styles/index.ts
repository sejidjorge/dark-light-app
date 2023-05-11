import styled from 'styled-components';

export const ContainerBody = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardLoading = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
