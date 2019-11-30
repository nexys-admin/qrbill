import React from 'react';
import ReactDOM from 'react-dom';

import {
  Router,
} from 'react-router-dom';
import * as History from 'history';

import RouterApp from './router';

const history = History.createBrowserHistory();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router history={history}><RouterApp/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
