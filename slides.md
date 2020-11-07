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

### Typescript [📽️](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAZwIYE8ASBTANruACjFQFtsBKRAbwChFEAnbKERpAAx3zkQBJqJcgF8OAblrDatCAmRxc2AHQEA5oTRY8BQgCIAomxizSuihQlA)

- It is a strict syntactical superset of JavaScript and adds optional static typing to the language. <!-- .element: class="fragment" -->
- TypeScript is designed for development of large applications and transcompiles to JavaScript. <!-- .element: class="fragment" -->
- As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. <!-- .element: class="fragment" -->

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

### Get to know the beast!

<img src="./images/octopus.jpg" width="500px"/>

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

🤔 What is the difference between `string` and `String`? [📽️](https://www.typescriptlang.org/play?#code/MYewdgzgLgBAFgUwDZJARgFw2gJwJZgDmMAvDAOSIojkDcAUKJLFagExa4HFmXKp16jcBBBIEAOlSEAFOSgB3ENij4iEGAEMcCGAgCOAV01JyAGnj90pEmVYg2ASgbDml6gGYsAZVXdSMGAICjC+arJ81OTOrtDuqAAsPn5EAUEhYdxy9tEuTKLiUiARisqZ6lo6gSCwBsamFvYeNnZWCTH0AGaGYMBQeOAweBDeCJqiYDJgmgC2CJwphI4wAN70MBswOlCGOGAwANrkEAAO4eYUEIYzczgX5JqGOzNg9woEUAh3ALoSBMBIQwAEwQECmswQMQAvkJ8mJJNI5FxUgAiU7hFFDDSabBjCYXYajcbgJFnbjRGIAekpMDhhUR5HKxDRZKImOG1VgOIgePABJGvMm6VCi1J50cEtoQA)

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
// you don't know the type but you need to check
// before accessing any props or functions
let maybeString: unknown;

if (typeof maybeString === 'string') {
  console.log('first character', maybeString.substring(0, 1));
}
```

#### void

```ts
function log(message: string): void {
  return; // or return undefined
}
```

---//

#### never [📽️](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAUwE6rqgFAW2QZ3wEMBzZALkXylRjBIEpKxkA3NRAbwChFEoAFhgDuiFqICi6TLgLEyDANzcAvt26hIsBIgFEwAEwA2yLAy68U07AHIAynDyC6JRMBj4BATxtLLqZCgQVDBFRAB6cMRAXg3AOR3EAFUwAKIIPQAjE0QIOANkRDyoZGhkAwA6VSA)

```ts
function error(message: string): never {
  throw new Error(message);
}

function handle() {
  error('Something fishy');
  return; // 👎 Unreachable code detected.
}
```

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

🤔 How can we type the operation parameter? [📽️](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAExgNxsgpgCgB4BciYIAtgEZYBOANIgJ5EkXUCUTZlViA3gFCJEVLFBBUkeRAHoGAbj4BfPn1CRYCRKRAAbWAAdt9fBxa0GJru2KdqvAUJFiJiAFRzFy1dHhIIAQ20IHT8oXEJrUzpGCK46OD1qEJ8iPzB6K2YuO0FhUXFEeMT1MHwo1nklPggEAGc4bSwAOm04AHMcACJUDGxEAE5EcnpEAGZEGBqOun9A4NCcProRum7MLFZyqtr6ppb2jq1dGANhgBZB4bGJqcQZoO0Q3FOlukP9Qw35IA)

---//

#### Inferring function parameters [📽️](https://www.typescriptlang.org/play?#code/C4TwDgpgBA8pBOBDYBLA9gOygXigCgA8AuKDAVwFsAjCeAGihBPOtoEocA+Uym+AbgBQggMaYAzsCjiyVYEhHAScWsnRZchBiA7ZuBKAFpGQ0RLQAbCADoLaAOZ4ARDLkLUGe1ACsUNADMoAA4oFHEnBld5REU8IIZvNjZ+IA)

```ts
type Operation = (x: number, y: number) => number;

const subtract: Operation = (x, y) => x - y;

console.log('subtracting 5 of 8 is', subtract(8, 5));
```

---//

#### Function overloads [📽️](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAQwCaoBQA8BciDOUATjGAOYA0iAnnoSeQJR3GlkDcAUKJLAiumx4wIALYAjAKZEqtRCInTm8sVKJce0eEjSZcKMNVl5kh5aeqIA3p0SIikqCCJIsiANQ0uAX06cICPhwADaSAHTBcGQYAEQAguiIAO4wUAAWKopE+DFUuhgAjFQFjIxcAWBBoRFRsQmoyakZ9Gw5eYIxBbmInTGl7EA)

```ts
function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any): any {
  return x + y;
}

