import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home'
import Recipe from '../../pages/recipe/recipe';
import CalendarPage from '../../pages/calendar/calendar-page';
import Cookbook from '../../pages/cookbook/cookbook';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/calendar" element={<CalendarPage />} />
      <Route exact path="/recipe" element={<Recipe />} />
      <Route exact path="/cookbook" element={<Cookbook />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default Router;