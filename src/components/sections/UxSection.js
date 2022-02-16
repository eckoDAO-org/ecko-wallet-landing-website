import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import UxImage from '../../assets/images/png/ux-image.png';
import FlexContainer from '../shared/Container';
import Label from '../shared/Label';

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

const UxSection = () => {
  return (
    <UxMainContainer
      id="ux"
      desktopStyle={{ padding: '0 120px' }}
      desktopClassName="justify-ce align-ce"
      tabletClassName="justify-ce align-ce"
      mobileClassName="column"
      tabletStyle={{ padding: '0 56px' }}
      mobileStyle={{ padding: '0 32px' }}
    >
      <FlexContainer className="column" style={{ maxWidth: 700 }} desktopStyle={{ padding: '0 48px' }}>
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

export default UxSection;
