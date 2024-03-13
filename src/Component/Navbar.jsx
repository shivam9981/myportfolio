import React from 'react'
import '../Styles/Navbar.css'
const Navbar = () => {

  const url = "http://localhost:3000/Shivam_Gupta_Resume.pdf"
  const downloadfile = (url) => {

    const filename = url.split("/").pop()
    const atag = document.createElement("a");
    atag.href = url;
    atag.setAttribute("Download", filename)
    document.body.appendChild(atag);
    atag.click();
    atag.click();

  }
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