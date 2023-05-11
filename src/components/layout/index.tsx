import { mdiClose, mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import { ReactNode, useState } from 'react';
import { Button } from '../buttons';
import { Container, ContainerNavigation, Content, Navigation } from './styles';

interface layoutProps {
  children: ReactNode;
}

export default function Layout({ children }: layoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Content open={isOpen}>{children}</Content>
      <Navigation open={isOpen}>
        <Button
          variant="text"
          color="secondary"
          icon
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          {isOpen ? (
            <Icon path={mdiClose} size={2} />
          ) : (
            <Icon path={mdiMenu} size={2} />
          )}
        </Button>
        <ContainerNavigation open={isOpen}>
          <Button variant="text" color="primary" icon={!isOpen}>
            a
          </Button>
        </ContainerNavigation>
      </Navigation>
    </Container>
  );
}