console.log('Add with numbers', add(1, 1));
console.log('Add with strings', add('1', '1'));
```

---//

### Structural 🤷‍♂️?

```ts
const tomMarien = {
  firstName: 'Tom',
  middleName: 'Anna Michel',
  lastName: 'Marien',
};

const billGates = {
  firstName: 'Bill',
  lastName: 'Gates',
};

function getFullName(person: Person): string {
  const { firstName, middleName, lastName } = person;
  return [firstName, middleName, lastName].join(' ');
}

console.log(getFullName(tomMarien));
console.log(getFullName(billGates));
```

🤔 How can we type the Person object? [📽️](https://www.typescriptlang.org/play?#code/MYewdgzgLgBFIFsCyBDATgSwKZhgXhgG8AoGGAMwzWgDkUEsAuGAIgBVEWAaUmBDACYCANljoNmLAIJgwKGEgzAAFlmHdewlLXpNWqTDg0BfANzFioSLABGGYcIDiKKFgj4ivStSji9LACF7dR4yLR0JVmdXCBNzYnIAVzBgKAxwGABzLCgAMUSHPwAKAAcsanBmAAVyiHAASmZoTDBMzzIraCIKKgisLj5BETFdAfDfXRhjDzKKsHMyNBzEtFwAbW8+gf4hUT8x7QmGAF0AOgArEAwwIpZWevNjC06QUVPhEEyi7LyC4WL4Mh0NgwPUHpZwHU3h8vj98oVdEU7A5om4waYgA)

---//

### Literal Object [📽️](https://www.typescriptlang.org/play?#code/C4TwDgpgBAChBOBnA9gOygXigbwFBSgDMBLJYAOQEMBbCALikWHmNQHMBufKa4gEz4AbCFVoB+BkxbsuBQZSaj6jZq064Avl1yEArqgDGwYmihsIwAGK7BgpQApISNAzjPUASkmr2ObgbQmHCJSRRoIABoefiERcKj5MNooDUwoJxRUWSh4C114dABtEjIlKN4BYTKoRIpwgF0AOhJBYAR7ACFkZGFKT0aAK2RWewAiKFGPLg1cXAB6OahAXg3AWR2oABFiREpbZAB3RGimcDVcANQUYUbBZDZ7bnMrGztw+zwCAhKk5VGAFWRqKMItw5Ao6rQGKMALKUFgQVBAkFQBYVPgQF4QiYAQShiIIGg8uCmswWUAAkqhCAhcnwoKBIFBUMgoFtELoIIcABYICBnQLAKBDTmoSwAaXhqAgfBAaXeIVK4UhAClkMK8dEBOilJDLOratqJuLUJLpYitLNzpcINdbvZHtZbA4hSKjSaQB4pkA)

```ts
type Person = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

function getFullName(person: Person): string {
  const { firstName, middleName, lastName } = person;
  return [firstName, middleName, lastName].filter(Boolean).join(' ');
}
```

```ts
// 👍 Disallows mistyping
console.log(
  getFullName({
    firstName: 'Tom',
    lastName: 'Marien',
    //middelName: "AM",
  })
);
```

```ts
// Inferred type no issues here
const johnFKennedy = {
  firstName: 'John',
  middelName: 'F',
  lastName: 'Kennedy',
};

