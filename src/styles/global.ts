import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&display=swap'); */
@font-face {
    font-family: 'Roboto';
    src: url('https://fonts.googleapis.com/css2?family=Roboto');
}
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        appearance: none;
        font-family: 'Roboto', sans-serif;
    }
    body {
        width: 100vw;
        min-height: 100vh;
        background-color: #30373f;
        }
`;

export default GlobalStyle;
