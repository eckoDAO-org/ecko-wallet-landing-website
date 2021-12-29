import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { ArrowDownIcon, PlayIcon, XWalletLogo } from '../assets';
import { STYButtonContainer } from '../components/layout/Containers';
import CustomButton from '../shared/CustomButton';
import theme from '../styles/theme';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  padding: 30px;
  /* overflow: auto; */
`;

const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Title = styled.span`
  text-align: center;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 48px;
    letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal bold 28px montserrat-bold;
  }
`;

const SubTitle = styled.span`
  margin-top: 16px;
  margin-bottom: 32px;
  padding: 0px;
  text-align: center;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.regular};
  font-size: 32px;  
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal normal 18px montserrat-regular;
  }
`;

const BottomTitle = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.regular};
  font-size: 16px;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel}px`}) {
    font-size: 16px !important;
  }

  color: #ffffff;
  margin-top: 72px;
  margin-bottom: 24px;

  .underline {
    width: ${({ isHover }) => (isHover ? '100%' : 0)};
    transition: width 0.3s;
    background: #ffffff;
    height: 3px;

    @media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.mobilePixel}px`}) {
      width: 0;
    }
  }
`;

const Link = styled.a`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 0px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel}px`}) {
    font-size: 16px !important;
    text-decoration: underline;
  }
`;


const IntroductionSection = () => {
  const [isHover, setIsHover] = useState(false);
  console.log(window.location)


  return (
    <Container id='intro'>
      <XWalletLogo style={{marginBottom:32}}/>
      <TextContainer>
        <Title>X-Wallet <sup style={{fontSize:24,marginLeft:-10}}>BETA</sup> is live!</Title>
        <SubTitle>powered by Kaddex</SubTitle>
        <STYButtonContainer>
          <CustomButton background={theme.colors.white} color={theme.colors.primary}>
            Download Wallet
          </CustomButton>
          <CustomButton  onClick={() =>
                    window.open(`${window.location.origin}/how-to-install`, '_self', 'noopener,noreferrer')
                  }>
            Installation Instructions
          </CustomButton>
        </STYButtonContainer>
      </TextContainer>
      <BottomTitle isHover={isHover}>
        Built on{' '}
        <Link
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          href='https://kadena.io/'
          target='_blank'
        >
          Kadena <div className='underline'></div>
        </Link>
      </BottomTitle>
      <a href='#ux'>
        <ArrowDownIcon />
      </a>
    </Container>
  );
};

export default IntroductionSection;
