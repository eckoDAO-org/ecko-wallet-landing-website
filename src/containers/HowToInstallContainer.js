import React from 'react';
import styled from 'styled-components';
import { XWalletLogo } from '../assets';
import { STYColumnContainer } from '../components/layout/Containers';
import ImageWithTitle from '../shared/ImageWithTitle';
import Label from '../shared/Label';
import TutorialImg1 from '../assets/images/tutorial-install-png/1.png'
import TutorialImg2 from '../assets/images/tutorial-install-png/2.png'
import TutorialImg3 from '../assets/images/tutorial-install-png/3.png'
import TutorialImg4 from '../assets/images/tutorial-install-png/4.png'
import TutorialImg5 from '../assets/images/tutorial-install-png/5.png'
import TutorialImg6 from '../assets/images/tutorial-install-png/6.png'

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin:auto;
  padding: 64px 180px;
  padding-bottom: 0;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 16px;
  }
`;

const Intro = styled(STYColumnContainer)`
  margin:auto;
text-align:center;
align-items:center;
justify-content: center;
margin-bottom:72px;
`

const HowToInstallContainer = () => {
    return (
        <OuterContainer id='ux'>
            <XWalletLogo style={{marginBottom:32}}/>
            <Intro gap={16}>
            <Label fontSize={48} >
            Install extension guideline
            </Label>
            <Label fontSize={32} fontFamily='medium'>
            To install the extension manually you need to unzip the extension first. Follow the steps to load the unpacked extension.               </Label>
            </Intro>
            <ImageWithTitle label="Step 1: Open Chrome Settings." img={TutorialImg1} />
            <ImageWithTitle label="Step 2: Select Extensions." img={TutorialImg2} />
            <ImageWithTitle label="Step 3: Enable developer mode" img={TutorialImg3} />
            <ImageWithTitle label="Step 4: Load Unpacked and select your Unzip folder." img={TutorialImg4} />
            <ImageWithTitle fontFamily="medium" fontSize={16} label="- Go to location where you unzip chrome extension and choose installer folder to install extension" img={TutorialImg5} />
            <ImageWithTitle fontFamily="medium" fontSize={16} label="- The extension will be installed now." img={TutorialImg6} />
        </OuterContainer>
    );
};

export default HowToInstallContainer;