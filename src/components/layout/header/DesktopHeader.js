import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { KaddexLetterLogo, KaddexLogo } from '../../../assets';
import useWindowSize from '../../../hooks/useWindowSize';
import { ROUTE_INDEX } from '../../../router/routes';
import HeaderItem from '../../../shared/HeaderItem';
import theme from '../../../styles/theme';
import RightHeaderItems from './RightHeaderItems';

const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  min-height: ${({ theme: { header } }) => `${header.height}px`};
  width: 100%;
  padding: 2em 5em;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 0 1.5em;
  }
  z-index: 1000;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  & > *:not(:last-child) {
    margin-right: 25px;
  }
`;

const RightContainer = styled.div`
  display: flex;
`;

const DesktopHeader = ({ className, menuWithMarginBottom }) => {
  const history = useHistory();
  const [width] = useWindowSize();


  return (
    <Container id='header' className={className}>
      <LeftContainer>
        {
          width <= theme.mediaQueries.mobilePixel ?
          <KaddexLetterLogo
          style={{ cursor: 'pointer' }}
          onClick={() => history.push(ROUTE_INDEX)}
        /> :   <KaddexLogo
        style={{ cursor: 'pointer' }}
        onClick={() => history.push(ROUTE_INDEX)}
      />
        }
            {/* <HeaderItem
        style={{ marginRight: 24 }}
        className='mobile-none'
        href='/how-to-install'
      >
        How to install
      </HeaderItem> */}
      </LeftContainer>
      <RightContainer>
        <RightHeaderItems
          pact={[]}
          menuWithMarginBottom={menuWithMarginBottom}
        />
      </RightContainer>
    </Container>
  );
};

export default DesktopHeader;