console.log(getFullName(johnFKennedy));
```

---//

### 🧨 Types vs Interfaces

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

### Union and Intersection types

#### Union Types

```ts
type ValidationFailed = {
  success: false;
  errors: string[];
};

type ValidationSuccess = {
  success: true;
};

type ValidationResult = ValidationSuccess | ValidationFailed;
```

💡 Read it as one type **OR** the other! <!-- .element: class="fragment" -->

---//

### Union and Intersection types

#### Intersection Types

```ts
interface Keyed {
  id: number;
}

type Customer = Keyed & {
  name: string;
};

const pelckmans: Customer = {
  id: 1,
  name: 'Pelckmans',
};
```

💡 Read it as one type **AND** the other! <!-- .element: class="fragment" -->

---//

### Union and Intersection types

#### Discriminated Unions

```ts
type Address = {
  street: string;
  houseNumber: string;
  city: string;
};

declare function validate(address: Address): ValidationResult;

const result = validate({
  street: 'Schaliënhoevedreef',
  houseNumber: '20J',
  city: 'Mechelen',
});

if (!result.success) {
  // errors is only available when !success !
  throw new Error(result.errors[0]);
}
```

💡 Every Literal Type can be used as a discriminator! <!-- .element: class="fragment" -->

---//

### Type Guards

#### Built-in Types

```ts
function padLeft(value: string | number, length: number): string {
  if (typeof value === 'number') {
    return `${value}`.padStart(length, '0');
  } else {
    return value.padStart(length, ' ');
  }
}

console.log('string', padLeft('a', 10)); // "         a"
console.log('number', padLeft(1, 10)); // "0000000001"
```

---//

### Type Guards

#### Custom Types (in)

```ts
type Customer = { id: number };
type Order = { id: number; customer: Customer };

declare function fetch(): Customer | Order;

const maybeOrder = fetch();

if ('customer' in maybeOrder) {
  console.log(maybeOrder.customer);
}
```

#### Custom Types (User defined)

```ts
function isOrder(order: Customer | Order): order is Order {
  return 'customer' in order;
}

if (isOrder(maybeOrder)) {
  console.log(maybeOrder.customer);
}
```

---//

### Generics 🤷‍♂️?

```ts
type Animal = {
  species: 'dog' | 'cat';
  name: string;
};

const animals: Animal[] = [
  { species: 'cat', name: 'Molly' },
  { species: 'dog', name: 'Kai' },
];

function filter(items: readonly any[], match: (val: any) => boolean): any[] {}

const cats = filter(animals, (animal) => animal.species === 'cat');
console.log(cats);
```

🤔 How can we type the filter function so we could reuse it for other types? <!-- .element: class="fragment" -->

---//

### Narrowing and Widening

#### Literal Narrowing

```ts
const axis1 = 'x';

let axis2 = 'y';
```

🤔 Which is the inferred type for both axes?

---//

### Narrowing and Widening

#### Type Widening

```ts
const mixed = ['x', 1];
```

🤔 Which is the inferred type for mixed?

- `('x' | 1)[]`
- `['x | 1]`
- `[string, number]`
- `readonly [string, number]`
- `(string|number)[]`
- `readonly(string|number)[]`
- ...

---//

### Narrowing and Widening

#### Why is this important?

```ts
type Shape = {
  x: number;
  y: number;
};

type Rectangle = Shape & {
  length: number;
  width: number;
};

type Axes = keyof Shape; //💡 'x' | 'y'

function getAxis(shape: Shape, axis: Axes) {
  return shape[axis];
}
```

```ts
const r: Rectangle = {
  x: 10,
  y: 20,
  width: 200,
  length: 100,
};

// 👍 Works
console.log(getAxis(r, 'x'));
```

```ts
// 👎 Fails to compile, works in javascript
let axis = 'y';
console.log(getAxis(r, axis));
```

---

### Unleash the kraken!

<img src="./images/kraken.jpg" width="800px"/>
