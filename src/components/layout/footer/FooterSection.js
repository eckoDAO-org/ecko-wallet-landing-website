import React from 'react';
import Stripes from '../../shared/Stripes';
import FooterItemsList from './FooterItemsList';
import { FOOTER_ABOUT, FOOTER_DOWNLOAD, FOOTER_LEARN } from '../../../constants/footer';
import useWindowSize from '../../../hooks/useWindowSize';
import theme from '../../../styles/theme';
import Socials from './Socials';
import Copyrights from './Copyrights';
import { FlexContainer } from '../../shared/Container';

const FooterSection = () => {
  const [width] = useWindowSize();
  return (
    <FlexContainer
      gap={40}
      className="relative justify-sb"
      tabletClassName="column align-ce"
      mobileClassName="column align-ce"
      style={{ backgroundColor: '#000000', marginTop: -50 }}
      desktopStyle={{ padding: '130px 90px 80px' }}
      tabletStyle={{ padding: '130px 90px 80px' }}
      mobileStyle={{ padding: '130px 0px 80px' }}
    >
      {width >= theme.mediaQueries.desktopPixel && <Copyrights />}

      <FlexContainer gap={80} desktopStyle={{ margin: '0 50px' }} tabletClassName="column" mobileClassName="column">
        <FlexContainer gap={80} columnGap={50}>
          <FooterItemsList {...FOOTER_ABOUT} />
          <FooterItemsList {...FOOTER_DOWNLOAD} />
        </FlexContainer>

        <FooterItemsList {...FOOTER_LEARN} />
      </FlexContainer>

      {width >= theme.mediaQueries.desktopPixel && (
        <FlexContainer className="column" gap={16}>
          <Socials />
        </FlexContainer>
      )}

      {width < theme.mediaQueries.desktopPixel && (
        <FlexContainer className="column align-ce" style={{ marginTop: 70 }} gap={20}>
          <Socials />
          <Copyrights />
        </FlexContainer>
      )}
      <Stripes iconStyle={{ height: 112, width: 115 }} />
    </FlexContainer>
  );
};

export default FooterSection;
