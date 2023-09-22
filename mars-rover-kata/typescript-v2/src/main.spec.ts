import { North, South, West, East } from "./direction";
import { Roverto } from "./roverto";

describe("Roverto", () => {
  it("should have an initial position", () => {
    const north = new North(0, 0);
    const roverto = new Roverto(north);

    const { direction } = roverto.getStatus();
    expect(direction).toBeInstanceOf(North);
    expect(direction.x).toBe(0);
    expect(direction.y).toBe(0);
  });

  it("should move forward based on direction", () => {
    const north = new North(0, 0);
    const roverto = new Roverto(north);

    roverto.moveForward();

    const { direction } = roverto.getStatus();
    expect(direction).toBeInstanceOf(North);
    expect(direction.x).toBe(0);
    expect(direction.y).toBe(1);
  });

  it("should move backward based on direction", () => {
    const north = new North(0, 0);
    const roverto = new Roverto(north);

    roverto.moveBackward();

    const { direction } = roverto.getStatus();
    expect(direction).toBeInstanceOf(North);
    expect(direction.x).toBe(0);
    expect(direction.y).toBe(-1);
  });

  it("should rotate left based on direction", () => {
    const north = new North(0, 0);
    const roverto = new Roverto(north);

    roverto.rotateLeft();

    const { direction } = roverto.getStatus();
    expect(direction).toBeInstanceOf(West);
  });

  it("should rotate right based on direction", () => {
    const north = new North(0, 0);
    const roverto = new Roverto(north);

    roverto.rotateRight();

    const { direction } = roverto.getStatus();
    expect(direction).toBeInstanceOf(East);
  });

  it("should execute a sequence of commands", () => {
    const north = new North(0, 0);
    const roverto = new Roverto(north);

    roverto.execute("f", "f", "l", "b", "r", "r");

    const { direction } = roverto.getStatus();
    expect(direction).toBeInstanceOf(East);
    expect(direction.x).toBe(1);
    expect(direction.y).toBe(2);
  });
});

describe("Direction", () => {
  describe("should move forward when it pointing to", () => {
    it("the north", () => {
      const north = new North(0, 0);

      north.forward();

      expect(north.x).toBe(0);
      expect(north.y).toBe(1);
    });

    it("the south", () => {
      const south = new South(0, 0);

      south.forward();

      expect(south.x).toBe(0);
      expect(south.y).toBe(-1);
    });

    it("the west", () => {
      const west = new West(0, 0);

      west.forward();

      expect(west.x).toBe(-1);
      expect(west.y).toBe(0);
    });

    it("the east", () => {
      const east = new East(0, 0);

      east.forward();

      expect(east.x).toBe(1);
      expect(east.y).toBe(0);
    });
  });

  describe("should move backward when it pointing to", () => {
    it("the north", () => {
      const north = new North(0, 0);

      north.backward();

      expect(north.x).toBe(0);
      expect(north.y).toBe(-1);
    });

    it("the south", () => {
      const south = new South(0, 0);

      south.backward();

      expect(south.x).toBe(0);
      expect(south.y).toBe(1);
    });

    it("the west", () => {
      const west = new West(0, 0);

      west.backward();

      expect(west.x).toBe(1);
      expect(west.y).toBe(0);
    });

    it("the east", () => {
      const east = new East(0, 0);

      east.backward();

      expect(east.x).toBe(-1);
      expect(east.y).toBe(0);
    });
  });

  describe("should change direction when rotate left from", () => {
    it("the north", () => {
      const north = new North(0, 0);

      const west = north.left();

      expect(west).toBeInstanceOf(West);
    });

    it("the south", () => {
      const south = new South(0, 0);

      const east = south.left();

      expect(east).toBeInstanceOf(East);
    });

    it("the west", () => {
      const west = new West(0, 0);

      const south = west.left();

      expect(south).toBeInstanceOf(South);
    });

    it("the east", () => {
      const east = new East(0, 0);

      const north = east.left();

      expect(north).toBeInstanceOf(North);
    });
  });

  describe("should change direction when rotate right from", () => {
    it("the north", () => {
      const north = new North(0, 0);

      const east = north.right();

      expect(east).toBeInstanceOf(East);
    });

    it("the south", () => {
      const south = new South(0, 0);

      const west = south.right();

      expect(west).toBeInstanceOf(West);
    });

    it("the west", () => {
      const west = new West(0, 0);

      const north = west.right();

      expect(north).toBeInstanceOf(North);
    });

    it("the east", () => {
      const east = new East(0, 0);

      const south = east.right();

      expect(south).toBeInstanceOf(South);
    });
  });
});
