'use client'
import { createTheme, PaletteOptions } from "@mui/material";

const palette: PaletteOptions = {
  primary: {
    main: '#7C3AED',
  },
  secondary: {
    main: '#600DEE',
  },
  text: {
    primary: '#1E293B',
    secondary: '#6B7280',
  },
  background: {
    default: '#F3F4F6',
  },
  error: {
    main: "#AA2222"
  },
  warning: {
    main: "rgba(234, 84, 85, 1)"
  },

}

const theme = createTheme({
  palette: palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  },
  typography: {
    fontFamily: 'Sans-Serif Product Sans',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontSize: 16,
    h1: {
      fontSize: '3rem',
      color: "#1E293B",
      fontWeight: 700,
      lineHeight: '3.5rem',
      letterSpacing: '0.1rem',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: '3rem',
      letterSpacing: '0.1rem',
    },
    subtitle1: {
      fontSize: '1.5rem',
      fontWeight: 400,
      color: "#1E293B",
    }
  },
});

export default theme;