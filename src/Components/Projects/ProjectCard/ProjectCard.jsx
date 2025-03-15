import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ details }) => {
  return (
    <div className="project-card">
        <h6>{details.title}</h6>

        <div className="project-dur">{details.date}</div>

        <ul>
          {details.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
    </div>
  );
};

export default ProjectCard;
