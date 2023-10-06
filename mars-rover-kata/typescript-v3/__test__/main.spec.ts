import { East, North, Position, Robotito, South, West } from "../src/main";

describe("Robotito", () => {
  it("should have an initial location", () => {
    const robotito = new Robotito();

    expect(robotito.currentLocation).toEqual({
      position: new Position(0, 0),
      direction: new North(),
    });
  });

  it("should move forward", () => {
    const robotito = new Robotito({
      position: new Position(0, 0),
      direction: new North(),
    });

    robotito.forward();

    expect(robotito.currentLocation).toEqual({
      position: new Position(0, 1),
      direction: new North(),
    });
  });

  it("should move backward", () => {
    const robotito = new Robotito({
      position: new Position(0, 0),
      direction: new West(),
    });

    robotito.backward();

    expect(robotito.currentLocation).toEqual({
      position: new Position(1, 0),
      direction: new West(),
    });
  });

  it("should rotate to right", () => {
    const robotito = new Robotito({
      position: new Position(0, 0),
      direction: new North(),
    });

    robotito.rotateRight();

    expect(robotito.currentLocation).toEqual({
      position: new Position(0, 0),
      direction: new East(),
    });
  });

  it("should rotate to left", () => {
    const robotito = new Robotito({
      position: new Position(0, 0),
      direction: new North(),
    });

    robotito.rotateLeft();

    expect(robotito.currentLocation).toEqual({
      position: new Position(0, 0),
      direction: new West(),
    });
  });
});

describe("Position", () => {
  it.each([
    { direction: new North(), expectedPosition: new Position(0, 1) },
    { direction: new East(), expectedPosition: new Position(1, 0) },
    { direction: new South(), expectedPosition: new Position(0, -1) },
    { direction: new West(), expectedPosition: new Position(-1, 0) },
  ])(
    "should increase based on $direction.key",
    ({ direction, expectedPosition }) => {
      const initialPosition = new Position(0, 0);

      const position = initialPosition.increaseBasedOn(direction);

      expect(position).toEqual(expectedPosition);
    }
  );

  it.each([
    { direction: new North(), expectedPosition: new Position(0, -1) },
    { direction: new East(), expectedPosition: new Position(-1, 0) },
    { direction: new South(), expectedPosition: new Position(0, 1) },
    { direction: new West(), expectedPosition: new Position(1, 0) },
  ])(
    "should decrease based on $direction.key",
    ({ direction, expectedPosition }) => {
      const initialPosition = new Position(0, 0);

      const position = initialPosition.decreaseBasedOn(direction);

      expect(position).toEqual(expectedPosition);
    }
  );
});

describe("Direction", () => {
  it.each([
    { direction: new North(), expectedDirection: new East() },
    { direction: new East(), expectedDirection: new South() },
    { direction: new South(), expectedDirection: new West() },
    { direction: new West(), expectedDirection: new North() },
  ])(
    "$direction.key should know the right direction",
    ({ direction, expectedDirection }) => {
      const rotatedDirection = direction.lookAtRight();

      expect(rotatedDirection).toEqual(expectedDirection);
    }
  );

  it.each([
    { direction: new North(), expectedDirection: new West() },
    { direction: new East(), expectedDirection: new North() },
    { direction: new South(), expectedDirection: new East() },
    { direction: new West(), expectedDirection: new South() },
  ])(
    "$direction.key should know the left direction",
    ({ direction, expectedDirection }) => {
      const rotatedDirection = direction.lookAtLeft();

      expect(rotatedDirection).toEqual(expectedDirection);
    }
  );
});

// TODO: Ver el documental de typescript
// https://www.youtube.com/watch?v=U6s2pdxebSo
