import { createMuiTheme, PaletteColorOptions, ThemeOptions } from '@material-ui/core'

const paletteColorsDark: {[key: string]: PaletteColorOptions} = {
  primary: {
    main: '#0f4c75'
  },
  secondary: {
    main: '#0f4c75'
  },
  error: {
    main: '#ff0032'
  }
}

const otherColorsDark = {
  text: {
    primary: "",
    secondary: "",
    disabled: "",
    hint: ""
  },
  background: {
    default: "",
    paper:""
  }
}

const paletteColorsLight: {[key: string]: PaletteColorOptions} = {
  primary: {
    main: '#2e7d32',
    light: "#60ad5e",
    dark: "#005005",
    contrastText: "#ffffff"
  },
  secondary: {
    main: '#4e342e',
    light: "#7b5e57",
    dark: "#260e04",
    contrastText: "#ffffff"
  },
  error: {
    main: '#ff0032'
  }
}


const otherColorsLight = {
  text: {
    primary: "#f",
    secondary: "#0",
    disabled: "#9",
    hint: "0d0d0d"
  },
  background: {
    default: "#f0fff3",
    paper:"#f0fff3"
  }
}
const options = (dark: boolean): ThemeOptions => {
  const paletteColors = dark ? paletteColorsDark : paletteColorsLight
  const otherColors = dark ? otherColorsDark : otherColorsLight
  return {
    palette: {
      type: dark ? 'dark' : 'light',
      primary: paletteColors.primary,
      secondary: paletteColors.secondary,
      error: paletteColors.error,
      ...otherColors
    // ...
    },
    overrides: {
      MuiButton: {
        root: {
          textTransform: "none"
        }
      }
    }
  }
}
export const getTheme = (prefersDark) => createMuiTheme(options(prefersDark))