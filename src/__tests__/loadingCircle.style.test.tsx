import React from 'react';
import { render } from '@testing-library/react';
import { Center, Curve, Inner, LoadingText, PsoLoad, Straight } from '@/components/loadingCircle/styles';


describe('Loading component', () => {
  it('renders LoadingText component', () => {
    const { getByText } = render(<LoadingText>loading...</LoadingText>);
    expect(getByText('loading...')).toBeInTheDocument();
  });

  it('renders Straight component', () => {
    const { getByTestId } = render(<Straight data-testid="straight" />);
    expect(getByTestId('straight')).toBeInTheDocument();
  });

  it('renders Curve component', () => {
    const { getByTestId } = render(<Curve data-testid="curve" />);
    expect(getByTestId('curve')).toBeInTheDocument();
  });

  it('renders Center component', () => {
    const { getByTestId } = render(<Center data-testid="center" />);
    expect(getByTestId('center')).toBeInTheDocument();
  });

  it('renders Inner component', () => {
    const { getByTestId } = render(<Inner data-testid="inner" />);
    expect(getByTestId('inner')).toBeInTheDocument();
  });

  it('renders PsoLoad component', () => {
    const { getByTestId } = render(<PsoLoad data-testid="psoLoad" />);
    expect(getByTestId('psoLoad')).toBeInTheDocument();
  });
});
