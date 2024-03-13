import React from 'react'
import '../Styles/Skils.css'
const Skils = () => {
    return (
        <div className='conatiner-education-skils'>
            <p className='h1-tag'>MY SKILLS</p>
            <div className='inner-conatiner-education'>
                <div className='inner-language-conatiner-education'>
                    <p className='h1-tag'>Programming Language</p>
                    <div className='languages'>
                        <div className='box-container-skils'><p>HTML</p></div>
                        <div className='box-container-skils'><p>CSS</p></div>
                        <div className='box-container-skils'><p>JAVASCRIPT</p></div>
                        <div className='box-container-skils'><p>JAVA</p></div>
                        <div className='box-container-skils'><p>PYTHON</p></div>
                        <div className='box-container-skils'><p>C#</p></div>
                    </div>
                </div>
                <div className='inner-language-conatiner-education'>
                    <p className='h1-tag'>Frameworks</p>
                    <div className='languages'>
                        <div className='box-container-skils'><p>REACTJS</p></div>
                        <div className='box-container-skils'><p>NODEJS</p></div>
                        <div className='box-container-skils'><p>ANGULAR</p></div>
                        <div className='box-container-skils'><p>NEXTJS</p></div>
                        <div className='box-container-skils'><p>DJANGO</p></div>
                        <div className='box-container-skils'><p>REACT NATIVE</p></div>
                    </div>
                </div>
                <div className='inner-language-conatiner-education'>
                    <p className='h1-tag'>Tools</p>
                    <div className='languages'>
                        <div className='box-container-skils'><p>ANDROID STUDIO</p></div>
                        <div className='box-container-skils'><p>VS CODE</p></div>
                        <div className='box-container-skils'><p>POSTMAN</p></div>
                        <div className='box-container-skils'><p>GIT</p></div>
                        <div className='box-container-skils'><p>GITHUB</p></div>
                        <div className='box-container-skils'><p>AWS</p></div>
                    </div>
                </div>
                <div className='inner-language-conatiner-education'>
                    <p className='h1-tag'>Database & Platform</p>
                    <div className='languages'>
                        <div className='box-container-skils'><p>MYSQL</p></div>
                        <div className='box-container-skils'><p>MONGODB</p></div>
                        <div className='box-container-skils'><p>FIREBASE</p></div>
                        <div className='box-container-skils'><p>WINDOWS</p></div>
                        <div className='box-container-skils'><p>LINUX</p></div>
                        <div className='box-container-skils'><p>MACOS</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skils