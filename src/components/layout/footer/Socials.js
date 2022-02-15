import React from 'react';
import styled from 'styled-components/macro';
import { SOCIAL_MEDIA } from '../../../constants/social-media';
import FlexContainer from '../../shared/Container';

const Social = styled(FlexContainer)`
  cursor: pointer;
  &:hover {
    span {
      text-shadow: 0 0 5px #ffffff;
    }
    & svg {
      & path {
        fill: #ffffff;
      }
    }
  }
`;

const Socials = () => {
  return (
    <FlexContainer className="h-fit-content f-wrap" gap={24} style={{ rowGap: 24 }}>
      {SOCIAL_MEDIA.map((social, i) => (
        <Social key={i} className="h-fit-content" gap={10} onClick={() => window.open(social.link, '_blank', 'noopener,noreferrer')}>
          {social.icon}
        </Social>
      ))}
    </FlexContainer>
  );
};

export default Socials;
