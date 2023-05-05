import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
--font-sans: 'Roboto', sans-serif;

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        appearance: none;
    }
    body {
        width: 100vw;
        min-height: 100vh;
        font: --font-mono;
    }
`

export default GlobalStyle
