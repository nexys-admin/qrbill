import * as Convert from "./convert";
import {
  sampleAddressArray,
  sampleAddressJson,
  sampleJson,
  sampleArray,
  sampleArray2,
  sampleJson2,
} from "./convert.data";

test("arrayToAddress", () => {
  expect(Convert.arrayToAddress(sampleAddressArray)).toEqual(sampleAddressJson);
});

test("array to json", () => {
  expect(Convert.arrayToJson(sampleArray)).toEqual(sampleJson);
});

test("array to json 2", () => {
  expect(Convert.arrayToJson(sampleArray2)).toEqual(sampleJson2);
});

test("jsonToBreakSepFormat", () => {
  expect(Convert.jsonToBreakSepFormat(sampleJson)).toEqual(sampleArray);
});
