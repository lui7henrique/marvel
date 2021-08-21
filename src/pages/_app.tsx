/* eslint-disable @next/next/no-page-custom-font */
import { LightMode, DarkMode } from "@styled-icons/material"
import { Header } from "components/Header"
import { AppProps } from "next/app"
import Head from "next/head"
import NextNprogress from "nextjs-progressbar"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles, darkTheme, lightTheme, Switch } from "styles/global"

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <>
      <Head>
        <title>Marvel Characters</title>
        <link rel="shortcut icon" href="/img/favicon.png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#BE0000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <NextNprogress
          color="#BE0000"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showOnShallow={true}
        />
        <GlobalStyles />
        <Switch onClick={themeToggler}>
          {theme === "light" ? <LightMode size={20} /> : <DarkMode size={20} />}
        </Switch>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
