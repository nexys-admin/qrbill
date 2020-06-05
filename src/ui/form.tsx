import React, { useState } from "react";
import * as UI from "@nexys/uibs4";
import * as Utils from "@nexys/utils";

const { Form } = UI;

// helper to display wrapper and input in one component
const InputWrapper = (props: any) => {
  // for now, no error management
  const { name, onChange, form, errors = {} } = props;

  const value = Utils.ds.get(name, form);

  return (
    <Form.Wrapper name={name} errors={errors} label={name}>
      <Form.Input
        name={name}
        onChange={onChange}
        placeholder={name}
        value={value}
      />
    </Form.Wrapper>
  );
};

function QRBillForm(
  props: { initial: any; onRefresh?: any } = { initial: {} }
) {
  const [form, changeForm] = useState(props.initial);

  const handleChange = (v: any) => {
    const f = Utils.ds.set(v.name, v.value, form);

    changeForm(f);
    props.onRefresh(form);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    props.onRefresh(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5>CdtrInf</h5>
      <InputWrapper name="CdtrInf.IBAN" form={form} onChange={handleChange} />
      <InputWrapper
        name="CdtrInf.Cdtr.AdrTp"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper
        name="CdtrInf.Cdtr.Name"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper
        name="CdtrInf.Cdtr.StrNameOrAdrLine1"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper
        name="CdtrInf.Cdtr.StrNameOrAdrLine2"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper
        name="CdtrInf.Cdtr.PstCd"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper
        name="CdtrInf.Cdtr.TmwNm"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper
        name="CdtrInf.Cdtr.Ctry"
        form={form}
        onChange={handleChange}
      />

      <h5>CcyAmt</h5>
      <InputWrapper name="CcyAmt.Amt" form={form} onChange={handleChange} />
      <InputWrapper name="CcyAmt.Ccy" form={form} onChange={handleChange} />

      <h5>UltmtCdtr</h5>
      <InputWrapper
        name="UltmtCdtr.AdrTp"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper name="UltmtCdtr.Name" form={form} onChange={handleChange} />
      <InputWrapper
        name="UltmtCdtr.StrNameOrAdrLine1"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper
        name="UltmtCdtr.StrNameOrAdrLine2"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper
        name="UltmtCdtr.PstCd"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper
        name="UltmtCdtr.TmwNm"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper name="UltmtCdtr.Ctry" form={form} onChange={handleChange} />

      <h5>UltmtDbtr</h5>
      <InputWrapper name="UltmtDtr.AdrTp" form={form} onChange={handleChange} />
      <InputWrapper name="UltmtDtr.Name" form={form} onChange={handleChange} />
      <InputWrapper
        name="UltmtDtr.StrNameOrAdrLine1"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper
        name="UltmtDtr.StrNameOrAdrLine2"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper name="UltmtDtr.PstCd" form={form} onChange={handleChange} />
      <InputWrapper name="UltmtDtr.TmwNm" form={form} onChange={handleChange} />
      <InputWrapper name="UltmtDtr.Ctry" form={form} onChange={handleChange} />

      <h5>RmtInf</h5>
      <InputWrapper name="RmtInf.Tp" form={form} onChange={handleChange} />
      <InputWrapper name="RmtInf.Ref" form={form} onChange={handleChange} />
      <InputWrapper
        name="RmtInf.AddInf.Ustrd"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper
        name="RmtInf.AddInf.Trailer"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper
        name="RmtInf.AddInf.SrdBkgInfo"
        form={form}
        onChange={handleChange}
      />

      <h5>AltPmtInf</h5>
      <InputWrapper
        name="AltPmtInf.AltPmt1"
        form={form}
        onChange={handleChange}
      />
      <InputWrapper
        name="AltPmtInf.AltPmt2"
        form={form}
        onChange={handleChange}
      />

      <button type="submit" className="btn btn-primary">
        Generate
      </button>
    </form>
  );
}

export default QRBillForm;
