import React from 'react';
import styled from 'styled-components';
import Label from '../shared/Label';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  padding-bottom: 0;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 0;
  }
`;

const HowToInstallContainer = () => {
    return (
        <OuterContainer>
            <Label>
            How to Install

            </Label>
        </OuterContainer>
    );
};

export default HowToInstallContainer;