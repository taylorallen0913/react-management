import React, { useContext } from 'react';
import { ImportProjectContext } from '../../context/importProjectContext';
import { CreateProjectContext } from '../../context/createProjectContext';
import Import from '../../assets/icons/import.svg';

import './styles.css';

const ImportProjectIcon = () => {
  const { openImportProjectModal } = useContext(ImportProjectContext).modal;
  const { closeCreateProjectModal } = useContext(CreateProjectContext).modal;

  const onToggle = () => {
    closeCreateProjectModal();
    openImportProjectModal();
  };

  return (
    <div
      className="import-project-icon-container border-dashed border-2 border-gray-600"
      onClick={onToggle}
    >
      <img
        className="import-project-icon"
        src={Import}
        alt="Import Project Icon"
      />
    </div>
  );
};

export default ImportProjectIcon;
