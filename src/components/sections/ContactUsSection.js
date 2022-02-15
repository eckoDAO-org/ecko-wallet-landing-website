import React from 'react';
import styled from 'styled-components';
import CustomButton from '../shared/CustomButton';
import FlexContainer from '../shared/Container';
import { theme } from '../../styles/theme';

const ButtonContainer = styled(FlexContainer)`
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
    padding: 0px 16px;
  }

  & > * {
    width: 600px;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
      width: 100%;
      margin-bottom: 40px;
    }
  }
`;

const ContactUsSection = () => {
  return (
    <ButtonContainer className="justify-ce align-ce">
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

export default ContactUsSection;
