import React from 'react';
import styled from 'styled-components';
import { PROJECTS } from '../../constants/projects';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import ProjectButton from './ProjectButton';
import partnerBackground from '../../assets/images/backgrounds/partners_background.png';
import useWindowSize from '../../hooks/useWindowSize';

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
const FlexRow = styled(FlexContainer)`
  justify-content: center;
  align-items: center;
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
      <FlexContainer gap={getGap(8, 24, 32)} className="column w-100">
        {width < 880 ? (
          <>
            <FlexRow gap={10}>
              <ProjectButton token={PROJECTS.KADDEX} />
              <ProjectButton token={PROJECTS.MOK} />
              <ProjectButton token={PROJECTS.HYPE} />
              <ProjectButton token={PROJECTS.KDSWAP} />
            </FlexRow>
            <FlexRow gap={10}>
              <ProjectButton token={PROJECTS.KDLAUNCH} />
              <ProjectButton token={PROJECTS.GALLINAS} />
              <ProjectButton token={PROJECTS.KADENA_BULLS} />
            </FlexRow>
            <FlexRow gap={10}>
              <ProjectButton token={PROJECTS.KONGS} />
              <ProjectButton token={PROJECTS.BABENA} />
              <ProjectButton token={PROJECTS.ASWAP} />
            </FlexRow>
            <FlexRow gap={10}>
              <ProjectButton token={PROJECTS.DOCUSHIELD} />
              <ProjectButton token={PROJECTS.TIMPI} />
            </FlexRow>
          </>
        ) : (
          <>
            <FlexRow gap={10}>
              <ProjectButton token={PROJECTS.KADDEX} />
              <ProjectButton token={PROJECTS.MOK} />
              <ProjectButton token={PROJECTS.HYPE} />
              <ProjectButton token={PROJECTS.KDSWAP} />
              <ProjectButton token={PROJECTS.KDLAUNCH} />
            </FlexRow>
            <FlexRow gap={10}>
              <ProjectButton token={PROJECTS.GALLINAS} />
              <ProjectButton token={PROJECTS.KADENA_BULLS} />
              <ProjectButton token={PROJECTS.KONGS} />
              <ProjectButton token={PROJECTS.BABENA} />
            </FlexRow>
            <FlexRow gap={10}>
              <ProjectButton token={PROJECTS.ASWAP} />
              <ProjectButton token={PROJECTS.DOCUSHIELD} />
              <ProjectButton token={PROJECTS.TIMPI} />
            </FlexRow>
          </>
        )}
      </FlexContainer>
    </BackgroundContainer>
  );
};

export default Projects;
