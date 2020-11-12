# Problem

```ts
type ButtonProps = {
  type: 'submit' | 'button' | 'reset';
  onClick: () => void;
  text: string;
};

type Optional<T> = any;

function createProps(props: Optional<ButtonProps> = {}): ButtonProps {
  const { type = 'submit', onClick = () => {}, text = 'Click here' } = props;

  return {
    type,
    onClick,
    text,
  };
}

console.log(createProps({ text: 'Changed text' }));
console.log(createProps({ kind: 'Changed text' })); // 🐛 Unknown prop
```

# Solution

```ts
type Optional<T> = { [P in keyof T]?: T[P] };
```
