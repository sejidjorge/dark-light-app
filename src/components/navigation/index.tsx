'use client';
import {
  mdiAccountGroupOutline,
  mdiChartBarStacked,
  mdiClose,
  mdiMenu,
} from '@mdi/js';
import Icon from '@mdi/react';
import { useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';
import { Button } from '../buttons';
import { Container, ContainerNavigation, Content, Nav } from './styles';

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
          <Icon path={isOpen ? mdiClose : mdiMenu} size={0.8} />
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
              <Icon path={icon} size={0.8} />
              {isOpen && `${label}`}
            </Button>
          ))}
        </ContainerNavigation>
      </Nav>
    </Container>
  );
}
