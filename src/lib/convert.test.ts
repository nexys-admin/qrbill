import * as Convert from "./convert";
import {
  sampleAddressArray,
  sampleAddressJson,
  sampleJson,
  sampleArray,
} from "./convert.data";

test("arrayToAddress", () => {
  expect(Convert.arrayToAddress(sampleAddressArray)).toEqual(sampleAddressJson);
});

test("array to json", () => {
  expect(Convert.arrayToJson(sampleArray)).toEqual(sampleJson);
});

test("jsonToBreakSepFormat", () => {
  expect(Convert.jsonToBreakSepFormat(sampleJson)).toEqual(sampleArray);
});
