import React from 'react';
import styled from 'styled-components/macro';
// import IntroductionSection from '../components/sections/IntroductionSection';
// import BannerSection from '../components/sections/BannerSection';
// import UxSection from '../components/sections/UxSection';
// import FunctionalitiesSection from '../components/sections/FunctionalitiesSection';
// import ContactUsSection from '../components/sections/ContactUsSection';
// import MultiTokenEcosystemSection from '../components/sections/MultiTokenEcosystemSection';
// import gradientBackground from '../assets/images/shared/gradient-background-2.png';
import FlexContainer from '../components/shared/Container';
import HomeSection from '../components/sections/HomeSection';

const OuterContainer = styled(FlexContainer)`
  & > *:not(:last-child) {
    margin-bottom: 96px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    & > *:not(:last-child) {
      margin-bottom: 64px;
    }
  }
`;

const MainContainer = () => {
  return (
    <OuterContainer className="column justify-ce align-ce w-100 h-100 relative">
      <HomeSection />
      {/* <IntroductionSection />
      <UxSection />
      <BannerSection />
      <FunctionalitiesSection />
      <MultiTokenEcosystemSection />
      <img src={gradientBackground} style={{ position: 'absolute', width: '100%', bottom: 0, zIndex: -1 }} alt="" />
      <ContactUsSection /> */}
    </OuterContainer>
  );
};

export default MainContainer;
