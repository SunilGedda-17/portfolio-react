import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Project from './Components/Projects/Project';
import ContactMe from './Components/ContactMe/ContactMe';


 function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills/>
        <Project/>
        <ContactMe />
      </div>
    </>
  )
}
export default App;