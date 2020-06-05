import * as T from "./type";

export const Header = {
  QRType: "SPC", // swiss payment code
  Version: "0200",
  Coding: "1",
};

export const createJson = (
  CdtrInf: T.CdtrInfo,
  CcyAmt: T.CcyAmt,
  RmtInf: T.RmtInf,
  UltmtDtr?: T.Address,
  UltmtCdtr?: T.Address,
  AltPmtInf?: T.AltPmtInf
): T.QR => {
  return {
    Header,
    CdtrInf,
    CcyAmt,
    RmtInf,
    UltmtCdtr,
    UltmtDtr,
    AltPmtInf,
  };
};

const ToBreakSepFormat = <A extends { [k: string]: string }>(
  labels: (keyof A)[],
  a?: A
): string[] => {
  if (!a || a === null) {
    return labels.map((_) => "");
  }

  return labels.map((k: keyof A) => a[k]);
};

export const addressToBreakSepFormat = (a?: T.Address): string[] => {
  const addressLabels: (keyof T.Address)[] = [
    "AdrTp",
    "Name",
    "StrNameOrAdrLine1",
    "StrNameOrAdrLine2",
    "PstCd",
    "TmwNm",
    "Ctry",
  ];

  return ToBreakSepFormat<T.Address>(addressLabels, a);
};

const altPmtToBreakSepFormat = (a?: T.AltPmtInf): string[] => {
  const labels: (keyof T.AltPmtInf)[] = ["AltPmt1", "AltPmt2"];

  if (!a || a === null) {
    return labels.map((_) => "");
  }

  return labels.map((k) => a[k]);
};

export const jsonToBreakSepFormat = (j: T.QR) => {
  const Header = (["QRType", "Version", "Coding"] as (keyof T.Header)[]).map(
    (k) => j["Header"][k]
  );
  const iban = j["CdtrInf"]["IBAN"];
  const Cdtr: string[] = addressToBreakSepFormat(j.CdtrInf.Cdtr);
  const UltmtCdtr: string[] = addressToBreakSepFormat(j.UltmtCdtr);
  const UltmtDtr: string[] = addressToBreakSepFormat(j.UltmtDtr);
  const CcyAmt: string[] = (["Amt", "Ccy"] as (keyof T.CcyAmt)[]).map(
    (k) => j.CcyAmt[k]
  );

  const RmtInf: string[] = [j.RmtInf.Tp, j.RmtInf.Ref];

  const RmtInf2: string[] = ["Ustrd", "Trailer", "SrdBkgInfo"].map(
    (k: keyof T.RmtInfAddInfo) => j.RmtInf.AddInf[k]
  );
  const AltPmtInf = altPmtToBreakSepFormat(j.AltPmtInf);

  return Header.concat(iban)
    .concat(Cdtr)
    .concat(UltmtCdtr)
    .concat(CcyAmt)
    .concat(UltmtDtr)
    .concat(RmtInf)
    .concat(RmtInf2)
    .concat(AltPmtInf);
};

export const arrayToAddress = (t: string[], idx = 0): T.Address | undefined => {
  const r: T.Address = {
    AdrTp: t[idx],
    Name: t[idx + 1],
    StrNameOrAdrLine1: t[idx + 2],
    StrNameOrAdrLine2: t[idx + 3],
    PstCd: t[idx + 4],
    TmwNm: t[idx + 5],
    Ctry: t[idx + 6],
  };

  const checkIfNull = Object.keys(r)
    .map((k) => r[k] === "")
    .reduce((a, b) => a && b);

  if (checkIfNull === true) {
    return undefined;
  }

  return r;
};

export const arrayToJson = (t: string[]): T.QR => {
  const IBAN = t[3];
  const Cdtr = arrayToAddress(t, 4);

  if (!Cdtr) {
    throw Error("cdtr is undefined");
  }

  const CdtrInf = { IBAN, Cdtr };
  const UltmtCdtr = arrayToAddress(t, 11);
  const UltmtDtr = arrayToAddress(t, 20);
  const CcyAmt = { Ccy: t[19], Amt: t[18] };
  const AddInf = { Ustrd: t[29], Trailer: t[30], SrdBkgInfo: t[31] };
  const RmtInf = { Tp: t[27], Ref: t[28], AddInf };
  const AltPmtInf = { AltPmt1: t[32], AltPmt2: t[33] };

  return {
    Header,
    CdtrInf,
    UltmtCdtr,
    UltmtDtr,
    CcyAmt,
    RmtInf,
    AltPmtInf,
  };
};
