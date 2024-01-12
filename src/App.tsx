import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />

      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
