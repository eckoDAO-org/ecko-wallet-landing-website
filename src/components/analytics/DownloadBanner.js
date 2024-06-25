import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import gradientBackground from '../../assets/images/backgrounds/gradient-background.png';
import styled from 'styled-components';
import { ThirtyFiveThousandsDownloadMobileSVG, ThirtyFiveThousandsDownloadSVG } from '../../assets';
import theme from '../../styles/theme';

const DownloadBannerContainer = styled(FlexContainer)`
  @media (min-width: 1500px) {
    padding: 120px 174px 0px;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;

const DownloadBanner = () => {
  const [width] = useWindowSize();
  return (
    <DownloadBannerContainer
      className="relative column w-100"
      mobileStyle={{ padding: '0px 16px' }}
      tabletStyle={{ padding: '0px 16px' }}
      desktopStyle={{ padding: '0px 90px' }}
      gap={30}
    >
      <img
        src={gradientBackground}
        style={{ position: 'absolute', width: '100%', left: 0, top: width <= theme.mediaQueries.mobilePixel ? -100 : -200 }}
        alt=""
      />

      <FlexContainer gap={width < theme.mediaQueries.mobilePixel ? 16 : 32} className="justify-ce column align-ce">
        {width < theme.mediaQueries.mobilePixel ? <ThirtyFiveThousandsDownloadMobileSVG /> : <ThirtyFiveThousandsDownloadSVG />}
        <Label className="rainbow" size="banner" fontFamily="syncopate" gradientColors={['#FFC600', '#FF00B8']}>
          Downloads
        </Label>
      </FlexContainer>
    </DownloadBannerContainer>
  );
};

export default DownloadBanner;
