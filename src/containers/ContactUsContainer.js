import React from 'react';
import styled from 'styled-components';
import { STYButtonContainer } from '../components/layout/Containers';
import CustomButton from '../components/shared/CustomButton';
import theme from '../styles/theme';

const ButtonContainer = styled(STYButtonContainer)`
  padding: 0px 0px 72px;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
    padding: 0px 16px 72px;
  }

  & > * {
    width: 600px;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
      width: 100%;
      margin-bottom: 40px;
    }
  }
`;

const ContactUsContainer = () => {
  return (
    <ButtonContainer>
      <CustomButton
        background={theme.colors.white}
        color={theme.colors.primary}
        onClick={() => {
          window.location = 'mailto:xwallet@kaddex.com';
        }}
      >
        Contact Us
      </CustomButton>
    </ButtonContainer>
  );
};

export default ContactUsContainer;
