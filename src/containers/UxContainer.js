import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import UxImage from '../assets/images/png/ux-image.png';
import FlexContainer from '../components/shared/Container';
import Label from '../components/shared/Label';

const UxMainContainer = styled(FlexContainer)`
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    & > * {
      align-self: self-end;
    }
    & > *:not(:last-child) {
      align-self: self-start;
    }
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    & > * {
      align-self: center;
    }
    & > *:not(:last-child) {
      align-self: center;
    }
  }

  img {
    max-width: 47%;
    max-height: 47%;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
      max-width: 340px;
      max-height: 340px;
    }
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.smallMobilePixel}px`}) {
      max-width: 280px;
      max-height: 300px;
    }
  }
`;

const UxContainer = () => {
  return (
    <UxMainContainer
      id="ux"
      desktopStyle={{ padding: '0 120px', marginTop: 100 }}
      tabletClassName="column"
      mobileClassName="column"
      tabletStyle={{ padding: 16, marginTop: 60 }}
      mobileStyle={{ marginTop: 40 }}
    >
      <FlexContainer className="column" style={{ padding: '0 68px', maxWidth: 700 }} smallMobileStyle={{ padding: '0 16px' }}>
        <Label size="big" fontFamily="syncopate" style={{ marginBottom: 16 }}>
          Improved User Experience
        </Label>
        <Label>
          X-Wallet is a new user friendly and robust Kadena native wallet that will drastically improve the easiness of DeFi operations on Kaddex
        </Label>
      </FlexContainer>
      <Image src={UxImage} alt="ux" size="small" />
    </UxMainContainer>
  );
};

export default UxContainer;
