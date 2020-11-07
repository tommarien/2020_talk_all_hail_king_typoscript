# Starting point

```ts
// Suppose a lib exposes this interface
interface IRequestOptions {
  url: string;
  method: string;
}

function fetch(options: IRequestOptions) {
  console.log('fetch', { options });
}

// In your code, but you want extend it
fetch({
  url: 'http://google.com',
  method: 'get',
  params: {
    page: 1,
  },
});
```

# Extendability (would not be possible if the lib used a type)

```ts
fetch({
  url: 'http://google.com',
  method: 'get',
  params: {
    page: 1,
  },
});

interface IRequestOptions {
  params?: Record<string, string | number>;
}
```

A type can only be redefined!

💪 But a type can do a lot more !!
