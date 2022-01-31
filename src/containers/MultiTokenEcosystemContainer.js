import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { STYContainer } from '../components/layout/Containers';
import Label from '../shared/Label';
import MEImage from '../assets/images/png/multitoken_ecosystem.png'


const MEMainContainer = styled(STYContainer)`
    margin-bottom:100px;
    flex-direction:row;
    padding:0 120px;


    @media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.desktopPixel-1}px`}) {
            padding:16px;
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
    flex-direction:column;
            & > * {
                align-self: center;
            }
             & > *:not(:last-child) {
                align-self: center;
            } 

    }

    img{
        max-width:47%;
        max-height:47%;
        @media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.mobilePixel}px`}) {
            max-width:340px;
            max-height: 340px;    
        }
        @media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.smallMobilePixel}px`}) {
            max-width:280px;
            max-height: 300px;    
        }
    }
`

const TextContainer = styled(STYContainer)`
    align-items: flex-start;
    text-align:left;
    max-width:700px;
    padding:0 68px;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.smallMobilePixel}px`}) {
     padding:0 16px;

        }
`

const MultiTokenEcosystemContainer = () => {
    return (
        <MEMainContainer id='multi-ecosystem' >
            <TextContainer>
                <Label fontSize={32} labelStyle={{marginBottom:16}}>
                Multitoken Ecosystem
                </Label>
                <Label fontFamily='regular'>
                In addition, users can recover Chainweaver (Kadena’s official wallet) password seed phrases, and quickly regenerate existing accounts. X-Wallet is the only wallet in the Kadena ecosystem that now supports all tokens on the Kadena network.
                </Label>
            </TextContainer>
            <Image src={MEImage} alt='ux' size='small'/>
        </MEMainContainer>
    );
};

export default MultiTokenEcosystemContainer;