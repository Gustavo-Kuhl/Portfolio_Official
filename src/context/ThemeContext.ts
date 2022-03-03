import { createContext } from "react";

interface IThemeContext {
  switchTheme: boolean,
   setSwitchTheme: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultState = {
  switchTheme: false,
  setSwitchTheme: () => {}
}

export const ThemeContext = createContext<IThemeContext>(defaultState)