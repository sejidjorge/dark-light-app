import styled, { keyframes } from 'styled-components';
import Typography from '../typography';

const ArrowSpin = keyframes`
    100% {
        transform: rotate(179deg);
    }
`;

const TextAnimate = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.4;
    }
    100% {
        opacity: 1;
    }
`;

export const LoadingText = styled(Typography.overline)`
  color: ${({ theme }) => theme.primaryText};
  text-transform: uppercase;
  animation: ${TextAnimate} 1s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite;
`;

export const Straight = styled.div`
  position: absolute;
  top: 17.5%;
  left: 17.5%;
  width: 65%;
  height: 65%;
  border-radius: 100%;
  animation: ${ArrowSpin} 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite;
  ::before {
    top: 5px;
    left: 5px;
  }
  ::after {
    bottom: 5px;
    right: 5px;
  }
  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 15%;
    border-bottom: 3px solid ${({ theme }) => theme.primaryText};
    transform: rotate(45deg);
  }
`;

export const Curve = styled.div`
  position: absolute;
  top: 17.5%;
  left: 17.5%;
  width: 65%;
  height: 65%;
  border-radius: 100%;
  animation: ${ArrowSpin} 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite;
  ::before {
    transform: rotate(-63deg) translateX(-27px) translateY(-4px);
  }
  ::after {
    bottom: 5px;
    right: 5px;
    transform: rotate(115deg) translateX(-26px) translateY(-12px);
  }
  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 45px;
    height: 10px;
    border: solid 3px transparent;
    border-top-color: ${({ theme }) => theme.primaryText};
    border-radius: 50%/10px 10px 0 0;
    z-index: 90001;
  }
`;

export const Center = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  height: 60%;
  border-radius: 100%;
  border: 3px solid ${({ theme }) => theme.primaryText};
`;

export const Inner = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  border-radius: 100%;
  animation: ${ArrowSpin} 0.85s cubic-bezier(0.2, 0.8, 0.9, 0.1) infinite
    reverse;
  ::before {
    top: 12px;
    left: 12px;
    transform: rotate(128deg);
  }
  ::after {
    bottom: 12px;
    right: 12px;
    transform: rotate(-48deg);
  }
  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-width: 11px;
    border-bottom-color: ${({ theme }) => theme.primaryText};
  }
`;

export const PsoLoad = styled.div`
  position: relative;
  margin: 1.875rem auto;
  height: 9.375rem;
  width: 9.375rem;
  transition: all 0.3s;
`;
