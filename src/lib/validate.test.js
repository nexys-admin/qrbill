import * as Validate from './validate';
import { sampleAddressJson, sampleJson, sampleArray } from './convert.data';
import { Header, arrayToJson } from './convert';

test('validate address', () => {
  expect(Validate.validate(Validate.sAddress, sampleAddressJson)).toEqual(true);
})

test('validate cdtr', () => {
  expect(Validate.validate(Validate.vCdtrInf, {IBAN: 'CH4431999123000889012', Cdtr: sampleAddressJson})).toEqual(true);
});

test('validate header', () => {
  expect(Validate.validate(Validate.vHeader, Header)).toEqual(true)
});

test('validate ccyamt', () => {
  expect(Validate.validate(Validate.vCcyAmt, {Amt: '23.02', Ccy: 'CHF'})).toEqual(true)
});

test('validate RmtInf', () => {
  const RmtInf = {
    AddInf: {
      SrdBkgInfo: "//S1/10/10201409/11/200701/20/140.000-53/30/102673831/31/200615/32/7.7/33/7.7:139.40/40/0:30",
      Trailer: "EPD",
      Ustrd: "Order of 15 June 2020",
    },
    Ref: "210000000003139471430009017",
    Tp: "QRR"
  };

  expect(Validate.validate(Validate.vRmtInf, RmtInf)).toEqual(true);
});

test('vAltPmtInf', () => {
  const AltPmtInf = {
    AltPmt1: "Name AV1: UV;UltraPay005;12345",
    AltPmt2: "Name AV2: XY;XYService;54321"
  };

  expect(Validate.validate(Validate.vAltPmtInf, AltPmtInf)).toEqual(true);
});

test('all json', () => {
  expect(Validate.validate(Validate.sampleJson, sampleJson)).toEqual(true);
});

test('all json from array', () => {
  const j = arrayToJson(sampleArray);

  expect(Validate.validate(Validate.sampleJson, j)).toEqual(true);
})