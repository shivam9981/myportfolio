import React from 'react'
import '../Styles/Home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typewriter from 'typewriter-effect'
const Home = () => {

    
console.log("Done")
    return (
        <div className='conatiner-home'>
            <div className='inner-container'>
                <p className='name'>Shivam Gupta</p>
                <h1 className='h1'>I'm a
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
            <div>
                <img className='img' src='./shivam.png' alt='Image Not Found'/>
            </div>
        </div>
    )
}

export default Home