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
    const offsetX = this.getOffsetX(trigger);
    const box = trigger.getBoundingClientRect();

    switch (placement) {
      case 'left':
        return box.left + offsetX;
      case 'right':
        return box.left + offsetX + box.width - overlay.getBoundingClientRect().width;
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
    const offsetY = this.getOffsetY(trigger);
    const box = trigger.getBoundingClientRect();
    console.log(overlay.getBoundingClientRect());

    switch (placement) {
      case 'top':
        return box.top + offsetY - overlay.getBoundingClientRect().height;
      case 'bottom':
        return box.top + offsetY + box.height;
      default:
        // I can't imagine this being ran through
        // No need for this since the placement is validated with `propTypes`
        throw new Error(`
          Invalid placement provided (${placement} given);
          choose from 'top' / 'bottom'
        `);
    }
  },

  getOffset($el) {
    return {
      top: this.getOffsetY($el),
      left: this.getOffsetX($el)
    }
  },

  getOffsetX($el) {
    const doc = document && document.documentElement;
    const win = window;
    const box = $el.getBoundingClientRect();
    return win.pageXOffset || doc.scrollLeft;
  },

  getOffsetY($el) {
    const doc = document && document.documentElement;
    const win = window;
    const box = $el.getBoundingClientRect();
    return win.pageYOffset || doc.scrollTop;
  }
};
