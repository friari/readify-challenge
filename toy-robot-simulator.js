let currentPosition = [];
let bearing = undefined;

function place(x, y, direction) {
  currentPosition = [];
  bearing = direction.toUpperCase();

  if (
    (bearing !== "NORTH" &&
      bearing !== "SOUTH" &&
      bearing !== "EAST" &&
      bearing !== "WEST") ||
    (x < 0 || x > 4) ||
    (y < 0 || y > 4)
  ) {
    console.log("please enter valid arguments");
    return (bearing = undefined);
  }

  return currentPosition.push(x, y, bearing);
}

function move() {
  switch (currentPosition[2]) {
    case "NORTH":
      if (currentPosition[1] === 4) {
        break;
      }
      currentPosition[1] += 1;
      break;
    case "SOUTH":
      if (currentPosition[1] === 0) {
        break;
      }
      currentPosition[1] -= 1;
      break;
    case "EAST":
      if (currentPosition[0] === 0) {
        break;
      }
      currentPosition[0] += 1;
      break;
    case "WEST":
      if (currentPosition[0] === 4) {
        break;
      }
      currentPosition[0] -= 1;
  }
}

function left() {
  switch (currentPosition[2]) {
    case "NORTH":
      currentPosition[2] = "WEST";
      break;
    case "SOUTH":
      currentPosition[2] = "EAST";
      break;
    case "EAST":
      currentPosition[2] = "NORTH";
      break;
    case "WEST":
      currentPosition[2] = "SOUTH";
  }
}

function right() {
  switch (currentPosition[2]) {
    case "NORTH":
      currentPosition[2] = "EAST";
      break;
    case "SOUTH":
      currentPosition[2] = "WEST";
      break;
    case "EAST":
      currentPosition[2] = "SOUTH";
      break;
    case "WEST":
      currentPosition[2] = "NORTH";
      break;
  }
}

function report() {
  console.log(currentPosition.toString());
  return currentPosition.toString();
}

place(0, 0, "NORTH");
move();
report();

place(0, 0, "NOR  TH");
move();
report();

place(0, 0, "NORTH");
left();
report();

place(1, 2, "east");
move();
move();
left();
move();
report();
