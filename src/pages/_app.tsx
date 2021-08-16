import { LightMode, DarkMode } from "@styled-icons/material"
import { AppProps } from "next/app"
import Head from "next/head"
import NextNProgress from "nextjs-progressbar"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import {
  GlobalStyles,
  Container,
  darkTheme,
  lightTheme,
  Switch
} from "styles/global"

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Head>
        <title>Marvel characters</title>
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#BE0000" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <NextNProgress
        color="#BE0000"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Switch onClick={themeToggler}>
        {theme === "light" ? <LightMode size={30} /> : <DarkMode size={30} />}
      </Switch>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
