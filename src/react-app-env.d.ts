/// <reference types="react-scripts" />

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      heading1: {
        size: string,
        lineheight: string 
      },
      body: {
        size: string,
        lineheight: string
      }
    },
    palette: {
      bg: string,
      primary: string,
      secondary: string,
      button: {
        hover: string,
        disabled: string
      },
      black: string,
      white: string,
      fields: {
        border: string,
        error: string
      }
    },
    borderRadius: {
      buttons: string,
      fields: string,
      cards: string
    }
  }
}