import React from 'react';
import { Divider } from 'semantic-ui-react';
import styled from 'styled-components/macro';
import { XWalletHeaderLogo, XWalletLogo } from '../assets';
import XWalletFooterList from '../components/layout/footer/XWalletFooterList';
import { ITEM_LINKS } from '../constants/itemLinks';
import Label from '../shared/Label';
import FlexContainer from './Container';

const IconItem = styled.div`
  display: flex;
  align-items: center;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.basier};
  font-size: 16px;
  color: #ffffff;
  &:hover {
    color: #ffffff;
    text-shadow: 0 0 5px #ffffff;
    & svg {
      margin-right: 10px;
      & path {
        fill: #ffffff;
      }
    }
  }
  & svg {
    margin-right: 10px;
  }
`;

const FooterSection = () => {
  return (
    <FlexContainer id="footer" className="w-100 column" style={{ padding: 30, background: '#171b29' }}>
      <FlexContainer className="w-100 justify-sb" style={{ padding: '0 50px' }}>
        <XWalletLogo />
        <FlexContainer className="column" gap={24}>
          <Label fontSize={32} fontFamily="syncopate">
            X-Wallet
          </Label>
          <XWalletFooterList />
        </FlexContainer>
        <FlexContainer className="column" gap={24}>
          <Label fontSize={32} fontFamily="syncopate">
            Community
          </Label>
          <FlexContainer className="column">
            {Object.values(ITEM_LINKS).map((social, index) => (
              <IconItem
                to="/"
                key={index}
                style={{ paddingBottom: 9, cursor: 'pointer' }}
                onClick={() => window.open(social.link, '_blank', 'noopener,noreferrer')}
              >
                {social.icon}
                {social.label}
              </IconItem>
            ))}
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer className="column" style={{ padding: '0 50px' }}>
        <Divider
          style={{
            margin: ' 24px 0',
            backgroundColor: '#FFFFFF',
            height: 3,
            boxShadow: '0 0 5px #ffffff',
          }}
        />
        <FlexContainer className="justify-sb">
          <XWalletHeaderLogo />
          <Label fontSize={14}>©2021, Privacy Policy</Label>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default FooterSection;
