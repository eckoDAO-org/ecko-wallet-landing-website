import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { TopUpIcon } from '../../assets';
import FooterSection from './footer/FooterSection';
import Header from './header/Header';

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const MainContent = styled.div`
  height: 100%;
  width: 100%;
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
  const [isSticky, setIsSticky] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

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
    <MainContainer id="main-container">
      <Header isSticky={isSticky} stopTimer={stopTimer} startTimer={startTimer} />
      <MainContent>{children}</MainContent>
      <FooterSection />

      <GoTopButton isSticky={isSticky} onClick={goToTop}>
        <TopUpIcon />
      </GoTopButton>
    </MainContainer>
  );
};

export default Layout;
