import React from 'react'
import '../Styles/Contact.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Contect = () => {
 
  return (

    <>
      <div className='contect-conatiner'>
        <p className='p-tags-conatce'>CONTACT US</p>
        <div className='inner-contec-conatiner'>
          <div className='contact-detail'>
            <p className='contact'>9981392889</p>
            <p className='contact'>technical.shivamgupta2000@gmail.com</p>
            <div className='link-conatiner'>
                    <a href='https://www.linkedin.com/in/shivam-gupta-370792195/' target="_blank"  className='link-btn'>
                        <LinkedInIcon />
                    </a>
                    <a href='https://github.com/shivam9981' target="_blank" className='link-btn'>
                        <GitHubIcon />
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100046248880965&sk=about' target="_blank" className='link-btn'>
                        <FacebookIcon />
                    </a>
                    <a href='https://www.instagram.com/____guptajii____/' target="_blank" className='link-btn'>
                        <InstagramIcon />
                    </a>
                </div>
          </div>
          <div className='contact-form'>
            <div className='form'>
              <label htmlFor='name' className='lab'>Name :</label>
              <input type='text' id='name' className='inp' placeholder='Enter a Name' />
            </div>
            <div className='form'>
              <label htmlFor='name' className='lab'>Email :</label>
              <input type='text' id='name' className='inp' placeholder='Enter a Email' />
            </div>
            <div className='form'>
              <label htmlFor='name' className='lab'>Mobile :</label>
              <input type='text' id='name' className='inp' placeholder='Enter a Mobile' />
            </div>
            <div className='form'>
              <label htmlFor='name' className='lab'>Message :</label>
              <textarea type='text' id='name' className='inp-area' placeholder='Enter a Message' />
            </div>
            <button className='btn-contact'>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className='footer'>
        <p>Copyright @ 2024 Shivam Gupta</p>
      </div>
    </>
  )
}

export default Contect