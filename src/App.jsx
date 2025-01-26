import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './pages/About';
import Service from './pages/Service';
import Achiement from './pages/Achievment';
import Product from './pages/Product';
import Testmorial from './pages/Testmonial';
import Logos from './pages/Logos';
import Form from './pages/form';
import News from './pages/News';
import Footer from './components/Footer';
import Loader from './common/loader';

const App = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1700);


    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> 
      ) : (
        <div className="min-h-screen  overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Achiement />
        <Product />
        <Testmorial />
        <Logos />
        <Form />
        <News />
        <Footer />
      </div>
      
      )}
    </>
  );
};

export default App;
