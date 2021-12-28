import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { STYColumnContainer } from '../components/layout/Containers';
import Label from './Label';

const ImageWithTitleContainer= styled(STYColumnContainer)`
align-items:center;
justify-content:center;
text-align:center;


    img{
        max-width:730px;
        max-height:500px;
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

const ImageWithTitle = ({label,fontSize,fontFamily,img,$marginBottom}) => {
    return (
        <ImageWithTitleContainer gap={40} style={{marginBottom:$marginBottom || '70px'}}>
            <Label fontSize={fontSize || 32} fontFamily={fontFamily}>
                {label}
            </Label>
            <Image src={img} />
            
        </ImageWithTitleContainer>
    );
};

export default ImageWithTitle;