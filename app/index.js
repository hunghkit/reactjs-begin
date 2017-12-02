import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { ThemeProvider } from 'react-css-themr';
import { BrowserRouter } from 'react-router-dom';

import App from 'pages';
import store from 'reducers/store';
import theme from 'assets/css/theme';

render(
  <ThemeProvider theme={theme}>
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
  </ThemeProvider>,
document.getElementById('root'));
