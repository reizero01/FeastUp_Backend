import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

import { Button } from 'reactstrap';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <div class="nav-scroller py-1 mb-2">
    <nav class="nav d-flex justify-content-end">
      <a class="p-2"><Link to={routes.LANDING}>Landing</Link></a>
      <a class="p-2"><Link to={routes.HOME}>Home</Link></a>
      <a class="p-2"><Link to={routes.ACCOUNT}>Account</Link></a>
      <a class="p-2"><SignOutButton /></a>
    </nav>
  </div>

const NavigationNonAuth = () =>
  <div class="nav-scroller py-1 mb-2">
    <nav class="nav d-flex justify-content-end">
      <a class="p-2"><Link to={routes.LANDING}>Landing</Link></a>
      <a class="p-2" style={{marginLeft: '1rem'}}><Link to={routes.SIGN_IN}>Sign In</Link></a>
      </nav>
  </div>

export default Navigation;