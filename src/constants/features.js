import { BuySellIcon, CrosschainIcon, DappsIcon, PrivateIcon, SecureCompatibleIcon, SendReceiveStoreIcon } from '../assets';

export const FEATURES = {
  DAPPS: {
    icon: <DappsIcon />,
    title: 'ACCESS YOUR DAPPS',
    description:
      'eckoWALLET is integrated with the majority of NFT and Kadena dApps, as well as eckoDEX, enabling users to exchange, add liquidity and participate in Governance Mining with their tokens.',
    color: '#FFB31C',
  },
  CROSSCHAIN: {
    icon: <CrosschainIcon />,
    title: 'CROSSCHAIN TRANSFER',
    description: 'Easily move your k:assets across all Kadena chains.',
    color: '#FF5B7E',
  },

  SEND: {
    icon: <SendReceiveStoreIcon />,
    title: 'SEND, SWAP, RECEIVE & STORE',
    description: 'Freely Send, Swap, Store and Receive k:assets at any time and unmatched speed.',
    color: '#FF00B8',
  },
  BUY_SELL: {
    icon: <BuySellIcon />,
    title: 'BUY & SELL',
    description: 'Fiat ramps to easily buy and sell KDA directly from your bank account.',
    alert: 'upcoming',
    color: '#FFB31C',
  },
  PRIVATE: {
    icon: <PrivateIcon />,
    title: 'NON-CUSTODIAL & PRIVATE',
    description: 'eckoWALLET will not have access to any of your personal data, address, or private keys.',
    color: '#FF5B7E',
  },
  SECURE: {
    icon: <SecureCompatibleIcon />,
    title: 'SECURE & COMPATIBLE',
    description: 'All generated accounts are k:accounts by default. eckoWALLET is compatible with both iOS and Android, Chrome and Brave.',
    color: '#FF00B8',
  },
};
