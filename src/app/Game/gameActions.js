export const CLICK_BUTTON = "GAME__CLICK_BUTTON";

export function clickButton(x, y) {
  return {
    type: CLICK_BUTTON,
    x, y
  }
}
