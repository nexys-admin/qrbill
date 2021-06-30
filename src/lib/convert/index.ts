import * as T from "../type";
import { stringToArray } from "./utils";

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

const ToBreakSepFormat = <A>(labels: (keyof A)[], a?: A): string[] => {
  if (!a || a === null) {
    return labels.map((_) => "");
  }

  return labels.map((k: keyof A) => (a[k] ? String(a[k]) : ""));
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

  return ToBreakSepFormat(addressLabels, a);
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

  const RmtInf2: string[] = ["Ustrd", "Trailer", "StrdBkgInf"].map(
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

const isAdrTp = (s: string): s is "S" | "K" => s === "S" || s === "K";

export const arrayToAddress = (t: string[], idx = 0): T.Address | undefined => {
  // check if not null
  const isNull: boolean = [0, 1, 2, 3, 4, 5, 6]
    .map((i) => t[idx + i] === "")
    .reduce((a, b) => a && b, true);

  if (isNull) {
    return undefined;
  }

  const AdrTp = t[idx];

  if (!isAdrTp(AdrTp)) {
    throw Error(
      "input not correct, adrtp must be S or K, found: " + JSON.stringify(AdrTp)
    );
  }

  const r: T.Address = {
    AdrTp,
    Name: t[idx + 1],
    StrNameOrAdrLine1: t[idx + 2],
    StrNameOrAdrLine2: t[idx + 3],

    Ctry: t[idx + 6],
  };

  if (AdrTp === "S") {
    r.PstCd = t[idx + 4];
    r.TmwNm = t[idx + 5];
  }

  return r;
};

export const stringToJson = (t: string) => arrayToJson(stringToArray(t));

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
  const AddInf = { Ustrd: t[29], Trailer: t[30], StrdBkgInf: t[31] || "" };
  const RmtInf = { Tp: t[27], Ref: t[28], AddInf };

  const r: T.QR = {
    Header,
    CdtrInf,
    UltmtCdtr,
    UltmtDtr,
    CcyAmt,
    RmtInf,
  };

  if (t[32] && t[33]) {
    const AltPmtInf = { AltPmt1: t[32], AltPmt2: t[33] };
    r.AltPmtInf = AltPmtInf;
  }

  return r;
};
