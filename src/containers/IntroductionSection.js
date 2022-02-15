import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { ArrowDownIcon, XWalletLogo } from '../assets';
import { STYButtonContainer } from '../components/layout/Containers';
import { XWALLET_DOWNLOAD_LINK } from '../constants/itemLinks';
import theme from '../styles/theme';
import FlexContainer from '../components/shared/Container';
import CustomButton from '../components/shared/CustomButton';
import Label from '../components/shared/Label';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

const BottomTitle = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.basier};
  font-size: 16px;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
    font-size: 16px !important;
  }

  color: #ffffff;
  margin-top: 72px;
  margin-bottom: 24px;

  .underline {
    width: ${({ isHover }) => (isHover ? '100%' : 0)};
    transition: width 0.3s;
    background: #ffffff;
    height: 3px;

    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
      width: 0;
    }
  }
`;

const Link = styled.a`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 0px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
    font-size: 16px !important;
    text-decoration: underline;
  }
`;

const VersionSup = styled.sup`
  font-size: 24px;
  padding-bottom: 20px;
  margin-right: 10px;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
    font-size: 16px;
  }
`;

const IntroductionSection = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Container id="intro">
      <XWalletLogo style={{ marginBottom: 32 }} />
      <FlexContainer className="column align-ce">
        <Label fontFamily="syncopate" style={{ fontSize: 48 }} mobileStyle={{ fontSize: 24 }}>
          X-Wallet <VersionSup>v1</VersionSup> is live!
        </Label>
        <Label style={{ fontSize: 32, marginTop: 16, marginBottom: 32 }} mobileStyle={{ fontSize: 18 }}>
          powered by Kaddex
        </Label>
        <STYButtonContainer>
          <CustomButton
            background={theme.colors.white}
            color={theme.colors.primary}
            onClick={() => window.open(XWALLET_DOWNLOAD_LINK, '_blank', 'noopener,noreferrer')}
            customClass="analytics"
          >
            Download Wallet
          </CustomButton>
        </STYButtonContainer>
      </FlexContainer>
      <BottomTitle isHover={isHover}>
        Built on{' '}
        <Link onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} href="https://kadena.io/" target="_blank">
          Kadena <div className="underline"></div>
        </Link>
      </BottomTitle>
      <a href="#ux">
        <ArrowDownIcon />
      </a>
    </Container>
  );
};

export default IntroductionSection;
