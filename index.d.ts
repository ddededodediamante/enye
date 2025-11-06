export const enye: string;
export const uppercase_enye: string;

/**
 * @typedef {Object} EnyeConfig
 * @property {number} [amount=1] - How many ñs to generate
 * @property {'mild'|'hot'|'extra-hot'} [spiciness='mild'] - Spiciness level of the ñs
 * @property {'2d'|'3d'} [dimension='2d'] - 2D or 3D styled ñs
 * @property {boolean} [uppercase=false] - Converts output to uppercase
 * @property {boolean} [randomize=false] - Randomizes ñ variants
 * @property {'default'|'bold'|'italic'|'glitchy'} [style='default'] - Style of the ñs
 */
export interface EnyeConfig {
  amount?: number;
  spiciness?: 'mild' | 'hot' | 'extra-hot';
  dimension?: '2d' | '3d';
  uppercase?: boolean;
  randomize?: boolean;
  style?: 'default' | 'bold' | 'italic' | 'glitchy';
}

export class EnyeGenerator {
  /**
   * @param {EnyeConfig} [config={}] Configuration options for the generator
   */
  constructor(config?: EnyeConfig);

  amount: number;
  spiciness: string;
  dimension: string;
  uppercase: boolean;
  randomize: boolean;
  style: string;
  history: string[];
  totalGenerated: number;

  /**
   * Applies a text style
   * @param {string} text
   * @returns {string}
   */
  private _applyStyle(text: string): string;

  /**
   * Picks a random ñ variant
   * @returns {string}
   */
  private _randomChar(): string;

  /**
   * Generates a string based on current settings
   * @returns {string}
   */
  generate(): string;

  /**
   * Returns generation history
   * @returns {string[]}
   */
  getHistory(): string[];

  /**
   * Clears history and resets stats
   */
  resetHistory(): void;

  /**
   * Returns info about the generator and its configuration
   * @returns {{ totalGenerated: number, lastResult: string|null, config: EnyeConfig }}
   */
  info(): {
    totalGenerated: number;
    lastResult: string | null;
    config: EnyeConfig;
  };
}
