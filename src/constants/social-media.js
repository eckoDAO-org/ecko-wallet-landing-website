import { DiscordIcon, GithubIcon, MediumIcon, TelegramIcon, TwitterIcon } from '../assets';

export const TWITTER_X_WALLET = {
  name: '@XWalletOfficial',
  link: 'https://twitter.com/xwalletofficial',
};
export const TWITTER_KADDEX_OFFICIAL = {
  name: '@kaddexofficial',
  link: 'https://twitter.com/kaddexofficial',
};

export const TWITTER = {
  name: 'Twitter',
  link: 'https://twitter.com/kaddexofficial',
  icon: <TwitterIcon />,
};
export const DISCORD = {
  name: 'Discord',
  link: 'https://discord.gg/QSJpHRFDcv',
  icon: <DiscordIcon />,
};

const MEDIUM = {
  name: 'Medium',
  link: 'https://medium.com/kaddex',
  icon: <MediumIcon />,
};
const GITHUB = {
  name: 'Github',
  link: 'https://github.com/kaddex-org/home-page',
  icon: <GithubIcon />,
};
const TELEGRAM = {
  name: 'Telegram',
  link: 'https://t.me/KaddeXofficial',
  icon: <TelegramIcon />,
};
export const SOCIAL_MEDIA = [TWITTER, DISCORD, MEDIUM, GITHUB, TELEGRAM];
