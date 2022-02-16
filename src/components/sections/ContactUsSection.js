import React from 'react';

import Label from '../shared/Label';
import GradientContainer from '../shared/GradientContainer';

const ContactUsSection = () => {
  return (
    <GradientContainer
      onClick={() => {
        window.location = 'mailto:xwallet@kaddex.com';
      }}
      style={{ paddingRight: 64, paddingLeft: 64 }}
    >
      <Label className="rainbow" fontFamily="syncopate">
        Contact Us
      </Label>
    </GradientContainer>
  );
};

export default ContactUsSection;
