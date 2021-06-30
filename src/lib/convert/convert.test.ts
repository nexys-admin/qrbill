import * as Convert from "./index";
import {
  sampleAddressArray,
  sampleAddressJson,
  sampleJson,
  sampleArray,
} from "./data";

test("arrayToAddress", () => {
  expect(Convert.arrayToAddress(sampleAddressArray)).toEqual(sampleAddressJson);
});

test("array to json", () => {
  expect(Convert.arrayToJson(sampleArray)).toEqual(sampleJson);
});

test("jsonToBreakSepFormat", () => {
  expect(Convert.jsonToBreakSepFormat(sampleJson)).toEqual(sampleArray);
});
