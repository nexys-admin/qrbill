import * as Validate from './validate';
import { sampleAddressJson, sampleJson, sampleArray } from './convert.data';
import { Header, arrayToJson } from './convert';

test('validateBoolean address', () => {
  expect(Validate.validateBoolean(sampleAddressJson, Validate.sAddress)).toEqual(true);
})

test('validateBoolean cdtr', () => {
  expect(Validate.validateBoolean({IBAN: 'CH4431999123000889012', Cdtr: sampleAddressJson}, Validate.vCdtrInf)).toEqual(true);
});

test('validateBoolean header', () => {
  expect(Validate.validateBoolean(Header, Validate.vHeader)).toEqual(true)
});

test('validateBoolean ccyamt', () => {
  expect(Validate.validateBoolean({Amt: '23.02', Ccy: 'CHF'}, Validate.vCcyAmt)).toEqual(true)
});

test('validateBoolean RmtInf', () => {
  const RmtInf = {
    AddInf: {
      SrdBkgInfo: "//S1/10/10201409/11/200701/20/140.000-53/30/102673831/31/200615/32/7.7/33/7.7:139.40/40/0:30",
      Trailer: "EPD",
      Ustrd: "Order of 15 June 2020",
    },
    Ref: "210000000003139471430009017",
    Tp: "QRR"
  };

  expect(Validate.validateBoolean(RmtInf, Validate.vRmtInf)).toEqual(true);
});

test('vAltPmtInf', () => {
  const AltPmtInf = {
    AltPmt1: "Name AV1: UV;UltraPay005;12345",
    AltPmt2: "Name AV2: XY;XYService;54321"
  };

  expect(Validate.validateBoolean(AltPmtInf, Validate.vAltPmtInf)).toEqual(true);
});

test('all json', () => {
  expect(Validate.validateBoolean(sampleJson)).toEqual(true);
});

test('all json from array', () => {
  const j = arrayToJson(sampleArray);

  expect(Validate.validateBoolean(j)).toEqual(true);
})