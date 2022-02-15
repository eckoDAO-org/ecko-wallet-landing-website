import React, { useState } from 'react';
import styled from 'styled-components';
import { XWALLET_DOWNLOAD_LINK } from '../constants/itemLinks';
import FlexContainer from '../components/shared/Container';
import Label from '../components/shared/Label';

const Container = styled(FlexContainer)`
  display: flex;
  background: transparent linear-gradient(90deg, #e0fffe 0%, #ecfffe 63%, #f4e7e2 85%, #fff3db 100%) 0% 0% no-repeat padding-box;

  .underline {
    width: ${({ isHover }) => (isHover ? '100%' : 0)};
    transition: width 0.3s;
    background: ${({ theme: { colors } }) => colors.primary};
    height: 6px;

    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
      width: 0;
    }
  }
`;

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
  const [isHover, setIsHover] = useState(false);

  return (
    <Container className="w-100 align-ce justify-ce" isHover={isHover} style={{ height: 164 }}>
      <Link
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        href={XWALLET_DOWNLOAD_LINK}
        target="_blank"
        className="analytics"
      >
        <Label fontFamily="syncopate" color="primary" style={{ fontSize: 32 }} mobileStyle={{ fontSize: 24 }}>
          Download X-Wallet
        </Label>
        <div className="underline"></div>
      </Link>
    </Container>
  );
};

export default BannerContainer;
