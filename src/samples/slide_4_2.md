# Problem

```ts
type AddTodo = {
  type: 'ADD_TODO';
  payload: {
    id: number;
    name: string;
  };
};

type CompleteTodo = {
  type: 'COMPLETE_TODO';
  payload: {
    id: number;
  };
};

type TodoActions = AddTodo | CompleteTodo;

// ????
type TodoActionTypes = any; // ADD_TODO | COMPLETE_TODO
```

# Solution

```ts
type TodoActionTypes = TodoActions['type']; // ADD_TODO | COMPLETE_TODO
```
