import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
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
      this.setState({
        result: data
      })
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
        <p >{this.state.result}</p>
        <button onClick={(x) => this.toggleReader()}>Show Camera</button>
      </div>
    )
  }
}