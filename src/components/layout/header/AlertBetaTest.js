import React from 'react';
import styled from 'styled-components';
import { NotificationCaution } from '../../../assets';
import Label from '../../../shared/Label';
import { STYRowContainer } from '../Containers';

const STYAlertBetaContainer = styled(STYRowContainer)`
  position: sticky;
  top: 0;
  width: auto;
  justify-content: center;
  z-index:100;
  background-color: ${({ theme: { colors } }) => colors.white};

  padding: 8px;
  svg {
    margin-right: 8px;
    path {
      fill: ${({ theme: { colors } }) => colors.primary};
    }
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
    padding: 16px;
    text-align: center;
    flex-direction: column;
    svg {
      margin-bottom: 8px;
      margin-right: 0px;
    }
  }
`;

const AlertBetaTest = () => {
  return (
    <STYAlertBetaContainer>
      <NotificationCaution className="mobile-none" />
      <Label inverted fontFamily="medium" fontSize={13} labelStyle={{ display: 'inline-block'}}>
      This wallet extension is currently under{' '}
        <Label inverted fontSize={18} labelStyle={{ display: 'inline-block'}}>
          BETA
        </Label>{' '}
        testing      
        </Label>
    </STYAlertBetaContainer>
  );
};

export default AlertBetaTest;
