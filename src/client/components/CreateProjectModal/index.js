import React, { useContext } from 'react';
import { CreateProjectContext } from '../../context/createProjectContext';
import { ImportProjectContext } from '../../context/importProjectContext';

import './styles.css';

const CreateProjectModal = () => {
  const { closeCreateProjectModal } = useContext(CreateProjectContext).modal;
  const { openImportProjectModal } = useContext(ImportProjectContext).modal;

  return (
    <div className="modal-container">
      <div className="modal-bg" />
      <div className="modal-content">
        <div className="card card--full-height">
          <div className="card__header modal-header-container">
            <h1 className="modal-header">Create a Project</h1>
          </div>
          <div></div>
          <div className="modal-body-container">
            <div className="card__footer">
              <div>
                <h1 style={{ textAlign: 'center' }}>
                  Already have a project?
                  <a
                    className="import-project-link"
                    onClick={() => {
                      closeCreateProjectModal();
                      openImportProjectModal();
                    }}
                  >
                    {' '}
                    Import it
                  </a>
                </h1>
                <button
                  className="button button--primary button--block modal-dismiss-button"
                  onClick={closeCreateProjectModal}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
