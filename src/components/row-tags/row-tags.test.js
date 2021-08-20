import React from "react";
import { shallow } from "enzyme";
import RowTags from "./row-tags.component";

it("Expect to Match Snapshot", () => {
  expect(shallow(<RowTags />)).toMatchSnapshot();
});

it("Expect to render CustomInput Component", () => {
  expect(shallow(<RowTags />).length).toEqual(1);
});
