import React from 'react';
import styled from 'styled-components';
import { XWalletLogo } from '../assets';
import { STYColumnContainer } from '../components/layout/Containers';
import Label from '../shared/Label';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 64px 180px;
  padding-bottom: 0;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 16px;
  }
`;

const Intro = styled(STYColumnContainer)`
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 72px;
`;

const HowToInstallContainer = () => {
  return (
    <OuterContainer id='ux'>
      <XWalletLogo style={{ marginBottom: 32 }} />
      <Intro gap={40}>
        <Label fontSize={48}>Kaddex Wallet Privacy Policy</Label>
        <Label fontSize={22} fontFamily='medium'>
          Last Updated: March 22, 2022
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          X Wallet is a software service accessible via a mobile device
          application and a browser service for the Kaddex Network (the
          "Network") distributed by Kaddex US Holdings, Inc., a Delaware
          corporation, and Kaddex DAO, a Swiss non-profit association
          (collectively, "Kaddex" or "we" or "us" or "our") that enables users
          to (i) self custody digital assets; (ii) access a digital asset
          browser and link to decentralized applications and decentralized
          exchanges; (iii) view addresses and information that are part of
          digital asset networks and broadcast transactions; and (iv) additional
          functionality as Kaddex may add to the app from time to time
          (collectively, the "App" or "X Wallet"). This Privacy Policy ("Privacy
          Policy") helps explain how we collect, use, store, and protect your
          information when you use the App, our developer software, or our
          website at https://xwallet. kaddex .com/ (collectively the
          "Services"). Please also read X Wallet’s Terms of Service (the
          “Terms”), which describe the terms under which you use the Services.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Information We Collect
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          We receive or collect information when we operate and provide our
          Services, including when you install, access, or use our Services.
          <br />
          <br />
          Information you provide
          <br />
          <br /> ● Your Account Information - In order to create a X Wallet
          account, you will provide us with a username. You may also voluntarily
          add other information, such as a username. <br />● Your Transactions -
          Your Network private key, which you utilize to access your funds and
          initiate transactions, is stored only on your own device. However, to
          facilitate your transactions and provide you with your account
          balance, we store the Network public key address associated with your
          Network private key.
          <br />● Customer Support - We may collect additional information you
          may disclose to our customer Kaddexsupport team. <br />
          <br />
          Information we collect from our affiliates <br />
          <br />
          Our "family of companies" is the group of companies related to us by
          common control or ownership ("Affiliates"). In accordance with
          applicable law, we may obtain information about you from our
          Affiliates as a normal part of conducting business with you, such as
          when you link your Kaddex account to your Wallet account, so that we
          may offer our Affiliates' Services to you (e.g., convert
          cryptocurrency into fiat and make withdrawals into your bank account).
          <br />
          <br />
          Automatically collected information <br />
          <br />● Metrics and Performance Data - We may collect service-related,
          diagnostic, and performance information. This includes high level
          information about your activity (such as how you use our Services and
          how you interact with others using our Services), and diagnostic,
          crash, website, and performance logs and reports.
          <br /> ● Device and Connection Information - We may collect
          device-specific information when you install, access, or use our
          Services. This may include your IP address and, if you choose to allow
          push notifications through X Wallet, your device's unique push token.
          We may also temporarily collect information about decentralized
          applications (dapps) that you are connecting to, while establishing
          that connection. <br />● Status Information - We may collect
          information about your online status on our Services, such as when you
          last used our Services (your "last seen status").
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          How We Use The Information We Collect
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          Our primary purpose in collecting information is to help us operate,
          provide, improve, customize, support, and market our Services. We may
          use your information to:
          <br />
          <br />
          ● Provide the Services and customer support you request;
          <br />
          ● Resolve disputes and troubleshoot problems;
          <br />
          ● Prevent and investigate potentially prohibited or illegal
          activities, and/or violations of our posted User Agreement;
          <br />
          ● Customize, measure, and improve the Services and the content and
          layout of our application; and
          <br />
          ● Deliver targeted marketing and service update notices based on your
          communications preferences.
          <br />
          ● We will not use your information for purposes other than those
          purposes we have disclosed to you, without your permission.
          <br />
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Affiliate Sharing
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          Our Kaddex family of companies or affiliates: Our "family of
          companies" is the group of companies related to us by common control
          or ownership ("Affiliates"). We may share your information with our
          Affiliates if you link your X Wallet with your X account, as part of
          the normal conduct of business and in order to offer products and
          services to you.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Marketing
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          We will never sell or rent your information to third parties. If you
          link your X Wallet with your Kaddex account, you may receive marketing
          from our Affiliates in accordance with your communication preferences
          associated with your Kaddex account. You can manage your preferences
          within your Kaddex account. You can also manage your connected
          accounts in your Wallet settings.
          <br />
          <br />
          Any communications we send to you will either be related to your
          account or will be related to the Services. In the event we send any
          communication to you which is not related specifically to your
          account, we will provide you with an "unsubscribe" mechanism through
          which you may opt out of receiving other similar messages in the
          future.
          <br />
          <br />
          We do not allow third-party banner ads on X Wallet, but if we ever do,
          we will update this policy.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          How Your Information Is Shared With Other X Wallet Users
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          If you use your account to engage in a transaction with another user,
          that user will have access to your transaction information. Users with
          whom you interact with may store or re- share your information with
          others, on or off of our Services. We, however, will never store your
          transaction information.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          How We Share Information With Third Parties
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          We work with third-party providers to help us operate, provide,
          improve, customize, support, and market our Services. For example, we
          work with companies to distribute our apps, provide our
          infrastructure, delivery, and other systems. These providers may
          provide us information about you in certain circumstances; for
          example, app stores may provide us reports to help us diagnose and fix
          service issues.
          <br />
          <br />
          We may also share information with law enforcement, government
          officials, or other third parties when:
          <br />
          <br />
          ● We are compelled to do so by a subpoena, court order, or similar
          legal procedure; or
          <br />
          ● We believe in good faith that the disclosure of personal information
          is necessary to prevent physical harm or financial loss, to report
          suspected illegal activity or to investigate violations of our Terms.
          <br />
          <br />
          Finally, we may share information with companies or other entities
          that we plan to merge with or be acquired by. Should such a
          combination occur, we will require that the new combined entity follow
          this Privacy Policy with respect to your personal information. You
          will receive prior notice of any change in applicable policy.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          How we use Cookies
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          When you access our Services, we may place small data files called
          cookies or pixel tags on your computer or mobile device.
          <br />
          <br />
          We use these files to understand, secure, operate, and provide our
          Services. For example, we use cookies to:
          <br />
          <br />
          ● Provide all web-based Services, improve your experience, and
          understand how our Services are being used;
          <br />
          ● Measure the effectiveness of our promotions; and
          <br />
          ● Remember your choices and customize our Services for you
          <br />
          <br />
          You can follow the instructions provided by your browser or device
          (usually located under "Settings" or "Preferences") to modify your
          cookie or pixel data settings. Please note that if you set your
          browser or device to disable cookies, certain of our Services may not
          function properly.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          How you can access or change your information
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          If you would like to manage, limit, or delete your information, you
          may do so by logging into X Wallet and tapping the Settings icon.
          <br />
          <br />
          You may delete your X Wallet account at any time.Please remember that
          when you delete your account, it does not affect the information other
          users have relating to you.Please also note that X Wallet does not
          ever store your Network private key, so if you delete the application,
          make sure you have a copy of your private key elsewhere so that you
          may continue to access your Network funds. We do provide a feature
          within the App that will display your locally stored private key
          stored to you in readable form so that you may write it down and keep
          a copy of the key off of your device. We also allow users to back up
          their private keys to their icloud or google drive accounts.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Our Global Operations
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          You agree to our information practices, including the collection, use,
          processing, and sharing of your information as described in this
          Privacy Policy, as well as the transfer and processing of your
          information to the United States and other countries globally where we
          have or use facilities, service providers, or partners, regardless of
          where you use our Services.
          <br />
          <br />
          You acknowledge that the laws, regulations, and standards of the
          country in which your information is stored or processed may be
          different from those of your own country. However, we require our
          service providers to treat your information in strict confidence and
          use appropriate security measures to protect it. We also require them
          to uphold all obligations under this Privacy Policy.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Updates To Our Policy
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          We may amend or update our Privacy Policy from time to time and give
          you the opportunity to review the updated Privacy Policy before
          choosing to continue to use X Wallet. We will notify you of material
          changes to this policy by updating the last updated date at the top of
          this page, and we will provide you with explicit notice of material
          changes as required by law.
        </Label>
        <Label fontSize={32} fontFamily='medium'>
          Contact Us
        </Label>
        <Label fontSize={20} fontFamily='medium'>
          If you have any questions about our Privacy Policy, please do not
          hesitate to contact us at info@Kaddex.com.
        </Label>
      </Intro>
    </OuterContainer>
  );
};

export default HowToInstallContainer;
