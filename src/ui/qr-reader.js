import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

import * as Validate from '../lib/validate';
import { Header, arrayToJson } from '../lib/convert';
 
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      result: 'No result'
    }
  }
 
  handleScan = data => {
    if (data) {
      const arr = data.split('\n');
      const j = arrayToJson(arr);

      console.log(j)

      if (Validate.validate(Validate.sampleJson, j)) {
        this.setState({
          result: j
        });
      } else {
        this.setState({result: 'The QR Code read is not a valid Swiss QRBIll'});
      }
    }
  }

  handleError = err => {
    console.error(err)
  }

  renderReader() {
    if (this.state.show) {
      return <QrReader
        delay={300}
        onError={this.handleError}
        onScan={this.handleScan}
        style={{ width: '300px' }}
      />
    };

    return null;
  }

  toggleReader() {
    const show = !this.state.show;
    this.setState({show});

  }

  render() {
    console.log(this.state.result)
    return (
      <div>
        {this.renderReader()}
        <pre>{JSON.stringify(this.state.result, null, 2)}</pre>
        
      </div>
    )
  }
}