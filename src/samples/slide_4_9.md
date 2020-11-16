# Problem

```ts
type Customer = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

// 1. How can we create the Except type
type Except = any;

const supplier: Except<Customer, 'createdAt' | 'updatedAt'> = {
  id: 2,
  name: 'Euricom',
  createdAt: new Date(2020, 10, 16, 20, 26), // should not work
  updatedAt: new Date(2020, 10, 16, 20, 26), // should not work
};

// 2. This should fail as unknown is not a property of Customer
type ShouldNotWork = Except<Customer, 'unknown'>;
```

# Solution

```ts
type Except<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};
```
