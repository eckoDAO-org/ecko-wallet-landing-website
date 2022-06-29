import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import gradientBackground from '../../assets/images/backgrounds/gradient-background.png';
import styled from 'styled-components';
import { FifteenThousandsDownloadSVG } from '../../assets';
import theme from '../../styles/theme';

const DownloadBannerContainer = styled(FlexContainer)`
  @media (min-width: 1500px) {
    padding: 120px 174px 0px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    svg {
      height: 100px;
    }
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopStyle}px`}) {
    svg {
      height: 120px;
    }
  }
`;

const DownloadBanner = () => {
  const [width, height] = useWindowSize();
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
        style={{ position: 'absolute', height: 400, width: '100%', left: 0, top: width <= theme.mediaQueries.mobilePixel && -100 }}
        alt=""
      />

      <FlexContainer className="justify-ce wrap" style={{ rowGap: 24 }}>
        <FifteenThousandsDownloadSVG />
        <Label
          className="rainbow"
          size="banner"
          fontFamily="syncopate"
          desktopStyle={{ width: 'fit-content' }}
          gradientColors={['#b766b6', '#f95197', '#f68861']}
        >
          Downloads
        </Label>
      </FlexContainer>
    </DownloadBannerContainer>
  );
};

export default DownloadBanner;
