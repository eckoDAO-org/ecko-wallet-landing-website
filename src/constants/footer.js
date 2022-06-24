import { XWALLET_DOWNLOAD_LINK } from './itemLinks';

export const FOOTER_ABOUT = {
  title: 'ABOUT',
  color: 'yellow',
  items: [
    {
      text: 'Features',
      href: 'features',
    },
    {
      text: 'Projects',
      href: 'projects',
    },
    {
      text: 'Analytics',
      href: 'analytics',
    },
    {
      text: 'Roadmap',
      href: 'roadmap',
    },
  ],
};
export const FOOTER_DOWNLOAD = {
  title: 'PRODUCT',
  color: 'primary',
  items: [
    {
      text: 'iOS App',
      href: '/',
      target: '_blank',
    },
    {
      text: 'Android App',
      href: '/',
      target: '_blank',
    },
    {
      text: 'Chrome Extension',
      href: XWALLET_DOWNLOAD_LINK,
      target: '_blank',
    },
    {
      text: 'Brave Extension',
      href: '/',
      target: '_blank',
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
