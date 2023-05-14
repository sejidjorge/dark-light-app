'use client';

import React from 'react';
import { Center, Curve, Inner, PsoLoad, Straight } from './styles';

export default function LoadingCircle() {
  return (
    <>
      <PsoLoad>
        <Straight />
        <Curve />
        <Center />
        <Inner />
      </PsoLoad>
    </>
  );
}
