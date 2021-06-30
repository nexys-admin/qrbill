import * as Utils from "./utils.js";
export {Utils};
const {stringToArray} = Utils;
export const Header = {
  QRType: "SPC",
  Version: "0200",
  Coding: "1"
};
export const createJson = (CdtrInf, CcyAmt, RmtInf, UltmtDtr, UltmtCdtr, AltPmtInf) => {
  return {
    Header,
    CdtrInf,
    CcyAmt,
    RmtInf,
    UltmtCdtr,
    UltmtDtr,
    AltPmtInf
  };
};
const ToBreakSepFormat = (labels, a) => {
  if (!a || a === null) {
    return labels.map((_) => "");
  }
  return labels.map((k) => a[k] ? String(a[k]) : "");
};
export const addressToBreakSepFormat = (a) => {
  const addressLabels = [
    "AdrTp",
    "Name",
    "StrNameOrAdrLine1",
    "StrNameOrAdrLine2",
    "PstCd",
    "TmwNm",
    "Ctry"
  ];
  return ToBreakSepFormat(addressLabels, a);
};
const altPmtToBreakSepFormat = (a) => {
  const labels = ["AltPmt1", "AltPmt2"];
  if (!a || a === null) {
    return labels.map((_) => "");
  }
  return labels.map((k) => a[k]);
};
export const jsonToBreakSepFormat = (j) => {
  const Header2 = ["QRType", "Version", "Coding"].map((k) => j["Header"][k]);
  const iban = j["CdtrInf"]["IBAN"];
  const Cdtr = addressToBreakSepFormat(j.CdtrInf.Cdtr);
  const UltmtCdtr = addressToBreakSepFormat(j.UltmtCdtr);
  const UltmtDtr = addressToBreakSepFormat(j.UltmtDtr);
  const CcyAmt = ["Amt", "Ccy"].map((k) => j.CcyAmt[k]);
  const RmtInf = [j.RmtInf.Tp, j.RmtInf.Ref];
  const RmtInf2 = ["Ustrd", "Trailer", "StrdBkgInf"].map((k) => j.RmtInf.AddInf[k]);
  const AltPmtInf = altPmtToBreakSepFormat(j.AltPmtInf);
  return Header2.concat(iban).concat(Cdtr).concat(UltmtCdtr).concat(CcyAmt).concat(UltmtDtr).concat(RmtInf).concat(RmtInf2).concat(AltPmtInf);
};
const isAdrTp = (s) => s === "S" || s === "K";
export const arrayToAddress = (t, idx = 0) => {
  const isNull = [0, 1, 2, 3, 4, 5, 6].map((i) => t[idx + i] === "").reduce((a, b) => a && b, true);
  if (isNull) {
    return void 0;
  }
  const AdrTp = t[idx];
  if (!isAdrTp(AdrTp)) {
    throw Error("input not correct, adrtp must be S or K, found: " + JSON.stringify(AdrTp));
  }
  const r = {
    AdrTp,
    Name: t[idx + 1],
    StrNameOrAdrLine1: t[idx + 2],
    StrNameOrAdrLine2: t[idx + 3],
    Ctry: t[idx + 6]
  };
  if (AdrTp === "S") {
    r.PstCd = t[idx + 4];
    r.TmwNm = t[idx + 5];
  }
  return r;
};
export const stringToJson = (t) => arrayToJson(stringToArray(t));
export const arrayToJson = (t) => {
  const IBAN = t[3];
  const Cdtr = arrayToAddress(t, 4);
  if (!Cdtr) {
    throw Error("cdtr is undefined");
  }
  const CdtrInf = {IBAN, Cdtr};
  const UltmtCdtr = arrayToAddress(t, 11);
  const UltmtDtr = arrayToAddress(t, 20);
  const CcyAmt = {Ccy: t[19], Amt: t[18]};
  const AddInf = {Ustrd: t[29], Trailer: t[30], StrdBkgInf: t[31] || ""};
  const RmtInf = {Tp: t[27], Ref: t[28], AddInf};
  const r = {
    Header,
    CdtrInf,
    UltmtCdtr,
    UltmtDtr,
    CcyAmt,
    RmtInf
  };
  if (t[32] && t[33]) {
    const AltPmtInf = {AltPmt1: t[32], AltPmt2: t[33]};
    r.AltPmtInf = AltPmtInf;
  }
  return r;
};
