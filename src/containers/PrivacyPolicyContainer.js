import React from 'react';
import styled from 'styled-components';
import { EckoWalletFooterLogo } from '../assets';
import { FlexContainer } from '../components/shared/Container';
import Label from '../components/shared/Label';

const PrivacyPolicyWrapper = styled(FlexContainer)`
  padding: 64px 180px;
  padding-bottom: 0;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 16px;
  }
`;

const PrivacyPolicyContainer = () => {
  return (
    <PrivacyPolicyWrapper className="justify-ce align-ce column w-100 h-100 margin-auto">
      <EckoWalletFooterLogo style={{ marginBottom: 32 }} />
      <FlexContainer className="column align-ce justify-ce margin-auto" gap={40} style={{ marginBottom: 172 }}>
        <Label fontSize={48} mobileStyle={{ fontSize: 32 }} fontFamily="syncopate">
          eckoWALLET Privacy Policy
        </Label>
        <Label fontSize={22} fontFamily="medium">
          Last Updated: February 20, 2023
        </Label>
        <Label fontSize={20} fontFamily="medium">
          This Privacy Policy is entered into by and between you and eckoDAO, a Swiss non-profit association (collectively, the “Company,” “we,” or
          “us”) and eckoHUB DMCC, a UAE LLC which hosts eckoWALLET IP for the association.
          <br />
          <br />
          At eckoDAO, we are committed to protecting your privacy and the security of your personal data. This Privacy Policy for eckoWALLET explains
          how we collect, use, and share data in connection with our non-custodial wallet service (the "Services"). By using the Services, you agree
          to the terms of this Policy.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Data We Collect
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We collect non-identifiable data, including the number of users, session statistics, and approximate geolocation, through the use of Google
          Analytics. We do not store IP addresses in a way that can be correlated to a user. In addition, we collect transaction data, blockchain
          wallet address, and assets held by your address, which may be related to the data we collect, but we cannot edit or delete information
          stored on a particular blockchain.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          How We Use Data
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We use the data we collect to help improve and customize the Services and to protect against, investigate and stop fraudulent, unauthorized,
          or illegal activity.
        </Label>
        <Label fontSize={32} fontFamily="medium">
          How We Share Data
        </Label>
        <Label fontSize={20} fontFamily="medium">
          As necessary, we may share the data we collect with our service providers and vendors to provide, deliver, and improve the Services. We may
          also share data to comply with our legal obligations, to protect against fraudulent or illegal activity, or in the event of a business
          transaction. We do not share data with third parties for marketing purposes.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          How We Store Data
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We will retain the data we collect only for as long as is necessary for the purposes set out in this Policy. We will retain and use this
          data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Disclosures for European Union Data Subjects
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We process the data we collect, including personal data, for the purposes described in the section titled "How We Use Data". Our bases for
          processing this data include consent, performance of a contract, compliance with a legal obligation, and/or legitimate interests. Your
          rights under the GDPR include the right to access, rectify, erase, object to, restrict processing, and portability of your personal data.
          Additionally, you may withdraw your consent to our collection at any time. Please note that we may retain information as necessary to
          fulfill the purpose for which it was collected and may continue to do so even after a data subject request in accordance with our legitimate
          interests, including to comply with our legal obligations, resolves disputes, prevent fraud, and enforce our agreements.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          California Consumer Privacy Act
        </Label>
        <Label fontSize={20} fontFamily="medium">
          Under the CCPA, California residents have certain rights with respect to their personal data, including the right to know, request deletion,
          opt-out of data sales, and not be discriminated against for exercising any of these rights. We do not sell personal information and you may
          submit a request to contact@ecko.finance.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Changes to Privacy Policy
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We may update this Policy from time to time to reflect changes in our data collection, use, and sharing practices. We encourage you to
          review this Policy periodically for any updates.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Contact Us
        </Label>
        <Label fontSize={20} fontFamily="medium">
          If you have any questions or concerns about our data collection, use, and sharing practices, or if you wish to exercise your rights under
          GDPR or CCPA, please contact us at contact@ecko.finance.
        </Label>
      </FlexContainer>
    </PrivacyPolicyWrapper>
  );
};

export default PrivacyPolicyContainer;
