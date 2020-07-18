import React from 'react';
import { useDispatch } from 'react-redux';
import { setCreateProjectModalVisiblilty } from '@actions/modalReducer';

import './styles.css';

const CreateProjectModal = () => {
  const dispatch = useDispatch();

  const closeCreateProjectModal = () => {
    dispatch(setCreateProjectModalVisiblilty(false));
  };

  return (
    <div className="create-project-modal-container">
      <div className="create-project-modal-bg" />
      <div className="create-project-modal-content">
        <div className="create-project-modal-header-container">
          <h1 className="create-project-modal-header">Create a Project</h1>
        </div>
        <div className="create-project-modal-body-container">
          <div className="create-project-modal-footer">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/5 shadow-md"
              onClick={closeCreateProjectModal}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
