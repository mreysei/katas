export enum MouseEventType {
  SingleClick,
  DoubleClick,
  TripleClick,
  Drag,
  Drop
}

export class MousePointerCoordinates {
  constructor(
    private x: number, 
    private y: number
  ) { }

  asd() {
    console.log(this.x, this.y)
  }
}

export interface MouseEventListener {
  handleMouseEvent: (eventType: MouseEventType) => void
}

export class Mouse {
  private listeners: Array<MouseEventListener> = []
  private leftButtonPressed = false
  private readonly timeWindowInMillisecondsForDoubleClick: number = 500

  public pressLeftButton(currentTimeInMilliseconds: number): void {
    console.log(currentTimeInMilliseconds)
    this.leftButtonPressed = true
  }
  
  public releaseLeftButton(currentTimeInMilliseconds: number): void {
    if (this.leftButtonPressed) {
      this.notifySubscribers(MouseEventType.SingleClick)
    }

    console.log(currentTimeInMilliseconds, this.timeWindowInMillisecondsForDoubleClick)
  }

  public move(
    from: MousePointerCoordinates, 
    to: MousePointerCoordinates, 
    currentTimeInMilliseconds: number
  ): void {
    console.log(from, to, currentTimeInMilliseconds)
  }

  public subscribe(listener: MouseEventListener): void {
    this.listeners.push(listener)
  }

  private notifySubscribers(eventType: MouseEventType): void {
    this.listeners.forEach(listener => listener.handleMouseEvent(eventType))
  }
}