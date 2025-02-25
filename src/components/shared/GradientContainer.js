import React from 'react';
import styled, { css } from 'styled-components/macro';
import { FlexContainer } from './Container';

const STYContainer = styled(FlexContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  padding: ${({ padding = 16 }) => padding}px;
  background: ${({ theme: { backgroundContainer }, backgroundColor }) => backgroundColor || backgroundContainer};
  border-radius: 30px;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 16px;
  }
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(50px);
  ${({ gap }) => {
    if (gap) {
      return css`
        & > *:not(:last-child) {
          margin-bottom: ${() => (typeof rowGap === 'number' ? gap : 16)}px;
        }
      `;
    }
    return null;
  }}
`;

export const STYGradientBorder = styled.div`
  border-radius: 30px; /*1*/
  border: 1px solid #fff; /*2*/
  background: transparent;

  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  z-index: -10;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
`;

const GradientContainer = ({ className, children, padding, gap, style, backgroundColor, onClick }) => {
  return (
    <STYContainer className={className} padding={padding} gap={gap} style={style} backgroundColor={backgroundColor} onClick={onClick}>
      <STYGradientBorder onClick={onClick} />
      {children}
    </STYContainer>
  );
};

export default GradientContainer;
