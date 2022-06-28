import React from 'react';
import Features from '../components/features/Features';
import Projects from '../components/projects/Projects';
import Roadmap from '../components/roadmap/Roadmap';
import FirstSection from '../components/sections/FirstSection';
import { FlexContainer } from '../components/shared/Container';

const MainContainer = () => {
  return (
    <FlexContainer className="column">
      <FirstSection />
      <Features />
      <Projects />
      <Roadmap />
    </FlexContainer>
  );
};

export default MainContainer;
