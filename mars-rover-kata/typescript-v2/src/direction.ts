export interface Direction {
  x: number;
  y: number;
  forward(): Direction;
  backward(): Direction;
  left(): Direction;
  right(): Direction;
}

export class North implements Direction {
  constructor(public x: number, public y: number) {}

  forward(): North {
    this.y++;
    return new North(this.x, this.y);
  }

  backward(): North {
    this.y--;
    return new North(this.x, this.y);
  }

  left(): West {
    return new West(this.x, this.y);
  }

  right(): East {
    return new East(this.x, this.y);
  }
}

export class South implements Direction {
  constructor(public x: number, public y: number) {}

  forward(): South {
    this.y--;
    return new South(this.x, this.y);
  }

  backward(): South {
    this.y++;
    return new South(this.x, this.y);
  }

  left(): East {
    return new East(this.x, this.y);
  }

  right(): West {
    return new West(this.x, this.y);
  }
}

export class West implements Direction {
  constructor(public x: number, public y: number) {}

  forward(): West {
    this.x--;
    return new West(this.x, this.y);
  }

  backward(): West {
    this.x++;
    return new West(this.x, this.y);
  }

  left(): South {
    return new South(this.x, this.y);
  }

  right(): North {
    return new North(this.x, this.y);
  }
}

export class East implements Direction {
  constructor(public x: number, public y: number) {}

  forward(): East {
    this.x++;
    return new East(this.x, this.y);
  }

  backward(): East {
    this.x--;
    return new East(this.x, this.y);
  }

  left(): North {
    return new North(this.x, this.y);
  }

  right(): South {
    return new South(this.x, this.y);
  }
}
