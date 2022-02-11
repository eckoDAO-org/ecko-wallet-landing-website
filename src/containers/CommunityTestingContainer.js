import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { STYContainer } from '../components/layout/Containers';
import CommunityTestingImage from '../assets/images/png/community-test-image.png';
import Label from '../shared/Label';
import { ITEM_LINKS } from '../constants/itemLinks';
import FlexContainer from './Container';

const CommunityMainContainer = styled(STYContainer)`
  flex-direction: row;
  justify-content: flex-start;
  margin: 72px 0;
  height: 100%;
  width: 100%;

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
    <CommunityMainContainer id="community">
      <Image src={CommunityTestingImage} alt="community" size="small" />
      <FlexContainer className="column" style={{ padding: 68, maxWidth: 700 }} mobileStyle={{ padding: '40px 16px' }}>
        <FlexContainer className="f-wrap" style={{ marginBottom: 16 }}>
          <Label fontFamily="syncopate" fontSize={32} style={{ whiteSpace: 'nowrap' }}>
            X-Wallet <VersionSup>v1</VersionSup>
          </Label>
          <Label fontFamily="syncopate" fontSize={32}>
            is live!
          </Label>
        </FlexContainer>

        <Label fontFamily="regular" style={{ display: 'inline-block' }}>
          We're beta testing for a reason. In the coming weeks, Kaddex will deploy a series of incentives for discovering bugs. Stay tuned to the{' '}
          <Label
            style={{ display: 'inline-block', cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => window.open(ITEM_LINKS.TWITTER_KADDEX.link, '_blank', 'noopener,noreferrer')}
          >
            @KaddeXofficial Twitter,
          </Label>
          or our{' '}
          <Label
            style={{ display: 'inline-block', cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => window.open(ITEM_LINKS.DISCORD.link, '_blank', 'noopener,noreferrer')}
          >
            http://discord.gg/kaddex
          </Label>{' '}
          for more details on the program.{' '}
        </Label>
      </FlexContainer>
    </CommunityMainContainer>
  );
};

export default CommunityTestingContainer;
