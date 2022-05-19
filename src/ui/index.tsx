import React from 'react';
import { Link } from 'react-router-dom';
import * as UI from '@nexys/uibs4';
import {githubUrl} from '../config';

export default () => (<div>
  <p>Here you can play with different tools to understand the Swiss QR Bill</p>
  <p><b><Link to={'/qr/read'}>Click here</Link> if you would like to read a Swiss QR Code</b></p>

  <p>Browse the menu for more options</p>

  <p>Do you need help with the transition to the new <a href="https://www.six-group.com/interbank-clearing/en/home/standardization/payment-slips.html">QR Bill</a> and in general <a href="https://www.six-group.com/interbank-clearing/en/home/standardization/iso-payments.html">ISO20022</a>? Please get in touch at <a href="info@nexys.ch">info [@] nexys.ch</a></p>

  <p><a href={githubUrl}><UI.Components.Icon name="code"/> Source</a>. Contributions are welcome. <small>Make sure you read and understand the <a href="https://github.com/nexys-admin/qrbill/blob/master/LICENSE">license terms</a>.</small></p>

</div>);
