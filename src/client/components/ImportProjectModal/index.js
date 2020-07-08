import React, { useContext } from 'react';
import { ImportProjectContext } from '../../context/importProjectContext';

import './styles.css';

const ImportProjectModal = () => {
  const { closeImportProjectModal } = useContext(ImportProjectContext).modal;

  return (
    <div className="import-project-modal-container">
      <div className="import-project-modal-bg" />
      <div className="import-project-modal-content">
        <div className="import-project-modal-header-container">
          <h1 className="import-project-modal-header">Import a Project</h1>
        </div>
        <div className="import-project-modal-body-container">
          <div className="import-project-modal-footer">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/5 shadow-md"
              onClick={closeImportProjectModal}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportProjectModal;
