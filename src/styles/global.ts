import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        appearance: none;
        font-family: var(--font-roboto), sans-serif;
        transition: all 0.6s linear;
    }
    body {
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        background-color: ${({ theme }) => theme.background};
        }
`;

export default GlobalStyle;
