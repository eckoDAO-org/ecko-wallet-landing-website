import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../shared/Container';
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
`;

const HandPhone = () => {
  return (
    <HandPhoneWrapper className=" h-100 justify-fe">
      {' '}
      <HandPhoneSVG className="multiply" />
    </HandPhoneWrapper>
  );
};

export default HandPhone;
