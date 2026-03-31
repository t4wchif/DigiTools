import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import MainSection from './components/MainSection';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen">
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <MainSection cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default App;
