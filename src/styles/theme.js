export const getColor = (color) => {
  switch (color) {
    case "white":
      return theme.colors.white;
    case "primary":
      return theme.colors.primary;
    default:
      return "#ffffff";
  }
};

export const theme = {
  layout: {
    desktopWidth: "80%",
    mobileWidth: "95%",
    mainContentPadding: 24,
  },
  header: {
    height: 56,
  },
  mediaQueries: {
    mobileBreakpoint: "48rem",
    mobilePixel: 768,
    smallMobilePixel: 320,
    desktopPixel: 1024,
    footerMinWidth: "50rem",
  },
  colors: {
    primary: "#0A0B1D",
    border: "#ECEBEC",
    pink: "#D20790",
    purple: "#240b2f",
    white: "#FFFFFF",
    purpleKDX: "#471155",
  },
  fontFamily: {
    regular: "montserrat-regular",
    italic: "montserrat-italic",
    bold: "montserrat-bold",
    boldItalic: "montserrat-bold-italic",
    syncopate: "syncopate-bold",
    "syncopate-regular": "syncopate-regular",
    basier: "basier-square-mono-regular",
  },
  inputTokenWidth: 78,
  inputSelectButtonWidth: 81,
  buttonBackgroundGradient: "transparent",
};

export default theme;
