import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { XWalletHeaderLogo, XWalletLetterLogo } from '../../../assets';
import { XWALLET_DOWNLOAD_LINK } from '../../../constants/itemLinks';
import useWindowSize from '../../../hooks/useWindowSize';
import { ROUTE_INDEX } from '../../../router/routes';
import theme from '../../../styles/theme';
import FlexContainer from '../../shared/Container';
import GradientContainer from '../../shared/GradientContainer';
import HeaderItem from '../../shared/HeaderItem';
import Label from '../../shared/Label';

const Container = styled(FlexContainer)`
  min-height: ${({ theme: { header } }) => `${header.height}px`};
  width: 100%;
  padding: 2em 50px;

  z-index: 10;

  svg {
    margin-right: 25px;
  }
  transition: all 0.5s ease;

  &.sticky {
    z-index: 100;
    transform: ${({ isSticky }) => (isSticky ? 'translateY(-105px)' : 'translateY(-230px)')};
    position: fixed;
    background-color: rgba(7, 6, 16, 0.5);
    z-index: 50;
    width: 100%;

    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
`;

const Header = ({ isSticky }) => {
  return (
    <div id="header">
      <CommonHeader />

      <CommonHeader className="sticky" isSticky={isSticky} />
    </div>
  );
};

const CommonHeader = ({ className, isSticky }) => {
  const history = useHistory();
  const [width] = useWindowSize();

  const goToTop = () => {
    history.push(ROUTE_INDEX);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container className={`justify-sb ${className}`} isSticky={isSticky}>
      <FlexContainer>
        {width <= theme.mediaQueries.mobilePixel ? (
          <XWalletLetterLogo style={{ cursor: 'pointer' }} onClick={() => goToTop()} />
        ) : (
          <XWalletHeaderLogo style={{ cursor: 'pointer' }} onClick={() => goToTop()} />
        )}

        <HeaderItem style={{ marginRight: 24 }} className="mobile-none" href="https://kaddex.com/">
          Kaddex
        </HeaderItem>
      </FlexContainer>

      <GradientContainer onClick={() => window.open(XWALLET_DOWNLOAD_LINK, '_blank', 'noopener,noreferrer')}>
        <Label fontSize={14} className="rainbow" size="small" fontFamily="syncopate">
          Download
        </Label>
      </GradientContainer>
    </Container>
  );
};

export default Header;
