import React from 'react'
import '../Styles/Navbar.css'
const Navbar = () => {
  console.log("Done")
  return (
    <div className='navbar-conatiner'>
      <h1>Shivam Gupta</h1>
      <a href='./Shivam_Gupta.pdf' download="Shivam_Gupta.pdf" className='btn-1'  >
        Download Resume
      </a>
    </div>
  )
}

export default Navbar