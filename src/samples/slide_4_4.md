# Problem

```ts
type Role = 'admin' | 'power user' | 'user';

type Falsy = false | 0 | '' | null | undefined;

type Pull<T, K> = any;

type StrongRoles = Pull<Role, 'user'>; // 'admin' | 'power user';
type False = Pull<Falsy, undefined | null>;
```

# Solution

```ts
type Pull<T, K> = T extends K ? never : T;
```

# Extra (other utility type)

```ts
type False = NonNullable<Falsy>;
```
