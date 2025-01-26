import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './pages/About'
import Service from './pages/Service'
import Achiement from './pages/Achievment'
import Product from './pages/Product'
import Testmorial from './pages/Testmonial'
import Logos from './pages/Logos'
const App = () => {
  return (
 <>
  <div className="min-h-screen bg-white">
 
   
<Navbar/>
 <Hero/>
 <About/>
 <Service/>
 <Achiement/>
 <Product/>
 <Testmorial/>
 <Logos/>
     
    </div>
 </>
  )
}

export default App
