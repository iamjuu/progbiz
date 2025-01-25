import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About'

const App = () => {
  return (
 <>
  <div className="min-h-screen bg-white">
 
   
<Navbar/>
 <Hero/>
 <About/>
     
    </div>
 </>
  )
}

export default App
