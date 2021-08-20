import React from "react";
import { shallow } from "enzyme";
import CellPosition from "./cell-position.component";

it("Expect to Match Snapshot", () => {
  expect(shallow(<CellPosition />)).toMatchSnapshot();
});

it("Expect to render CellComponent", () => {
  const mockPlayerName = "Player Name";
  const mockPosition = 1245;
  const mockScore = 12346;

  expect(
    shallow(
      <CellPosition
        playerName={mockPlayerName}
        position={mockPosition}
        score={mockScore}
      />
    ).length
  ).toEqual(1);
});
