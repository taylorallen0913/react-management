import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import AddProjectCard from '../../components/AddProjectCard';

import './styles.css';

const Home = () => {
  return (
    <div className="project-card-container">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <AddProjectCard />
    </div>
  );
};

export default Home;
