'use client';

import { Button } from '@/components/buttons';
import Typography from '@/components/typography';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Typography.h1>Dashboard</Typography.h1>
      <Button variant="container" color="primary">
        botão 1
      </Button>
      <Button variant="outlined" color="secondary">
        botão 1
      </Button>
      <Button variant="text" disabled={true}>
        botão 1
      </Button>
      <Button variant="text" color="primary" icon>
        b
      </Button>
    </div>
  );
}
