import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #FFFFFF;
    --primary: #BE0000;
    --shape: #151515;
    --text: #151515;
    --title: #FFFFFF;
    --subtitle: #BBBBBB;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--background);
    color: var(--text)
  }
`
export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`
