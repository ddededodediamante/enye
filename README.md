# EnyeGenerator

A lightweight and customizable JavaScript library that generates **ñ** strings.
It supports multiple styles, randomization, 2D/3D ñs, and more.

---

## Installation

```bash
npm install enye-generator
```

Or with Yarn:

```bash
yarn add enye-generator
```

---

## Quick Start

```js
import EnyeGenerator from "enye-generator";

const enye = new EnyeGenerator({
  amount: 5,
  spiciness: "hot",
  randomize: true,
  style: "glitchy",
});

console.log(enye.generate());
```

---

## Configuration

| Option      | Type                                                  | Default              | Description                           |
| ----------- | ----------------------------------------------------- | -------------------- | ------------------------------------- |
| `amount`    | `number`                                              | `1`                  | Number of ñs to generate             |
| `spiciness` | `'mild', 'hot', 'extra-hot'`                          | `'mild'`             | Adds spice emojis 🌶️ / 🔥             |
| `dimension` | `'2d', '3d'`                                          | `'2d'`               | Toggles between 2D or glitchy 3D mode |
| `uppercase` | `boolean`                                             | `false`              | Converts output to uppercase          |
| `randomize` | `boolean`                                             | `false`              | Randomizes ñ variants                 |
| `style`     | `'default', 'bold', 'italic', 'glitchy'`, `'default'` | Adds text formatting |

> **Warning:** Setting `spiciness` above `'extra-hot'` will cause an error.
