import React from 'react';
import styled from 'styled-components/macro';
import IntroductionSection from '../components/sections/IntroductionSection';
import BannerSection from '../components/sections/BannerSection';
import UxSection from '../components/sections/UxSection';
import FunctionalitiesSection from '../components/sections/FunctionalitiesSection';
import CommunityTestingSection from '../components/sections/CommunityTestingSection';
import ContactUsSection from '../components/sections/ContactUsSection';
import MultiTokenEcosystemSection from '../components/sections/MultiTokenEcosystemSection';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  padding-bottom: 0;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 0;
  }
`;

const MainContainer = () => {
  return (
    <OuterContainer>
      <IntroductionSection />
      <UxSection />
      <BannerSection />
      <FunctionalitiesSection />
      <CommunityTestingSection />
      <MultiTokenEcosystemSection />
      <ContactUsSection />
    </OuterContainer>
  );
};

export default MainContainer;
