import { BuySellIcon, CrosschainIcon, DappsIcon, PrivateIcon, SecureCompatibleIcon, SendReceiveStoreIcon } from '../assets';

export const FEATURES = {
  DAPPS: {
    icon: <DappsIcon />,
    title: 'ACCESS YOUR DAPPS',
    description:
      'eckoWALLET is integrated with the majority of NFT and Kadena dApps, as well as eckoDEX, enabling users to exchange, stake, and add liquidity with their tokens.',
    color: '#F3BD2F',
  },
  CROSSCHAIN: {
    icon: <CrosschainIcon />,
    title: 'CROSSCHAIN TRANSFER',
    description: 'Easily move your k:assets across all Kadena chains.',
    color: '#FA41A5',
  },

  SEND: {
    icon: <SendReceiveStoreIcon />,
    title: 'SEND, SWAP, RECEIVE & STORE',
    description: 'Freely Send, Swap, Store and Receive k:assets at any time and unmatched speed.',
    color: '#04C9E4',
  },
  BUY_SELL: {
    icon: <BuySellIcon />,
    title: 'BUY & SELL',
    description: 'Fiat ramps to easily buy and sell KDA directly from your bank account.',
    alert: 'upcoming',
    color: '#F3BD2F',
  },
  PRIVATE: {
    icon: <PrivateIcon />,
    title: 'NON-CUSTODIAL & PRIVATE',
    description: 'eckoWALLET will not have access to any of your personal data, address, or private keys.',
    color: '#FA41A5',
  },
  SECURE: {
    icon: <SecureCompatibleIcon />,
    title: 'SECURE & COMPATIBLE',
    description: 'All generated accounts are k:accounts by default. eckoWALLET is compatible with both iOS and Android, Chrome and Brave.',
    color: '#04C9E4',
  },
};
