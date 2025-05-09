import React from 'react'
import logo from "../assets/logo192.png"

const Header = () => {
  return (
   <header  className='quiz-title'>
        <img src={logo} alt="React logo" className='react-logo'/>
        <h1>The React Quiz</h1>
   </header>

   
  )
}

export default Header