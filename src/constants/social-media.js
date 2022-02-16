import { DiscordIcon, GithubIcon, TwitterIcon } from '../assets';

export const TWITTER_KADDEX_OFFICIAL = {
  name: '@kaddexofficial',
  link: 'https://twitter.com/kaddexofficial',
};

export const TWITTER = {
  name: '@XWalletOfficial',
  link: 'https://twitter.com/xwalletofficial',
  icon: <TwitterIcon />,
};
export const DISCORD = {
  name: 'Discord',
  link: 'https://discord.gg/QSJpHRFDcv',
  icon: <DiscordIcon />,
};

const GITHUB = {
  name: 'Github',
  link: 'https://github.com/kaddex-org/x-wallet-landing',
  icon: <GithubIcon />,
};

export const SOCIAL_MEDIA = [TWITTER, DISCORD, GITHUB];
