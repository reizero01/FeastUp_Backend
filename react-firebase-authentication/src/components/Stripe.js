import React from 'react';

const StripePage = () =>
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    <a target="_blank" href="https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_DI2JCCjElbAqfR88jXspnbBxW64eNM0n&scope=read_write&redirect_uri=https://feastup.app/partner-sign-up">Stripe Link</a>
  </div>

export default StripePage;