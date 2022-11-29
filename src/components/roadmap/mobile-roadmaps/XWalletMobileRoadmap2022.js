import React from 'react';
import styled from 'styled-components';
import { RoadmapFlagcon } from '../../../assets';
import { getColor } from '../../../styles/theme';
import { FlexContainer } from '../../shared/Container';
import Label from '../../shared/Label';

const Line = styled(FlexContainer)`
  position: absolute;
  border-left: 3px solid #fff;
  top: 0;
  bottom: 0;
  left: 35px;
  ::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 52%;
    background: ${({ color }) => getColor(color)};
    top: 0;
    bottom: 0;
    left: -3px;
  }
`;

const XWalletMobileRoadmap2022 = ({ color }) => {
  return (
    <FlexContainer className="column justify-sb relative w-100" style={{ padding: '20px 0' }}>
      <Line color={color} />
      {Object.values(CONFIGURATION)
        .sort((a, b) => a.position - b.position)
        .map((value, i) => {
          return (
            <FlexContainer
              key={i}
              style={{ paddingLeft: 28.5, zIndex: 2, marginTop: value.isMain && 20 }}
              onClick={() => {
                if (value.href) {
                  window.open(value.href, '_blank');
                }
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: 16,
                  width: 16,
                  background: getColor(value?.isMain ? 'pink' : value.isCompleted ? color : 'white'),
                  borderRadius: '50%',
                }}
              >
                {value?.isMain && <RoadmapFlagcon style={{ position: 'absolute', width: 40, left: 3, bottom: 8, zIndex: 4 }} />}
              </div>

              <FlexContainer className="column" gap={8} key={i} style={{ marginLeft: 10 }}>
                {value?.text?.map((tspan, j) => (
                  <Label key={j} fontSize={tspan.fontSize || 15} color={value?.isMain ? 'pink' : value.isCompleted ? color : 'white'}>
                    {tspan.text}
                  </Label>
                ))}
              </FlexContainer>
            </FlexContainer>
          );
        })}
    </FlexContainer>
  );
};

export default XWalletMobileRoadmap2022;

const CONFIGURATION = {
  BETA_RELEASE: {
    position: 0,
    text: [{ text: 'Beta release' }],
    isCompleted: true,
  },
  X_WALLET_V1: {
    position: 1,
    text: [{ text: 'X-Wallet v1' }],

    isCompleted: true,
  },
  GOOGLE_CHROME_STORE: {
    position: 2,
    text: [{ text: 'Google Chrome Store' }],

    isCompleted: true,
  },
  KADDEX_INTEGRATION: {
    position: 3,
    text: [{ text: 'Kaddex Integration' }],
    isCompleted: true,
  },
  KD_LAUNCH_INTEGRATION: {
    position: 4,
    text: [{ text: 'KDLaunch integration' }],
    isCompleted: true,
  },

  BAND_REFRESH: {
    position: 5,
    text: [{ text: 'Brand Refresh' }],
    isCompleted: true,
  },

  MOBILE_APP: {
    position: 6,
    text: [{ text: 'Mobile app' }],
    isCompleted: true,
  },
  DOWNLOADS: {
    position: 7,
    text: [{ text: '30,000 Downloads' }],
    isCompleted: true,
  },
  X_WALLET_V2: {
    position: 8,
    text: [{ text: 'X-Wallet v2' }],
    isCompleted: true,
    isMain: true,
  },
  SWAP_FUNTIONALITY: {
    position: 9,
    text: [{ text: 'Swap Functionality' }],
    isCompleted: false,
  },
  AUDITING: {
    position: 10,
    text: [{ text: 'Auditing' }],
    isCompleted: false,
  },

  FIAT_ON_RAMP: {
    position: 11,
    text: [{ text: 'Fiat on Ramp' }],
    isCompleted: false,
  },

  SDK_EASY_INTEGRATION_KIT: {
    position: 12,
    text: [{ text: 'SDK easy integration kit' }],
    isCompleted: false,
  },
  NFTs_INTEGRATION: {
    position: 13,
    text: [{ text: 'NFTs integration' }],
    isCompleted: false,
  },
  FIAT_OFF_RAMP: {
    position: 14,
    text: [{ text: 'Fiat off Ramp' }],

    isCompleted: false,
  },
};
