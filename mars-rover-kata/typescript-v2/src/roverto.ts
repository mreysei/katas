import { Direction } from "./direction";

type Command = "f" | "b" | "l" | "r";

type CommandToAction = Record<Command, () => void>;

interface Status {
  direction: Direction;
}

export class Roverto {
  constructor(private direction: Direction) {}

  execute(...commands: Command[]): void {
    const actionToBeExecute: CommandToAction = {
      f: () => this.moveForward(),
      b: () => this.moveBackward(),
      l: () => this.rotateLeft(),
      r: () => this.rotateRight(),
    };

    commands.forEach((command) => actionToBeExecute[command]());
  }

  getStatus(): Status {
    return { direction: this.direction };
  }

  moveForward(): void {
    this.direction.forward();
  }

  moveBackward(): void {
    this.direction.backward();
  }

  rotateLeft(): void {
    this.direction = this.direction.left();
  }

  rotateRight(): void {
    this.direction = this.direction.right();
  }
}
