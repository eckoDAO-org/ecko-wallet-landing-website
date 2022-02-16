import React from 'react';
import styled from 'styled-components';
import { XWALLET_DOWNLOAD_LINK } from '../../constants/itemLinks';
import FlexContainer from '../shared/Container';
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

const BannerSection = () => {
  const [width] = useWindowSize();
  return (
    <FlexContainer className="w-100 relative" style={{ padding: '0px 56px' }} mobileStyle={{ padding: '0 16px' }}>
      <RadiusBackground style={{ top: 0, left: width < theme.mediaQueries.mobilePixel ? 16 : 56 }} />

      <FlexContainer
        className="w-100 align-ce justify-ce relative"
        style={{ background: 'linear-gradient(114.43deg, #293445 5.17%, #292a45 65.62%)', borderRadius: 60, padding: 80 }}
      >
        <Link href={XWALLET_DOWNLOAD_LINK} target="_blank" className="analytics">
          <Label className="justify-ce" fontFamily="syncopate" size="big" mobileStyle={{ fontSize: 24 }}>
            <span style={{ textDecoration: 'underline' }}>Download</span>&nbsp;X-Wallet
          </Label>
          <div className="underline"></div>
        </Link>
        <Stripes />
      </FlexContainer>
    </FlexContainer>
  );
};

export default BannerSection;
