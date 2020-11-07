# Starting point

```ts
type Animal = {
  species: 'dog' | 'cat';
  name: string;
};

const animals: Animal[] = [
  { species: 'cat', name: 'Molly' },
  { species: 'dog', name: 'Kai' },
];

function filter(items: readonly any[], match: (val: any) => boolean): any[] {
  return items.reduce((previous, current) => {
    if (match(current)) previous.push(current);
    return previous;
  }, []);
}

const cats = filter(animals, (animal) => animal.species === 'cat');
console.log(cats);
```

# Possible solution

```ts
type Animal = {
  species: 'dog' | 'cat';
  name: string;
};

const animals: Animal[] = [
  { species: 'cat', name: 'Molly' },
  { species: 'dog', name: 'Kai' },
];

type Predicate<T> = (value: T) => boolean;

function filter<T>(items: readonly T[], match: Predicate<T>): T[] {
  return items.reduce((previous, current) => {
    if (match(current)) previous.push(current);
    return previous;
  }, [] as T[]);
}

const cats = filter(animals, (animal) => animal.species === 'cat');
console.log(cats);
```
