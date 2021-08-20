import React from "react";
import { shallow } from "enzyme";
import CustomButton from "./custom-button.component";

it("Expect to Match Snapshot", () => {
  expect(shallow(<CustomButton />)).toMatchSnapshot();
});

it("Expect to render CustomButton Component", () => {
  const mockChildren = "Mock Children";
  const mockLabel = "Mock Label";
  expect(
    shallow(
      <CustomButton label={mockLabel} main>
        {mockChildren}
      </CustomButton>
    ).length
  ).toEqual(1);
  expect(
    shallow(
      <CustomButton label={mockLabel} setting>
        {mockChildren}
      </CustomButton>
    ).length
  ).toEqual(1);
});
