function divide(x: number, y: number): number {
  return x / y;
}

function multiply(x: number, y: number): number {
  return x * y;
}

// Using an interface, 👉 normally we do not prefix here
interface IOperation {
  (x: number, y: number): number;
}

function calculateWithInterface(x: number, y: number, operation: IOperation) {
  return operation(x, y);
}

console.log('interface', calculateWithInterface(3, 2, multiply));

// Using a type
type TOperation = {
  (x: number, y: number): number;
};

function calculateWithType(x: number, y: number, operation: TOperation) {
  return operation(x, y);
}

console.log('type', calculateWithType(3, 2, multiply));

// Using a type expression
type Operation = (x: number, y: number) => number;

function calculateWithExpression(x: number, y: number, operation: Operation) {
  return operation(x, y);
}

console.log('expression', calculateWithType(3, 2, multiply));

// Once you get any of those you can even the an operation as a function expression
const add: IOperation = (x, y) => x + y;

console.log('typed function expression', calculateWithType(3, 2, add));

// 🎉 Notice that typescript is a structural typing language it only considers the structures !
