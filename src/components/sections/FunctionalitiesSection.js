import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import UiImage from '../../assets/images/png/ui-image.png';
import FlexContainer from '../shared/Container';
import Label from '../shared/Label';

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

const FunctionalitiesSection = () => {
  return (
    <UiMainContainer id="ui" className="image-render column align-ce">
      <Label className="text-center" size="big" fontFamily="syncopate" style={{ marginBottom: 16 }}>
        Functionalities
      </Label>
      <Label className="text-center">
        Within X-Wallet users will be able to send and receive assets, execute cross-chain transfers, <br />
        view transactions, interact with Dapps and much more.
      </Label>
      <Image src={UiImage} alt="ux" size="small" />
      <Label className="text-center" fontFamily="syncopate" size="big" style={{ marginBottom: 16 }}>
        Secure and Compatible
      </Label>
      <Label className="text-center">
        By default, all accounts created within X-Wallet are k:accounts. <br />
        When installing X-Wallet, users can either create a new account or import an existing one. <br />
        X-Wallet is compatible with both Chrome and Brave.
      </Label>
    </UiMainContainer>
  );
};

export default FunctionalitiesSection;
