import React from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";
import { STYContainer } from "../components/layout/Containers";
import CommunityTestingImage from "../assets/images/png/community-test-image.png";
import Label from "../shared/Label";
import { ITEM_LINKS } from "../constants/itemLinks";

const CommunityMainContainer = styled(STYContainer)`
  flex-direction: row;
  justify-content: flex-start;
  margin: 72px 0;
  height: 100%;
  width: 100%;

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.desktopPixel - 1}px`}) {
    flex-direction: column;
    & > * {
      align-self: self-end;
    }
    & > *:not(:last-child) {
      align-self: self-start;
    }
  }

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
  }

  img {
    width: 650px;
    height: 680px;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.mobilePixel + 1}px`}) {
      max-width: 350px;
      max-height: 350px;
    }
    @media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.smallMobilePixel}px`}) {
      max-width: 300px;
      max-height: 300px;
    }
  }
`;

const TextContainer = styled(STYContainer)`
  max-width: 700px;
  width: 100%;
  padding: 68px;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 40px 16px;
  }
  align-items: flex-start;
  text-align: left;
`;

const Title = styled.span`
  text-align: left;
  margin-bottom: 16px;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 32px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal bold 24px montserrat-bold;
  }
`;

const VersionSup = styled.sup`
  font-size: 24px;
  margin-left: -10px;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel}px`}) {
    font-size: 16px;
    margin-left: -5px;
  }
`;

const CommunityTestingContainer = () => {
  return (
    <CommunityMainContainer id="community">
      <Image src={CommunityTestingImage} alt="community" size="small" />
      <TextContainer>
        <Title>
          X-Wallet <VersionSup>v1.0.0</VersionSup> is live!
        </Title>
        <Label fontFamily="regular" labelStyle={{ display: "inline-block" }}>
          We're beta testing for a reason. In the coming weeks, Kaddex will
          deploy a series of incentives for discovering bugs. Stay tuned to the{" "}
          <Label
            fontFamily="bold"
            labelStyle={{ display: "inline-block", cursor: "pointer" }}
            onClick={() =>
              window.open(
                ITEM_LINKS.TWITTER_KADDEX.link,
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            @KaddeXofficial Twitter,
          </Label>{" "}
          or our{" "}
          <Label
            fontFamily="bold"
            labelStyle={{ display: "inline-block", cursor: "pointer" }}
            onClick={() =>
              window.open(
                ITEM_LINKS.DISCORD.link,
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            http://discord.gg/kaddex
          </Label>{" "}
          for more details on the program.{" "}
        </Label>
      </TextContainer>
    </CommunityMainContainer>
  );
};

export default CommunityTestingContainer;
