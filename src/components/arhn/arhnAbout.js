import React from "react";
import "../../assets/css/arhnCSS/arhnAbout.css";
import img from '../../assets/images/features-split-image-01.png';
const About =()=>{
   
    return(
    <>
    <div className="divss container">   
      <h1 className="headingss">About Us</h1>
      <div className="profile__inner grid">
        <div className="profile__img"><img src={img} className="hjgf" alt=""/></div>
        <div className="profile__text">
          <p>SAEINDIA is a strategic alliance partner of SAE International registered in India as an Indian nonprofit     engineering and scientific society dedicated to the advancement of the mobility industry in India. SAEINDIA Collegiate Club of NIT Durgapur was conceived in 2007 with an idea to integrate the students of the college into the international fabric of automobile engineering, adhering to the core principles laid down by SAE International. We are a student body composed of enthusiastic individuals, who are always at a constant strife to learn. This strife is the fuel that propels us to ideate, execute, and consequently deliver a dynamic gamut of events, which receive an extensive participation from various institutes.The outputs of our efforts could be appreciated in a better way by discussing various aspects of our club. Autopia is the official Automotive Magazine of the club. The magazine comprises articles in the domains of robotics, automobile and technology, and provides a thorough analysis about the latest innovations which are on the verge of propelling mankind forward! Over 1k+ copies are circulated each year amongst students, teachers and industrialists!  BAJA organised by SAEINDIA is an off-road racing competition in which Team NDORS, the official racing team of NITD, bagged the position of 42nd this year.</p>
        </div>
      </div>
    </div>
    </>
    )
}

export default About
