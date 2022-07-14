import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Label from '../../shared/Label';

const Item = styled.a`
  cursor: pointer;
  text-decoration: none;
  .underline {
    width: ${({ hover }) => (hover ? '100%' : 0)};
    transition: width 0.3s;
    background: #fff;
    height: 3px;
  }
`;

const NavigationItems = ({ fontSize, color, onClick, disableHover, hideKaddex }) => {
  return (
    <>
      <NavigationItem href="/#features" fontSize={fontSize} color={color} onClick={onClick} disableHover={disableHover}>
        Features
      </NavigationItem>
      <NavigationItem href="/#projects" fontSize={fontSize} color={color} onClick={onClick} disableHover={disableHover}>
        Projects
      </NavigationItem>
      <NavigationItem href="/#analytics" fontSize={fontSize} color={color} onClick={onClick} disableHover={disableHover}>
        Analytics
      </NavigationItem>
      <NavigationItem href="/#roadmap" fontSize={fontSize} color={color} onClick={onClick} disableHover={disableHover}>
        Roadmap
      </NavigationItem>

      {!hideKaddex && (
        <NavigationItem href="https://kaddex.com" target="_blank" fontSize={fontSize} color={color} onClick={onClick} disableHover={disableHover}>
          Kaddex
        </NavigationItem>
      )}
    </>
  );
};

export const NavigationItem = ({ id, className, href, children, fontSize, color, onClick, disableHover }) => {
  const [hover, setHover] = useState(false);

  return (
    <Item
      id={id}
      className={className}
      href={href}
      hover={hover}
      onClick={onClick}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <>
        <Label className="capitalize" size="small" color={color} fontSize={fontSize}>
          {children}
        </Label>
        {!disableHover && <div className="underline"></div>}
      </>
    </Item>
  );
};

export default NavigationItems;
