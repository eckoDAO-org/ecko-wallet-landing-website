import React, { useState } from 'react';
import styled from 'styled-components';
import { XWALLET_DOWNLOAD_LINK } from '../../constants/itemLinks';
import { FlexContainer } from '../shared/Container';
import Stripes from '../shared/Stripes';
import Label from '../shared/Label';
import RadiusBackground from '../shared/RadiusBackground';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../styles/theme';

const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.primary};

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
    text-decoration: underline;
  }
`;

const TitleContainer = styled(FlexContainer)`
  a {
    text-decoration: none;
    text-align: center;
  }
  .underline {
    width: ${({ isHover }) => (isHover ? '100%' : 0)};
    transition: width 0.3s;
    background: ${({ theme: { colors } }) => colors.white};
    height: 6px;

    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
      width: 0;
    }
  }
`;

const BannerSection = () => {
  const [width] = useWindowSize();
  const [isHover, setIsHover] = useState(false);

  return (
    <FlexContainer className="w-100 relative" style={{ padding: '0px 56px' }} mobileStyle={{ padding: '0 32px' }}>
      <RadiusBackground style={{ top: 0, left: width < theme.mediaQueries.mobilePixel ? 32 : 56 }} />

      <TitleContainer
        isHover={isHover}
        className="w-100 align-ce justify-ce relative"
        style={{ background: 'linear-gradient(114.43deg, #293445 5.17%, #292a45 65.62%)', borderRadius: 60, padding: 80 }}
      >
        <Link href={XWALLET_DOWNLOAD_LINK} target="_blank" onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          <Label className="justify-ce" fontFamily="syncopate" size="big" mobileStyle={{ fontSize: 24 }}>
            Download X-Wallet
          </Label>
          <div className="underline"></div>
        </Link>
        <Stripes />
      </TitleContainer>
    </FlexContainer>
  );
};

export default BannerSection;
