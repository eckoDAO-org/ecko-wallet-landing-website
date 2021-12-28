import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import MainContainer from '../containers/MainContainer';

import styled from 'styled-components/macro';

import { ROUTE_HOW_TO_INSTALL, ROUTE_INDEX } from './routes';
import HowToInstallContainer from '../containers/HowToInstallContainer';

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export default () => {
  return (
    <Router>
      <Layout>
        <Container>
          <Switch>
            <Route exact path={ROUTE_INDEX} component={MainContainer} />
            {/* <Route exact path={ROUTE_HOW_TO_INSTALL} component={HowToInstallContainer} /> */}
            <Redirect to={ROUTE_INDEX} />
          </Switch>
        </Container>
      </Layout>
    </Router>
  );
};
