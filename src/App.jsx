import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Portfolio from './components/Portfolio';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#818cf8',
      dark: '#6366f1',
      light: '#a5b4fc'
    },
    secondary: {
      main: '#f59e0b',
      dark: '#d97706',
      light: '#fbbf24'
    },
    background: {
      default: '#0f0f23',
      paper: '#1a1a2e'
    },
    text: {
      primary: '#e2e8f0',
      secondary: '#94a3b8'
    },
    grey: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a'
    }
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em'
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em'
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em'
    },
    h5: {
      fontWeight: 400,
      letterSpacing: '0em'
    },
    body1: {
      lineHeight: 1.7
    },
    body2: {
      lineHeight: 1.6
    }
  },
  spacing: 8,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)',
          border: '1px solid rgba(129, 140, 248, 0.1)',
          backdropFilter: 'blur(10px)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;