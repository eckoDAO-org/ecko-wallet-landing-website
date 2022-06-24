import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../shared/Container';
import HandPhonePNG from '../../assets/images/features/hand_phone.png';
import SplashPhonePNG from '../../assets/images/features/splash_phone.png';
import useWindowSize from '../../hooks/useWindowSize';
import { HandPhoneSVG } from '../../assets';

const HandPhoneWrapper = styled(FlexContainer)`
  position: relative;

  .multiply {
    /* mix-blend-mode: multiply; */
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
      max-width: 400px;
      height: 800px;
    }
    @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
      max-width: 845px;
      max-height: 1555px;
    }

    @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel}px`}) {
      max-width: 639px;
      max-height: 1167px;
    }
  }

  .over-image {
    position: absolute;
    transform: scale(0.58);
    left: ${({ imgWidth }) => imgWidth}px;
    bottom: ${({ scaleHeight }) => scaleHeight / 5.3}px;
  }
`;

const HandPhone = () => {
  // WORK IN PROGRESS
  const [width, height] = useWindowSize();
  const [imgWidth, setImgWidth] = useState(null);

  // useEffect(() => {
  //   const imgToResize = document.getElementById('splash');
  //   imgToResize && console.log('LOG --> imgToResize', imgToResize.offsetHeight);
  //   setImgWidth(imgToResize.offsetHeight - 20);
  // }, [height, width]);

  return (
    <HandPhoneWrapper imgWidth={imgWidth} scaleHeight={height} className=" h-100 justify-fe">
      {' '}
      <HandPhoneSVG className="multiply" />
      {/* <img src={SplashPhonePNG} className="over-image" alt="hand_phone_x_wallet" id="splash" /> */}
    </HandPhoneWrapper>
  );
};

export default HandPhone;
