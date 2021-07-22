import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    *:focus {
        outline: none;
    }

`

export default GlobalStyle
