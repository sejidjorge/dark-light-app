import { ReactNode } from 'react';
import { Container, Content, Navigation } from './styles';

interface layoutProps {
  children: ReactNode;
}

export default function Layout({ children }: layoutProps) {
  return (
    <Container>
      <Content>{children}</Content>
      <Navigation />
    </Container>
  );
}
