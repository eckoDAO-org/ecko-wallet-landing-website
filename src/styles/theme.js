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
    huge: { desktop: 60, tablet: 50, mobile: 32 },
    big: { desktop: 32, tablet: 32, mobile: 24 },
    medium: { desktop: 24, tablet: 24, mobile: 24 },
    normal: { desktop: 16, tablet: 16, mobile: 16 },
  },
  lineHeight: {
    huge: { desktop: 75, tablet: 65, mobile: 50 },
    big: { desktop: 42, tablet: 42, mobile: 42 },
    medium: { desktop: 42, tablet: 42, mobile: 42 },

    normal: { desktop: 26, tablet: 26, mobile: 26 },
  },
};

export const theme = {
  layout: {
    desktopWidth: '80%',
    mobileWidth: '95%',
    mainContentPadding: 24,
  },
  header: {
    height: 56,
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
