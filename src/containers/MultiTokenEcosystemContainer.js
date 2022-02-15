import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import MEImage from '../assets/images/png/multitoken_ecosystem.png';
import FlexContainer from '../components/shared/Container';
import Label from '../components/shared/Label';

const MEMainContainer = styled(FlexContainer)`
  margin-bottom: 100px;

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

const MultiTokenEcosystemContainer = () => {
  return (
    <MEMainContainer
      id="multi-ecosystem"
      style={{ padding: 16, marginBottom: 100 }}
      desktopStyle={{ padding: '0 120px' }}
      tabletClassName="column"
      mobileClassName="column"
    >
      <FlexContainer
        className="column"
        gap={16}
        desktopStyle={{ paddingTop: 75 }}
        style={{ maxWidth: 700, padding: '0 68px' }}
        mobileStyle={{ padding: '0 16px' }}
      >
        <Label fontSize={32} fontFamily="syncopate">
          Multitoken Ecosystem
        </Label>
        <Label>
          In addition, users can recover Chainweaver (Kadena’s official wallet) password seed phrases, and quickly regenerate existing accounts.
          X-Wallet is the only wallet in the Kadena ecosystem that now supports all tokens on the Kadena network.
        </Label>
      </FlexContainer>
      <Image src={MEImage} alt="ux" size="small" />
    </MEMainContainer>
  );
};

export default MultiTokenEcosystemContainer;
