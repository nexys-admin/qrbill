import * as V from "../_snowpack/pkg/@nexys/validation.js";
const checkLength = (s, lengthMax, errorMessages = "string length is too long") => {
  if (s.length > lengthMax) {
    return Array.isArray(errorMessages) ? errorMessages : [errorMessages];
  }
};
const addressK = {
  AdrTp: {
    type: "string",
    extraCheck: (s) => {
      if (s !== "K") {
        return ["must be K"];
      }
    }
  },
  StrNameOrAdrLine1: {
    type: "string",
    extraCheck: (s) => checkLength(s, 70, "address too long")
  },
  StrNameOrAdrLine2: {
    type: "string",
    extraCheck: (s) => checkLength(s, 70, "address too long")
  },
  Ctry: {
    type: "string",
    extraCheck: (s) => V.Utils.regexCheck(s, /^[A-Z]{2}$/)
  }
};
const addressS = {
  AdrTp: {
    type: "string",
    extraCheck: (s) => {
      if (s !== "S") {
        return ["must be S"];
      }
    }
  },
  Name: {
    type: "string",
    extraCheck: (s) => checkLength(s, 70)
  },
  StrNameOrAdrLine1: {
    type: "string",
    extraCheck: (s) => checkLength(s, 70)
  },
  StrNameOrAdrLine2: {
    type: "string",
    optional: true,
    extraCheck: (s) => checkLength(s, 16)
  },
  PstCd: {
    type: "string",
    optional: true,
    extraCheck: (s) => checkLength(s, 16)
  },
  TwnNm: {
    type: "string",
    optional: true,
    extraCheck: (s) => checkLength(s, 35)
  },
  Ctry: {
    type: "string",
    extraCheck: (s) => V.Utils.regexCheck(s, /^[A-Z]{2}$/)
  }
};
export const vHeader = {
  QrType: {
    type: "string",
    extraCheck: (s) => {
      if (s !== "SPC") {
        return ["must be SPC"];
      }
    }
  },
  Version: {
    type: "string",
    extraCheck: (s) => V.Utils.regexCheck(s, /^\d{4}$/)
  },
  Coding: {
    type: "string",
    extraCheck: (s) => V.Utils.regexCheck(s, /^1$/)
  }
};
