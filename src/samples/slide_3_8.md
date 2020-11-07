# Starting point

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

# Using an interface

```ts
interface Person {
  firstName: string;
  middleName?: string;
  lastName: string;
}
```

# Using a type

```ts
type Person = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
```
