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
const Main = () => (<div>
  <p>here you can play with different tools to understand the Swiss QR Bill</p>
  <p><b><Link to="/qr/read">Click here</Link> if you would like to read a Swiss QR Code</b></p>

  <p>See all options in the menu</p>

  <p>Do you need help with the transition to the new QR Bill and in general ISO20001? Please get in touch at <a href="info@nexys.ch">info [@] nexys.ch</a></p>

</div>);

function Router(props) {
  return (<Layout>
    <Switch>
      <Route path="/qr/read" component={QrReader} props={props} />
      <Route path="/qr/write" component={() => <QrWriter value={dataLabels}/>} props={props} />
      <Route path="/convert" component={Convert} props={props} />
      <Route path="/validate" component={Validate} props={props} />
      <Route exact path="/" component={Main} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Layout>);
}

export default withRouter(Router);
