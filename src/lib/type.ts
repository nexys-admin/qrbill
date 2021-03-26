interface Main {
  [k: string]: string;
}

export interface Address {
  AdrTp: "K" | "S";
  Name: string;
  StrNameOrAdrLine1: string;
  StrNameOrAdrLine2: string;
  TmwNm?: string;
  PstCd?: string;
  Ctry: string;
}

export interface CdtrInfo {
  IBAN: string;
  Cdtr: Address;
}

export interface Header extends Main {
  QRType: string;
  Version: string;
  Coding: string;
}

export interface CcyAmt extends Main {
  Amt: string;
  Ccy: string;
}

export interface RmtInfAddInfo extends Main {
  StrdBkgInf: string;
  Trailer: string;
  Ustrd: string;
}

export interface RmtInf {
  AddInf: RmtInfAddInfo;
  Ref: string;
  Tp: string;
}

export interface AltPmtInf extends Main {
  AltPmt1: string;
  AltPmt2: string;
}

export interface QR {
  Header: Header;
  CdtrInf: CdtrInfo;
  CcyAmt: CcyAmt;
  UltmtDtr?: Address;
  UltmtCdtr?: Address;
  RmtInf: RmtInf;
  AltPmtInf?: AltPmtInf;
}
