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


const prefix = process.env.PUBLIC_URL || '';

function Router(props) {
  return (<Layout>
    <Switch>
      <Route path={prefix + '/qrbill/build'} component={Main} />
      <Route path={prefix + '/qr/read'} component={QrReader} props={props} />
      <Route path={prefix + '/qr/write'} component={() => <QrWriter value={dataLabels}/>} props={props} />
      <Route path={prefix + '/convert'} component={Convert} props={props} />
      <Route path={prefix + '/validate'} component={Validate} props={props} />
      <Route exact path={prefix + '/'} component={Main} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Layout>);
}

export default withRouter(Router);
