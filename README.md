![NPM](https://img.shields.io/npm/l/omick)
![Codecov](https://img.shields.io/codecov/c/github/brielov/omick)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/omick)
![GitHub issues](https://img.shields.io/github/issues/brielov/omick)
![npm](https://img.shields.io/npm/dm/omick)
![Libraries.io SourceRank](https://img.shields.io/librariesio/sourcerank/npm/omick)

# Omick

Tiny, type-safe `pick` and `omit` utility functions.

## Installation

```
npm install omick
```

## Usage

```typescript
import { pick, omit } from "omick";

const obj = {
  id: 1,
  name: "John Doe",
  email: "john@doe.com",
  password: "johndoe123",
};

const obj1 = pick(obj, "name", "email"); // => { name: 'John Doe', email: 'john@doe.com' }

const obj2 = omit(obj, "password"); // => { id: 1, name: 'John Doe', email: 'john@doe.com' }
```
