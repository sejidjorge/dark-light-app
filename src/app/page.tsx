'use client';

import React from 'react';
import LoadingCircle from '@/components/loadingCircle';
import { LoadingText } from '@/components/loadingCircle/styles';
import { CardLoading, ContainerBody } from '@/styles/loading_styles';

export default function Home() {
  return (
    <ContainerBody>
      <CardLoading>
        <LoadingCircle />
        <LoadingText>Carregando...</LoadingText>
      </CardLoading>
    </ContainerBody>
  );
}
