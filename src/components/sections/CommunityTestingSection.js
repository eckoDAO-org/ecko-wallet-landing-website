import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import CommunityTestingImage from '../../assets/images/png/community-test-image.png';
import FlexContainer from '../shared/Container';
import Label from '../shared/Label';
import { DISCORD, TWITTER_KADDEX_OFFICIAL, TWITTER_X_WALLET } from '../../constants/social-media';
import gradientBackground from '../../assets/images/shared/gradient-background-2.png';

const CommunityMainContainer = styled(FlexContainer)`
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    flex-direction: column;
    & > * {
      align-self: self-end;
    }
    & > *:not(:last-child) {
      align-self: self-start;
    }
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
  }

  img {
    width: 650px;
    height: 680px;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
      max-width: 350px;
      max-height: 350px;
    }
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.smallMobilePixel}px`}) {
      max-width: 300px;
      max-height: 300px;
    }
  }
`;

const VersionSup = styled.sup`
  font-size: 24px;
  padding-bottom: 20px;
  margin-right: 10px;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
    font-size: 16px;
  }
`;

const CommunityTestingSection = () => {
  return (
    <CommunityMainContainer id="community" className="relative w-100 h-100">
      <img src={gradientBackground} style={{ position: 'absolute', height: 1000, bottom: -320, width: '100%', zIndex: -1 }} alt="" />

      <Image src={CommunityTestingImage} alt="community" size="small" />
      <FlexContainer
        className="column justify-ce"
        style={{ padding: 68, maxWidth: 700 }}
        tabletStyle={{ paddingBottom: 0 }}
        mobileStyle={{ padding: '16px 32px' }}
      >
        <FlexContainer className="column align-fs" tabletClassName="align-ce" mobileClassName="align-ce">
          <Label fontFamily="syncopate" className="nowrap" size="big">
            X-Wallet <VersionSup>v1.0.3</VersionSup>
          </Label>
          <Label fontFamily="syncopate" size="big">
            community
          </Label>
          <Label fontFamily="syncopate" size="big">
            testing
          </Label>
        </FlexContainer>

        <Label style={{ display: 'inline-block' }}>
          In the coming weeks, Kaddex will deploy a series of incentives for discovering bugs. Stay tuned to the{' '}
          <Label
            style={{ display: 'inline-block', cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => window.open(TWITTER_KADDEX_OFFICIAL.link, '_blank', 'noopener,noreferrer')}
          >
            @KaddeXofficial Twitter,
          </Label>{' '}
          or our{' '}
          <Label
            style={{ display: 'inline-block', cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => window.open(DISCORD.link, '_blank', 'noopener,noreferrer')}
          >
            http://discord.gg/kaddex
          </Label>{' '}
          for more details on this program, and be sure to follow{' '}
          <Label
            style={{ display: 'inline-block', cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => window.open(TWITTER_X_WALLET.link, '_blank', 'noopener,noreferrer')}
          >
            @XWalletOfficial
          </Label>{' '}
        </Label>
      </FlexContainer>
    </CommunityMainContainer>
  );
};

export default CommunityTestingSection;
