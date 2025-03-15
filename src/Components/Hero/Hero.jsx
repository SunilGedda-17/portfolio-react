import React from 'react'
import "./Hero.css";

const Hero = () => {
  return (
   <section className="hero-container" id='home'>
        <div className="hero-content">
            <h2>Full Stack Developer</h2>
            <p>
                i am very fasionate to lraen all these technologies
                these are very good.
            </p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src="./assets/images/react.svg" alt="none" />
                </div>
                <img src="./assets/images/owner.jpg" alt="none" />
            </div>
       

            <div>
                <div className="tech-icon">
                    <img src="./assets/images/html.webp" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/css.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/js.webp" alt="" />
                </div>
            </div>
        </div>
   </section>
  )
}

export default Hero;
