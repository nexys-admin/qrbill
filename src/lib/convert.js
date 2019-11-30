export const Header = {
  QRType: 'SPC', // swiss payment code
  Version: '0200', 
  Coding: '1'
};

export const createJson = (CdtrInf, CcyAmt, RmtInf, UltmtDtr = undefined, UltmtCdtr = undefined, AltPmtInf = undefined) => {
  return {
    Header,
    CdtrInf,
    CcyAmt,
    RmtInf,
    UltmtCdtr,
    UltmtDtr,
    AltPmtInf
  };
}

export const addressToBreakSepFormat = a => {
  const addressLabels = ['AdrTp', 'Name', 'StrNameOrAdrLine1', 'StrNameOrAdrLine2', 'PstCd', 'TmwNm', 'Ctry'];

  if (!a || a === null) {
    return addressLabels.map(_ => '');
  }

  return addressLabels.map(k => a[k]);
}

export const jsonToBreakSepFormat = j => {
  const Header = ['QRType', 'Version', 'Coding'].map(k => j['Header'][k]);
  const iban = j['CdtrInf']['IBAN'];
  const Cdtr = addressToBreakSepFormat(j['CdtrInf']['Cdtr']);
  const UltmtCdtr = addressToBreakSepFormat(j['UltmtCdtr']);
  const UltmtDtr = addressToBreakSepFormat(j['UltmtDtr']);
  const CcyAmt = ['Amt', 'Ccy'].map(k => j['CcyAmt'][k]);
  const RmtInf = ['Tp', 'Ref'].map(k => j['RmtInf'][k]);
  const RmtInf2 = ['Ustrd', 'Trailer', 'SrdBkgInfo'].map(k => j['RmtInf']['AddInf'][k]);
  const AltPmtInf = ['AltPmt1', 'AltPmt2'].map(k => j['AltPmtInf'][k]);

  return Header.concat(iban).concat(Cdtr).concat(UltmtCdtr).concat(CcyAmt).concat(UltmtDtr).concat(RmtInf).concat(RmtInf2).concat(AltPmtInf);
};

export const arrayToAddress = (t, idx = 0) => {
  const r = {
    AdrTp: t[idx],
    Name: t[idx + 1],
    StrNameOrAdrLine1: t[idx + 2],
    StrNameOrAdrLine2: t[idx + 3],
    PstCd: t[idx + 4],
    TmwNm: t[idx + 5],
    Ctry: t[idx + 6]
  };

  const checkIfNull = Object.keys(r).map(k => r[k] === '').reduce((a, b) => a && b);

  if (checkIfNull === true) {
    return  null;
  }

  return r;
}

export const arrayToJson = t => {
  const IBAN = t[3];
  const Cdtr = arrayToAddress(t, 4);
  const CdtrInf = { IBAN, Cdtr };
  const UltmtCdtr = arrayToAddress(t, 11);
  const UltmtDtr = arrayToAddress(t, 20);
  const CcyAmt = {Ccy: t[19], Amt: t[18]};
  const AddInf = {Ustrd: t[29], Trailer: t[30], SrdBkgInfo: t[31]};
  const RmtInf = {Tp: t[27], Ref: t[28], AddInf};
  const AltPmtInf = {AltPmt1: t[32], AltPmt2: t[33]};

  return {
    Header,
    CdtrInf,
    UltmtCdtr,
    UltmtDtr,
    CcyAmt,
    RmtInf,
    AltPmtInf
  }
}