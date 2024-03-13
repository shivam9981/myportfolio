import React from 'react'
import '../Styles/Home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typewriter from 'typewriter-effect'
const Home = () => {

    

    return (
        <div className='conatiner-home'>
            <div className='inner-container'>
                <p className='name'>Shivam Gupta</p>
                <h1 className='h1'>I'am a
                   <Typewriter 
                    options={{
                        autoStart:true,
                        loop:true,
                        delay:50,
                        strings:[
                            'Full Stack Developer',
                            'Web & mobile App ',
                            'VR Developer',
                            'Unity Developer'
                        ],
                        
                    }}
                   />

                </h1>
                <p className='aboutme-home'>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>

                <div className='link-conatiner'>
                    <button className='link-btn'>
                        <LinkedInIcon />
                    </button>
                    <button className='link-btn'>
                        <GitHubIcon />
                    </button>
                    <button className='link-btn'>
                        <FacebookIcon />
                    </button>
                    <button className='link-btn'>
                        <InstagramIcon />
                    </button>
                </div>
            </div>
            <div>
                <img className='img' src='./shivam.png' alt='Image Not Found'/>
            </div>
        </div>
    )
}

export default Home