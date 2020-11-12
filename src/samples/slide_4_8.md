# Problem

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

# Solution

```ts
// 1. How can we create the take type
type Take<T, K extends keyof T> = { [P in K]: T[P] };

type Audited = Take<Customer, 'createdAt' | 'updatedAt'>;

const correctlyAudited: Audited = {
  createdAt: new Date(2020, 10, 11, 21),
  updatedAt: new Date(2020, 10, 11, 21),
};

// 2. This should fail as unknown is not a property of Customer
type ShouldNotWork = Take<Customer, 'unknown'>;
```
