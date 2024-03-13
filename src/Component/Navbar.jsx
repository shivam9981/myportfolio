import React from 'react'
import '../Styles/Navbar.css'
import jsPDF from 'jspdf'
const Navbar = () => {
  const downloadpdf = () => {
    const doc = new jsPDF();
    doc.save("Shivam_Gupta_Resume.pdf")
  }
  console.log("done")
  return (
    <div className='navbar-conatiner'>
      <h1>Shivam Gupta</h1>
      <button className='btn ' onClick={downloadpdf} >
        Download Resume
      </button>
    </div>
  )
}

export default Navbar