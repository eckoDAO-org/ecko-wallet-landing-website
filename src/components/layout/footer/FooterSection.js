import React from 'react';
import Stripes from '../../shared/Stripes';
import FooterItemsList from './FooterItemsList';
import { FOOTER_DOWNLOAD, FOOTER_LEARN } from '../../../constants/footer';
import useWindowSize from '../../../hooks/useWindowSize';
import theme from '../../../styles/theme';
import Socials from './Socials';
import Copyrights from './Copyrights';
import NavigationItems from './NavigationItems';
import { FlexContainer } from '../../shared/Container';

const FooterSection = () => {
  const [width] = useWindowSize();
  return (
    <FlexContainer
      gap={40}
      className="relative justify-sb"
      tabletClassName="column align-ce"
      mobileClassName="column align-ce"
      style={{ backgroundColor: '#000000' }}
      desktopStyle={{ padding: '80px 90px' }}
      tabletStyle={{ padding: '80px 90px' }}
      mobileStyle={{ padding: '80px 0px' }}
    >
      {width >= theme.mediaQueries.desktopPixel && <Copyrights />}

      <FlexContainer gap={80} desktopStyle={{ margin: '0 50px' }} tabletClassName="column" mobileClassName="column">
        <FlexContainer gap={80} columnGap={50}>
          <FooterItemsList title="About">
            <NavigationItems fontSize={13} color="yellow" disableHover hideKaddex />
          </FooterItemsList>
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
