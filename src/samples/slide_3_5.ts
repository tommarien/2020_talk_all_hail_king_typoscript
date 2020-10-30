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
const substract: IOperation = (x, y) => x - y;

console.log('typed function expression', calculateWithType(3, 2, substract));

// 🎉 Notice that typescript is a structural typing language it only considers the structure!

// Overloads:
function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any): any {
  return x + y;
}

console.log('Add with numbers', add(1, 1));
console.log('Add with strings', add('1', '1'));
