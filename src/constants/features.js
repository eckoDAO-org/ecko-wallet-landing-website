import { CrosschainIcon, DappsIcon, NonCustodialIcon, PrivateIcon, SecureCompatibleIcon, SendReceiveStoreIcon } from '../assets';

export const FEATURES = {
  DAPPS: {
    icon: <DappsIcon />,
    title: 'ACCESS YOUR DAPPS',
    description: 'X-Wallet will be your key to discover the only infinitely scalable blockchain network, from DeFi to NFTs, and much more!',
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
    title: 'SEND, RECEIVE & STORE',
    description: 'Freely Send, Store and Receive k:assets at any time and unmatched speed.',
    color: '#04C9E4',
  },
  NONCUSTODIAL: {
    icon: <NonCustodialIcon />,
    title: 'NON-CUSTODIAL',
    description: 'X-Wallet will not have access to any of your personal data, address, or private keys.',
    color: '#F3BD2F',
  },
  PRIVATE: {
    icon: <PrivateIcon />,
    title: 'PRIVATE',
    description: 'X-Wallet will never keep track of your activities.',
    color: '#FA41A5',
  },
  SECURE: {
    icon: <SecureCompatibleIcon />,
    title: 'SECURE & COMPATIBLE',
    description: 'All generated accounts are k:accounts by default. X-Wallet is compatible with both iOS and Android, Chrome and Brave.',
    color: '#04C9E4',
  },
};
