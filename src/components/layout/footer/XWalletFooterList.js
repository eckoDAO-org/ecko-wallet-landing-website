import React from "react";
import styled from "styled-components";
import HeaderItem from "../../../shared/HeaderItem";
import { XWALLET_FILENAME } from "../../../constants/itemLinks";

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
        href={`${window.location.origin}/${XWALLET_FILENAME}`}
      >
        Download
      </HeaderItem>
      <HeaderItem disabledHover textRegular shadowHover href="/how-to-install">
        How to install
      </HeaderItem>
    </ListContainer>
  );
};

export default XWalletFooterList;
