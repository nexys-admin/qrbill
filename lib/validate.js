import Joi from "../_snowpack/pkg/@hapi/joi.js";
const addressK = Joi.object({
  AdrTp: "K",
  Name: Joi.string().max(70),
  StrNameOrAdrLine1: Joi.string().allow("").max(70),
  StrNameOrAdrLine2: Joi.string().allow("").max(70),
  Ctry: Joi.string().regex(/^[A-Z]{2}$/)
});
const addressS = Joi.object({
  AdrTp: "S",
  Name: Joi.string().max(70),
  StrNameOrAdrLine1: Joi.string().max(70).optional(),
  StrNameOrAdrLine2: Joi.string().max(16).optional(),
  PstCd: Joi.string().max(16),
  TmwNm: Joi.string().max(35),
  Ctry: Joi.string().regex(/^[A-Z]{2}$/)
});
export const sAddress = Joi.alternatives().try(addressK, addressS).required();
export const vCdtrInf = Joi.object({
  IBAN: Joi.string().regex(/(?:CH|LI)[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/),
  Cdtr: sAddress
});
export const vHeader = Joi.object({
  QRType: Joi.string().valid("SPC"),
  Version: Joi.string().regex(/^\d{4}$/).valid("0200"),
  Coding: Joi.string().regex(/^1$/)
});
export const vCcyAmt = Joi.object({
  Amt: Joi.string().regex(/^\d+\.\d{2}$/),
  Ccy: Joi.string().regex(/(?:CHF|EUR)/)
});
export const vRmtInf = Joi.object({
  AddInf: Joi.object({
    StrdBkgInf: Joi.string().allow("").optional().max(140),
    Trailer: Joi.string().valid("EPD"),
    Ustrd: Joi.string().allow("").optional().max(140)
  }),
  Tp: Joi.string().valid("QRR").valid("SCOR").valid("NON"),
  Ref: Joi.string().allow("").optional()
});
export const vAltPmtInf = Joi.object({
  AltPmt1: Joi.string().optional().max(100),
  AltPmt2: Joi.string().optional().max(100)
});
export const sampleJson = Joi.object({
  Header: vHeader,
  CdtrInf: vCdtrInf,
  CcyAmt: vCcyAmt,
  UltmtDtr: sAddress.allow(null).optional(),
  UltmtCdtr: sAddress.allow(null).optional(),
  RmtInf: vRmtInf,
  AltPmtInf: vAltPmtInf.optional()
});
export const validate = (o, schema = sampleJson) => schema.validate(o, {presence: "required"});
export const validateBoolean = (o, schema = sampleJson) => {
  const {error} = validate(o, schema);
  console.log(error);
  if (!error) {
    return true;
  }
  return false;
};
