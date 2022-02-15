import React from 'react';
import styled from 'styled-components';
import { XWALLET_DOWNLOAD_LINK } from '../constants/itemLinks';
import FlexContainer from '../components/shared/Container';
import Label from '../components/shared/Label';
import Stripes from '../components/shared/Stripes';

const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.primary};

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
    text-decoration: underline;
  }
`;

const BannerContainer = () => {
  return (
    <FlexContainer className="w-100" style={{ padding: '0px 56px' }}>
      <FlexContainer
        className="w-100 align-ce justify-ce relative"
        style={{ background: 'linear-gradient(114.43deg, #293445 5.17%, #292a45 65.62%)', borderRadius: 90, padding: 80 }}
      >
        <Link href={XWALLET_DOWNLOAD_LINK} target="_blank" className="analytics">
          <Label fontFamily="syncopate" size="big" mobileStyle={{ fontSize: 24 }}>
            <span style={{ textDecoration: 'underline' }}>Download</span>&nbsp;X-Wallet
          </Label>
          <div className="underline"></div>
        </Link>
        <Stripes />
      </FlexContainer>
    </FlexContainer>
  );
};

export default BannerContainer;
