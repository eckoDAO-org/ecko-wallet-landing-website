import React from 'react';
import styled from 'styled-components';
import { XWALLET_DOWNLOAD_LINK } from '../../../constants/itemLinks';
import CustomButton from '../../../shared/CustomButton';

const RightContainerHeader = styled.div`
  display: flex;
  align-items: center;
`;
const RightHeaderItems = () => {
  return (
    <RightContainerHeader>
      <CustomButton customClass="analytics" onClick={() => window.open(XWALLET_DOWNLOAD_LINK, '_blank', 'noopener,noreferrer')}>
        Download
      </CustomButton>
    </RightContainerHeader>
  );
};

export default RightHeaderItems;
