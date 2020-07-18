import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarVisibility } from '../../redux/actions/sidebarActions';
import ProjectCard from '../../components/ProjectCard';
import CreateProjectModal from '../../components/CreateProjectModal';
import ImportProjectModal from '../../components/ImportProjectModal';
import HomeSidebar from '../../components/HomeSidebar';

import './styles.css';

const Home = () => {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector((state) => state.sidebar.isVisible);
  const isCreateProjectModalVisible = useSelector(
    (state) => state.modal.createProjectModal.isVisible,
  );
  const isImportProjectModalVisible = useSelector(
    (state) => state.modal.importProjectModal.isVisible,
  );

  useEffect(() => {
    // Open home sidebar on mount
    dispatch(setSidebarVisibility(true));

    return () => {
      // Close home sidebar on cleanup
      dispatch(setSidebarVisibility(false));
    };
  }, []);

  return (
    <Fragment>
      {sidebarStatus === true && <HomeSidebar />}
      <div className="project-card-container">
        {isCreateProjectModalVisible === true && <CreateProjectModal />}
        {isImportProjectModalVisible === true && <ImportProjectModal />}
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
