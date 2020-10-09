- Rename slide_2_2.js to ts

- Change index.ts to

```ts
import sayHello from './samples/slide_2_2';

console.log(sayHello('Tom'));
```

- See failing ts compilation: Parameter 'name' implicitly has an 'any' type.

- Run it with node (SyntaxError: Cannot use import statement outside a module)

```
node ./dist/index.js
```

- Change tsconfig (module)

```json
{
  "module": "commonjs"
}
```

- Run again with node
