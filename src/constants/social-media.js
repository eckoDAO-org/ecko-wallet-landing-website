import { DiscordIcon, GithubIcon, MediumIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from '../assets';

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

const MEDIUM = {
  name: 'Medium',
  link: 'https://medium.com/kaddex',
  icon: <MediumIcon />,
};

const GITHUB = {
  name: 'Github',
  link: 'https://github.com/kaddex-org/x-wallet-landing',
  icon: <GithubIcon />,
};

const TELEGRAM = {
  name: 'Telegram',
  link: 'https://t.me/KaddeXofficial',
  icon: <TelegramIcon />,
};
const YOUTUBE = {
  name: 'Youtube',
  link: 'https://www.youtube.com/channel/UCqne8XRfTGTQMr_9BXyfHBg',
  icon: <YoutubeIcon />,
};

export const SOCIAL_MEDIA = [TWITTER, DISCORD, TELEGRAM, MEDIUM, GITHUB];
