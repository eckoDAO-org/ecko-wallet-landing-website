import React from 'react';
import styled from 'styled-components';
import { XWALLET_DOWNLOAD_LINK } from '../../../constants/itemLinks';
import HeaderItem from '../../shared/HeaderItem';

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
      <HeaderItem disabledHover textRegular shadowHover href={XWALLET_DOWNLOAD_LINK} target="_blank" className="analytics">
        Download
      </HeaderItem>
    </ListContainer>
  );
};

export default XWalletFooterList;
