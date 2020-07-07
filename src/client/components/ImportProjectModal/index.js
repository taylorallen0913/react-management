import React, { useContext } from 'react';
import { ImportProjectContext } from '../../context/importProjectContext';

import './styles.css';

const ImportProjectModal = () => {
  const { closeImportProjectModal } = useContext(ImportProjectContext).modal;

  return (
    <div className="modal-container">
      <div className="modal-bg" />
      <div className="modal-content">
        <div className="card card--full-height">
          <div className="card__header modal-header-container">
            <h1 className="modal-header">Import a Project</h1>
          </div>
          <div></div>
          <div className="modal-body-container">
            <div className="card__footer">
              <div>
                <button
                  className="button button--primary button--block modal-dismiss-button"
                  onClick={closeImportProjectModal}
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

export default ImportProjectModal;
