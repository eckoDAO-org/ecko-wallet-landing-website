import { DiscordIcon, GithubIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from '../assets';

export const TWITTER_KADDEX_OFFICIAL = {
  name: '@eckoDAO',
  link: 'https://twitter.com/eckoDAO',
};

export const TWITTER = {
  name: '@eckoWALLET',
  link: 'http://twitter.com/eckoWALLET',
  icon: <TwitterIcon />,
};
export const DISCORD = {
  name: 'Discord',
  link: '',
  icon: <DiscordIcon />,
};

const GITHUB = {
  name: 'Github',
  link: 'https://github.com/eckoDAO-org/ecko-wallet-landing-website',
  icon: <GithubIcon />,
};

const TELEGRAM = {
  name: 'Telegram',
  link: '',
  icon: <TelegramIcon />,
};
const YOUTUBE = {
  name: 'Youtube',
  link: '',
  icon: <YoutubeIcon />,
};

export const SOCIAL_MEDIA = [TWITTER, DISCORD, YOUTUBE, TELEGRAM, GITHUB];
