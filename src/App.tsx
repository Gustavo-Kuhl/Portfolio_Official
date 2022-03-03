import React, { useState } from "react"

import { ThemeContext } from "./context/ThemeContext"

// styles
import { ThemeProvider } from "styled-components"
import light from "./styles/themes/light"
import dark from "./styles/themes/dark"
import GlobalStyle from "./styles/global"

// components
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { LeftBar } from "./components/ContactBars/LeftBar"
import { RightBar } from "./components/ContactBars/RightBar"
import { Footer } from "./components/Footer/Footer"

export const App: React.FC = () => {

  const [switchTheme, setSwitchTheme] = useState<boolean>(false)

  return (
    <ThemeContext.Provider value={{switchTheme, setSwitchTheme}}>
    <ThemeProvider theme={switchTheme === false ? dark : light}>
      <GlobalStyle />
      <LeftBar />
      <RightBar />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
    </ThemeContext.Provider>
  )
}

