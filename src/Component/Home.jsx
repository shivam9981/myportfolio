import React from 'react'
import '../Styles/Home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Home = () => {
    console.log("Done")
    return (
        <div className='conatiner-home'>
            <div className='inner-container'>
                <p className='name'>Shivam Gupta</p>
                <h1 className='h1'>FULL STACK DEVELOPER</h1>
                <p className='aboutme-home'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet cum omnis dignissimos, accusamus odio aliquid quidem? Placeat, ipsa illo eligendi nisi optio ab hic. Doloribus asperiores error aliquam impedit, eos repudiandae autem amet similique debitis est exercitationem perferendis modi recusandae assumenda reiciendis! Et, tempora?</p>
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
                <img className='img' src='./shivam.png' />
            </div>
        </div>
    )
}

export default Home