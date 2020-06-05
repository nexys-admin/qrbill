interface Main {
  [k: string]: string;
}

export interface Address extends Main {
  AdrTp: string;
  Ctry: string;
  Name: string;
  PstCd: string;
  StrNameOrAdrLine1: string;
  StrNameOrAdrLine2: string;
  TmwNm: string;
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
  SrdBkgInfo: string;
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
