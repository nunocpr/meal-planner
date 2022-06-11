import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../../App';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Router = () => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route exact path="/" element={<App />} />
    </Routes>

    <Footer />
  </BrowserRouter>
)

export default Router;