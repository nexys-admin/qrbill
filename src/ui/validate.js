import React, { useState } from 'react';

import * as UI from '@nexys/uibs4';
import * as Validate from '../lib/validate';
import { sampleJson } from '../lib/convert.data';

function Ui() {
  const [ form, handleChange] = useState({text: JSON.stringify(sampleJson, null, 2)});

  const handleSubmit = e => {
    e.preventDefault();

    const validate = Validate.validate(JSON.parse(form.text));

    handleChange({...form, validate});
  }

  return (<div>
    <h3>Validate JSON with JOI</h3>
    <p>see source <a href="https://github.com/Nexysweb/qrbill/blob/master/src/lib/validate.js">here</a></p>
    <div className="row">
      <div className="col-md-6">
        <form onSubmit={handleSubmit}>
          <UI.Form.Textarea onChange={(v) => handleChange({...form, text: v.value})} name="text" value={form.text}/>
          <button type="submit" className="btn btn-primary">Validate</button>
        </form>
      </div>
      <div className="col-md-6">
        <h4>Output of JOI after validating</h4>
        <pre>{JSON.stringify(form.validate, null, 2)}</pre>
      </div>
    </div>
  </div>);
}

export default Ui;