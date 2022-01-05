import React from "react";
import styled from "styled-components";

import CustomButton from "../../../shared/CustomButton";

import { downloadFile } from "../../../utils";

const RightContainerHeader = styled.div`
  display: flex;
  align-items: center;
`;
const RightHeaderItems = ({ pact, menuWithMarginBottom }) => {
  return (
    <RightContainerHeader>
      <CustomButton customClass="analytics" onClick={downloadFile}>
        Download
      </CustomButton>
      {/* <HeaderItem
        style={{
          marginLeft: '32px',
        }}
        disabledHover
      >
        <Popup
          basic
          trigger={<HamburgerIcon />}
          on='click'
          offset={[8, 20]}
          position='bottom right'
          style={{
            padding: 16,
            background: '#240B2F 0% 0% no-repeat padding-box',
            border: '2px solid #FFFFFF',
            boxShadow: '0 0 5px #FFFFFF',
            borderRadius: '10px',
            marginTop: menuWithMarginBottom
              ? window.innerWidth <= theme.mediaQueries.mobilePixel
                ? '1em'
                : '2em'
              : '0',
          }}
        >
          <HamburgerListContainer>
            {Object.values(ITEM_LINKS).map((social, index) => (
              <HamburgerItem
                to='/'
                key={index}
                // style={{ paddingBottom: 8 }}
                onClick={() =>
                  window.open(social.link, '_blank', 'noopener,noreferrer')
                }
              >
                {social.icon}
                {social.label}
              </HamburgerItem>
            ))}
          </HamburgerListContainer>
        </Popup>
      </HeaderItem> */}
    </RightContainerHeader>
  );
};

export default RightHeaderItems;
