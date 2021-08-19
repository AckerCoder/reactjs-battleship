const { v4: uuidv4 } = require("uuid");

const ships = [
  {
    name: "ship1",
    quantity: 1,
    length: 4,
    width: 0,
  },
  {
    name: "ship2",
    quantity: 2,
    length: 3,
    width: 0,
  },
  {
    name: "ship3",
    quantity: 3,
    length: 2,
    width: 0,
  },
  {
    name: "ship4",
    quantity: 4,
    length: 1,
    width: 0,
  },
];

const generateEmptyBoard = () => {
  let board = [];
  for (let i = 0; i < 10; i++) {
    let arrow = [];
    for (let j = 0; j < 10; j++) {
      arrow.push({
        status: "normal",
        shipName: null,
      });
    }
    board.push(arrow);
  }
  return board;
};

const getDirection = () => {
  const index = Math.floor(Math.random() * 10);
  if (index < 5) {
    return "vertical";
  } else {
    return "horizontal";
  }
};

const getRandomIndex = () => {
  return Math.floor(Math.random() * 10);
};

const isCoordinateOccuped = (coordinate) =>
  coordinate.shipName === null ? false : true;

const setShip = (ship, board) => {
  let isSetUp = false;
  while (!isSetUp) {
    let direction = getDirection();
    let axisX = getRandomIndex();
    let axisY = getRandomIndex();

    if (isCoordinateOccuped(board[axisX][axisY])) {
      continue;
    }

    if (direction === "vertical") {
      if (ship.length + axisX > 10) {
        continue;
      }
      let isItPossible = true;
      for (let i = 0; i < ship.length; i++) {
        if (isCoordinateOccuped(board[axisX + i][axisY])) {
          isItPossible = false;
          break;
        }
      }
      if (isItPossible) {
        const shipUniqueName = uuidv4();
        for (let i = 0; i < ship.length; i++) {
          board[axisX + i][axisY].shipName = shipUniqueName;
        }
        isSetUp = true;
      }
    } else {
      if (ship.length + axisY > 10) {
        continue;
      }
      let isItPossible = true;
      for (let i = 0; i < ship.length; i++) {
        if (isCoordinateOccuped(board[axisX][axisY + i])) {
          isItPossible = false;
          break;
        }
      }
      if (isItPossible) {
        const shipUniqueName = uuidv4();
        for (let i = 0; i < ship.length; i++) {
          board[axisX][axisY + i].shipName = shipUniqueName;
        }
        isSetUp = true;
      }
    }
  }
};

const setBoardUp = (board) => {
  ships.map((ship) => {
    for (let counter = 0; counter < ship.quantity; counter++) {
      setShip(ship, board);
    }
    return 1;
  });
};

const isShipDestroyed = (shipName, board) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (
        board[i][j].shipName === shipName &&
        board[i][j].status === "normal"
      ) {
        return false;
      }
    }
  }
  return true;
};

module.exports = { generateEmptyBoard, setBoardUp, isShipDestroyed };
