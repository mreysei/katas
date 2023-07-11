import { Mouse, MouseEventListener, MouseEventType } from "./mouse"

describe('Mouse', () => {
  it('notifies single click', () => {
    const mouse: Mouse = new Mouse()
    const listener: MouseEventListener = {
      handleMouseEvent: jest.fn()
    }
    mouse.subscribe(listener)

    mouse.pressLeftButton(Date.now())
    mouse.releaseLeftButton(Date.now())

    expect(listener.handleMouseEvent).toHaveBeenCalledWith(MouseEventType.SingleClick)
  })
})