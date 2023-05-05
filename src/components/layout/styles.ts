import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const Navigation = styled.div`
  width: 3.75rem;
  height: calc(100vh - 1.25rem);
  margin: 0.625rem;
  background-color: #0e1420;
  border-radius: 0.75rem;
`;

export const Content = styled.div`
  width: calc(100vw - 4.375rem);
  max-height: 100vh;
  overflow: auto;
`;
