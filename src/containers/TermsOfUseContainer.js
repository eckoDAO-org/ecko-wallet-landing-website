import React from 'react';
import styled from 'styled-components';
import { EckoWalletFooterLogo } from '../assets';
import { FlexContainer } from '../components/shared/Container';
import Label from '../components/shared/Label';

const TermsOfUseWrapper = styled(FlexContainer)`
  padding: 64px 180px;
  padding-bottom: 0;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 16px;
  }
`;

const TermsOfUseContainer = () => {
  return (
    <TermsOfUseWrapper className="justify-ce align-ce column w-100 h-100 margin-auto">
      <EckoWalletFooterLogo style={{ marginBottom: 32 }} />
      <FlexContainer className="w-100 column align-ce justify-ce margin-auto" gap={40} style={{ marginBottom: 172 }}>
        <Label fontSize={48} mobileStyle={{ fontSize: 32 }} fontFamily="syncopate">
          eckoWALLET TERMS OF USE
        </Label>
        <Label fontSize={22} fontFamily="medium">
          Last Modified: February 20, 2023
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Acceptance of the Terms of Use
        </Label>
        <Label fontSize={20} style={{ wordBreak: 'break-word' }} fontFamily="medium">
          These terms of use are entered into by and between you and eckoDAO, a Swiss non-profit association (collectively, the “Company,” “we,” or
          “us”) and eckoHUB DMCC, a UAE LLC which hosts eckoWALLET IP for the association. The following terms and conditions, together with any
          documents they expressly incorporate by reference (collectively, “Terms of Use”), govern your access to and use of www.wallet.ecko.finance
          (“Website”) and the eckoWALLET application, including any content, functionality, and services offered on or through the Website or such
          application (collectively, “eckoWALLET”).
          <br />
          <br />
          Please read the Terms of Use carefully before you start to use eckoWALLET. By using eckoWALLET or by clicking to accept or agree to the
          Terms of Use when this option is made available to you, you accept and agree to be bound and abide by these Terms of Use, including our
          Privacy Policy, found at [https://wallet.ecko.finance/privacy-policy], incorporated herein by reference and as amended from time to time
          (“Privacy Policy”). If you do not want to agree to these Terms of Use (including the Privacy Policy), you must not access or otherwise use
          eckoWALLET.
          <br />
          <br />
          eckoWALLET is offered and available to users who are at least 18 years of age. By using eckoWALLET, you represent and warrant that you meet
          the foregoing eligibility requirement. If you do not meet this requirement, you must not access or otherwise use eckoWALLET.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Changes to the Terms of Use
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post
          them, and apply to all access to and use of eckoWALLET thereafter. However, any changes to the dispute resolution provisions set out in
          Governing Law and Jurisdiction will not apply to any disputes for which the parties have actual notice on or before the date the change is
          posted on the Website.
          <br />
          <br />
          Your continued use of eckoWALLET following the posting of revised Terms of Use means that you accept and agree to the changes. You are
          expected to check the Website from time to time so you are aware of any changes, as they are binding on you.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Accessing eckoWALLET and Account Security
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We reserve the right to withdraw or amend eckoWALLET, and any service or material we provide through eckoWALLET, in our sole discretion
          without notice. We will not be liable if for any reason all or any part of eckoWALLET is unavailable at any time or for any period. From
          time to time, we may restrict access to some parts of eckoWALLET, or the entirety of eckoWALLET, to users, including registered users.
          <br />
          <br />
          You are responsible for both:
          <br />
          <br />● Making all arrangements necessary for you to have access to eckoWALLET.
          <br />
          ● Ensuring that all persons who access eckoWALLET through your internet connection are aware of these Terms of Use and comply with them.
          <br />
          <br />
          In order to access and use eckoWALLET, you must (i) be at least the age of majority in your jurisdiction of residence (ii) not be barred
          from using eckoWALLET or similar services under applicable law, sanctions, rules, regulators or otherwise.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Wallet Use
        </Label>
        <Label fontSize={20} fontFamily="medium">
          The digital asset wallet(s) we provide to you through eckoWALLET (“Wallet”) allow(s) you to store, track, transfer, and manage your balances
          of digital assets. The particular services with respect to any such wallet and supported assets may vary by jurisdiction. You consent to our
          retrieval of private keys or related information, as part of any security protocols we implement, in order to facilitate transfers of
          digital assets, and you acknowledge that this may delay the initiation or crediting of such transfers.
          <br />
          <br />
          Under no circumstances should you attempt to use a Wallet to store, send, request, or receive any assets other than assets that the
          eckoWALLET system supports. We assume no responsibility in connection with any attempt to use a Wallet with digital assets that we do not
          support. When you or a third party sends digital assets to your Wallet from an external wallet, you attest that you are transacting in a
          supported asset that conforms to the particular Wallet address to which funds are directed. You acknowledge and agree that we are not liable
          for any unsupported digital asset that is sent to a Wallet associated with you. We may, in our sole discretion, terminate support for any
          particular digital asset. If you do not sell or send such digital asset off platform before we terminate our support for such digital asset.
          <br />
          <br />
          For purposes of these Terms of Use, supported assets exclude all other protocols and/or functionality which supplement or interact with
          supported assets, unless stated otherwise with respect to a particular supported asset. This exclusion includes but is not limited to:
          metacoins, colored coins, side chains, or other derivative, enhanced, or forked protocols, tokens, or coins or other functionality, such as
          staking, protocol governance, and/or any smart contract functionality, which may supplement or interact with a supported asset. You
          acknowledge and agree that we have no liability for any losses related to supplemental protocols and/or functionalities. You acknowledge and
          accept the risks of operating changes to digital asset protocols and agree that we are not responsible for such operating changes and not
          liable for any loss of value you may experience as a result of such changes in operating rules. You acknowledge and accept that we have sole
          discretion to determine our response to any such operating changes and that we have no responsibility to assist you with unsupported
          currencies or protocols. You further acknowledge and accept that we have no responsibility to support new digital asset forks or operating
          changes for supported assets.
          <br />
          <br />
          All information provided in connection with your access and use of eckoWALLET should not and may not be construed as professional advice.
          You should not take, and should refrain from taking, any action based on any information contained in eckoWALLET, or any other information
          we make available at any time. Before you make any financial, legal or other decisions involving eckoWALLET or use thereof, you should seek
          independent professional advice from an individual who is licensed and qualified in the area for which such advice would be appropriate.
          These Terms of Use are not intended to, and do not, create or impose any fiduciary duties on us. You further agree that the only duties and
          obligations that we have are expressly set out in these Terms of Use (including in the Privacy Policy).
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Custody and Ownership of Digital Assets
        </Label>
        <Label fontSize={20} fontFamily="medium">
          Digital assets held in your Wallet are non-custodial assets.
          <br />
          <br />
          Title to such digital assets shall at all times remain with you and shall not transfer to the Company, except as otherwise provided herein.
          As the owner of such digital assets, you shall bear all risk of loss of such digital assets. We shall have no liability for fluctuations or
          loss in such digital assets. Except as required by law, or except as expressly provided in these Terms of Use, we will not sell, transfer,
          loan, hypothecate, or otherwise alienate such digital assets unless instructed by you. If there are digital assets in your Wallet, and we
          have no record of you accessing eckoWALLET for several years and are unable to contact you, applicable law may require us to deliver any
          such assets to the applicable state or jurisdiction as unclaimed property.
          <br />
          <br />
          You acknowledge that we shall have no obligation to segregate by blockchain address digital assets owned by you from digital assets owned by
          other users, the Company, or any of the Company’s affiliates.
          <br />
          <br />
          Notwithstanding the foregoing, you retain sole responsibility for any loss of private keys associated with your Wallet.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Instructions from Users
        </Label>
        <Label fontSize={20} fontFamily="medium">
          When you give us instructions with respect to your Wallet, you cannot withdraw such instructions except with respect to any transaction
          associated with such instructions that is to occur on a future date (“Future Transaction”). In the case of a Future Transaction, you may
          withdraw your instructions up until the end of the business day before the date that the Future Transaction is scheduled to take place. When
          we receive instructions for a transaction from your credentials, we will assume that you authorized such transaction, unless you notify us
          otherwise. If you believe you did not authorize a particular transaction or that a transaction was incorrectly carried out, you must contact
          us as soon as possible. It is important that you regularly check your Wallet balances to ensure you notify us as soon as possible of any
          unauthorized or incorrect transactions. Reporting an unauthorized transaction does not guarantee that we will be able to reverse the
          transaction or reimburse you for the transaction. You acknowledge that we cannot execute instructions for transactions for which you do not
          have sufficient digital assets in your Wallet. You further acknowledge and agree that we may cancel or refuse to process any transfer to or
          from your Wallet as required by law or any court or other governmental authority to which we are subject.
          <br />
          <br />
          As an added precaution with respect to transactions, we recommend that users send a small amount of supported assets as a test before
          sending a significant amount of such assets.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Intellectual Property Rights
        </Label>
        <Label fontSize={20} fontFamily="medium">
          eckoWALLET and its entire contents, features, and functionality (including but not limited to all information, software, text, displays,
          images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Company, its licensors, or other providers of
          such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual
          property or proprietary rights laws.
          <br />
          <br />
          These Terms of Use permit you to use eckoWALLET for your lawful use only. You must not copy, reproduce, distribute, modify, create
          derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material of eckoWALLET, except
          that your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.
          <br />
          <br />
          If you print, copy, modify, download, or otherwise use or provide any other person with access to any part of eckoWALLET in breach of the
          Terms of Use, your right to use eckoWALLET will stop immediately and you must, at our option, return or destroy any copies of the materials
          you have made. No right, title, or interest in or to eckoWALLET or any content of eckoWALLET is transferred to you, and all rights not
          expressly granted are reserved by the Company. Any use of eckoWALLET not expressly permitted by these Terms of Use is a breach of these
          Terms of Use and may violate copyright, trademark, and other laws.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Trademarks
        </Label>
        <Label fontSize={20} fontFamily="medium">
          The Company name, the Company logo, and all related names, logos, product and service names, designs, and slogans are trademarks of the
          Company or its affiliates or licensors. You must not use such marks without the prior written permission of the Company. All other names,
          logos, product and service names, designs, and slogans on the Website or otherwise displayed through eckoWALLET are the trademarks of their
          respective owners.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Prohibited Uses
        </Label>
        <Label fontSize={20} fontFamily="medium">
          You may use eckoWALLET only for lawful purposes and in accordance with these Terms of Use. You agree not to use eckoWALLET:
          <br />
          <br />
          ● In any way that violates any applicable federal, state, local, or international law or regulation (including, without limitation, any laws
          regarding the export of data or software to and from any countries). <br />
          ● In any way that violates these Terms of Use.
          <br />
          ● For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content,
          asking for personally identifiable information, or otherwise.
          <br />
          ● To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail,” “chain letter,” “spam,” or any
          other similar solicitation.
          <br />
          ● To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity (including, without
          limitation, by using email addresses or user names associated with any of the foregoing).
          <br />
          ● To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of eckoWALLET, or which, as determined by us, may harm
          the Company or users of eckoWALLET, or expose them to liability.
          <br />
          <br />
          Additionally, you agree not to:
          <br />
          <br />
          ● Use eckoWALLET in any manner that could disable, overburden, damage, or impair it or interfere with any other party’s use of eckoWALLET,
          including their ability to engage in real time activities through eckoWALLET.
          <br />
          ● Use any robot, spider, or other automatic device, process, or means to access eckoWALLET for any purpose, including monitoring or copying
          any of the material of eckoWALLET.
          <br />
          ● Use any manual process to monitor or copy any of the material of eckoWALLET, or for any other purpose not expressly authorized in these
          Terms of Use, without our prior written consent.
          <br />
          ● Use any device, software, or routine that interferes with the proper working of eckoWALLET.
          <br />
          ● Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.
          <br />● Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of eckoWALLET, the server on which eckoWALLET
          is stored, or any server, computer, or database connected to eckoWALLET. <br />
          ● Attack eckoWALLET via a denial-of-service attack or a distributed denial-of-service attack.
          <br />● Otherwise attempt to interfere with the proper working of eckoWALLET.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Monitoring and Enforcement; Termination
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We have the right to:
          <br />
          <br />
          ● Take appropriate legal action, including without limitation, referral to law enforcement, for any illegal or unauthorized use of
          eckoWALLET. <br />
          ● Terminate or suspend your access to all or part of eckoWALLET for any or no reason, including without limitation, any violation of these
          Terms of Use. In the event of termination, you will be permitted to transfer digital assets associated with your Wallet within the 45-day
          period from the date of termination unless such transfer is otherwise prohibited (i) under applicable law, including but not limited to
          applicable sanctions programs; or (ii) by a facially valid subpoena or court order. We are not responsible for any loss you may incur as a
          result of our suspension of your access to eckoWALLET.
          <br />
          <br />
          Without limiting the foregoing, we have the right to cooperate fully with any law enforcement authorities or court order requesting or
          directing us to disclose the identity or other information of anyone posting any materials on or through eckoWALLET. YOU WAIVE AND HOLD
          HARMLESS THE COMPANY AND ITS AFFILIATES, LICENSEES, AND SERVICE PROVIDERS FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY ANY OF THE
          FOREGOING PARTIES DURING, OR TAKEN AS A CONSEQUENCE OF, INVESTIGATIONS BY EITHER SUCH PARTIES OR LAW ENFORCEMENT AUTHORITIES.
          <br />
          <br />
          However, we do not undertake to review material before it is posted to eckoWALLET, and cannot ensure prompt removal of objectionable
          material after it has been posted. Accordingly, we assume no liability for any action or inaction regarding transmissions, communications,
          or content provided by any user or third party. We have no liability or responsibility to anyone for performance or nonperformance of the
          activities described in this section.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Reliance on Information Posted
        </Label>
        <Label fontSize={20} fontFamily="medium">
          The information presented on or through eckoWALLET is made available solely for general information purposes. We do not warrant the
          accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk. We
          disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to eckoWALLET, or
          by anyone who may be informed of any of its contents.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Changes to eckoWALLET
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We may update eckoWALLET from time to time, but its content is not necessarily complete or up-to-date. Any of the material of eckoWALLET may
          be out of date at any given time, and we are under no obligation to update such material.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Information About You and Your Visits to eckoWALLET
        </Label>
        <Label fontSize={20} fontFamily="medium">
          All information we collect through eckoWALLET is subject to our Privacy Policy. By using eckoWALLET, you consent to all actions taken by us
          with respect to your information in compliance with the Privacy Policy.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Links from eckoWALLET; Information Provided by Third Parties
        </Label>
        <Label fontSize={20} fontFamily="medium">
          If eckoWALLET contains links to other sites and resources provided by third parties, these links are provided for your convenience only.
          This includes links contained in advertisements, including banner advertisements and sponsored links. If you decide to access any of the
          third- party websites or resources linked to eckoWALLET, you do so entirely at your own risk and subject to the terms and conditions of use
          for such websites or resources.
          <br />
          <br />
          eckoWALLET may include content provided by third parties, including materials provided by other users, bloggers, and third-party licensors,
          syndicators, aggregators, and/or reporting services. All statements and/or opinions expressed in these materials, and all articles and
          responses to questions and other content, other than the content provided by the Company, are solely the opinions and the responsibility of
          the person or entity providing those materials. These materials do not necessarily reflect the opinion of the Company. We are not
          responsible, or liable to you or any third party, for the content or accuracy of any materials provided by any third party.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Disclaimer of Warranties
        </Label>
        <Label fontSize={20} fontFamily="medium">
          You understand that we cannot and do not guarantee or warrant that files available for downloading from the internet or through eckoWALLET
          will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy
          your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our
          site and/or application for any reconstruction of any lost data. WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED
          DENIAL-OF-SERVICE ATTACK, HACKS, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER
          PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF eckoWALLET OR ANY SERVICES OR ITEMS OBTAINED THROUGH eckoWALLET OR TO YOUR
          DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITE OR APPLICATION LINKED TO IT.
          <br />
          <br />
          YOUR USE OF eckoWALLET, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH eckoWALLET IS AT YOUR OWN RISK. eckoWALLET, ITS CONTENT, AND
          ANY SERVICES OR ITEMS OBTAINED THROUGH eckoWALLET ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND,
          EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT
          TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF eckoWALLET. WITHOUT LIMITING THE FOREGOING, NEITHER THE
          COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT eckoWALLET, ITS CONTENT, OR ANY SERVICES OR ITEMS OBTAINED
          THROUGH eckoWALLET WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT eckoWALLET OR ANY SERVER
          THAT MAKES IT AVAILABLE ARE OR WILL BE FREE OF VIRUSES, HACK, OR OTHER HARMFUL COMPONENTS OR CYBER-SECURITY ATTACKS, OR THAT eckoWALLET OR
          ANY SERVICES OR ITEMS OBTAINED THROUGH eckoWALLET WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS. NEITHER THE COMPANY NOR ANY PERSON
          ASSOCIATED WITH THE COMPANY MAKES ANY GUARANTEE THAT TRANSFER OF DIGITAL ASSETS WILL BE CONFIRMED BY THE RELEVANT NETWORK.
          <br />
          <br />
          THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO
          ANY WARRANTIES OF MERCHANTABILITY, NON- INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
          <br />
          <br />
          eckoWALLET RELIES ON EMERGING TECHNOLOGIES, SUCH AS DECENTRALIZED EXCHANGES. SOME SERVICES ARE SUBJECT TO INCREASED RISK THROUGH YOUR
          POTENTIAL MISUSE OF THINGS SUCH AS PUBLIC/PRIVATE KEY CRYPTOGRAPHY. BY USING eckoWALLET YOU EXPLICITLY ACKNOWLEDGE AND ACCEPT THESE
          HEIGHTENED RISKS. WE SHALL NOT BE LIABLE FOR THE FAILURE OF THE SERVICES PROVIDED BY eckoWALLET, ANY MESSAGE TO SEND TO OR BE RECEIVED BY
          THE INTENDED RECIPIENT IN THE INTENDED FORM, OR FOR DIMINUTION OF VALUE OF ANY DIGITAL TOKEN OR DIGITAL ASSET AND WE MAKE NO REPRESENTATIONS
          OR WARRANTIES WITH RESPECT TO THE SAME.
          <br />
          <br />
          THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Limitation on Liability
        </Label>
        <Label fontSize={20} fontFamily="medium">
          IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, DIRECTORS, OR OTHER
          REPRESENTATIVES BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO
          USE, eckoWALLET, ANY WEBSITES OR APPLICATIONS LINKED TO IT, ANY CONTENT ON eckoWALLET OR SUCH OTHER WEBSITES OR APPLICATIONS, INCLUDING ANY
          DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND
          SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL,
          LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE. WITHOUT LIMITING THE
          GENERALITY OF THE FOREGOING, SUCH PARTIES SHALL NOT BE LIABLE FOR ANY ALLEGED LOSS THAT YOU SUFFER FROM A DROP IN DIGITAL ASSET PRICES OR
          ANY LOSS YOU SUFFER AS A RESULT OF ANY VIRUSES, HACK, OR OTHER HARMFUL COMPONENTS OR CYBER-SECURITY ATTACKS WITH RESPECT TO eckoWALLET.
          <br />
          <br />
          IF YOU CLAIM THAT THE COMPANY FAILED TO PROCESS A TRANSACTION PROPERLY, YOUR DAMAGES ARE LIMITED TO NO MORE THAN THE LESSER OF THE VALUE OF
          THE SUPPORTED DIGITAL ASSETS AT ISSUE IN THE TRANSACTION OR THE TOTAL VALUE OF THE SUPPORTED DIGITAL ASSETS IN YOUR WALLET THAT IS
          ASSOCIATED WITH THE TRANSACTION IMMEDIATELY PRIOR TO THE TRANSACTION.
          <br />
          <br />
          IF YOU GRANT PERMISSION TO A THIRD PARTY TO TAKE SPECIFIC ACTIONS ON YOUR BEHALF, THAT DOES NOT RELIEVE YOU OF ANY OF YOUR RESPONSIBILITIES
          UNDER THESE TERMS OF USE. YOU ARE FULLY RESPONSIBLE FOR ALL ACTS OR OMISSIONS OF ANY THIRD PARTY WITH ACCESS TO YOUR WALLET AND ANY
          ASSOCIATED ACCOUNT.
          <br />
          <br />
          THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Indemnification
        </Label>
        <Label fontSize={20} fontFamily="medium">
          You agree to defend, indemnify, and hold harmless the Company, its affiliates, licensors, and service providers, and its and their
          respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against, and pay for,
          any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys’ fees) arising out of
          or relating to your violation of these Terms of Use or your use of eckoWALLET, any use of eckoWALLET’s content, services, and products other
          than as expressly authorized in these Terms of Use, or your use of any information obtained from eckoWALLET.
          <br />
          <br />
          Further, you acknowledge and agree that you will not hold the Company or any of its affiliates responsible for, and will indemnify such
          parties from, and pay for, any liability arising out of or related to any act or omission of any third party with access to your Wallet or
          associated account.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Governing Law and Jurisdiction
        </Label>
        <Label fontSize={20} fontFamily="medium">
          All matters relating to eckoWALLET and these Terms of Use, and any dispute or claim arising therefrom or related thereto (in each case,
          whether in contract, tort, or otherwise), shall be governed by and construed in accordance with the internal laws of Switzerland.
          <br />
          <br />
          Any legal suit, action, or proceeding arising out of, or related to, these Terms of Use or the eckoWALLET shall be instituted in
          Switzerland, although we retain the right to bring any suit, action, or proceeding against you for breach of these Terms of Use in your
          country of residence or any other relevant country. You waive any and all objections to the exercise of jurisdiction over you by such venue
          (including any claims of inconvenient forum) in such courts. YOU IRREVOCABLY AND UNCONDITIONALLY WAIVE ANY RIGHT YOU MAY HAVE TO A TRIAL BY
          JURY IN RESPECT OF ANY LEGAL SUIT, ACTION, OR PROCEEDING ARISING OUT OF, OR RELATED TO, THESE TERMS OF USE OR THE eckoDEX SERVICES, TO THE
          FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Arbitration
        </Label>
        <Label fontSize={20} fontFamily="medium">
          Notwithstanding anything to the contrary in these Terms of Use, at Company’s sole discretion, it may require you to submit any disputes
          arising from these Terms of Use or use of the eckoWALLET, including disputes arising from or concerning their interpretation, violation,
          invalidity, non-performance, or termination, to final and binding arbitration through the platform provided by New Era ADR, Inc.
          (https://neweraadr.com/) (the “New Era Platform”) in accordance with its rules and procedures for “Virtual Standard Arbitrations” by a
          professional neutral(s) with substantial experience in resolving commercial disputes (the “Neutral”). The Neutral shall be chosen in
          accordance with the rules and procedures of the New Era Platform. The parties will bear costs as provided for under this Agreement or, if
          silent, in accordance with the rules and procedures of the New Era Platform. The prevailing party may be entitled to receive reimbursement
          of its reasonable expenses (including reasonable attorneys’ fees and all other expenses) incurred in connection therewith, at the Neutral’s
          discretion.
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Limitation on Time to File Claims
        </Label>
        <Label fontSize={20} fontFamily="medium">
          ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OF USE OR eckoWALLET MUST BE COMMENCED WITHIN ONE (1)
          YEAR AFTER THE CAUSE OF ACTION ACCRUES; OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.
        </Label>
        <Label fontSize={32} fontFamily="medium">
          Waiver and Severability
        </Label>
        <Label fontSize={20} fontFamily="medium">
          No waiver by the Company of any term or condition set out in these Terms of Use shall be deemed a further or continuing waiver of such term
          or condition or a waiver of any other term or condition, and any failure of the Company to assert a right or provision under these Terms of
          Use shall not constitute a waiver of such right or provision.
          <br />
          <br />
          If any provision of these Terms of Use is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or
          unenforceable for any reason, such provision shall be eliminated or modified to the minimum extent such that the remaining provisions of the
          Terms of Use (and, to the extent feasible, such provision) will continue in full force and effect.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Assignment
        </Label>
        <Label fontSize={20} fontFamily="medium">
          We reserve the right to assign our rights and obligations without restriction, including without limitation to any affiliates or
          subsidiaries of the Company, or to any successor in interest of any business associated with eckoWALLET. In the event that the Company is
          acquired by or merged with another entity, we reserve the right, in any of these circumstances, to transfer or assign the information we
          have collected from you as part of such merger, acquisition, sale, or other change of control. You may not assign any rights and/or licenses
          granted under these Terms of Use or otherwise associated with your use of eckoWALLET. Any attempted transfer or assignment by you in
          violation hereof shall be null and void. Subject to the foregoing, these Terms of Use will bind and inure to the benefit of the parties,
          their successors and permitted assigns.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Force Majeure
        </Label>
        <Label fontSize={20} fontFamily="medium">
          Without limiting any other provision of these Terms of Use, we shall not be liable for delays, failure in performance, or interruption of
          service which result directly or indirectly from any cause or condition beyond our reasonable control, including but not limited to
          significant market volatility, act of God, act of civil or military authorities, act of terrorists, civil disturbance, war, strike or other
          labor dispute, fire, interruption in telecommunications or Internet services or network provider services, failure of equipment and/or
          software, pandemic, other catastrophe, or any other occurrence which is beyond our reasonable control.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Relationship of the Parties
        </Label>
        <Label fontSize={20} fontFamily="medium">
          The Company is an independent contractor for all purposes. Nothing in these Terms of Use is intended to or shall operate to create a
          partnership or joint venture between you and the Company or authorize you to act as agent of the Company.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Entire Agreement
        </Label>
        <Label fontSize={20} fontFamily="medium">
          The Terms of Use (for the avoidance of doubt, including all documents incorporated by reference herein) constitute the sole and entire
          agreement between you and the Company regarding eckoWALLET and supersede all prior and contemporaneous understandings, agreements,
          representations, and warranties, both written and oral, regarding eckoWALLET.
        </Label>

        <Label fontSize={32} fontFamily="medium">
          Your Comments and Concerns
        </Label>
        <Label fontSize={20} fontFamily="medium">
          All feedback, comments, requests for technical support, and other communications relating to eckoWALLET should be directed to:
          contact@ecko.finance.
        </Label>
      </FlexContainer>
    </TermsOfUseWrapper>
  );
};

export default TermsOfUseContainer;
