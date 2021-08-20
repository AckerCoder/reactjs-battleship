import React from "react";
import { shallow } from "enzyme";
import Cell from "./cell.component";
import logo from "../../logo.svg";
it("Expect to Match Snapshot", () => {
  expect(shallow(<Cell />)).toMatchSnapshot();
});

it("Expect to render CustomInput Component", () => {
  const mockOnClick = () => {
    console.log("THIS IS A TEST");
  };

  expect(shallow(<Cell imgSrc={logo} clicker={mockOnClick} />).length).toEqual(
    1
  );
});
