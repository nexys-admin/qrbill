import React, { useState } from "react";

import * as UI from "@nexys/uibs4";
import * as Convert from "../lib/convert";
import { sampleArray } from "../lib/convert.data";

const sample = sampleArray.join("\n");

function Ui() {
  const [form, handleChange] = useState<any>({ text: sample });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const convert = Convert.arrayToJson(form.text.split("\n"));

    handleChange({ ...form, convert });
  };

  return (
    <div>
      <h3>Converts output (break line separated text) into JSON</h3>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <UI.Form.Textarea
              onChange={(v: any) => handleChange({ ...form, text: v.value })}
              name="text"
              value={form.text}
            />
            <button type="submit" className="btn btn-primary">
              Convert
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <pre>{JSON.stringify(form.convert, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default Ui;
