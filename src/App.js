import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/auth/auth.component';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/> } />
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/auth' element={<AuthPage/>} />
      </Routes>
    </Router>
    
    
  );
}

export default App;
