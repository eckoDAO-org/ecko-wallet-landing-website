import React from 'react';
import styled from 'styled-components/macro';
import Features from '../components/features/Features';
import Roadmap from '../components/roadmap/Roadmap';
// import IntroductionSection from '../components/sections/IntroductionSection';
// import BannerSection from '../components/sections/BannerSection';
// import UxSection from '../components/sections/UxSection';
// import FunctionalitiesSection from '../components/sections/FunctionalitiesSection';
// import ContactUsSection from '../components/sections/ContactUsSection';
// import MultiTokenEcosystemSection from '../components/sections/MultiTokenEcosystemSection';
// import gradientBackground from '../assets/images/shared/gradient-background-2.png';
import HomeSection from '../components/sections/HomeSection';
import { FlexContainer } from '../components/shared/Container';

const MainContainer = () => {
  return (
    <FlexContainer className="column">
      <HomeSection />
      <Features />
      <Roadmap />
      {/* <IntroductionSection />
      <UxSection />
      <BannerSection />
      <FunctionalitiesSection />
      <MultiTokenEcosystemSection />
      <img src={gradientBackground} style={{ position: 'absolute', width: '100%', bottom: 0, zIndex: -1 }} alt="" />
      <ContactUsSection /> */}
    </FlexContainer>
  );
};

export default MainContainer;
