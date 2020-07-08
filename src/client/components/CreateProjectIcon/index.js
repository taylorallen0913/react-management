import React, { useContext } from 'react';
import { CreateProjectContext } from '../../context/createProjectContext';
import { ImportProjectContext } from '../../context/importProjectContext';

import './styles.css';

const CreateProjectIcon = () => {
  const { openCreateProjectModal } = useContext(CreateProjectContext).modal;
  const { closeImportProjectModal } = useContext(ImportProjectContext).modal;

  const onToggle = () => {
    closeImportProjectModal();
    openCreateProjectModal();
  };

  return (
    <div
      className="create-project-icon-container border-dashed border-2 border-gray-600"
      onClick={onToggle}
    >
      <h1 className="create-project-plus-sign">+</h1>
    </div>
  );
};

export default CreateProjectIcon;
