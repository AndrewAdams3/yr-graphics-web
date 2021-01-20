import { extendTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  green: {
    50: '#e2fbed',
    100: '#c2ebd4',
    200: '#9fddb9',
    300: '#7ccf9e',
    400: '#58c184',
    500: '#3ea76a',
    600: '#2e8251',
    700: '#1f5d3a',
    800: '#0f3921',
    900: '#001506',
  },
  brown: {
    50: '#ffeee2',
    100: '#f3d0bf',
    200: '#e5b299',
    300: '#d99473',
    400: '#cd754c',
    500: '#b35c32',
    600: '#8c4726',
    700: '#65321a',
    800: '#3f1e0d',
    900: '#1c0600',
  },
  white: "white",
  whiteAlpha: {
    100: "white",
    200: "white",
    300: "white",
    400: "white",
    500: "white",
    600: "white"
  }
}
export default extendTheme({ colors })