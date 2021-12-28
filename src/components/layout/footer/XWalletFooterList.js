import React from 'react';
import styled from 'styled-components';
import HeaderItem from '../../../shared/HeaderItem';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const XWalletFooterList = () => {
  return (
    <ListContainer>
      <HeaderItem
        disabledHover
        textRegular
        shadowHover
        onClick={() => window.open('', '_blank', 'noopener,noreferrer')}
      >
      Download      
      </HeaderItem>
      <HeaderItem
        disabledHover
        textRegular
        shadowHover
        onClick={() => window.open('', '_blank', 'noopener,noreferrer')}
      >
        How to install
      </HeaderItem>
    </ListContainer>
  );
};

export default XWalletFooterList;
