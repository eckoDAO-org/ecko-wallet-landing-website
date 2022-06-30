import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../shared/Container';
import gradientBackground from '../../assets/images/features/gradient_background.png';
import HandPhone from './HandPhone';
import FeaturesGrid from './FeaturesGrid';

const FeaturesWrapper = styled(FlexContainer)`
  background: ${({ theme: { colors } }) => colors.background};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  background-image: ${`url(${gradientBackground})`};
  padding: 120px 0px;
  border-radius: 40px;
  z-index: 1;
  box-shadow: 0px 0px 99px #0d0e2699;

  /* padding-bottom: 90px; */

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
    padding: 80px 0px 0px;
  }
`;

const Features = () => {
  return (
    <FeaturesWrapper gap={50} id="features" mobileClassName="column" tabletClassName="column">
      <FeaturesGrid />
      <HandPhone />
    </FeaturesWrapper>
  );
};

export default Features;
