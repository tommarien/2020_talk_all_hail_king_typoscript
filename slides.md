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

🤔 What is the difference between `string` and `String`? [📽️](https://www.typescriptlang.org/play?ssl=15&ssc=67&pln=6&pc=4#code/MYewdgzgLgBAFgUwDZJARgFw2gJwJZgDmMAvDAOSIojkDcAUKJLFagExa4HFmXKp16jcBBBIEAOlSEAFOSgB3ENij4iEGAEMcCGAgCOAV01JyAGnj90pEmVYg2ASgb0A9K5hNol6gGYsAMqq3KQwYAgKMEFqsnzU5M5uHl4sVgAsgcFEoeGR0dxy9gku7p4iYpLScorK+epaOmEgsAbGphb2vjZ26YlJMABmhmDAUHjgMHgQAQiaomAyYJoAtgicWYSOMADe-TD7MDpQhjhgMADa5BAADjHmFBCGy6s49+SahsfLYG8KBFAIV4AXQkBGASEMABMEBBFisEIlSgBfISlLwVKQgWJcbIAIhuMVxkw0mmws3m9ymMzm4DkBO4CURyXK4kxsTqxHxt24RKmTVgpIg5PAlOmwoWuSiGzp3KIjOcQA)

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

### 🧨 Types vs Interfaces [📽️](https://www.typescriptlang.org/play?#code/PTAEGUFcAdoewM4FNQENQBsCWAjUSAPeZBUAFwAstSsA7MpAJwDNUBjJAKDoZfZQCSAJSQBHSEgRkA8tDJY4tUgG9OoUJEYYAXKCmM6AcwDca0AFsklOABNd+o6YC+nTs0i028xaGZW2FAAUcHIKSrrCYhJSst5KAJSgqupsighwGEgAdBhwhoEARH5kAQUANEmgIXGkTvHOriCgArSgAJ5wmqCpNkgVOJBk7Z2gAO6o9PgEDLQ2oFhkbv5ByRpaugUUZGTQ2iCGcHmZWanm5WaW1nagBYZW5+rQqIyo5gi6q4+od7oAjGVmJwAurGIA)

<img src="./images/deliver-what-you-promised.jpg" width="600px"/>

💡 A `type` can be used to create a `function type expression`!

---//

### Literal types

#### String [📽️](https://www.typescriptlang.org/play?#code/C4TwDgpgBASg9gG2gXigIgIYBMC2BLAOzSgB90w4B3CAJwFoBXAZ1uLLWdYG4AoH0SFACqLGlFQBvHlCicaBDDggAuKE2A1CAc14yaiFbAO8Avrx4BjOAXWzRqkbXFQpMuQqWq0lAG4ALNAAaaSh9JC9sfCIeMyA)

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

💡 Read it as one type **OR** the other!

---//

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

💡 Read it as one type **AND** the other!

---//

#### Discriminated Unions [📽️](https://www.typescriptlang.org/play?#code/C4TwDgpgBAaghgGwJYBM7CQewHYDE5IIQpQC8UA3gFBRQDOArgMZMR10BcUAZonRAG4aUCACdRmUZ3rBRSbAHMA2gF0hAXyFVQkWIlTos2AMrNW7MpWGMWbabIaCqmqtvDR4yNBhwAlNgwIwJaeBj4mZnZQAD56XoY4+ITEWjrQAIIoKKJR5NS0dLIQEMBchXKKQrQAFpgM-AByDAC2AEZiZbLyClVQTEignRU9zlooEEwIcDk8DNhM4VAAbvreEAAUcFk57FyZ2XYAlFyh3kb+jEFaTDiFUDuBweQr8cAb+TI5JVwARMZM1X0AGvsLUIEtiF9uD8ADTCWr1CBNNodKA-ABMAAYAFKw4T9QZogCyE2qECI2Dx6kOWiQ3Cg6wAhA8ggA6GzmOiHKy0AD0vJE4kkdCgSBFOAQICgcBWhDgrSIUAA7mTsFBGRyoozhMBqhIlVBsBADQBRIWidYs4CssQSKRKTEqGnOIA)

```ts
type Address = {
  street: string;
  houseNumber: string;
  city: string;
};

declare function validate(address: Address): ValidationResult;
```

```ts
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

🤔 How can we type the filter function so we could reuse it for other types? [📽️](https://www.typescriptlang.org/play?#code/C4TwDgpgBAggdgSwLYEMA2UC8UDeAoKKAZ0gGMEIiAuKAIgBMB7Ac1qgB87SVhaBuAlDgokEGkWAAnBHGYCAvgLylGcCVBSJUaarC3oA2gF0sUA4JzEyFXbW68ANEJFi6AWUZo0INvIcWrCHJKGgYWWidhUVCAaRQEX38jJQAzAFc4UmAEVSgUhDRgCEkACgQipF1JCBQmOG8NOBBjJ1RgUgALGhKAN3QaTRAASiwAPigAI0ZPGrghgabjXEFq4DTJOChyiEqAOmr6NNIIEpKwap6ctKInUnXquGARzHH8QkIEFKgSts6Su8kDyeI3OEEujGuuzA1w6-3uEEeQwE7ygq3Wm1B4OuyKgfjMRiReHkeGUqnU9iIpnyhWKJU0yHQN2+9O0z3GLPQuxIQRsWEw2DsPFohJUahmuzQLH+PCISKAA)

---//

### Narrowing and Widening

#### Literal Narrowing

```ts
const axis1 = 'x';

let axis2 = 'y';
```

🤔 Which is the inferred type for both axes?

---//

#### Type Widening

```ts
const mixed = ['x', 1];
```

🤔 Which is the inferred type for mixed?

- `('x' | 1)[]`
- `['x' | 1]`
- `[string, number]`
- `readonly [string, number]`
- `(string|number)[]`
- `readonly(string|number)[]`
- ...

---//

#### Why is this important? [📽️](https://www.typescriptlang.org/play?#code/C4TwDgpgBAygFgQ0lAvFA3gKClAHgLigDsBXAWwCMIAnAbmyhENMpvoF97NRkAlCAMbAERAOYAbaGnhJoAMgwNJY4HGbkqdBgHcAlgBNV61ls6Zu4aAEFcEAM6ooAawggA9gDNYiSLSgB6f0BeDcBCnagAclxwqAAfCJBw8w8SIiFdNyIoUQhgG107AAo7HwhCGUgAGigEXHzCG3sASkUcahySakzi2QBtGvyAXQ5zAQy7YChqQn4hEQkpFrxCAEYABgqGJigAJnWdAyMd1b2cZVFDtb2zTECoIMBZHagAdTdqJztMUaI7N0kAOnEblEBWyuVqhWoVQARLgoY1GlxbkFAHI7UAAYghdOIHMA3FBRmQwFiIFVtK93lBdJkAFYIABuCDsAmoujAwEwkgm-QcaChICh9C+P3+gOBoLyEKq3PhtCAA)

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

---//

### Indexed Access Types

```ts
type AddTodo = {
  type: 'ADD_TODO';
  payload: {
    id: number;
    name: string;
  };
};

type CompleteTodo = {
  type: 'COMPLETE_TODO';
  payload: {
    id: number;
  };
};
```

```ts
type Actions = AddTodo | CompleteTodo;

// ????
type ActionTypes = any; // ADD_TODO | COMPLETE_TODO
```

🤔 How can we type ActionTypes? [📽️](https://www.typescriptlang.org/play?#code/C4TwDgpgBAggJnAKgezsqBeKBvAUFKUSALigCIYARSgfUQHlL6yBufKMAQxABtlO4pPAQIBLQVAB2AVwC2AIwgAnNiKmdZEUgGdgS0ZIDmqqAF8253LiLQAwsllgeEYBBRpMOdjdJlb9AFkABQAZAFFEMLpGZhMuXn4JYRFxUhkFZRNLS2twaHdkGABjYFFkSW1PeCRUdAAfKHtHZ1cCtlwAeg6oAH4+ntzIKALi0vLEPMqsTkkQFigu2GpopigG-2DwyJX6IA)

---//

#### Arrays

```ts
type TodoListResponse = {
  data: {
    id: number;
    name: string;
    completed?: boolean;
  }[];
};

type Todo = any;

const todo: Todo = {
  id: 1,
  name: 'Finish the dishes',
};
```

🤔 How can we type Todo? [📽️](https://www.typescriptlang.org/play?#code/C4TwDgpgBAKg9gEzgGQJYGdgCULrHAO3WgF4oBvAKCigQENg6AuC6mqVBFggVwFsARhABOAbjY0CdPhBaZhqAgHNx7KAGM4fMABsIwCAgD8LAXDh66BVVAC+AbQC642+MqhIsRHChkrIN00iYChgbxZ4JF9WGk4WAEYAGjYpGRYAIgAxRQwAC1Dc6AQ83HTk1yAx)

---//

### Conditional Types

```ts
type Role = 'admin' | 'power user' | 'user';

type Falsy = false | 0 | '' | null | undefined;

type Pull<T, K> = any;

type StrongRoles = Pull<Role, 'user'>; // 'admin' | 'power user'
type False = Pull<Falsy, undefined | null>; // false | 0 | ""
```

🤔 How can we create the Pull type? [📽️](https://www.typescriptlang.org/play?#code/C4TwDgpgBASg9gG2gXigIgIYBMC2BLAOzSgB90w4B3CAJygFcBnW4stJlgbgChvRIoAMQwJGIKKgBmI5qSgAGOWlZQC9BAjn0CWCJMIQsPPuGgAFdQgA8AFQA0UANIA+CVAwEQx-tADKwGjgCAHN4JEY3Cw0rMIgHdmYaNGdOKAB6NKgAcmx8Aiy5LIpqOg4aLJMBYVEUKCjrarEHbV19AkM5NQ0U9MzpGrlFNjQgA)

<p class="fragment">
💡 `Exclude` is a build in utility type that works exactly the same!
</p>

---//

#### Advanced 💪

```ts
type Nullable<T> = T | null;

function toKebabCase(value: Nullable<string>): Nullable<string> {
  return (
    value &&
    value
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .toLowerCase()
  );
}

console.log('Kebabbed!', toKebabCase('Hello from the dark side!'));
```

```ts
// OH-Oh, how to fix issue?
const kebabbed = toKebabCase('Hello from the dark side!') //
  .toUpperCase();

const willBeNull = toKebabCase(null); // Type should be null here
```

🤔 How to fix the typing here? [📽️](https://www.typescriptlang.org/play?#code/C4TwDgpgBAcgrgGwQQwEYIgHgCoD4oC8U2UAPlAHaIIDcAUHQGZwUDGwAlgPYVTBcBpCKjQBhZAGcIACgBuyBHAgAuWNTQZME4ACcOFAOa4AlKvhINWbXsP4A3nShQdEYHB29pjp1HmLoAGQB3k5+SiE+AHQuYCisMgD00gDayAC0AF4AusYpAIJpAFo5CQYANFAARAAkAIxp1QBMlcYRTtEQscjx0gkAOhIA1KUVlWktbVCR-AAyXADuEDriUtKtTsb0AL4MrDwSXBiRCFwG0pVCIqioEAAmAISVFfyXYpIylQASEEhcUIw6LgAWz4AAtoLdkDoANZQCQcW4QR7GTYMBIJKAAeU+aUxoIqoIWfD+jA4AA8oBwJBIlAB+Oh7CjaKDQ4RoG63QjE16oFYfb6-f6AkHAcFQSEwuEIpEtaZcACqYEgy3ea3oDP2wCg8w4SAAQhBzAguS82bzVVQkJsoOjiOBoBJCYhOTdKNQoOCXEA)

---//

### Mapped Types

```ts
// Value Space
const roles = {
  ADMIN: 'admin',
  POWER_USER: 'power_user',
  USER: 'user',
} as const;

const permissions = {
  CREATE_USER: 'create_user',
  APPROVE_USER: 'approve_user',
  BLOCK_USER: 'block_user',
} as const;
```

```ts
// Type Space: Don't repeat yourself
type Role = any; // "admin" | "power_user" | "user"
type Permission = any; // "create_user" | "approve_user" | "block_user"

const permissionsForRole: any = {
  // 💣 Complains about missing "USER"
  admin: [...Object.values(permissions)],
  power_user: ['create_user', 'approve_user', 'unexisting_permission'], // 💣 unexisting_permission is wrong
  unexisting: [], // 💣 Should not work
};
```

🤔 How can Typescript help us out here? [📽️](https://www.typescriptlang.org/play?#code/PTAEDUEMBsFcFNQGUAOkDG8BQ6D2A7AZwBdQAnXaeQ0AXlAG8tRQBBAEQFkBJAOQC5QAIkgATALYBLfEIA0zUAAUA8gHUAogCUA+gFUkWwUJS4A7vDLbYhC3IX7Dw67fkBfUJBp4ixANxYcAhJQFAspQkJJILpGBQBhTXVWABV1PQNNI3QyeEhieCsbMjsWVkVFTWVwNIdM4UgUFAoANwLnYvkWACEAGWU4gGl0xyEAI2hcdABrQpcsd09QbxJ-LBBQZIBPUOQ0TEF2AgByUhzQvNBN3FgyG2gAMyxibcRNSkR6SHxN31B1kQk0iEoAAPsITOZLO1gWChNCni8lGFJBEovgYl8fn8wEJsrl8rNiqD6o0Wm0ijDhONJjN4YEfCFkaiggAxXBkN5UQSYmJMFjrQC8G4BindAcVw4hQ0Eg0hokFG11I4Ui+AA5sJakIFGIpPhBABtAB0RuUowAVvB0MQDc0YAhCAAKUJkJVowgASgAup0QmYLIT9bicnlyS4SU1cK1CXInPh4AAPFHEaQq7ROl0EIRe7GgYWgWCxhMkZOppmRAigFGgUwUVUKfPxxPJ-VZwUipAAC2u0FEoHwuFIpnZU3mviAA)

<p class="fragment">
💡 `Record` is a build in utility type that can be used to type the permissionsForRole!
</p>

---//

#### Advanced 💪

```ts
type ButtonProps = {
  type: 'submit' | 'button' | 'reset';
  onClick: () => void;
  text: string;
};

type Optional<T> = any;
```

```ts
function createProps(props: Optional<ButtonProps> = {}): ButtonProps {
  const { type = 'submit', onClick = () => {}, text = 'Click here' } = props;

  return {
    type,
    onClick,
    text,
  };
}

console.log(createProps({ text: 'Changed text' }));

// 🐛 Unknown prop
console.log(createProps({ kind: 'Changed text' }));
```

🤔 How to create the `Optional` type? [📽️](https://www.typescriptlang.org/play?#code/C4TwDgpgBAQgrsYB7AdgBQE5LAZygXigG8AoKKUSALigCIc4AjAWwEthaoAfOxhZFJx60MEHBA4BuMlFQBhADasAxgGsaACgCUBAHxQAbklYATaeWAQAHsBo5gGVigDm0gL7SSlaAHkwwVlQAQwUAHgAVfUIglBBPADM4FGUA1ChlUSDLTGwcDTAsXBo-VJQQ0PhEVBzcKOI3LRpKgRq8UnJlVHtiCnBoQnomNg4AGlkURRVVAihtPXqxyxsZ2km1KAALCFFONxmC3M9yUWA4DBRiGQs+kavxtdVb8gtrYCeoDxI3EhJOlBwkAoIAA6BRIZwaDIQLIQVoaIgUV40VYbGLOCAmRE2XZaLTSP4AoGg8GQzLZQp5BGqJwmZFyVEuDFYjgfXGSKAAeg5UEAvBuAbB2oABVFCqFBIADuFwOYCAA)

<p class="fragment">
💡 `Partial` is a build in utility type works exactly as our `Optional` type!
</p>

---//

#### Advanced 💪💪

```ts
type Customer = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

const euricom: Customer = {
  id: 1,
  name: 'Euricom',
  createdAt: new Date(2020, 10, 11, 20, 51),
  updatedAt: new Date(2020, 10, 11, 20, 51),
};
```

```ts
// 1. How can we create the take type
type Take<T, K> = any;

type Audited = Take<Customer, 'createdAt' | 'updatedAt'>;

const correctlyAudited: Audited = {
  createdAt: new Date(2020, 10, 11, 21),
  updatedAt: new Date(2020, 10, 11, 21),
};

// 2. This should fail as unknown is not a property of Customer
type ShouldNotWork = Take<Customer, 'unknown'>;
```

🤔 How to create the `Take` type? [📽️](https://www.typescriptlang.org/play?#code/C4TwDgpgBAwgrgZ2AewLYQE5QLxQN4BQUUAlgCYBcUAdnKgEaYDcRNAhulUhidQOYtiAYwwQ2wCGQCCwKgBFxEQVDhgyi6bKgKJLAL4sCQ5NSRQIcHsdRV4SNJhz5W5KgEYANK2ocIVAEQAopYk1v5ewqIaMlTUEADu2ooAFABMAAwZHlBu6dlunlBZUACsbgCUESpq0VpxiToQaZl5Oa0F2cVllQQGBAQA9AM5AHRQABLIiUJs1FDx0CJiElDAABbQwGwA1pvgEASgkFAAKjsQADwn2QAKAHxOsyCGR9BScGQkEmROZ7sXdhQ6Aw2X8S1q-igAB8oP5VOpvjJ-HdDMZTMAoMYMKIhMAADYgd6fb5UIlfSROQiRZaSGI0BJJCTNYq5fKFVIVKrw2qxBmNZntdrszm9QxDIpjE5rEgIKAINbIOB4n4AMzYJDxUDYsrg1G21CmcxlNGQGLYUDAGGQkAwoCgyBVsEQQMwh32UAAygqlWQAHKmgDqyAw21+5wBzocINhuv1huRTCAA)

<p class="fragment">
💡 `Pick` is a build in utility type works exactly as our `Take` type!
</p>

---//

#### Advanced 💪💪💪

```ts
type Customer = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
```

```ts
// 1. How can we create the Except type
type Except<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

const supplier: Except<Customer, 'createdAt' | 'updatedAt'> = {
  id: 2,
  name: 'Euricom',
  createdAt: new Date(2020, 10, 16, 20, 26), // should not work
  updatedAt: new Date(2020, 10, 16, 20, 26), // should not work
};
```

```ts
// 2. This should fail as unknown is not a property of Customer
type ShouldNotWork = Except<Customer, 'unknown'>;
```

🤔 How to create the `Except` type? [📽️](https://www.typescriptlang.org/play?#code/C4TwDgpgBAwgrgZ2AewLYQE5QLxQN4BQUxUAlgCYBcUAdnKgEaYDcRJNAhutUhqTQHNWJKAGMMEDsAjkAgsGoARKRGEk4YcirkKoy6awC+rAgHpTUAIwA6KAAlkAdzEcaUR9HGTpUYAAtoAFEAD1EIMGBfcAgCUEgoELCInChXEBNRZBokKAQNMAAbUkxqRPDgAB54JDRMABooACIvbXlGqAAfJo0taR1GgD4UwhEKagAmOrZiTm4oAHJAuD5M1HmpkRa++WoaCGd9CAAKcYAGM4bLU8uANgaLqHGbgEoG81y-ZDgC8lpkSMcyAwAGtplAeq1dHsDioTudrlYEZY7o8EU9XlB3ghPt9fjR-u4gaDjAQzBZxrYACp+UgID5fH5QABmHFIBVSdLgNGB+Mcblpf0iHCgYAwyEgGFAUGQTNgiBQ6AwsWiUAAyjifgA5f4AdSJKTKESq8tqGAajS5PKcNEGzCAA)

<p class="fragment">
💡 `Omit` is a build in utility type works exactly as our `Except` type!
</p>

---

## The end

<img src="./images/finish.jpg" width="600px"/><br>

<small>
... or is it a new hope ...
</small>
```
