import * as V from "@nexys/validation";
import * as T from "./type";

// the different defitions are taken from https://www.paymentstandards.ch/dam/downloads/ig-qr-bill-en.pdf#page=25

// note1: even though the standards describes a "break-line" separated format. I think it is best to represent it as a json with the structure they suggest in the `Data Structure` of the Doc so that the validation becomes easier
// note2: the following groups: UltmtCdtr, UltmtDbtr and CdtrInf:Cdtr are the same (this is not explicitly stated in the documentation)
// note3: this is a first version and is not complete, PR welcome!

const checkLength = (
  s: string,
  lengthMax: number,
  errorMessages: string | string[] = "string length is too long"
): string[] | undefined => {
  if (s.length > lengthMax) {
    return Array.isArray(errorMessages) ? errorMessages : [errorMessages];
  }
};

const addressK: V.Type.Shape = {
  AdrTp: {
    type: "string",
    extraCheck: (s: any) => {
      if (s !== "K") {
        return ["must be K"];
      }
    },
  },
  StrNameOrAdrLine1: {
    type: "string",
    extraCheck: (s: string) => checkLength(s, 70, "address too long"),
  },
  StrNameOrAdrLine2: {
    type: "string",
    extraCheck: (s: string) => checkLength(s, 70, "address too long"),
  },
  Ctry: {
    type: "string",
    extraCheck: (s: string) => V.Utils.regexCheck(s, /^[A-Z]{2}$/),
  },
};

const addressS: V.Type.Shape = {
  AdrTp: {
    type: "string",
    extraCheck: (s: any) => {
      if (s !== "S") {
        return ["must be S"];
      }
    },
  },
  Name: {
    type: "string",
    extraCheck: (s: string) => checkLength(s, 70),
  },
  StrNameOrAdrLine1: {
    type: "string",
    extraCheck: (s: string) => checkLength(s, 70),
  },
  StrNameOrAdrLine2: {
    type: "string",
    optional: true,
    extraCheck: (s: string) => checkLength(s, 16),
  },
  PstCd: {
    type: "string",
    optional: true,
    extraCheck: (s: string) => checkLength(s, 16),
  },
  TwnNm: {
    type: "string",
    optional: true,
    extraCheck: (s: string) => checkLength(s, 35),
  },
  Ctry: {
    type: "string",
    extraCheck: (s: string) => V.Utils.regexCheck(s, /^[A-Z]{2}$/),
  },
};

export const vHeader: V.Type.Shape = {
  QrType: {
    type: "string",
    extraCheck: (s: any) => {
      if (s !== "SPC") {
        return ["must be SPC"];
      }
    },
  },
  Version: {
    type: "string",
    extraCheck: (s: string) => V.Utils.regexCheck(s, /^\d{4}$/), // .valid("0200"), //, only check for version 0200
  },
  Coding: {
    type: "string",
    extraCheck: (s: string) => V.Utils.regexCheck(s, /^1$/),
  },
};

/*





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
 *
export const validate = (
  o: any,
  schema: Joi.Schema = sampleJson
): Joi.ValidationResult => schema.validate(o, { presence: "required" });

/**
 * validates the schema
 * @param  schema : schema
 * @param  o : object to be validated
 * @return boolean
 *
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
};*/
