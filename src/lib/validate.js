import Joi from '@hapi/joi';

export const sAddress = Joi.object({
  AdrTp: Joi.string().regex(/^[ST]$/),
  Ctry: Joi.string().regex(/^\w{2}$/),
  Name: Joi.string(),
  PstCd: Joi.string(),
  StrNameOrAdrLine1: Joi.string(),
  StrNameOrAdrLine2: Joi.string(),
  TmwNm: Joi.string()
}).unknown(true);

export const vCdtrInf = Joi.object({
  IBAN: Joi.string().regex(/[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/),
  Cdtr: sAddress
});

export const vHeader = Joi.object({
  QRType: Joi.string().valid('SPC'),
  Version: Joi.string().regex(/^\d{4}$/).valid('0200'), //, only check for version 0200
  Coding: Joi.string().regex(/^1$/),
});

export const vCcyAmt = Joi.object({
  Amt: Joi.string().regex(/^\d+\.\d{2}$/),
  Ccy: Joi.string().regex(/^[A-Z]{3}$/)
});

export const vRmtInf = Joi.object({
  AddInf: Joi.object({
    SrdBkgInfo: Joi.string().optional(),
    Trailer: Joi.string().valid('EPD'),
    Ustrd: Joi.string().optional()
  }),
  Ref: Joi.string().optional(),
  Tp: Joi.string().valid('QRR')
});

export const vAltPmtInf = Joi.object({
  AltPmt1: Joi.string().optional(),
  AltPmt2: Joi.string().optional()
});

export const sampleJson = Joi.object({
  Header: vHeader,
  CdtrInf: vCdtrInf,
  CcyAmt: vCcyAmt,
  UltmtDtr: sAddress.allow(null).optional(),
  UltmtCdtr: sAddress.allow(null).optional(),
  RmtInf: vRmtInf,
  AltPmtInf: vAltPmtInf
});

export const validate = (schema, o) => {
  //console.log(o)
  const s = schema.validate(o, { presence: 'required'})
  //console.log(s)
  return s.error === null;
}
