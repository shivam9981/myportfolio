import React from 'react'
import '../Styles/Contact.css'
const Contect = () => {
  return (
    <>
      <div className='contect-conatiner'>
        <p className='p-tags-conatce'>CONTACT US</p>
        <div className='inner-contec-conatiner'>
          <div className='contact-detail'>
            <p className='contact'>9981392889</p>
            <p className='contact'>technical.shivamgupta2000@gmail.com</p>
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