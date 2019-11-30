import React, { useState } from 'react';

import QR from '../lib/qr';
import * as Convert from '../lib/convert';
import { dataLabels } from '../lib/data-examples';
import { sampleJson, sampleArray } from '../lib/convert.data';

import Form from './form';

function SwissQr() {
  const [ data, setData ]= useState(sampleArray);

  const refreshQr = x => {
    setData(Convert.jsonToBreakSepFormat(x));
  }

  return <div className="row">
    <div className="col-md-6">
      <h3>Generated Swiss QR</h3>
      <QR value={data}/>
    </div>
    <div className="col-md-3">
      <Form initial={sampleJson} onRefresh={refreshQr}/>
    </div>
    <div className="col-md-3">
      <h3>QR Content <small>as JSON</small></h3>
      <pre>{JSON.stringify(Convert.arrayToJson(data), null, 2)}</pre>
    </div>
  </div>;
}

export default SwissQr;