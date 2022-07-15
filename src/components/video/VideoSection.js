import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../shared/Container';
import YoutubeEmbed from './YoutubeEmbed';

const BackgroundContainer = styled(FlexContainer)`
  background: transparent #20264e 0% 0% no-repeat padding-box;
  margin-top: -50px;
  @media (min-width: 1500px) {
    padding: 170px 116px 120px;
  }
`;

const VideoSection = () => {
  return (
    <BackgroundContainer
      id="tutorial"
      className="align-ce justify-ce"
      mobileStyle={{ padding: '130px 16px 80px' }}
      tabletStyle={{ padding: '130px 16px 80px' }}
      desktopStyle={{ padding: '170px 90px 120px' }}
    >
      <YoutubeEmbed embedId="nA6qgtZZe74" />
    </BackgroundContainer>
  );
};

export default VideoSection;
