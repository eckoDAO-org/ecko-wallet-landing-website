import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Header from './header/Header';
import FooterSection from './footer/FooterSection';
import { FlexContainer } from '../shared/Container';
import { GoTopIcon } from '../../assets';

const BackgroundGradientContainer = styled(FlexContainer)`
  background: transparent linear-gradient(42deg, #f3bd2f3c 0%, #fa41a53c 47%, #04c9e452 100%) 0% 0% no-repeat padding-box;
  background-image: url(./background-first-section.png);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  filter: blur(50px);
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const MainContent = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
`;

const BackgroundXWalletContainer = styled(FlexContainer)`
  background: transparent linear-gradient(30deg, #00000070 0%, #20264e 100%) 0% 0% no-repeat padding-box;
  height: 100%;
  width: 100%;
  opacity: 0.6;
  z-index: 1;
`;

const GoTopButton = styled.div`
  display: ${({ isSticky }) => (isSticky ? 'block' : 'none')};
  position: fixed;
  bottom: 10px;
  right: 10px;
  line-height: 0;
  opacity: 0.8;
  cursor: pointer;

  transition: all 0.5s ease;
  animation: smoothOut 1s;

  @keyframes smoothOut {
    0% {
      transform: translateY(142px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  &:hover {
    opacity: 1;
    text-shadow: 0 0 5px #ffffff;
  }
`;

const Layout = ({ children }) => {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleIsSticky);
    return () => {
      window.removeEventListener('scroll', handleIsSticky);
    };
  }, []);

  const handleIsSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? setIsSticky(true) : setIsSticky(false);
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 2000);
    setIntervalId(interval);
  };

  const stopTimer = () => {
    setSeconds(0);
    clearInterval(intervalId);
  };

  useEffect(() => {
    if (isSticky) {
      startTimer();
    }
  }, [isSticky]);

  useEffect(() => {
    if (seconds === 2) {
      setIsSticky(false);
      stopTimer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FlexContainer className="w-100 h-100 relative" id="main-container">
      <Header isSticky={isSticky} stopTimer={stopTimer} startTimer={startTimer} />

      <BackgroundGradientContainer className=" absolute"></BackgroundGradientContainer>
      <BackgroundXWalletContainer className=" absolute"></BackgroundXWalletContainer>
      <FlexContainer className="w-100 h-100 relative z1 column">
        <MainContent>{children}</MainContent>
        <FooterSection />
      </FlexContainer>
      <GoTopButton isSticky={isSticky} onClick={goToTop}>
        <GoTopIcon />
      </GoTopButton>
    </FlexContainer>
  );
};

export default Layout;
