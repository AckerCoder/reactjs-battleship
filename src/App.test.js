import React from "react";
import { shallow } from "enzyme";
import App from "./app.js";

it("Expect to Match Snapshot", () => {
  expect(shallow(<App />)).toMatchSnapshot();
});

it("Expect to render App Component", () => {
  expect(shallow(<App />).length).toEqual(1);
});
