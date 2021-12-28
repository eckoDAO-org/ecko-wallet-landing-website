import React from 'react';
import styled from 'styled-components/macro';
import IntroductionSection from './IntroductionSection';
import BannerContainer from './BannerContainer';
import UxContainer from './UxContainer';
import UiContainer from './UiContainer';
import CommunityTestingContainer from './CommunityTestingContainer';


const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  /* padding: 30px; */
  padding-bottom: 0;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 0;
  }
  /* overflow: auto; */
`;

const MainContainer = () => {
  return (
    <OuterContainer>
      <IntroductionSection />
      <UxContainer/>
      <BannerContainer/>
      <UiContainer/>
      <CommunityTestingContainer/>
    </OuterContainer>
  );
};

export default MainContainer;
