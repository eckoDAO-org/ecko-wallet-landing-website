import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import DesktopHeader from "./header/DesktopHeader";
import FooterSection from "../../containers/FooterSection";
import { TopUpIcon } from "../../assets";
import AlertBetaTest from "./header/AlertBetaTest";

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const PageContent = styled.div`
  position: relative;

  .sticky {
    position: fixed;
    background-color: rgba(7, 6, 16, 0.5);
    top: 56;
    z-index: 50;
    width: 100%;

    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    /* background-color: rgba(255, 255, 255, 0.5);  */

    transition: all 0.5s ease;
    animation: smoothScrollIn 1s forwards;
  }

  .out {
    top: -56px;
    transition: all 0.5s ease;
    animation: smoothScrollOut 1s forwards;
  }

  @keyframes smoothScrollIn {
    0% {
      transform: translateY(-142px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  @keyframes smoothScrollOut {
    0% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(-142px);
    }
  }
`;

const MainContent = styled.div`
  height: 100%;
  width: 100%;
`;

const GoTopContainer = styled.div`
  display: ${({ topUpIconIsVisible }) =>
    topUpIconIsVisible ? "block" : "none"};
  position: fixed;
  bottom: 10px;
  right: 10px;
  line-height: 0;
  opacity: 0.8;

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

const ButtonIcon = styled("button")`
  border: none;
  padding: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: transparent;
`;

const Layout = ({ children }) => {
  const [, setIsFooterVisible] = useState(false);
  const [IsHeaderVisible, setIsHeaderVisible] = useState(false);
  const [topUpIconIsVisible, setTopUpIconIsVisible] = useState(false);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      const ux = document.getElementById("ux").getBoundingClientRect().top;
      const features = document.getElementById("ux").getBoundingClientRect()
        .top;
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      if (ux >= 0) setIsHeaderVisible(false);
      else setIsHeaderVisible(scrollY > lastScrollY ? false : true);

      if (features >= 0) setTopUpIconIsVisible(false);
      else setTopUpIconIsVisible(true);

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    // console.log(IsHeaderVisible);

    return () => window.removeEventListener("scroll", onScroll);
  }, [IsHeaderVisible]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = () => {
    if (
      window.innerHeight >=
      document.getElementById("footer").getBoundingClientRect().top
    ) {
      setIsFooterVisible(true);
    } else {
      setIsFooterVisible(false);
    }
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <MainContainer id="main-container">
      {/* <CustomParticles /> */}
      <AlertBetaTest />
      <PageContent>
        {IsHeaderVisible && (
          <DesktopHeader
            // IsHeaderVisible={IsHeaderVisible}
            className={IsHeaderVisible ? "sticky" : "out"}
            menuWithMarginBottom
          />
        )}
        <DesktopHeader IsHeaderVisible={IsHeaderVisible} />
        <MainContent>{children}</MainContent>
      </PageContent>
      <GoTopContainer topUpIconIsVisible={topUpIconIsVisible}>
        <ButtonIcon onClick={goToTop}>
          <TopUpIcon />
        </ButtonIcon>
      </GoTopContainer>

      <FooterSection />
    </MainContainer>
  );
};

export default Layout;
