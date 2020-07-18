import React from 'react';
import styled from 'styled-components';
import CreateProjectIcon from '@components/CreateProjectIcon';
import ImportProjectIcon from '@components/ImportProjectIcon';

import './styles.css';

const HomeSidebar = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarItem>
          <CreateProjectIcon />
          <ImportProjectIcon />
        </SidebarItem>
      </SidebarContainer>
    </>
  );
};

const SidebarContainer = styled.div`
  height: 100%;
  width: 170px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
`;

const SidebarItem = styled.div``;

export default HomeSidebar;
