/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components/macro';
import { Button as SUIButton } from 'semantic-ui-react';

const STYStyledButton = styled(SUIButton)`
  cursor: ${({ disabled }) => (disabled ? 'default !important' : 'pointer')};
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding:16px;
  font-family: ${({ theme: { fontFamily } }) => `${fontFamily.bold} !important`};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + ' !important' : '16px !important')};
  color: ${({ theme: { colors }, disabled, $color }) => {
    if ($color) return $color + ' !important';
    if (disabled) return `${colors.primary} !important`;
    else return `${colors.white} !important`;
  }};
  background: ${({ theme: { buttonBackgroundGradient }, disabled, background }) => {
    if (background) return background + ' !important';
    if (disabled) return 'transparent !important';
    return buttonBackgroundGradient + '!important';
  }};
  border-radius: 10px !important;
  opacity: 1 !important;
  border: ${({ theme: { colors }, $border }) => {
    if ($border) return $border + ' !important';
    else return `1px solid ${colors.white} !important`;
  }};
  height: 39px;
  svg {
    margin-right: 4px;
    path {
      fill: ${({ theme: { colors } }) => colors.white};
    }
  }
`;

const CustomButton = ({
  props,
  disabled,
  border,
  boxShadow: $boxShadow,
  buttonStyle,
  background,
  color,
  label,
  fontSize,
  children,
  onClick,
  loading,
}) => {
  return (
    <STYStyledButton
      {...props}
      disabled={disabled}
      background={background}
      $color={color}
      fontSize={fontSize}
      style={buttonStyle}
      onClick={onClick}
      loading={loading}
      $border={border}
      $boxShadow={$boxShadow}
    >
      {children || label}
    </STYStyledButton>
  );
};

export default CustomButton;
