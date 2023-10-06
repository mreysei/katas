interface Direction {
  lookAtRight(): Direction;
  lookAtLeft(): Direction;
}

export class North implements Direction {
  readonly key = "North";

  lookAtRight(): Direction {
    return new East();
  }

  lookAtLeft(): Direction {
    return new West();
  }
}

export class East implements Direction {
  readonly key = "East";

  lookAtRight(): Direction {
    return new South();
  }

  lookAtLeft(): Direction {
    return new North();
  }
}

export class South implements Direction {
  readonly key = "South";

  lookAtRight(): Direction {
    return new West();
  }

  lookAtLeft(): Direction {
    return new East();
  }
}

export class West implements Direction {
  readonly key = "West";

  lookAtRight(): Direction {
    return new North();
  }

  lookAtLeft(): Direction {
    return new South();
  }
}

class Location {
  constructor(readonly position: Position, readonly direction: Direction) {}
}

export class Position {
  constructor(readonly x: number, readonly y: number) {}

  increaseBasedOn(direction: Direction): Position {
    if (direction instanceof North) {
      return new Position(this.x, this.y + 1);
    }
    if (direction instanceof East) {
      return new Position(this.x + 1, this.y);
    }
    if (direction instanceof South) {
      return new Position(this.x, this.y - 1);
    }
    if (direction instanceof West) {
      return new Position(this.x - 1, this.y);
    }
    throw new Error("Invalid direction");
  }

  decreaseBasedOn(direction: Direction): Position {
    if (direction instanceof North) {
      return new Position(this.x, this.y - 1);
    }
    if (direction instanceof East) {
      return new Position(this.x - 1, this.y);
    }
    if (direction instanceof South) {
      return new Position(this.x, this.y + 1);
    }
    if (direction instanceof West) {
      return new Position(this.x + 1, this.y);
    }
    throw new Error("Invalid direction");
  }
}

export class Robotito {
  constructor(
    private location: Location = new Location(new Position(0, 0), new North())
  ) {}

  get currentLocation(): Location {
    return { ...this.location };
  }

  forward(): void {
    this.location = new Location(
      this.location.position.increaseBasedOn(this.location.direction),
      this.location.direction
    );
  }

  backward(): void {
    this.location = new Location(
      this.location.position.decreaseBasedOn(this.location.direction),
      this.location.direction
    );
  }

  rotateRight(): void {
    this.location = new Location(
      this.location.position,
      this.location.direction.lookAtRight()
    );
  }

  rotateLeft(): void {
    this.location = new Location(
      this.location.position,
      this.location.direction.lookAtLeft()
    );
  }
}
