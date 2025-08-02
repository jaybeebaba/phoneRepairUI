import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import OrderDetails from './components/Pages/OrderDetails';
import Navbar from './components/CommonComponents/Navbar';
import Footer from './components/CommonComponents/Footer';
import Payment from './components/Pages/Payment';
import Faqs from './components/Pages/Faqs';


function App() {
  return (
    <div >
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/order" element={<OrderDetails />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/faqs" element={<Faqs />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
