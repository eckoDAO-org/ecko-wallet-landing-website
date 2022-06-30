import React from 'react';
import styled from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import DownloadBanner from './DownloadBanner';
import DownloadSection from './DownloadSection';
import ReviewCarousel from './ReviewCarousel';

const BackgroundContainer = styled(FlexContainer)`
  background: transparent #20264e 0% 0% no-repeat padding-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: -50px;
`;

const Analytics = () => {
  const [width] = useWindowSize();

  const getGap = (mobile, tablet, desktop) => {
    if (width < 880) return mobile;
    else if (width > 880 && width < 1280) return tablet;
    else return desktop;
  };
  return (
    <BackgroundContainer
      id="analytics"
      gap={getGap(36, 36, 72)}
      className="column h-100 w-100 align-ce justify-ce"
      mobileStyle={{ paddingBottom: '130px' }}
      tabletStyle={{ paddingBottom: '130px' }}
      desktopStyle={{ paddingBottom: '170px' }}
    >
      <ReviewCarousel />
      <DownloadBanner />
      <DownloadSection />
    </BackgroundContainer>
  );
};

export default Analytics;
