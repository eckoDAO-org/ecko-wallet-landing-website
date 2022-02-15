import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import CommunityTestingImage from '../assets/images/png/community-test-image.png';
import FlexContainer from '../components/shared/Container';
import Label from '../components/shared/Label';
import { DISCORD, TWITTER_X_WALLET } from '../constants/social-media';
import gradientBackground from '../assets/images/shared/gradient-background-2.png';

const CommunityMainContainer = styled(FlexContainer)`
  margin: 72px 0;

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

const CommunityTestingContainer = () => {
  return (
    <CommunityMainContainer id="community" className="relative w-100 h-100">
      <img src={gradientBackground} style={{ position: 'absolute', height: 1000, bottom: -320, width: '100%', zIndex: -1 }} alt="" />

      <Image src={CommunityTestingImage} alt="community" size="small" />
      <FlexContainer className="column justify-ce" style={{ padding: 68, maxWidth: 700 }} mobileStyle={{ padding: '40px 16px' }}>
        <FlexContainer style={{ marginBottom: 16 }}>
          <Label fontFamily="syncopate" className="f-wrap" size="big">
            <span>
              X-Wallet <VersionSup>v1.0.3</VersionSup> for
            </span>
            community
            <br />
            testing
          </Label>
        </FlexContainer>

        <Label style={{ display: 'inline-block' }}>
          In the coming weeks, Kaddex will deploy a series of incentives for discovering bugs. Stay tuned to the
          <Label
            style={{ display: 'inline-block', cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => window.open(TWITTER_X_WALLET.link, '_blank', 'noopener,noreferrer')}
          >
            {' '}
            @KaddeXofficial Twitter,
          </Label>
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
            onClick={() => window.open(DISCORD.DISCORD.link, '_blank', 'noopener,noreferrer')}
          >
            @XWalletOfficial
          </Label>{' '}
        </Label>
      </FlexContainer>
    </CommunityMainContainer>
  );
};

export default CommunityTestingContainer;
