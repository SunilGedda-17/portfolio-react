import React from 'react'
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero-container" id='home'>
            <div className="hero-content">
                <h2>Java Full Stack Developer</h2>
                <p>
                    I have a deep passion for mastering cutting-edge technologies in full-stack development.
                    Building scalable and efficient applications excites me, and I strive to continuously enhance my skills.
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
                        <img src="./assets/images/j.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/spring.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/mysql.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
