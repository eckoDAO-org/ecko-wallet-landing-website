import React from 'react';
import styled from 'styled-components/macro';
import { XWalletHeaderLogo, XWalletLetterLogo } from '../../../assets';
import { XWALLET_DOWNLOAD_LINK } from '../../../constants/itemLinks';
import useWindowSize from '../../../hooks/useWindowSize';
import theme from '../../../styles/theme';
import FlexContainer from '../../shared/Container';
import GradientContainer from '../../shared/GradientContainer';
import HeaderItem from '../../shared/HeaderItem';
import Label from '../../shared/Label';

const Container = styled(FlexContainer)`
  min-height: ${({ theme: { header } }) => `${header.height}px`};
  width: 100%;
  z-index: 10;

  svg {
    margin-right: 25px;
  }
`;

const Header = () => {
  const [width] = useWindowSize();
  return (
    <Container className="justify-sb align-ce" style={{ padding: '20px 50px' }} mobileStyle={{ padding: '20px 24px' }}>
      <FlexContainer>
        {width <= theme.mediaQueries.mobilePixel ? (
          <XWalletLetterLogo style={{ cursor: 'pointer' }} />
        ) : (
          <XWalletHeaderLogo style={{ cursor: 'pointer' }} />
        )}
      </FlexContainer>

      <FlexContainer className="align-ce">
        <HeaderItem style={{ marginRight: 24 }} href="https://kaddex.com/">
          Kaddex
        </HeaderItem>
        <GradientContainer
          onClick={() => window.open(XWALLET_DOWNLOAD_LINK, '_blank', 'noopener,noreferrer')}
          style={{ height: 38, padding: 0, width: 180 }}
        >
          <Label fontSize={13} className="rainbow" size="small" fontFamily="syncopate">
            Download
          </Label>
        </GradientContainer>
      </FlexContainer>
    </Container>
  );
};

export default Header;
