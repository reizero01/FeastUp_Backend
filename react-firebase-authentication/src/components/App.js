import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import PlacePage from './Place'
import StripePage from './Stripe';
import PartnerSignUpPage from './PartnerSignUp';
import HelpMainPage from './help_faq/HelpMainPage';
import CancelOrderPage from './help_faq/CancelOrderPage';
import IssueWithOrderPage from './help_faq/IssueWithOrderPage';
import OrderTakingTooLongPage from './help_faq/OrderTakingTooLongPage';



import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';


const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>
      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
      <Route exact path={routes.PLACE} component={PlacePage} />
      <Route exact path={routes.STRIPE} component={StripePage} />
      <Route exact path={routes.PARTNER_SIGN_UP} component={PartnerSignUpPage} />
      <Route exact path={routes.HELP_MAIN_PAGE} component={HelpMainPage} />
      <Route exact path={routes.CANCEL_ORDER} component={CancelOrderPage} />
      <Route exact path={routes.ISSUE_WITH_ORDER} component={IssueWithOrderPage} />
      <Route exact path={routes.ORDER_TAKING_TOO_LONG} component={OrderTakingTooLongPage} />

    </div>
  </Router>

export default withAuthentication(App);