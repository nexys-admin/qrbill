import React from 'react';
import {
  Switch,
  Route,
  withRouter,
  Link,
} from 'react-router-dom';

import Layout from './layout';

import Convert from './ui/convert';
import Validate from './ui/validate';
import QrReader from './ui/qr-reader';
import QrWriter from './ui/qr-writer';

import { dataLabels } from './lib/data-examples';

const NotFound = () => <p>Page Not Found</p>;
const Public = () => (
  <ul>
    <li><Link to="/app">Link to app</Link></li>
    <li><Link to="/admin">Link to admin</Link></li>
  </ul>
);

function Router(props) {
  return (<Layout>
    <Switch>
      <Route path="/qr/read" component={QrReader} props={props} />
      <Route path="/qr/write" component={() => <QrWriter value={dataLabels}/>} props={props} />
      <Route path="/convert" component={Convert} props={props} />
      <Route path="/validate" component={Validate} props={props} />
      <Route exact path="/" component={Convert} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Layout>);
}

export default withRouter(Router);
