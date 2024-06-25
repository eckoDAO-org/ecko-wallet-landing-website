import { XWALLET_ANDROID_DOWNLOAD_LINK, XWALLET_BRAVE_DOWNLOAD_LINK, XWALLET_CHROME_DOWNLOAD_LINK, XWALLET_IOS_DOWNLOAD_LINK } from './itemLinks';
import { IosIcon, AndroidIcon, ChromeIcon, BraveIcon } from '../assets';
import { ROUTE_PRIVACY_POLICY, ROUTE_TERMS_OF_USE } from '../router/routes';

export const FOOTER_ABOUT = {
  title: 'ABOUT',
  color: 'grey',
  items: [
    {
      text: 'Features',
      href: '/#features',
    },
    {
      text: 'Projects',
      href: '/#projects',
    },
    {
      text: 'Analytics',
      href: '/#analytics',
    },
    {
      text: 'Roadmap',
      href: '/#roadmap',
    },
    {
      text: 'Blog',
      href: 'https://blog.ecko.finance',
      target: '_blank',
    },
  ],
};
export const FOOTER_DOWNLOAD = {
  title: 'PRODUCT',
  color: 'grey',
  items: [
    {
      text: 'iOS App',
      href: XWALLET_IOS_DOWNLOAD_LINK,
      target: '_blank',
      icon: <IosIcon />,
    },
    {
      text: 'Android App',
      href: XWALLET_ANDROID_DOWNLOAD_LINK,
      target: '_blank',
      icon: <AndroidIcon />,
    },
    {
      text: 'Chrome Extension',
      href: XWALLET_CHROME_DOWNLOAD_LINK,
      target: '_blank',
      icon: <ChromeIcon />,
    },
    {
      text: 'Brave Extension',
      href: XWALLET_BRAVE_DOWNLOAD_LINK,
      target: '_blank',
      icon: <BraveIcon />,
    },

    {
      text: 'eckoDEX',
      href: 'https://dex.ecko.finance',
      target: '_blank',
    },
    {
      text: 'eckoDAO',
      href: 'https://dao.ecko.finance',
      target: '_blank',
    },
  ],
};
export const FOOTER_LEARN = {
  title: 'LEARN',
  color: 'grey',
  items: [
    /* {
      text: 'Tutorial',
      href: 'https://www.youtube.com/watch?v=829R9FvBAEo',
      target: '_blank',
    }, */
    {
      text: 'Documentation',
      href: 'https://docs.ecko.finance/eckodao/getting-started/eckowallet',
      target: '_blank',
    },
    {
      text: 'Privacy & Policy',
      href: ROUTE_PRIVACY_POLICY,
    },
    {
      text: 'Terms of use',
      href: ROUTE_TERMS_OF_USE,
    },
  ],
};
