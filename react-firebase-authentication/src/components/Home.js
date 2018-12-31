import React from 'react';
import queryString from 'query-string';
import withAuthorization from './withAuthorization';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import * as routes from '../constants/routes';

const HomePage = () =>
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    
  </div>




const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
