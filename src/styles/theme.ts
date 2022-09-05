import { DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
  typography: {
    heading1: {
      size: '40px',
      lineheight: '40px'
    },
    body: {
      size: '16px',
      lineheight: '26px'
    }
  },
  palette: {
    bg: '#F8F8F8',
    primary: '#F4E041',
    secondary: '#00BDD3',
    button: {
      hover: '#FFE302',
      disabled: '#B4B4B4'
    },
    black: 'rgba(0, 0, 0, 0.87)',
    white: '#FFFFFF',
    fields: {
      border: '#D0CFCF',
      error: '#CB3D40'
    }
  },
  borderRadius: {
    buttons: '80px',
    fields: '4px',
    cards: '10px'
  }
}