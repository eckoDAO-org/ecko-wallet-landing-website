import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import partnerBackground from '../../assets/images/backgrounds/partners_background.png';
import useWindowSize from '../../hooks/useWindowSize';
import allProjects from '../../assets/images/projects/all-projects.png';

const BackgroundContainer = styled(FlexContainer)`
  background: transparent linear-gradient(64deg, #00000070 0%, #0b1036 100%) 0% 0% no-repeat padding-box;
  background-image: ${`url(${partnerBackground})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 99px #0d0e2699;

  @media (min-width: 1500px) {
    padding: 120px 174px;
  }
`;

const Projects = () => {
  const [width] = useWindowSize();

  const getGap = (mobile, tablet, desktop) => {
    if (width < 880) return mobile;
    else if (width > 880 && width < 1500) return tablet;
    else return desktop;
  };

  return (
    <BackgroundContainer
      id="projects"
      gap={getGap(16, 36, 72)}
      className="column align-ce justify-ce"
      mobileStyle={{ padding: '80px 16px ' }}
      tabletStyle={{ padding: '80px 16px ' }}
      desktopStyle={{ padding: '120px 90px ' }}
    >
      <Label fontFamily="syncopate" size="big">
        INTEGRATED PROJECTS
      </Label>
      <img src={allProjects} style={{ width: '90%' }} alt="" />
    </BackgroundContainer>
  );
};

export default Projects;
