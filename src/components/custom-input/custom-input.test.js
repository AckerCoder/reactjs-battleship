import React from "react";
import { shallow } from "enzyme";
import CustomInput from "./custom-input.component";

it("Expect to Match Snapshot", () => {
  expect(shallow(<CustomInput />)).toMatchSnapshot();
});

it("Expect to render CustomInput Component", () => {
  const mockChildren = "Mock Children";
  const mockLabel = "Mock Label";
  expect(
    shallow(<CustomInput label={mockLabel}>{mockChildren}</CustomInput>).length
  ).toEqual(1);
  expect(
    shallow(<CustomInput label={mockLabel}>{mockChildren}</CustomInput>).length
  ).toEqual(1);
});
