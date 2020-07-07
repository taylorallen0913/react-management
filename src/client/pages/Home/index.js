import React, { useContext } from 'react';
import ProjectCard from '../../components/ProjectCard';
import CreateProjectCard from '../../components/CreateProjectCard';
import { CreateProjectContext } from '../../context/createProjectContext';
import { ImportProjectContext } from '../../context/importProjectContext';
import CreateProjectModal from '../../components/CreateProjectModal';
import ImportProjectModal from '../../components/ImportProjectModal';

import './styles.css';

const Home = () => {
  const { isCreateProjectModalVisible } = useContext(
    CreateProjectContext,
  ).modal;
  const { isImportProjectModalVisible } = useContext(
    ImportProjectContext,
  ).modal;

  return (
    <div className="project-card-container">
      {isCreateProjectModalVisible && <CreateProjectModal />}
      {isImportProjectModalVisible && <ImportProjectModal />}
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <CreateProjectCard />
    </div>
  );
};

export default Home;
