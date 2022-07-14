import React from 'react';
import styled from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';

const ProjectButtonContainer = styled(FlexContainer)`
  background: #ffffff33 0% 0% no-repeat padding-box;
  &:hover {
    background: #ffffff4d 0% 0% no-repeat padding-box;
  }
  border-radius: 250px;
  padding: 24px;
  min-width: 268px;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
    height: 24px;
    min-width: 0px;
    padding: 6px 8px;
    svg {
      width: 12px;
    }
    span {
      font-size: 8px;
    }
  }
  @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) and (max-width: 1500px) {
    height: 50px;
    min-width: 100px;
    padding: 10px 15px;
    svg {
      width: 20px;
    }
    span {
      font-size: 16px;
    }
  }
`;

const ProjectButton = ({ token }) => {
  const [width] = useWindowSize();
  return (
    <ProjectButtonContainer
      gap={width < 880 ? 4 : 16}
      className="justify-ce align-ce pointer"
      onClick={() => window.open(token.link, '_blank', 'noopener,noreferrer')}
    >
      {token.icon}
      <Label fontFamily="syncopate" size="normal">
        {token.name}
      </Label>
    </ProjectButtonContainer>
  );
};

export default ProjectButton;
