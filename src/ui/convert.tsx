import React, { useState } from "react";

import * as UI from "@nexys/uibs4";
import * as Convert from "../lib/convert";
import { sampleArray } from "../lib/convert/data";
import { QR } from "../lib/type";

const sample = sampleArray.join("\n");

const Ui = () => {
  const [text, setText] = useState<string>(sample);
  const [converted, setConverted] = useState<QR | undefined>();
  //const [form, handleChange] = useState<{ text: string; convert?: QR }>({
  //text: sample,
  //});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const c: QR = Convert.stringToJson(text);

    setConverted(c);
  };

  return (
    <div>
      <h3>Converts output (break line separated text) into JSON</h3>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <UI.Form.Textarea
              onChange={(v: { value: string }) => setText(v.value)}
              name="text"
              value={text}
            />
            <button type="submit" className="btn btn-primary">
              Convert
            </button>
          </form>
        </div>
        {converted && (
          <div className="col-md-6">
            <pre>{JSON.stringify(converted, null, 2)}</pre>
            <button
              onClick={() => setConverted(undefined)}
              className={"btn btn-primary"}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ui;
