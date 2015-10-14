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
   * expensiver and/or the code with be more lengthy (which is seriously fucking bad).
   */
  calculatePosition(trigger, overlay, placement = { x: 'left', y: 'bottom' }) {
    return {
      top: this.calculateY(trigger, overlay, placement.y),
      left: this.calculateX(trigger, overlay, placement.x)
    };
  },

  calculateX(trigger, overlay, placement) {
    switch (placement) {
      case 'left':
        return trigger.offsetLeft;
      case 'right':
        return trigger.offsetLeft - trigger.offsetWidth;
      default:
        // I can't imagine this being ran through
        // No need for this since the placement is validated with `propTypes`
        throw new Error(`
          Invalid placement provided (${placement} given);
          choose from 'left' / 'right'
        `)
    }
  },

  calculateY(trigger, overlay, placement) {
    switch (placement) {
      case 'top':
        return trigger.offsetTop - overlay.offsetHeight;
      case 'bottom':
        return trigger.offsetTop + trigger.offsetHeight;
      default:
        // I can't imagine this being ran through
        // No need for this since the placement is validated with `propTypes`
        throw new Error(`
          Invalid placement provided (${placement} given);
          choose from 'top' / 'bottom'
        `);

    }
  }
};
