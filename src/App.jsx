import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import MainSection from './components/MainSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <MainSection cartItems={cartItems} setCartItems={setCartItems} />
      <Steps />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
