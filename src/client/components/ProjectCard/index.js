import React from 'react';
import Biohazard from '../../assets/icons/biohazard.svg';

import './styles.css';

const ProjectCard = () => {
  return (
    <div className="max-w-sm rounded-sm overflow-hidden shadow-lg project-card">
      <div className="card__header">
        <h3 className="project-card-header">Project title goes here</h3>
      </div>
      <div className="project-card-icon-container">
        <img className="project-card-icon" src={Biohazard} alt="Project Icon" />
      </div>
      <div className="open-project-button">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Open Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
