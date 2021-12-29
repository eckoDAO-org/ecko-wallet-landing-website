import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { STYContainer } from '../components/layout/Containers';
import Label from '../shared/Label';
import UxImage from '../assets/images/png/ux-image.png'


const UxMainContainer = styled(STYContainer)`
    margin-top:100px;
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

const UxContainer = () => {
    return (
        <UxMainContainer id='ux' >
            <TextContainer>
                <Label fontSize={32} labelStyle={{marginBottom:16}}>
                Improved User Experience
                </Label>
                <Label fontFamily='regular'>
                X-Wallet is a user-friendly and robust Kadena-native wallet designed for seamless interaction with Dapps on the Kadena network
                </Label>
            </TextContainer>
            <Image src={UxImage} alt='ux' size='small'/>
        </UxMainContainer>
    );
};

export default UxContainer;