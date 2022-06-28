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

import {
  ROUTE_HOW_TO_INSTALL,
  ROUTE_INDEX,
  ROUTE_PRIVACY_POLICY,
} from './routes';
import HowToInstallContainer from '../containers/HowToInstallContainer';
import PrivacyPolicyContainer from '../containers/PrivacyPolicyContainer';
const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Container>
          <Switch>
            <Route exact path={ROUTE_INDEX} component={MainContainer} />
            {/* <Route
              exact
              path={ROUTE_HOW_TO_INSTALL}
              component={HowToInstallContainer}
            /> */}
            <Route
              exact
              path={ROUTE_PRIVACY_POLICY}
              component={PrivacyPolicyContainer}
            />
            <Redirect to={ROUTE_INDEX} />
          </Switch>
        </Container>
      </Layout>
    </Router>
  );
};
