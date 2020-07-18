import React, { useContext, useEffect, Fragment } from 'react';
import ProjectCard from '../../components/ProjectCard';
import { CreateProjectContext } from '../../context/createProjectContext';
import { ImportProjectContext } from '../../context/importProjectContext';
import CreateProjectModal from '../../components/CreateProjectModal';
import ImportProjectModal from '../../components/ImportProjectModal';
import { SidebarContext } from '../../context/sidebarContext';
import HomeSidebar from '../../components/HomeSidebar';

import './styles.css';

const Home = () => {
  const { openSidebar, closeSidebar } = useContext(SidebarContext);
  const { isCreateProjectModalVisible } = useContext(
    CreateProjectContext,
  ).modal;
  const { isImportProjectModalVisible } = useContext(
    ImportProjectContext,
  ).modal;

  useEffect(() => {
    openSidebar();

    return () => {
      closeSidebar();
    };
  }, []);

  return (
    <Fragment>
      <HomeSidebar />
      <div className="project-card-container">
        {isCreateProjectModalVisible && <CreateProjectModal />}
        {isImportProjectModalVisible && <ImportProjectModal />}
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Fragment>
  );
};

export default Home;
