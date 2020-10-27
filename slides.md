---
title: All hail typoscript
verticalSeparator: ---//
---

## All hail typoscript

<img src="./images/typescript.svg" width="400px"/><br>

<small>
Copyright (©️) 2020 Euricom
</small>

---

### Get to know the beast!

<img src="./images/octopus.jpg" width="500px"/>

---//

### Typescript 🤷‍♂️

- It is a strict syntactical superset of JavaScript and adds optional static typing to the language. <!-- .element: class="fragment" -->
- TypeScript is designed for development of large applications and transcompiles to JavaScript. <!-- .element: class="fragment" -->
- As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. <!-- .element: class="fragment" -->

🤓 Demo <!-- .element: class="fragment" -->

Note: Stress the fact that even if there are type issues, typescript still compiles to js.

---//

### Guiding Principle

> The guiding principle of TypeScript's type system is that it should model JavaScript's runtime behavior.

<p class="fragment">
🔥 Include stage 3 JavaScript features and contribute to TC39 committees. (except `enum` and [experimental decorators](https://tc39.es/proposal-decorators/) (stage 2))
</p>

---//

### Alternatives

**1. JsDoc**

```js
/**
 * Say hello to
 * @param {string} name
 * @return {string}
 */
function sayHello(name) {
  return `Hello ${name}`;
}
```

**2. Manual type definition files**

🦿 They need to be maintained disconnected from the code <!-- .element: class="fragment" -->

---

### Unleash the kraken!

<img src="./images/kraken.jpg" width="800px"/>

---//

### Basic typing

```ts
// Boolean
let isReady: boolean = false;

// Number
let digit: number = 1;

// String
let message: string = 'Message from the dark side';

// Array
let numbers: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

// Tuple
let point: [number, number] = [100, 200];
```

<p class="fragment">
🤔 What is the difference between `string` and `String`?
</p>

---//

### Functions

```ts
function divide(x: number, y: number): number {
  return x / y;
}

function multiply(x: number, y: number): number {
  return x * y;
}

function calculate(x: number, y: number, operation: any): number {
  return operation(x, y);
}
```

<p class="fragment">
🤔 How can we type the operation parameter?
</p>

---//

### Structural 🤷‍♂️?

```ts
function getFullName(person: Person): string {
  const { firstName, middleName, lastName } = person;
  return [firstName, middleName, lastName].join(' ');
}

const tomMarien = {
  firstName: 'Tom',
  middleName: 'Anna Michel',
  lastName: 'Marien',
};

const billGates = {
  firstName: 'Bill',
  lastName: 'Gates',
};

console.log(getFullName(tomMarien));
console.log(getFullName(billGates));
```

<p class="fragment">
🤔 How can we type the Person object?
</p>

---//

### 🧨 Types vs interfaces

<img src="./images/deliver-what-you-promised.jpg" width="600px"/>

---//

### Literal types

#### String

```ts
type Role = 'admin' | 'power-user' | 'user';

type User = {
  username: string;
  role: Role;
};

const user: User = {
  username: 'wvh',
  role: 'admin',
};
```

#### Numeric

```ts
type IconSize = 16 | 24 | 32 | 48 | 64;

type Icon = {
  name: string;
  size: IconSize;
};

const deleteIcon: Icon = {
  name: 'delete',
  size: 32,
};
```

#### Boolean

```ts
type Falsy = false | 0 | '' | null | undefined;
```

---//

### Special types

#### any

```ts
// it could be anything
let apiResult: any;

// it allows without any check to call even deep properties
const c = apiResult.a.b.c;
```

#### unknown

```ts
// you don't know the type but you need to check before accessing any props or functions
let maybeString: unknown;

if (typeof maybeString === 'string') {
  console.log('first character', maybeString.substring(0, 1));
}
```

#### void

```ts
function log(message: string): void {
  return; // or return undefined, but certain not return true;
}
```

---//

### Special types

#### never

```ts
const error: (message: string) => never = (message) => {
  throw new Error(message);
};

function handle() {
  error('Something fishy');

  return; // 👎 Unreachable code detected.
}
```
