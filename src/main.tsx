import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import './i18n';

const defaultTheme = createTheme({
  typography: {
    fontFamily: [
      'Noto Sans Thai',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#00838f',
    },
    secondary: {
      main: '#00acc1',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
