# Problem

```ts
// Value Space
const roles = {
  ADMIN: 'admin',
  POWER_USER: 'power_user',
  USER: 'user',
} as const;

const permissions = {
  CREATE_USER: 'create_user',
  APPROVE_USER: 'approve_user',
  BLOCK_USER: 'block_user',
} as const;

// Type Space: Don't repeat yourself
type Role = any; // "admin" | "power_user" | "user"
type Permission = any; // "create_user" | "approve_user" | "block_user"

const permissionsForRole: any = {
  // 💣 Complains about missing "USER"
  admin: [...Object.values(permissions)],
  power_user: ['create_user', 'approve_user', 'unexisting_permission'], // 💣 unexisting_permission is wrong
  unexisting: [], // 💣 Should not work
};
```

# Solution

```ts
// Type Space: Don't repeat yourself
type ValuesOf<T> = T[keyof T];

type Role = ValuesOf<typeof roles>; // "admin" | "power_user" | "user"
type Permission = ValuesOf<typeof permissions>; // "create_user" | "approve_user" | "block_user"

type RoleToPermissionMap = { [S in Role]: Permission[] };

const permissionsForRole: RoleToPermissionMap = {
  // 💣 Complains about missing "USER"
  admin: [...Object.values(permissions)],
  power_user: ['create_user', 'approve_user', 'unexisting_permission'], // 💣 unexisting_permission is wrong
  unexisting: [], // 💣 Should not work
};
```
