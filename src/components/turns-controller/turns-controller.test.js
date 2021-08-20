import React from "react";
import { shallow } from "enzyme";
import TurnsController from "./turns-controller.component";
it("Expect to Match Snapshot", () => {
  expect(shallow(<TurnsController />)).toMatchSnapshot();
});

it("Expect to render TurnsController Component", () => {
  const mockGameModeCustom = "CUSTOM";
  const mockGameModeSimple = "SIMPLE";

  const mockNumberOfTurns = 159;
  const mockNumberOfTurnsNegative = -1;

  const mockSetNumberOfTurnsClick = jest.fn();

  expect(
    shallow(
      <TurnsController
        gameMode={mockGameModeCustom}
        numberOfTurns={mockNumberOfTurnsNegative}
        setNumberOfTurns={mockSetNumberOfTurnsClick}
      />
    ).length
  ).toEqual(1);

  expect(
    shallow(
      <TurnsController
        gameMode={mockGameModeSimple}
        numberOfTurns={mockNumberOfTurns}
        setNumberOfTurns={mockSetNumberOfTurnsClick}
      />
    ).length
  ).toEqual(1);
});
