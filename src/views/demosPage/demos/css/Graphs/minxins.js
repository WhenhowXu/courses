const COLORS = Object.freeze(['red', 'blue', 'green']);
export const grahMixins = {
  props: {
    color: { type: String, default: COLORS[0] },
    randomColor: { type: Boolean, default: true },
    colors: { type: Array, default: () => COLORS },
  },

  computed: {
    resultColor() {
      if (this.randomColor) {
        const l = this.colors.length;
        return this.colors[Math.floor(Math.random() * l)];
      } else {
        return this.color;
      }
    },
  },
};
