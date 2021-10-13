import React from 'react'
import './intro.css'
const Intro = () => {
  return (
    <>
       <div className="intro">
             <div className="left">
               <div className="intro-wrapper">
                 <h2>Hello, My Name is</h2>
                 <h1>Rohit Aswal</h1>
                 <div className="title-wrapper">
                   <div className="title">
                     <div className="item">Web Developer</div>
                     <div className="item">Web Designer</div>
                     <div className="item">Content Creator</div>
                     <div className="item">Photographer</div>
                     <div className="item">SEO</div>
                   </div>
                 </div>
                 <div className="desc">
                   I am fresher looking for job oppurtunities where  my skills can be developed and utilized for the growth of an organization
                 </div>
               </div>
             </div>
             <div className="right">
               <div className="bg"></div>
               <img src="images/img2.png" alt="pic" className="img-1" />
             </div>
       </div>
    </>
  )
}

export default Intro
