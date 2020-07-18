import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setCreateProjectModalVisiblilty,
  setImportProjectModalVisiblilty,
} from '@actions/modalReducer';
import Import from '@icons/import.svg';

import './styles.css';

const ImportProjectIcon = () => {
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(setImportProjectModalVisiblilty(true));
    dispatch(setCreateProjectModalVisiblilty(false));
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
