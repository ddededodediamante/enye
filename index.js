// boring
export const enye = "ñ";
export const uppercase_enye = "Ñ";

/**
 * @typedef {Object} EnyeConfig
 * @property {number} [amount=1] - How many ñs to generate
 * @property {'mild'|'hot'|'extra-hot'} [spiciness='mild'] - Spiciness level of the ñs
 * @property {'2d'|'3d'} [dimension='2d'] - 2D or 3D styled ñs
 * @property {boolean} [uppercase=false] - Converts output to uppercase
 * @property {boolean} [randomize=false] - Randomizes ñ variants
 * @property {'default'|'bold'|'italic'|'glitchy'} [style='default'] - Style of the ñs
 */

export class EnyeGenerator {
  /**
   * @param {EnyeConfig} [config={}] Configuration options for the generator
   */
  constructor(config = {}) {
    this.amount = config.amount || 1;
    this.spiciness = config.spiciness || "mild";
    this.dimension = config.dimension || "2d";
    this.uppercase = config.uppercase || false;
    this.randomize = config.randomize || false;
    this.style = config.style || "default";
    this.history = [];
    this.totalGenerated = 0;
  }

  /**
   * Applies a text style
   * @param {string} text
   * @returns {string}
   */
  #applyStyle(text) {
    switch (this.style) {
      case "bold":
        return `**${text}**`;
      case "italic":
        return `*${text}*`;
      case "glitchy":
        return text
          .split("")
          .map((c) => `${c}\u0336\u0337`)
          .join(""); // Gulp
      default:
        return text;
    }
  }

  /**
   * Picks a random ñ variant
   * @returns {string}
   */
  #randomChar() {
    const options = ["ñ", "Ñ", "ñ", "ŋ", "ꞑ", "ɲ"];
    return options[Math.floor(Math.random() * options.length)];
  }

  /**
   * Generates a string based on current settings
   * @returns {string}
   */
  generate() {
    let spiciness_lowercase = this.spiciness.toLowerCase().trim();
    let dimension_lowercase = this.dimension.toLowerCase().trim();
    let base = "";

    for (let i = 0; i < this.amount; i++) {
      base += this.randomize ? this.#randomChar() : "ñ";
    }

    if (spiciness_lowercase === "super-hot") {
      throw new Error("Too hot");
    } else if (spiciness_lowercase === "extra-hot") {
      base = "🌶" + base + "🌶";
    } else if (spiciness_lowercase === "hot") {
      base = "🔥" + base + "🔥";
    } else if (spiciness_lowercase !== "mild") {
      throw new Error(`Invalid spiciness mode: ${this.spiciness}`);
    }

    if (dimension_lowercase === "3d") {
      base = `Ñ̸̢̨̮̖`.repeat(this.amount);
    } else if (!["2d", "1d"].includes(dimension_lowercase)) {
      throw new Error(`Cannot handle the ${this.dimension} dimension`);
    }

    if (this.uppercase) {
      base = base.toUpperCase();
    }

    base = this.#applyStyle(base);
    base = base.trim();

    this.history.push(base);
    this.totalGenerated++;

    return base;
  }

  /**
   * Returns generation history
   * @returns {string[]}
   */
  getHistory() {
    return [...this.history];
  }

  /**
   * Clears history and resets stats
   */
  resetHistory() {
    this.history = [];
    this.totalGenerated = 0;
  }

  /**
   * Returns info about the generator and its configuration
   * @returns {{ totalGenerated: number, lastResult: string|null, config: EnyeConfig }}
   */
  info() {
    return {
      totalGenerated: this.totalGenerated,
      lastResult: this.history[this.history.length - 1] || null,
      config: {
        amount: this.amount,
        spiciness: this.spiciness,
        danceMode: this.danceMode,
        dimension: this.dimension,
        uppercase: this.uppercase,
        randomize: this.randomize,
        style: this.style,
      },
    };
  }
}
