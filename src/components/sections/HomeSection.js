import React from 'react';
import { FlexContainer } from '../shared/Container';
import xWalletBackground from '../../assets/images/png/x-wallet-background.png';
import Label from '../shared/Label';
import GradientContainer from '../shared/GradientContainer';
import { XWALLET_DOWNLOAD_LINK } from '../../constants/itemLinks';
import { DISCORD, TWITTER_KADDEX_OFFICIAL } from '../../constants/social-media';
import useWindowSize from '../../hooks/useWindowSize';

const HomeSection = () => {
  const [_, height] = useWindowSize();

  const getHeight = () => {
    const heightFirstDigit = Number(String(height)[0]);

    if (height >= 1100) {
      return '90%';
    }
    if (height >= 900 && height < 1100) {
      return '80%';
    }
    if (height < 900) {
      return `${(heightFirstDigit - 1) * 10}%`;
    }
  };

  return (
    <FlexContainer className="relative h-100 w-100 column align-ce justify-sb" desktopStyle={{ padding: 24 }} mobileStyle={{ padding: '0px 24px' }}>
      <Label fontFamily="syncopate" size="big" style={{ letterSpacing: '-0.05em' }}>
        THE KADENA ECOSYSTEM GATEWAY
      </Label>

      <img
        src={xWalletBackground}
        style={{ position: 'absolute', height: getHeight(), left: '50%', transform: 'translateX(-50%)', top: height < 800 ? '7%' : 0 }}
        alt=""
      />

      <FlexContainer className="column justyfi-ce align-ce">
        <Label color="blue" size="tiny" className="text-center f-wrap" style={{ letterSpacing: '-0.1em', marginBottom: 30 }}>
          The Kadena-native Wallet will allow for seamless interactions with all <br /> Kadena’s Network Dapps, through its user-friendly and
          intuitive design.
        </Label>
      </FlexContainer>
    </FlexContainer>
  );
};

export default HomeSection;
