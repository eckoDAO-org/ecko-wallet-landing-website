import React from 'react';
import { Image} from 'semantic-ui-react';
import styled from 'styled-components';
import { STYContainer } from '../components/layout/Containers';
import CommunityTestingImage from '../assets/images/png/community-test-image.png'
import Label from '../shared/Label';
import { ITEM_LINKS } from '../constants/itemLinks';

const CommunityMainContainer = styled(STYContainer)`
    flex-direction:row;
    justify-content:flex-start;
    margin: 72px 0;
    height:100%;
    width: 100%;

    @media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.desktopPixel-1}px`}) {
            flex-direction:column; 
            & > * {
                align-self: self-end;
            }
             & > *:not(:last-child) {
                align-self: self-start;
            } 
   
    }

    @media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.mobilePixel + 1}px`}) {

    }

    img{
        width:650px;
        height: 680px;
        @media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.mobilePixel + 1}px`}) {
            max-width:350px;
            max-height: 350px;    
        }
        @media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.smallMobilePixel}px`}) {
            max-width:300px;
            max-height: 300px;    
        }
    }

`

const TextContainer = styled(STYContainer)`
max-width:700px;
width: 100%;
padding:68px;
@media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.mobilePixel + 1}px`}) {
    padding:40px 16px;    
}
align-items: flex-start;
text-align:left;


`

const Title = styled.span`
  text-align: left;
  margin-bottom:16px;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 32px;
    letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal bold 24px montserrat-bold;
  }
`;

const CommunityTestingContainer = () => {
    return (
        <CommunityMainContainer id='community'>
                <Image src={CommunityTestingImage} alt='community' size='small'/>
                <TextContainer>
                <Title>X-Wallet <sup style={{fontSize:24,marginLeft:-10}}>BETA</sup> is live!</Title>
                    <Label fontFamily='regular' labelStyle={{display:'inline-block'}}>
                    in the coming weeks, Kaddex will deploy a series of incentives for discovering bugs. 
                    Stay tuned to the {' '}
                        <Label fontFamily='bold' labelStyle={{display:'inline-block',cursor:'pointer'}} onClick={() => window.open(ITEM_LINKS.TWITTER_KADDEX.link, '_blank', 'noopener,noreferrer')}>
                        @KaddeXofficial,
                        </Label>{' '}
                        <Label fontFamily='bold' labelStyle={{display:'inline-block',cursor:'pointer'}} onClick={() => window.open(ITEM_LINKS.DISCORD.link, '_blank', 'noopener,noreferrer')}>
                        http://discord.gg/kaddex
                        </Label>
                        {' '}for more details on this program,
                    and be sure to follow {' '}
                        <Label fontFamily='bold' labelStyle={{display:'inline-block',cursor:'pointer'}} onClick={() => window.open(ITEM_LINKS.TWITTER_X_WALLET.link, '_blank', 'noopener,noreferrer')}>
                        @XWalletOfficial
                        </Label>   
                    </Label>
                </TextContainer>
    </CommunityMainContainer>
    );
};

export default CommunityTestingContainer;