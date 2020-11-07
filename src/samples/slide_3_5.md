# Starting point

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

console.log('divide 9 by 3 is', calculate(9, 3, divide));
console.log('multiply 4 by 3 is', calculate(4, 3, multiply));
```

# Using an interface

```ts
interface Operation {
  (x: number, y: number): number;
}
```

# Using a type

```ts
type Operation = {
  (x: number, y: number): number;
};
```

# Using a function type expression

```ts
type Operation = (x: number, y: number) => number;
```
