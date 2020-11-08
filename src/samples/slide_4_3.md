# Problem

```ts
type TodoListResponse = {
  data: {
    id: number;
    name: string;
    completed?: boolean;
  }[];
};

type Todo = any;

const todo: Todo = {
  id: 1,
  name: 'Finish the dishes',
};
```

# Solution

```ts
type Todo = TodoListResponse['data'][number];

const todo: Todo = {
  id: 1,
  name: 'Finish the dishes',
  completed: true,
};
```
