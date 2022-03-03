import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    title: string,
    colors: {
      primary: string,
      secundary: string,
      background: string,
      shadow1: string,
      shadow2: string,
      text: string,
      text2: string
    }
  }
}