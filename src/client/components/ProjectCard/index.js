import React from 'react';
import Biohazard from '../../assets/icons/biohazard.svg';

import './styles.css';

const ProjectCard = () => {
  return (
    <div className="card project-card">
      <div className="card__header">
        <h3 className="project-card-header">Project title goes here</h3>
      </div>
      <div className="card__body">
        <img className="project-card-icon" src={Biohazard} alt="Project Icon" />
      </div>
      <div className="card__footer">
        <button className="button button--primary button--block">
          Open Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
