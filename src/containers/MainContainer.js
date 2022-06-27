import React from 'react';
import Features from '../components/features/Features';
import Roadmap from '../components/roadmap/Roadmap';
import FirstSection from '../components/sections/FirstSection';
import { FlexContainer } from '../components/shared/Container';

const MainContainer = () => {
  return (
    <FlexContainer className="column">
      <FirstSection />
      <Features />
      <Roadmap />
    </FlexContainer>
  );
};

export default MainContainer;
