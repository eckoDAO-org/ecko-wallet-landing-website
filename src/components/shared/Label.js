import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import useWindowSize from '../../hooks/useWindowSize';
import theme, { getColor } from '../../styles/theme';

const getConfiguration = (configuration, size, type) => {
  return theme?.[configuration]?.[size]?.[type] || -1;
};

const STYText = styled.span`
  display: flex;
  align-items: center;
  cursor: ${({ onClick }) => onClick && 'pointer'};
  z-index: 1;
  color: ${({ color }) => color};
  font-size: ${({ size, fontSize }) => (!fontSize ? getConfiguration('fontSizes', size, 'desktop') : fontSize)}px;
  line-height: ${({ size }) => size && getConfiguration('lineHeight', size, 'desktop')}px;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    font-size: ${({ size, fontSize }) => (!fontSize ? getConfiguration('fontSizes', size, 'tablet') : fontSize)}px;
    line-height: ${({ size }) => size && getConfiguration('lineHeight', size, 'tablet')}px;
  }
  @media (max-width: ${({ theme: { mediaQueries }, mobilePixel }) => (mobilePixel ? `${mobilePixel - 1}px` : `${mediaQueries.mobilePixel - 1}px`)}) {
    font-size: ${({ size, fontSize }) => (!fontSize ? getConfiguration('fontSizes', size, 'mobile') : fontSize)}px;
    line-height: ${({ size }) => size && getConfiguration('lineHeight', size, 'mobile')}px;
  }

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

  &.f-wrap {
    flex-wrap: wrap;
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
  size,
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
      size={size}
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
  size: PropTypes.oneOf(['big', 'normal']),

  fontFamily: PropTypes.oneOf(['basier', 'syncopate', 'syncopate-regular']),
  onClose: PropTypes.func,
  color: PropTypes.oneOf(['white', 'primary']),
};

Label.defaultProps = {
  fontSize: null,
  size: 'normal',
  fontFamily: 'basier',
  onClick: null,
  color: 'white',
};
