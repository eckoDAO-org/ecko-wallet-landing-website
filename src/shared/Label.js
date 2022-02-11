import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import useWindowSize from '../hooks/useWindowSize';
import theme, { getColor } from '../styles/theme';

const STYText = styled.span`
  display: flex;
  align-items: center;
  cursor: ${({ onClick }) => onClick && 'pointer'};
  z-index: 1;
  color: ${({ color }) => color};

  svg {
    path {
      fill: ${({ theme: { colors } }) => colors.white};
    }
  }

  &.fit-content {
    width: fit-content;
  }
  &.uppercase {
    text-transform: uppercase;
  }

  &.capitalize {
    text-transform: capitalize;
  }

  &.text-center {
    text-align: center;
    display: blocK;
  }

  &.align-fs {
    align-items: flex-start;
  }

  &.justify-ce {
    justify-content: center;
  }

  &.block {
    display: block;
  }

  &.nowrap {
    white-space: nowrap;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    &.tablet-text-center {
      text-align: center;
    }
  }
`;

const Label = ({
  id,
  className,
  desktopClassName,
  tabletClassName,
  mobileClassName,
  desktopPixel,
  mobilePixel,
  children,
  fontFamily,
  fontSize,
  color,
  style,
  desktopStyle,
  tabletStyle,
  mobileStyle,
  onClick,
}) => {
  const [width] = useWindowSize();

  const getClassName = () => {
    let classname = className;
    if (width >= (desktopPixel || theme.mediaQueries.desktopPixel) && desktopClassName) {
      classname = `${classname} ${desktopClassName} `;
    }
    if (width < (desktopPixel || theme.mediaQueries.desktopPixel) && width >= theme.mediaQueries.mobilePixel && tabletClassName) {
      classname = `${classname} ${tabletClassName} `;
    }
    if (width < (mobilePixel || theme.mediaQueries.mobilePixel) && mobileClassName) {
      classname = `${classname} ${mobileClassName} `;
    }
    return classname;
  };

  return (
    <STYText
      id={id}
      className={getClassName()}
      color={getColor(color)}
      fontSize={fontSize}
      onClick={onClick}
      mobilePixel={mobilePixel}
      style={{
        fontFamily: theme.fontFamily[fontFamily],
        fontSize,
        ...style,
        ...(width >= (desktopPixel || theme.mediaQueries.desktopPixel) && desktopStyle),
        ...(width < (desktopPixel || theme.mediaQueries.desktopPixel) && width >= theme.mediaQueries.mobilePixel && tabletStyle),
        ...(width < (mobilePixel || theme.mediaQueries.mobilePixel) && mobileStyle),
      }}
    >
      {children}
    </STYText>
  );
};

export default Label;

Label.propTypes = {
  children: PropTypes.any.isRequired,
  fontSize: PropTypes.number,

  fontFamily: PropTypes.oneOf(['basier', 'syncopate', 'syncopate-regular']),
  onClose: PropTypes.func,
  color: PropTypes.oneOf(['white', 'primary']),
};

Label.defaultProps = {
  fontSize: null,
  fontFamily: 'basier',
  onClick: null,
  color: 'white',
};
