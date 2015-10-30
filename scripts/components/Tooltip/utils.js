export default {
  /**
   * Calculates the position of the overlay (tooltip)
   *
   * The math here is as simple as the requirement. We just
   * want the tooltip to appear in the center of the provided
   * placement (for example, horizontally center it if top or btm;
   * or vertically center it if left or right).
   *
   * To center `top`:
   * (left): (<A> + <B / 2> + <C / 2>)
   * A = offsetLeft; distance between the left-most screen and `trigger`
   * B = ./.
   * C = ./.
   *
   * I left a comment here because the terminologies were a bit confusing.
   * There's duplicated code (for example, top and bottom had the same `left` offset;
   * left and right had the same `top` offset) because obviously, it would be unnecessarily
   * more expensive and/or the code with be more lengthy (which is seriously fucking bad).
   */
  calculatePosition(trigger, overlay, placement) {
    const coords = trigger.getBoundingClientRect();
    const coordsTop = coords.top,
          coordsBottom = coords.bottom,
          coordsLeft = coords.left,
          coordsRight = coords.right;

    switch (placement) {
      case 'left':
        return {
          top: (coordsTop + (trigger.offsetHeight / 2)) + ( trigger.offsetHeight / 2 )  - overlay.offsetHeight,
          left: coordsLeft - overlay.offsetWidth
        };
      case 'right':
        return {
          top: (coordsTop + (trigger.offsetHeight / 2)) + ( trigger.offsetHeight / 2 )  - overlay.offsetHeight,
          left: coordsRight
        };
      case 'top':
        return {
          top: coordsTop - overlay.offsetHeight,
          left: coordsRight - (trigger.offsetWidth / 2) - (overlay.offsetWidth / 2)
        };
      case 'bottom':
        return {
          top: coordsBottom,
          left: coordsRight - (trigger.offsetWidth / 2) - (overlay.offsetWidth / 2)
        };
      default:
        // I can't imagine this being ran through
        // No need for this since the placement is validated with `propTypes`
    }
  }
};
