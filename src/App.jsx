import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import OrderDetails from './components/Pages/OrderDetails';
import Navbar from './components/CommonComponents/Navbar';
import Footer from './components/CommonComponents/Footer';
import Checkout from './components/Pages/Checkout';
import Faqs from './components/Pages/Faqs';
import OrderSuccess from './components/Pages/OrderSuccess';
import TrackRepair from './components/Pages/TrackRepair';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Settings from './components/Pages/Settings';


function App() {
  return (
    <div >
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/order" element={<OrderDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/success" element={<OrderSuccess />} />
      <Route path="/trackrepair" element={<TrackRepair />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
