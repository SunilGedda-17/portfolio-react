import React, { useRef } from 'react';  // ✅ Add useRef here
import './Project.css';
import ProjectCard from './ProjectCard/ProjectCard';
import { PROJECTS } from '../../utils/data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
    const sliderRef = useRef();  // ✅ Now this will work correctly

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    };

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };


    return (
        <section className='project-container'id='projects'>
            <h5>Projects</h5>

            <div className="project-content">
                <div className="arrow-right" onClick={slideRight}>
                    <span className="material-symbols-outlined">chevron_right</span>
                </div>
                <div className="arrow-left" onClick={slideLeft}>
                    <span className="material-symbols-outlined">chevron_left</span>
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {PROJECTS.map((item) => (

                        <ProjectCard key={item.title} details={item} />

                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Project;
