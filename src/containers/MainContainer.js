import React from 'react';
import styled from 'styled-components/macro';
import IntroductionSection from './IntroductionSection';
import BannerContainer from './BannerContainer';
import UxContainer from './UxContainer';
import UiContainer from './UiContainer';
import CommunityTestingContainer from './CommunityTestingContainer';
import ContactUsContainer from './ContactUsContainer';
import MultiTokenEcosystemContainer from './MultiTokenEcosystemContainer';


const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  padding-bottom: 0;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 0;
  }
`;

const MainContainer = () => {
  return (
    <OuterContainer>
      <IntroductionSection />
      <UxContainer/>
      <BannerContainer/>
      <UiContainer/>
      <CommunityTestingContainer/>
      <MultiTokenEcosystemContainer/>
      <ContactUsContainer />
    </OuterContainer>
  );
};

export default MainContainer;
