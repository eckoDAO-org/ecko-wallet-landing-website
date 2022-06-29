import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *, *:before, *:after {
      -webkit-box-sizing: inherit;
      -moz-box-sizing: inherit;
      box-sizing: inherit;
    }

    /* remove mobile highlight on tap */
    div {
    -webkit-tap-highlight-color: transparent;
    }
    *:focus {
      outline: none;
    }

    html {
      width: 100%;
      min-height: 100%;
      box-sizing: border-box;
      scroll-behavior: smooth;

    };

    body {
      margin: 0;
      width: 100%;
      min-height: 100%;
      line-height: inherit;
      min-width: 0;
      font-family: ${({ theme: { fontFamily } }) => fontFamily.basier};
      background-attachment: fixed;
      opacity: 1;
      background-color: ${({ theme: { colors } }) => colors.darkBlue};
      overflow-x: hidden;

      
    };

    #root {
      height: 100%;
      overflow: hidden;
      & > div:first-child {
        display: flex;
        flex-flow: column;
        height: 100%;
      }
    }

    a {
      text-decoration: none;
    }

    .ui.input>input {
      background: transparent 0% 0% no-repeat padding-box;
      color: #fff;
      border-radius: 4px;
    }

    .ui.input>input:active, .ui.input>input:focus {
      background: transparent 0% 0% no-repeat padding-box;
      color: #fff;
    }

    .ui.disabled.button {
      opacity: 1 !important;
    }

    .desktop-none {
      @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel}px`}) {
        display: none !important;
      }
    }

    .desktop-only {
      @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
        display: none !important;
      }
    }

    .mobile-none {
      @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
        display: none !important;
      }
    }

    .mobile-only {
      @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
        display: none !important;
      }
    }

    .flex {
      display: flex;
    }
    .self-end {
      justify-self: flex-end;
    }
    .self-start {
      justify-self: flex-start;
    }
    .self-align-end {
      align-self: flex-end;
    }
    .self-align-start {
      align-self: flex-start;
    }

    &.hide-scrollbar {
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  }
  .pointer {
    cursor: pointer;
  }

  .scroll-mt {
    scroll-margin-top: 115px;
  }
  .align-fs {
    align-items: flex-start;
  }

  .align-fe {
    align-items: flex-end;
  }

  .align-ce {
    align-items: center;
  }

  .justify-ce {
    justify-content: center;
  }

  .justify-sb {
    justify-content: space-between;
  }
  .justify-sa {
    justify-content: space-around;
  }

  .justify-fe {
    justify-content: flex-end;
  }

  .justify-fs {
    justify-content: flex-start;
  }

  .absolute {
    position: absolute;
  }

  .fixed {
    position: fixed;
  }

  .relative {
    position: relative;
  }

  .w-100 {
    width: 100%;
  }
  .h-100 {
    height: 100%;
  }

  .flex-1 {
    flex: 1;
  }

  .h-fit-content {
    height: fit-content;
  }

  .column {
    flex-direction: column;
  }

  .column-reverse {
    flex-direction: column-reverse;
  }
  .z1{
   z-index: 1;
  }
  .z-1{
   z-index: -1;
  }
  .margin-auto{
   margin:auto;
  }

`;
