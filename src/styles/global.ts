import styled, { createGlobalStyle } from "styled-components"

export const lightTheme = {
  background: "#FFFFFF",
  primary: "#E62429",
  shape: "#121214",
  text: "#121214",
  title: "#FFFFFF",
  subtitle: "#BBBBBB"
}

export const darkTheme = {
  background: "#121214",
  primary: "#E62429",
  shape: "#1E1E1E",
  text: "#FFFFFF",
  title: "#FFFFFF",
  subtitle: "#BBBBBB"
}

export type MyProps = {
  theme: typeof lightTheme
}

export const GlobalStyles = createGlobalStyle<MyProps>`
  :root {
    --background: ${(props) => props.theme.background};
    --primary: ${({ theme }) => theme.primary};
    --shape: ${({ theme }) => theme.shape};
    --text: ${({ theme }) => theme.text};
    --title: ${({ theme }) => theme.title};
    --subtitle: ${({ theme }) => theme.subtitle};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    @media (max-width: 1080px) {
    html {
      font-size: 93.75%; //15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; //14px
    }
  }


  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  button {
    border: none;
    outline: none;
    background-color: var(--primary);
    color: var(--title);
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`

export const Switch = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 1rem;
  padding: 1rem;
  background: var(--shape);
  border-radius: 50%;

  cursor: pointer;
  z-index: 1100;

  svg {
    color: var(--primary);
  }
`
