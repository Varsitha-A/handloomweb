import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from './CartContext';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Forget from './pages/Forget';
import Men from './pages/Men';
import Women from './pages/Women';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <div className="page-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forget" element={<Forget />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;