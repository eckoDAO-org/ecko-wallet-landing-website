import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { XWalletHeaderLogo, XWalletLetterLogo } from '../../../assets';
import { XWALLET_DOWNLOAD_LINK } from '../../../constants/itemLinks';
import useWindowSize from '../../../hooks/useWindowSize';
import { ROUTE_INDEX } from '../../../router/routes';
import theme from '../../../styles/theme';
import FlexContainer from '../../shared/Container';
import CustomButton from '../../shared/CustomButton';
import HeaderItem from '../../shared/HeaderItem';

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
    transform: ${({ isSticky }) => (isSticky ? 'translateY(-105px)' : 'translateY(-200px)')};
    position: fixed;
    background-color: rgba(7, 6, 16, 0.5);
    z-index: 50;
    width: 100%;

    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
`;

const DesktopHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleIsSticky);
    return () => {
      window.removeEventListener('scroll', handleIsSticky);
    };
  }, []);

  const handleIsSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? setIsSticky(true) : setIsSticky(false);
  };

  return (
    <div id="header">
      <Header />

      <Header className="sticky" isSticky={isSticky} />
    </div>
  );
};

const Header = ({ className, isSticky }) => {
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
      <CustomButton customClass="analytics" onClick={() => window.open(XWALLET_DOWNLOAD_LINK, '_blank', 'noopener,noreferrer')}>
        Download
      </CustomButton>
    </Container>
  );
};

export default DesktopHeader;
