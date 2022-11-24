import React from 'react'
import Header from './Komponenter/Header/Header'
import Navbar from './Komponenter/Navbar/Navbar'
import './App.css'
import Blog from './Komponenter/Blog/Blog'
import Footer from './Komponenter/Footer/Footer'


const App = () => {
  return (
    <>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
          <Blog/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App