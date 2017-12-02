import React from 'react';
import Helmet from 'react-helmet';
import Form from 'components/Login';

const Login = () => (
  <div className="login-pages">
    <Helmet
      title="Login"
      meta={[
        { name: 'description', content: 'Login page to reactjs begin' },
      ]}
    />
    <Form />
  </div>
);

export default Login;
