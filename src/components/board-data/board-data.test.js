import React from "react";
import { shallow } from "enzyme";
import BoardData from "./board-data.component";
it("Expect to Match Snapshot", () => {
  expect(shallow(<BoardData />)).toMatchSnapshot();
});

it("Expect to render BoardData Component", () => {
  const mockData = "12345";
  const mockDataNumber = parseInt(mockData, 10);
  const mockDataNumberNegative = -1;
  const mockLabel = "Label";

  expect(
    shallow(<BoardData data={mockDataNumberNegative} label={mockLabel} />)
      .length
  ).toEqual(1);

  expect(
    shallow(<BoardData data={mockDataNumber} label={mockLabel} />).length
  ).toEqual(1);

  expect(
    shallow(<BoardData data={mockData} label={mockLabel} />).length
  ).toEqual(1);
});
