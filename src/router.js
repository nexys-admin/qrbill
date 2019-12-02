import React from 'react';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

import Layout from './layout';

import Convert from './ui/convert';
import Validate from './ui/validate';
import QrReader from './ui/qr-reader';
import QrWriter from './ui/qr-writer';
import Main from './ui';

import { dataLabels } from './lib/data-examples';

const NotFound = () => <p>Page Not Found</p>;

function Router(props) {
  return (<Layout>
    <Switch>
      <Route path={'/qrbill/build'} component={Main} />
      <Route path={'/qr/read'} component={QrReader} props={props} />
      <Route path={'/qr/write'} component={() => <QrWriter value={dataLabels}/>} props={props} />
      <Route path={'/convert'} component={Convert} props={props} />
      <Route path={'/validate'} component={Validate} props={props} />
      <Route exact path={'/'} component={Main} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Layout>);
}

export default withRouter(Router);
