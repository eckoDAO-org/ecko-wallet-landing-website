import React from 'react';
import { FlexContainer } from '../shared/Container';
import backgroundFirstSection from '../../assets/images/backgrounds/background-first-section.png';
import xWalletBackground from '../../assets/images/backgrounds/x-background.svg';
import frontendXWallet from '../../assets/images/first-section/frontend-x-wallet.png';
import Label from '../shared/Label';
import useWindowSize from '../../hooks/useWindowSize';
import styled from 'styled-components';
import { FOOTER_DOWNLOAD } from '../../constants/footer';

const BackgroundContainer = styled(FlexContainer)`
  background: transparent linear-gradient(42deg, #f3bd2f3c 0%, #fa41a53c 47%, #04c9e452 100%) 0% 0% no-repeat padding-box;
  background-image: ${`url(${backgroundFirstSection})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(50px);
  height: 100vh;
  margin-bottom: 64px;
`;
const BackgroundXWalletContainer = styled(FlexContainer)`
  background: transparent linear-gradient(30deg, #00000070 0%, #20264e 100%) 0% 0% no-repeat padding-box;
  height: 100%;
  z-index: 1;
`;
const BackgroundXWalletContainer2 = styled(FlexContainer)`
  background-image: ${`url(${xWalletBackground})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 100vh;
  z-index: 1;
`;

const IconContainer = styled.div`
  cursor: pointer;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    svg {
      height: 23px;
      width: auto;
    }
  }
`;

const FirstSection = () => {
  const [width] = useWindowSize();

  const getWidth = () => {
    if (width >= 1100) {
      return '50%';
    }
    if (width >= 900 && width < 1100) {
      return '80%';
    }
    if (width < 900) {
      return `100%`;
    }
  };

  return (
    <>
      <BackgroundContainer className="  w-100 column align-ce justify-ce">
        <BackgroundXWalletContainer className=" w-100 column align-ce justify-ce"></BackgroundXWalletContainer>
      </BackgroundContainer>
      <BackgroundXWalletContainer2 className="absolute w-100 justify-ce">
        <FlexContainer
          className="w-100 column align-ce"
          desktopClassName="justify-sb"
          mobileClassName="justify-ce"
          tabletClassName="justify-ce"
          desktopStyle={{ padding: '70px 174px' }}
          mobileStyle={{ padding: '0px 24px' }}
        >
          <Label fontFamily="syncopate" size="huge" style={{ letterSpacing: '-0.05em', textAlign: 'center' }}>
            THE KADENA ECOSYSTEM GATEWAY
          </Label>

          <img src={frontendXWallet} style={{ width: getWidth() }} alt="" />

          <FlexContainer className="column justyfi-ce align-ce">
            <Label size="small" className="text-center f-wrap" style={{ letterSpacing: '-0.1em', marginBottom: 30 }}>
              The Kadena-native Wallet will allow for seamless interactions with all <br /> Kadena’s Network Dapps, through its user-friendly and
              intuitive design.
            </Label>
            <FlexContainer className="w-100 justify-sb" mobileStyle={{ padding: `0 16px` }}>
              <FlexContainer gap={24}>
                <IconContainer
                  onClick={() => {
                    window.open(FOOTER_DOWNLOAD.items[0].href, '_blank', 'noopener,noreferrer');
                  }}
                >
                  {FOOTER_DOWNLOAD.items[0].icon}
                </IconContainer>
                <IconContainer
                  onClick={() => {
                    window.open(FOOTER_DOWNLOAD.items[1].href, '_blank', 'noopener,noreferrer');
                  }}
                >
                  {FOOTER_DOWNLOAD.items[1].icon}
                </IconContainer>
              </FlexContainer>
              <FlexContainer gap={24}>
                <IconContainer
                  onClick={() => {
                    window.open(FOOTER_DOWNLOAD.items[2].href, '_blank', 'noopener,noreferrer');
                  }}
                >
                  {FOOTER_DOWNLOAD.items[2].icon}
                </IconContainer>
                <IconContainer
                  onClick={() => {
                    window.open(FOOTER_DOWNLOAD.items[3].href, '_blank', 'noopener,noreferrer');
                  }}
                >
                  {FOOTER_DOWNLOAD.items[3].icon}
                </IconContainer>
              </FlexContainer>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </BackgroundXWalletContainer2>
    </>
  );
};

export default FirstSection;
