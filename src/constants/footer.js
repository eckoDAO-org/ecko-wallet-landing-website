import { XWALLET_ANDROID_DOWNLOAD_LINK, XWALLET_BRAVE_DOWNLOAD_LINK, XWALLET_CHROME_DOWNLOAD_LINK, XWALLET_IOS_DOWNLOAD_LINK } from './itemLinks';
import { IosIcon, AndroidIcon, ChromeIcon, BraveIcon } from '../assets';
import { ROUTE_PRIVACY_POLICY, ROUTE_TERMS_OF_USE } from '../router/routes';

export const FOOTER_ABOUT = {
  title: 'ABOUT',
  color: 'yellow',
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
      text: 'Privacy & Policy',
      href: ROUTE_PRIVACY_POLICY,
    },
    {
      text: 'Terms of use',
      href: ROUTE_TERMS_OF_USE,
    },
  ],
};
export const FOOTER_DOWNLOAD = {
  title: 'PRODUCT',
  color: 'primary',
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
  ],
};
export const FOOTER_LEARN = {
  title: 'LEARN',
  color: 'pink',
  items: [
    {
      text: 'Tutorial',
      href: '/',
      target: '_blank',
    },
  ],
};
