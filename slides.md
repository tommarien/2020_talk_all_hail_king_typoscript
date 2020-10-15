---
title: All hail king Typoscript
verticalSeparator: ---//
---

## All hail king Typoscript

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

🔥 Include stage 3 JavaScript features and contribute to TC39 committees. (except `enum` and [experimental decorators](https://tc39.es/proposal-decorators/) (stage 2))

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

🤔 What is the difference between `string` and `String`?

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

🤔 How can we type the operation parameter?
