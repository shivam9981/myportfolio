import React from 'react'
import '../Styles/Navbar.css'
const Navbar = () => {

  return (
    <div className='navbar-conatiner'>
      <h1>Shivam Gupta</h1>
      <a href='./Shivam_Gupta_Resume.pdf' download="Shivam_Gupta_Resume.pdf" className='btn-1'  >
        Download Resume
      </a>
    </div>
  )
}

export default Navbar