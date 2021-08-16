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
      arrow.push("");
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

const isCoordinateOccuped = (coordinate) => (coordinate === "" ? false : true);

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
        for (let i = 0; i < ship.length; i++) {
          board[axisX + i][axisY] = ship.name;
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
        for (let i = 0; i < ship.length; i++) {
          board[axisX][axisY + i] = ship.name;
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
  });
};

// const printBoard = (board) => {
//   for (let i = 0; i < 10; i++) {
//     let line = "";
//     for (let j = 0; j < 10; j++) {
//       if (board[i][j] === "") {
//         line = line + "vacio   ";
//       } else {
//         line += board[i][j] + "   ";
//       }
//     }
//     console.log(line);
//   }
// };

module.exports = { generateEmptyBoard, setBoardUp };
