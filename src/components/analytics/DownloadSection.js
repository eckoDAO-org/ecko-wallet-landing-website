import React from 'react';
import styled from 'styled-components';
import { AndroidIcon, BraveIcon, ChromeIcon, IosIcon } from '../../assets';
import { FlexContainer } from '../shared/Container';
import CustomButton from '../shared/CustomButton';
import Label from '../shared/Label';
import desktopAppImage from '../../assets/images/analytics/desktop.png';
import mobileAppImage from '../../assets/images/analytics/mobile.png';
import {
  XWALLET_ANDROID_DOWNLOAD_LINK,
  XWALLET_BRAVE_DOWNLOAD_LINK,
  XWALLET_CHROME_DOWNLOAD_LINK,
  XWALLET_IOS_DOWNLOAD_LINK,
} from '../../constants/itemLinks';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../styles/theme';

const DownloadSectionContainer = styled(FlexContainer)`
  @media (min-width: 1500px) {
    padding: 0px 174px 170px;
  }

  .scale-svg {
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
      width: 140px;
    }
  }

  .desktop-image {
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
      height: 350px;
    }
    @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) and (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.desktopPixel - 1}px`}) {
      width: 310px;
      height: 370px;
    }
    @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel}px`}) and (max-width: 1500px) {
      height: 400px;
    }
    @media (min-width: 1500px) {
      height: 660px;
    }
  }

  .mobile-image {
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
      height: 485px;
      width: 350px;
    }
    @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) and (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.desktopPixel - 1}px`}) {
      width: 410px;
      height: 578px;
    }
    @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel}px`}) and (max-width: 1500px) {
      height: 80%;
    }
    @media (min-width: 1500px) {
      height: 100%;
    }
  }
`;

const DownloadCard = styled(FlexContainer)`
  position: relative;
  background: ${({ backgroundGradient }) => backgroundGradient};
  box-shadow: 0px 0px 99px #20264e99;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 570px;
  @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel}px`}) and (max-width: 1500px) {
    min-height: 700px;
    border-radius: 32px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel}px`}) {
    min-height: 600px;
    border-radius: 32px;
  }
  @media (min-width: 1500px) {
    min-height: 1000px;
    border-radius: 60px;
  }
`;

const DownloadSection = () => {
  const [width] = useWindowSize();
  return (
    <DownloadSectionContainer
      id="download"
      className="relative w-100 align-ce justify-ce"
      mobileClassName="column"
      mobileStyle={{ padding: '0px 16px' }}
      tabletStyle={{ padding: '0px 16px' }}
      desktopStyle={{ padding: '0px 90px' }}
      gap={width < theme.mediaQueries.mobilePixel ? 50 : 12}
    >
      <DownloadCard
        className="column"
        mobileStyle={{ padding: '32px 16px' }}
        tabletStyle={{ width: '50%', padding: '32px' }}
        desktopStyle={{ width: '50%', padding: '64px' }}
        desktopPixel={1024}
        gap={24}
        backgroundGradient="transparent linear-gradient(148deg, #8184c4 0%, #c14a9a 100%) 0% 0% no-repeat padding-box"
      >
        <Label fontFamily="syncopate" size="big">
          desktop
        </Label>
        <div className="flex w-100 justify-ce">
          {/* CHROME */}
          <div className="flex column justify-sb align-ce" style={{ marginRight: 24 }}>
            <ChromeIcon style={{ marginBottom: 16 }} />
            <CustomButton
              className="pointer"
              border="none"
              background="#453B6B99"
              hoverColor="#453B6BCC"
              buttonStyle={{ padding: width < theme.mediaQueries.mobilePixel ? '6px 12px' : '16px 32px' }}
              onClick={() => {
                window.open(XWALLET_CHROME_DOWNLOAD_LINK, '_blank', 'noopener,noreferrer');
              }}
            >
              <Label fontFamily="syncopate" size="normal">
                CHROME
              </Label>
            </CustomButton>
          </div>
          {/* BRAVE */}
          <div className="flex column justify-sb align-ce">
            <BraveIcon style={{ marginBottom: 16 }} />
            <CustomButton
              className="pointer"
              border="none"
              background="#453B6B99"
              hoverColor="#453B6BCC"
              buttonStyle={{ padding: width < theme.mediaQueries.mobilePixel ? '6px 12px' : '16px 32px' }}
              onClick={() => {
                window.open(XWALLET_BRAVE_DOWNLOAD_LINK, '_blank', 'noopener,noreferrer');
              }}
            >
              {' '}
              <Label fontFamily="syncopate" size="normal">
                Brave
              </Label>
            </CustomButton>
          </div>
        </div>
        <img src={desktopAppImage} className="desktop-image" style={{ position: 'absolute', bottom: 0, left: 0 }} alt="x-wallet-desktop" />
      </DownloadCard>
      <DownloadCard
        className="column"
        gap={24}
        mobileStyle={{ padding: '32px 16px' }}
        tabletStyle={{ width: '50%', padding: '32px' }}
        desktopStyle={{ width: '50%', padding: '64px' }}
        backgroundGradient="transparent linear-gradient(148deg, #F86B7D 0%, #EA9749 100%) 0% 0% no-repeat padding-box"
        desktopPixel={1024}
      >
        <Label fontFamily="syncopate" size="big">
          mobile
        </Label>
        <div className="flex justify-ce w-100" style={{ zIndex: 1 }}>
          {/* IOS */}
          <div
            className="flex column justify-sb align-ce pointer"
            style={{ marginRight: 24 }}
            onClick={() => {
              window.open(XWALLET_IOS_DOWNLOAD_LINK, '_blank', 'noopener,noreferrer');
            }}
          >
            <IosIcon className="scale-svg" />
          </div>
          {/* ANDROID   */}
          <div
            className="flex column justify-sb align-ce pointer"
            onClick={() => {
              window.open(XWALLET_ANDROID_DOWNLOAD_LINK, '_blank', 'noopener,noreferrer');
            }}
          >
            <AndroidIcon className="scale-svg" />
          </div>
        </div>
        <img src={mobileAppImage} className="mobile-image" style={{ position: 'absolute', bottom: 0 }} alt="x-wallet-desktop" />
      </DownloadCard>
    </DownloadSectionContainer>
  );
};

export default DownloadSection;
