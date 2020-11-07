# Starting point

```ts
type ValidationFailed = {
  success: false;
  errors: string[];
};

type ValidationSuccess = {
  success: true;
};

type ValidationResult = ValidationSuccess | ValidationFailed;

type Address = {
  street: string;
  houseNumber: string;
  city: string;
};

declare function validate(address: Address): ValidationResult;

const result = validate({
  street: 'Schaliënhoevedreef',
  houseNumber: '20J',
  city: 'Mechelen',
});

if (!result.success) {
  // errors is only available when !success !
  throw new Error(result.errors[0]);
}
```
