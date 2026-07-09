import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00e5ff',
      light: '#6effff',
      dark: '#00b2cc',
      contrastText: '#000000',
    },
    secondary: {
      main: '#00ff88',
      light: '#69ffa8',
      dark: '#00cb5a',
      contrastText: '#000000',
    },
    background: {
      default: '#050a0e',
      paper: '#0d1117',
    },
    text: {
      primary: '#e0e6ed',
      secondary: '#8b949e',
    },
    divider: 'rgba(0, 229, 255, 0.12)',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.01em' },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': { scrollbarWidth: 'thin', scrollbarColor: '#00e5ff #0d1117' },
        '*::-webkit-scrollbar': { width: '6px' },
        '*::-webkit-scrollbar-track': { background: '#0d1117' },
        '*::-webkit-scrollbar-thumb': { background: '#00e5ff', borderRadius: '3px' },
        html: { scrollBehavior: 'smooth' },
        body: { cursor: 'none' },
        'a, button, [role="button"]': { cursor: 'none' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(0, 229, 255, 0.1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
  },
});

export default theme;
