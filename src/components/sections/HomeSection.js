import React from 'react';
import FlexContainer from '../shared/Container';
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
    <FlexContainer className="relative h-100 w-100 column justify-sb" mobileStyle={{ padding: '0px 24px' }}>
      <FlexContainer className="column" desktopStyle={{ paddingLeft: 50, paddingTop: 50 }}>
        <Label fontFamily="syncopate" size="huge" style={{ letterSpacing: '-0.05em' }}>
          user-friendly and
        </Label>
        <Label fontFamily="syncopate" size="huge" style={{ letterSpacing: '-0.05em' }}>
          robust<span style={{ color: '#FA41A5' }}>&nbsp;Kadena-</span>
        </Label>
        <Label fontFamily="syncopate" size="huge" style={{ letterSpacing: '-0.05em' }}>
          <span style={{ color: '#FA41A5' }}>native</span>&nbsp;wallet
        </Label>
      </FlexContainer>

      <img
        src={xWalletBackground}
        style={{ position: 'absolute', height: getHeight(), left: '50%', transform: 'translateX(-50%)', top: height < 800 ? '7%' : 0 }}
        alt=""
      />

      <FlexContainer className="column justyfi-ce align-ce">
        <Label fontFamily="syncopate" size="big" style={{ letterSpacing: '-0.1em', marginBottom: 32 }}>
          X-Wallet v1 is live!
        </Label>
        <Label color="blue" size="medium" className="text-center f-wrap" style={{ letterSpacing: '-0.1em', marginBottom: 30 }}>
          We're beta testing for a reason. In the coming weeks, Kaddex will deploy a <br />
          series of incentives for discovering bugs.
        </Label>

        <GradientContainer
          onClick={() => window.open(XWALLET_DOWNLOAD_LINK, '_blank', 'noopener,noreferrer')}
          style={{ height: 38, padding: 0, width: 180 }}
        >
          <Label fontSize={13} className="rainbow" size="small" fontFamily="syncopate">
            Download
          </Label>
        </GradientContainer>

        <Label
          color="blue"
          size="normal"
          className="text-center"
          style={{ letterSpacing: '-0.1em', marginBottom: 4, marginTop: 56 }}
          mobileStyle={{ marginTop: 36 }}
        >
          Stay tuned to the{' '}
          <span style={{ cursor: 'pointer' }} onClick={() => window.open(TWITTER_KADDEX_OFFICIAL.link, '_blank', 'noopener,noreferrer')}>
            @KaddeXofficial Twitter
          </span>
          , or our{' '}
          <span style={{ cursor: 'pointer' }} onClick={() => window.open(DISCORD.link, '_blank', 'noopener,noreferrer')}>
            http://discord.gg/kaddex
          </span>{' '}
          for more
          <br />
          details on the program.
        </Label>
      </FlexContainer>
    </FlexContainer>
  );
};

export default HomeSection;
