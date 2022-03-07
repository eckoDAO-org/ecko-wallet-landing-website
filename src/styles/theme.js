export const getColor = (color) => {
  switch (color) {
    case 'white':
      return theme.colors.white;
    case 'primary':
      return theme.colors.primary;
    case 'blue':
      return theme.colors.blue;
    default:
      return '#ffffff';
  }
};

export const configuration = {
  fontSizes: {
    huge: { desktop: 40, tablet: 30, mobile: 20 },
    big: { desktop: 30, tablet: 24, mobile: 16 },
    medium: { desktop: 16, tablet: 14, mobile: 12 },
    normal: { desktop: 12, tablet: 12, mobile: 12 },
  },
  lineHeight: {
    huge: { desktop: 62.5, tablet: 50, mobile: 40 },
    big: { desktop: 37.5, tablet: 30, mobile: 24 },
    medium: { desktop: 28, tablet: 24, mobile: 20 },

    normal: { desktop: 21, tablet: 21, mobile: 21 },
  },
};

export const theme = {
  header: {
    height: 87,
  },
  mediaQueries: {
    mobileBreakpoint: '48rem',
    mobilePixel: 768,
    smallMobilePixel: 320,
    desktopPixel: 1024,
    footerMinWidth: '50rem',
  },
  colors: {
    primary: '#0A0B1D',
    white: '#FFFFFF',
    blue: '#95CFF5',
  },
  fontFamily: {
    regular: 'montserrat-regular',
    italic: 'montserrat-italic',
    bold: 'montserrat-bold',
    boldItalic: 'montserrat-bold-italic',
    syncopate: 'syncopate-bold',
    'syncopate-regular': 'syncopate-regular',
    basier: 'basier-square-mono-regular',
  },
  ...configuration,
};

export default theme;
