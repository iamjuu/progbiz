import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './pages/About'
import Service from './pages/Service'

const App = () => {
  return (
 <>
  <div className="min-h-screen bg-white">
 
   
<Navbar/>
 <Hero/>
 <About/>
 <Service/>
     
    </div>
 </>
  )
}

export default App
