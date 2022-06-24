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
  /* padding-bottom: 90px; */

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
    padding: 80px 0px;
  }
`;

const Features = () => {
  return (
    <FeaturesWrapper id="features" mobileClassName="column" mobileStyle={{ borderRadius: 60 }} tabletClassName="column">
      <FeaturesGrid />
      <HandPhone />
    </FeaturesWrapper>
  );
};

export default Features;
