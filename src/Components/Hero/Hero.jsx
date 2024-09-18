import React from 'react'
import "./Hero.css"
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Ariba Junejo,</span> Laravel Developer based in Pakistan.</h1>
        <p>I'm Ariba Junejo , Laravel Developer</p>
        <div className='hero-action'>
            <div className='hero-connect'>Connect With Me</div>
            <div className='hero-resume'>My Resume</div>
        </div>
    </div>
  )
}

export default Hero