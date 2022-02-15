import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import UiImage from '../assets/images/png/ui-image.png';
import FlexContainer from '../components/shared/Container';
import Label from '../components/shared/Label';

const UiMainContainer = styled(FlexContainer)`
  padding: 0 120px;
  margin-top: 72px;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    padding: 16px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
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

const UiContainer = () => {
  return (
    <UiMainContainer id="ui" className="image-render column align-ce">
      <Label className="text-center" fontSize={32} fontFamily="syncopate" style={{ marginBottom: 16 }}>
        X-Wallet Functionality
      </Label>
      <Label className="text-center">
        Within X-Wallet users will be able to send and receive assets, execute cross-chain transfers, view transactions, interact with Dapps, and
        more. X-Wallet will provide everything a user needs to interact with Dapps, with more features being added as Kadena evolves.{' '}
      </Label>
      <Image src={UiImage} alt="ux" size="small" />
      <Label className="text-center" fontFamily="syncopate" fontSize={32} style={{ marginBottom: 16 }}>
        Secure and Compatible
      </Label>
      <Label className="text-center">
        By default, all accounts created within X-Wallet are k:accounts.
        <br /> X-Wallet is compatible with both Chrome and Brave.
        <br /> X-Wallet generates secure keys and passwords that only YOU have access to.
        <br /> Your keys, your Crypto.
      </Label>
    </UiMainContainer>
  );
};

export default UiContainer;
