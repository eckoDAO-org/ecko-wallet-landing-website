import React from 'react';
import styled from 'styled-components/macro';
import Stripes from '../../shared/Stripes';

import useWindowSize from '../../../hooks/useWindowSize';
import theme from '../../../styles/theme';
import Socials from './Socials';
import Copyrights from './Copyrights';
import FlexContainer from '../../shared/Container';
import { XWALLET_DOWNLOAD_LINK } from '../../../constants/itemLinks';
import Label from '../../shared/Label';

const FooterContainer = styled(FlexContainer)`
  padding: 80px 90px;
  background-color: #000000;
`;

const FooterSection = () => {
  const [width] = useWindowSize();
  return (
    <FooterContainer
      gap={40}
      className="relative justify-sb"
      tabletClassName="column align-ce"
      mobileClassName="column align-ce"
      style={{ marginTop: 165 }}
    >
      {width >= theme.mediaQueries.desktopPixel && <Copyrights />}

      <FlexContainer className="column" columnGap={30} gap={30}>
        <Label fontFamily="syncopate" fontSize={24} style={{ marginBottom: 10 }}>
          Support
        </Label>

        <Label className="pointer" fontSize={16} onClick={() => window.open(XWALLET_DOWNLOAD_LINK, '_blank', 'noopener,noreferrer')}>
          Download
        </Label>
      </FlexContainer>

      {width >= theme.mediaQueries.desktopPixel && <Socials />}

      {width < theme.mediaQueries.desktopPixel && (
        <FlexContainer className="column" style={{ marginTop: 70 }} gap={20}>
          <Socials />

          <Copyrights />
        </FlexContainer>
      )}
      <Stripes iconStyle={{ height: 112, width: 115 }} />
    </FooterContainer>
  );
};

export default FooterSection;
