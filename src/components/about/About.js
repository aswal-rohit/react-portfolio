import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
        <div className="about">
          <div className="ab-left">
            <div className="ab-card back"></div>
            <div className="ab-card">
              <img src="images/img3.jpg" alt="about" className="img-2" />
            </div>
          </div>
          <div className="ab-right">
            <h1>About me</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, debitis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo neque est, minus enim facere officiis corrupti esse non accusamus architecto nesciunt, autem sed cumque at.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eius! Tenetur debitis aut neque itaque beatae deleniti dolorem maiores. Neque vitae veniam qui veritatis sint nihil temporibus sed, natus ipsum!</p>
          </div>
        </div>
    </>
  )
}

export default About
