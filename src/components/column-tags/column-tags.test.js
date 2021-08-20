import React from "react";
import { shallow } from "enzyme";
import ColumnTags from "./column-tags.component";

it("Expect to Match Snapshot", () => {
  expect(shallow(<ColumnTags />)).toMatchSnapshot();
});

it("Expect to render CustomInput Component", () => {
  expect(shallow(<ColumnTags />).length).toEqual(1);
});
