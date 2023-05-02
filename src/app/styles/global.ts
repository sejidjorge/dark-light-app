import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

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
