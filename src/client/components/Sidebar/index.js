import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import CreateProjectIcon from '../CreateProjectIcon';
import ImportProjectIcon from '../ImportProjectIcon';

import './styles.css';

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') setIsVisible(true);
  }, []);
  console.log(location.pathname);

  return (
    <Fragment>
      {isVisible && (
        <SidebarContainer>
          <SidebarItem>
            <CreateProjectIcon />
            <ImportProjectIcon />
          </SidebarItem>
        </SidebarContainer>
      )}
    </Fragment>
  );
};

const SidebarContainer = styled.div`
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
`;

const SidebarItem = styled.div``;

export default Sidebar;
