import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Container fixed>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default App;
