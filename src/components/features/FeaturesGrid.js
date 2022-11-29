import React from 'react';
import { Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import { FEATURES } from '../../constants/features';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import { theme } from '../../styles/theme';

const Grid = styled(FlexContainer)`
  display: grid;
  grid-template-columns: 0.2fr 0.2fr;
  grid-template-rows: 0.2fr 0.2fr 0.2fr;
  gap: 0px 0px;
`;

const FeaturesGrid = () => {
  const [width] = useWindowSize();

  return (
    <Grid
      className="w-100 align-fs justify-fs"
      desktopStyle={{ paddingLeft: 138 }}
      tabletStyle={{ display: 'flex', flexDirection: 'column', padding: '0px 48px' }}
      mobileStyle={{ display: 'flex', flexDirection: 'column', padding: '0px 24px' }}
    >
      {Object.values(FEATURES).map((item, index) => (
        <React.Fragment key={index}>
          <FlexContainer
            key={index}
            gap={32}
            className="column"
            desktopStyle={{
              height: 340,
              minWidth: 400,
              padding: '72px 24px',
              borderBottom: index < Object.values(FEATURES).length - 2 && '1px solid #FFFFFF60',
              borderRight: index % 2 === 0 && '1px solid #FFFFFF60',
            }}
            tabletStyle={{ padding: '24px 0px' }}
            mobileStyle={{ padding: '24px 0px' }}
          >
            {item.icon}
            <FlexContainer className="flex w-100 align-ce" gap={16}>
              <Label fontFamily="syncopate" fontSize={20} customColor={item.color}>
                {item.title}
              </Label>
              {item.alert && (
                <div className="flex align-ce justify-ce" style={{ backgroundColor: '#F3BD2F', padding: '6px 8px', borderRadius: 250 }}>
                  <Label fontFamily="syncopate" color="white" fontSize={10}>
                    {item.alert}
                  </Label>
                </div>
              )}
            </FlexContainer>
            <Label fontSize={12}>{item.description}</Label>
          </FlexContainer>
          {width < theme.mediaQueries.desktopPixel && index !== Object.values(FEATURES).length - 1 && (
            <Divider horizontal style={{ mixBlendMode: 'overlay', backgroundColor: '#FFFFFF', height: 1, width: '100%' }} />
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default FeaturesGrid;
