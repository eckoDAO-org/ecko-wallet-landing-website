import React from 'react';
import styled from 'styled-components';

const YoutubeContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 600px;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
    height: 250px;
  }

  .video-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;

const YoutubeEmbed = ({ embedId }) => (
  <YoutubeContainer>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      width="100%"
      height="100%"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </YoutubeContainer>
);

export default YoutubeEmbed;
