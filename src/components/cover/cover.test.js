import React from "react";
import { shallow } from "enzyme";
import Cover from "./cover.component";

it("Expect to Match Snapshot", () => {
  expect(shallow(<Cover />)).toMatchSnapshot();
});

it("Expect to render CustomInput Component", () => {
  const mockChildren = "Children";
  expect(shallow(<Cover>{mockChildren}</Cover>).length).toEqual(1);
});
