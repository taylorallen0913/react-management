import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setCreateProjectModalVisiblilty,
  setImportProjectModalVisiblilty,
} from '../../redux/actions/modalReducer';

import './styles.css';

const CreateProjectIcon = () => {
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(setImportProjectModalVisiblilty(false));
    dispatch(setCreateProjectModalVisiblilty(true));
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
