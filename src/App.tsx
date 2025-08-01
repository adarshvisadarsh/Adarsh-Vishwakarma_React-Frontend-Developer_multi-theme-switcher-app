import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useThemeContext } from './context/ThemeContext';
import GlobalStyle from './styles/GlobalStyle';
import Router from './router';

function ThemedApp() {
  const { theme } = useThemeContext();

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </StyledThemeProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </BrowserRouter>
  );
}
