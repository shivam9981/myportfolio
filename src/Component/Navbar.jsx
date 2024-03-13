import React from 'react'
import '../Styles/Navbar.css'
const Navbar = () => {

  
  return (
    <div className='navbar-conatiner'>
      <h1>Shivam Gupta</h1>
      <button className='btn' >
      <a className='btns' href='./Shivam_Gupta_Resume.pdf' download="Shivam_Gupta_Resume.pdf">Download Resume</a>
      </button>
    </div>
  )
}

export default Navbar