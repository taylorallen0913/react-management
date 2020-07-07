import React, { useContext } from 'react';
import { CreateProjectContext } from '../../context/createProjectContext';

import './styles.css';

const CreateProjectCard = () => {
  const { openCreateProjectModal } = useContext(CreateProjectContext).modal;

  return (
    <div className="card create-project-card" onClick={openCreateProjectModal}>
      <h1 className="plus-sign">+</h1>
    </div>
  );
};

export default CreateProjectCard;
