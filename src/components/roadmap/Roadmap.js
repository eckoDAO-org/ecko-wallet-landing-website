/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import backgroundroadmap from '../../assets/images/roadmap/roadmap-background.png';
import { R_2022 } from '../../constants/roadmaps';
import theme from '../../styles/theme';
import XWalletRoadmap2022 from './desktop-roadmaps/XWalletRoadmap2022';
import XWalletMobileRoadmap2022 from './mobile-roadmaps/XWalletMobileRoadmap2022';

const RoadmapWrapper = styled(FlexContainer)`
  background: #101123;
  border-radius: 60px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  background-image: ${`url(${backgroundroadmap})`};
  border-radius: 40px;
  padding-top: 100px;
  padding-bottom: 90px;
  box-shadow: 0px 0px 99px #0d0e2699;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
    padding: 80px 0px;
  }
`;

const RoadmapContainer = styled(FlexContainer)`
  width: 100%;
  transition: transform 0.5s;
  transform: ${({ translateXRoadmap }) => `translateX(${-translateXRoadmap}px)`};
  @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel}px`}) {
    & > *:first-child {
      margin-left: 90px;
    }
  }

  .roadmap-desktop {
    min-width: 100%;
    max-width: 100%;
    height: auto;
  }
`;
const KaddexRoadmapContainer = styled(FlexContainer)`
  width: 100%;

  .roadmap-desktop {
    min-width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

const Roadmap = () => {
  const [width] = useWindowSize();
  const TRANSLATE_X_OFFSET = width <= theme.mediaQueries.mobilePixel ? 50 : 64;
  const [, setTranslateX] = useState(`${TRANSLATE_X_OFFSET}px`);
  // const [translateXRoadmap, setTranslateXRoadmap] = useState(0);
  const translateXRoadmap = 0;

  // const [selectedRoadmapId, setSelectedRoadmapId] = useState(R_2022.id);
  const selectedRoadmapId = R_2022.id;

  const roadmapsContainer = document.getElementById('roadmaps-container');
  useEffect(() => {
    const roadmap = document.getElementById(`roadmap-${selectedRoadmapId}`);

    if (roadmapsContainer && roadmap) {
      //   setTranslateXRoadmap(roadmap.offsetLeft);
      //   if (selectedRoadmapId === R_2021.id) {
      //     setTranslateX(`calc(50% - ${TRANSLATE_X_OFFSET}px)`);
      //   } else if (selectedRoadmapId === R_ONGOING.id) {
      //     setTranslateX(`calc(-50% - ${TRANSLATE_X_OFFSET}px)`);
      //   } else {
      setTranslateX(`-${TRANSLATE_X_OFFSET}px`);
      //   }
    }
  }, [selectedRoadmapId, roadmapsContainer]);

  return (
    <RoadmapWrapper id="roadmap" gap={50} className="column scroll-mt relative z1" desktopPixel={1460}>
      <FlexContainer className="w-100 justify-sb">
        <Label size="big" color="white" fontFamily="syncopate" style={{ marginLeft: 90 }} mobileStyle={{ marginLeft: 50 }}>
          Roadmap
        </Label>
      </FlexContainer>

      <RoadmapContainer id="roadmaps-container" style={{ width }} mobileStyle={{ minHeight: 600 }} translateXRoadmap={translateXRoadmap}>
        <KaddexRoadmapContainer style={{ width }} id={`roadmap-${R_2022.id}`}>
          {width >= theme.mediaQueries.mobilePixel ? (
            <XWalletRoadmap2022 className="roadmap-desktop" />
          ) : (
            <XWalletMobileRoadmap2022 color="primary" />
          )}
        </KaddexRoadmapContainer>
      </RoadmapContainer>

      {/* TAB WITH THE ROADMAP YEAR - USE WHEN THE ROADMAP HAS MORE YEAR */}

      {/* {width >= theme.mediaQueries.mobilePixel && (
        <RoadmapTabs
          style={{ marginTop: 20 }}
          selectedRoadmapId={selectedRoadmapId}
          setSelectedRoadmapId={setSelectedRoadmapId}
          translateX={translateX}
        />
      )} */}
    </RoadmapWrapper>
  );
};

export default Roadmap;
