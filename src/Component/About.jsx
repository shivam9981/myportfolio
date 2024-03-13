import React from 'react'
import '../Styles/About.css'
const About = () => {
    return (
        <div className='conatiner-about'>
            <p className='about-para'> ABOUUT ME</p>
            <div className='inner-about'>
                <div>
                    <img src='./shivam.png'  className='img' alt='Image Not Found' />
                </div>
                <div>
                    <p className='aboutme-home'>As a recent graduate passionate about technology, I am excited to embark on a journey in the dynamic world of IT. I possess a solid foundation in computer science, with a keen interest in exploring emerging technologies and solving complex problems through innovative solutions.

                        During my academic tenure, I engaged in various projects and coursework that honed my skills in programming languages such as Python, Java, and JavaScript. Additionally, I have experience with database management systems, web development frameworks, and software engineering principles.

                        I thrive in collaborative environments and am eager to contribute my enthusiasm and fresh perspectives to your esteemed organization. With a hunger for continuous learning and a drive to excel, I am prepared to adapt to new challenges and contribute positively to your team.
                    </p>
                    <button className='btn-1'>
                        Download Resume
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About