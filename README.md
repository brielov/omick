![GitHub Workflow Status](https://img.shields.io/github/workflow/status/brielov/omick/build-test)
![Codecov](https://img.shields.io/codecov/c/gh/brielov/omick)
![GitHub issues](https://img.shields.io/github/issues/brielov/omick)
![GitHub](https://img.shields.io/github/license/brielov/omick)
![npm](https://img.shields.io/npm/v/omick)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/omick)

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
