import React, {useState, useEffect} from 'react';
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

  const [isReal, setIsReal] = useState(true);

   useEffect(() => {
    const TWO_DAYS_MS = 2 * 24 * 60 * 60 * 1000;
    const storedTime = localStorage.getItem("siteStartTime");

    if (!storedTime) {
      // First visit — store time
      localStorage.setItem("siteStartTime", Date.now());
    } else {
      const elapsed = Date.now() - parseInt(storedTime, 10);
      if (elapsed >= TWO_DAYS_MS) {
        // More than 2 days — hide content
        setIsReal(false);
      }
    }
  }, []);

  return (
   <div
      className={`transition-opacity duration-1000 ${
        isReal ? "opacity-100" : "opacity-0"
      }`}
    >
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
