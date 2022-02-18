import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { theme } from '../../styles/theme';
import Label from '../shared/Label';
import gradientBackground from '../../assets/images/shared/gradient-background.png';
import useWindowSize from '../../hooks/useWindowSize';
import GradientContainer from '../shared/GradientContainer';
import { ArrowDownIcon } from '../../assets';
import FlexContainer from '../shared/Container';
import { XWALLET_DOWNLOAD_LINK } from '../../constants/itemLinks';

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
  padding-bottom: 44px;
  line-height: 0px;
  margin-left: 10px;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
    font-size: 16px;
  }
`;

const IntroductionSection = () => {
  const [isHover, setIsHover] = useState(false);
  const [width] = useWindowSize();
  return (
    <FlexContainer
      id="intro"
      className="column align-ce justify-ce w-100 h-100 relative"
      mobileStyle={{ padding: '0 32px' }}
      style={{ marginTop: 56 }}
    >
      <img src={gradientBackground} style={{ position: 'absolute', height: 1000, bottom: -320, width: '100%', zIndex: -1 }} alt="" />

      {/* <XWalletLogo /> */}

      <FlexContainer
        gap={width > theme.mediaQueries.desktopPixel ? 64 : 35}
        className="align-ce"
        tabletClassName="column align-ce"
        mobileClassName="column align-ce"
      >
        <FlexContainer className="column" tabletClassName="align-ce" mobileClassName="align-ce" style={{ marginTop: 64 }}>
          <Label fontFamily="syncopate" size="huge">
            X-Wallet <VersionSup>v1</VersionSup>
          </Label>
          <Label fontFamily="syncopate" size="huge">
            is live!
          </Label>
        </FlexContainer>
        <FlexContainer className="column" tabletClassName="align-ce" mobileClassName="align-ce">
          <Label color="blue" style={{ fontSize: 20, marginTop: 16, marginBottom: 32 }} mobileStyle={{ fontSize: 18 }}>
            powered by Kaddex
          </Label>

          <GradientContainer onClick={() => window.open(XWALLET_DOWNLOAD_LINK, '_blank', 'noopener,noreferrer')}>
            <Label className="rainbow" fontFamily="syncopate">
              Download Wallet
            </Label>
          </GradientContainer>
        </FlexContainer>
      </FlexContainer>

      <iframe
        width={width < theme.mediaQueries.mobilePixel ? width - 72 : '543'}
        height={width < theme.mediaQueries.mobilePixel ? (width - 72) / 1.76 : '380'}
        src="https://www.youtube.com/embed/829R9FvBAEo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        style={{ marginTop: 40 }}
      />
      <BottomTitle isHover={isHover}>
        Built on{' '}
        <Link onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} href="https://kadena.io/" target="_blank">
          Kadena <div className="underline"></div>
        </Link>
      </BottomTitle>
      <a href="#ux">
        <ArrowDownIcon />
      </a>
    </FlexContainer>
  );
};

export default IntroductionSection;
