import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { STYContainer } from '../components/layout/Containers';
import Label from '../shared/Label';
import UiImage from '../assets/images/png/ui-image.png'


const UiMainContainer = styled(STYContainer)`
    padding:0 120px;
    margin-top:72px;

    @media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.desktopPixel + 1}px`}) {
        padding:16px;
    }

    img{
        max-width:100%;
        max-height: 100%;
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
    align-items:center;
    &>span{
        text-align: center;
    }
`

const UiContainer = () => {
    return (
        <UiMainContainer id='ui' className='image-render'>
            <TextContainer>
                <Label fontSize={32} labelStyle={{marginBottom:16}}>
                X-Wallet Functionality              
                </Label>
                <Label fontFamily='regular'>
                Within X-Wallet users will be able to send and receive assets, execute cross-chain transfers, view transactions, interact with Dapps, and more. X-Wallet will provide everything a user needs to interact with Dapps, with more features being added as Kadena evolves.                </Label>
            </TextContainer>
            <Image src={UiImage} alt='ux' size='small'/>
            <TextContainer>
                <Label fontSize={32} labelStyle={{marginBottom:16}}>
                Secure and Compatible                
                </Label>
                <Label fontFamily='regular'>
                By default, all accounts created within X-Wallet are k:accounts.<br/> X-Wallet is compatible with both Chrome and Brave.<br/> X-Wallet generates secure keys and passwords that only YOU have access to. Your keys, your Crypto.                </Label>
            </TextContainer>
        </UiMainContainer>
    );
};

export default UiContainer;