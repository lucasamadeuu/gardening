import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors['base-background']};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.regular}, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.title}, sans-serif;
  }

  button {
    cursor: pointer;
  }
    
  ul {
    list-style: none;
  }

  li {
    list-style: none;
  }

  @media (max-width: 1366px) {
    html {
      font-size: 14px;
    }
  }
`
