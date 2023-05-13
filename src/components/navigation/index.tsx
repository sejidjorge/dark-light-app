'use client';
import {
  mdiAccountGroupOutline,
  mdiChartBarStacked,
  mdiClose,
  mdiMenu,
} from '@mdi/js';
import Icon from '@mdi/react';
import { ReactNode, useState } from 'react';
import { Button } from '../buttons';
import { Container, ContainerNavigation, Content, Nav } from './styles';
import { useRouter } from 'next/navigation';

interface NavagationProps {
  children: ReactNode;
}

export default function Navigation({ children }: NavagationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const routes = [
    {
      label: 'Dashboard',
      link: '/dashboard',
      icon: mdiChartBarStacked,
    },
    {
      label: 'Usuários',
      link: '/users',
      icon: mdiAccountGroupOutline,
    },
  ];
  return (
    <Container>
      <Content open={isOpen}>{children}</Content>
      <Nav open={isOpen}>
        <Button
          variant="text"
          color="secondary"
          icon
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          {isOpen ? (
            <Icon path={mdiClose} size={1} />
          ) : (
            <Icon path={mdiMenu} size={1} />
          )}
        </Button>
        <ContainerNavigation open={isOpen}>
          {routes.map(({ label, link, icon }) => (
            <Button
              key={label}
              variant="text"
              color="primary"
              icon={!isOpen}
              onClick={() => router.push(link)}
            >
              <Icon path={icon} size={1} />
              {isOpen && `${label}`}
            </Button>
          ))}
        </ContainerNavigation>
      </Nav>
    </Container>
  );
}
