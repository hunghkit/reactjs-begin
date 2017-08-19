import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-css-themr';
import { BrowserRouter } from 'react-router-dom';

import App from 'pages';
import store from 'reducers/store';
import theme from 'assets/css/theme';

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
document.getElementById('root'));
