import React from 'react';
import styled from 'styled-components/macro';
import DesktopHeader from './header/DesktopHeader';

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const MainContent = styled.div`
  height: 100%;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <MainContainer id="main-container">
      <DesktopHeader />
      <MainContent>{children}</MainContent>
    </MainContainer>
  );
};

export default Layout;
