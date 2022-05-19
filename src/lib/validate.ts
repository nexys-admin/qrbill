import Joi from "@hapi/joi";
import * as T from "./type";

// the different defitions are taken from https://www.paymentstandards.ch/dam/downloads/ig-qr-bill-en.pdf#page=25

// note1: even though the standards describes a "break-line" separated format. I think it is best to represent it as a json with the structure they suggest in the `Data Structure` of the Doc so that the validation becomes easier
// note2: the following groups: UltmtCdtr, UltmtDbtr and CdtrInf:Cdtr are the same (this is not explicitly stated in the documentation)
// note3: this is a first version and is not complete, PR welcome!

const addressK = Joi.object<T.Address>({
  AdrTp: "K",
  Name: Joi.string().max(70),
  StrNameOrAdrLine1: Joi.string().max(70),
  StrNameOrAdrLine2: Joi.string().max(70),
  Ctry: Joi.string().regex(/^[A-Z]{2}$/),
});

const addressS = Joi.object<T.Address>({
  AdrTp: "S",
  Name: Joi.string().max(70),
  StrNameOrAdrLine1: Joi.string().max(70).optional(),
  StrNameOrAdrLine2: Joi.string().max(16).optional(),
  PstCd: Joi.string().max(16),
  TmwNm: Joi.string().max(35),
  Ctry: Joi.string().regex(/^[A-Z]{2}$/),
});

export const sAddress = Joi.alternatives().try(addressK, addressS).required();
//.unknown(true);

export const vCdtrInf = Joi.object<T.CdtrInfo>({
  IBAN: Joi.string().regex(
    /(?:CH|LI)[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/
  ),
  Cdtr: sAddress,
});

export const vHeader = Joi.object<T.Header>({
  QRType: Joi.string().valid("SPC"),
  Version: Joi.string()
    .regex(/^\d{4}$/)
    .valid("0200"), //, only check for version 0200
  Coding: Joi.string().regex(/^1$/),
});

export const vCcyAmt = Joi.object<T.CcyAmt>({
  Amt: Joi.string().regex(/^\d+\.\d{2}$/),
  Ccy: Joi.string().regex(/(?:CHF|EUR)/), //.regex(/^[A-Z]{3}$/),
});

export const vRmtInf = Joi.object<T.RmtInf>({
  AddInf: Joi.object({
    StrdBkgInf: Joi.string().allow("").optional().max(140),
    Trailer: Joi.string().valid("EPD"),
    Ustrd: Joi.string().allow("").optional().max(140),
  }),

  Tp: Joi.string().valid("QRR").valid("SCOR").valid("NON"),
  Ref: Joi.string().allow("").optional(), // this is however dependent
});

export const vAltPmtInf = Joi.object<T.AltPmtInf>({
  AltPmt1: Joi.string().optional().max(100),
  AltPmt2: Joi.string().optional().max(100),
});

export const sampleJson = Joi.object<T.QR>({
  Header: vHeader,
  CdtrInf: vCdtrInf,
  CcyAmt: vCcyAmt,
  UltmtDtr: sAddress.allow(null).optional(),
  UltmtCdtr: sAddress.allow(null).optional(),
  RmtInf: vRmtInf,
  AltPmtInf: vAltPmtInf.optional(),
});

/**
 * validates the schema
 * @param  schema : schema
 * @param  o : object to be validated
 * @return Joi output
 */
export const validate = (
  o: any,
  schema: Joi.Schema = sampleJson
): Joi.ValidationResult => schema.validate(o, { presence: "required" });

/**
 * validates the schema
 * @param  schema : schema
 * @param  o : object to be validated
 * @return boolean
 */
export const validateBoolean = (
  o: any,
  schema: Joi.Schema = sampleJson
): boolean => {
  const { error } = validate(o, schema);
  console.log(error);

  if (!error) {
    return true;
  }

  return false;
};
