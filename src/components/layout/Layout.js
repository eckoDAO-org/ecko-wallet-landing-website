import React from 'react';
import styled from 'styled-components/macro';
import background from '../../assets/images/png/background.png';
import useWindowSize from '../../hooks/useWindowSize';

import Header from './header/Header';

const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;

const MainContent = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = ({ children }) => {
  const [_, height] = useWindowSize();
  return (
    <MainContainer id="main-container" style={{ height }}>
      <Header />
      <img
        src={background}
        style={{ zIndex: -1, position: 'absolute', height: '100%', width: '100%', left: '50%', transform: 'translateX(-50%)' }}
        alt=""
      />

      <MainContent>{children}</MainContent>
    </MainContainer>
  );
};

export default Layout;
