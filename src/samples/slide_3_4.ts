function getFullName({ firstName, middleName, lastName }: Person): string {
  return [firstName, middleName, lastName].join(' ');
}

const tomMarien = { firstName: 'Tom', middleName: 'Anna Michel', lastName: 'Marien' };
const billGates = {
  firstName: 'Bill',
  lastName: 'Gates',
};

console.log(getFullName(tomMarien));
console.log(getFullName(billGates));

// Interface or type
interface Person {
  firstName: string;
  middleName?: string;
  lastName: string;
}

type TPerson = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

// using a literal typed object disallows other props or mistakes
const literalObject: Person = {
  firstName: 'John',
  //middelName: 'F',
  lastName: 'Kennedy',
};

// using an inferred type does not
const johnFKennedy = {
  firstName: 'John',
  middelName: 'F',
  lastName: 'Kennedy',
};
