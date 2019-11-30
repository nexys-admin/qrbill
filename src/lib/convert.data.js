import { Header } from './convert';

const sampleAddress = `S
Robert Schneider AG
Rue du Lac
1268
2501
Biel
CH`;

export const sampleAddressArray = sampleAddress.split('\n');

export const sampleAddressJson = {
  AdrTp: 'S',
  Name: 'Robert Schneider AG',
  StrNameOrAdrLine1: 'Rue du Lac',
  StrNameOrAdrLine2: '1268',
  PstCd: '2501',
  TmwNm: 'Biel',
  Ctry: 'CH'
};

const sample = `SPC
0200
1
CH4431999123000889012
S
Robert Schneider AG
Rue du Lac
1268
2501
Biel
CH







1949.75
CHF
S
Pia-Maria Rutschmann-Schnyder
Grosse Marktgasse
28
9400
Rorschach
CH
QRR
210000000003139471430009017
Order of 15 June 2020
EPD
//S1/10/10201409/11/200701/20/140.000-53/30/102673831/31/200615/32/7.7/33/7.7:139.40/40/0:30
Name AV1: UV;UltraPay005;12345
Name AV2: XY;XYService;54321`;

export const sampleArray = sample.split('\n');

const Cdtr = {
  AdrTp: 'S',
  Name: 'Robert Schneider AG',
  StrNameOrAdrLine1: 'Rue du Lac',
  StrNameOrAdrLine2: '1268',
  PstCd: '2501',
  TmwNm: 'Biel',
  Ctry: 'CH'
};

const UltmtCdtr = null;

const UltmtDtr = {
  AdrTp: "S",
  Ctry: "CH",
  Name: "Pia-Maria Rutschmann-Schnyder",
  PstCd: "9400",
  StrNameOrAdrLine1: "Grosse Marktgasse",
  StrNameOrAdrLine2: "28",
  TmwNm: "Rorschach"
};

const RmtInf = {
  AddInf: {
    SrdBkgInfo: "//S1/10/10201409/11/200701/20/140.000-53/30/102673831/31/200615/32/7.7/33/7.7:139.40/40/0:30",
    Trailer: "EPD",
    Ustrd: "Order of 15 June 2020",
  },
  Ref: "210000000003139471430009017",
  Tp: "QRR"
};

const AltPmtInf = {
  AltPmt1: "Name AV1: UV;UltraPay005;12345",
  AltPmt2: "Name AV2: XY;XYService;54321"
};

const CcyAmt = {
  Amt: "1949.75",
  Ccy: "CHF",
};

const CdtrInf = {
  IBAN: 'CH4431999123000889012',
  Cdtr
};

export const sampleJson = {
  Header,
  CdtrInf,
  CcyAmt,
  UltmtDtr,
  UltmtCdtr,
  RmtInf,
  AltPmtInf
};
