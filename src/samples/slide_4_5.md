# Problem

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

// OH-Oh, how to fix issue?
const kebabbed = toKebabCase('Hello from the dark side!').toUpperCase();

const willBeNull = toKebabCase(null); // Type should be null here
```

# Solution A

```ts
function toKebabCase<T extends Nullable<string>>(value: T): T extends string ? string : null {
  return (
    value &&
    (value
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .toLowerCase() as any) // open issue in typescript see https://github.com/microsoft/TypeScript/issues/24929
  );
}
```

# Solution B (overloads)

```ts
function toKebabCase(value: string): string;
function toKebabCase(value: null): null;
function toKebabCase(value: any): any {
  return (
    value &&
    value
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .toLowerCase()
  );
}
```
