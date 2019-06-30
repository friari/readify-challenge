//defining default position and bearing (direction) that will be set in the place function
let currentPosition = [];
let bearing = undefined;

function place(x, y, direction) {
  // redefining the defaults so the results don't accumulate
  currentPosition = [];
  bearing = direction.toUpperCase();

  // all invalid arguments will exit the function with a result that won't return anything in the subsequent functions
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

  // defines a valid current position in array with x, y and direction
  return currentPosition.push(x, y, bearing);
}

// This function allows the robot to move 1 place in the direction it is facing
// unless said move would result in the robot falling off the table
function move() {
  switch (currentPosition[2]) {
    case "NORTH":
      // if the robot is at the edge of the table, break out of switch statement without moving
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

// turns the robot one direction to the left by changing the bearing
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

// turns the robot one direction to the right by changing the bearing
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

// outputs and returns the robot's position and direction after it has moved around the table
function report() {
  console.log(currentPosition.toString());
  return currentPosition.toString();
}

// testing with supplied test data
place(0, 0, "NORTH");
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

// testing for cases where the arguments are invalid
place(0, 0, "NOR  TH");
move();
report();

place(1, 5, "east");
move();
move();
left();
move();
report();
