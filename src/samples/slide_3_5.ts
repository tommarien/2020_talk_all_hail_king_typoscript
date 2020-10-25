// So both interfaces can define functions as well as structures, the first difference is that a type enables the use of type expressions,
// think back on the operation type expression
type TEOperation = (x: number, y: number) => number;

// 🙌🏻 The big advantage of interfaces = extendability!
interface IRequestOptions {
  url: string;
  method: string;
}

type TRequestOptions = {
  url: string;
  method: string;
};

function fetch(options: IRequestOptions) {
  console.log('fetch', { options });
}

function fetchWithOptions(options: TRequestOptions) {
  console.log({ options });
}

// using a type, i need to retype it, using an intersection type
type TRequestOptionsWithExtras = TRequestOptions & {
  params?: object;
};

function fetchWithExtra(options: TRequestOptionsWithExtras) {
  console.log('fetchWithExtra', { options });
}

fetchWithExtra({
  url: 'http://localhost:3000/api/customers',
  method: 'get',
  params: {
    page: 1,
  },
});

// but using an interface is sample a matter of redefining it
interface IRequestOptions {
  params?: object;
}

// You can just use the function as is, think here about frameworks!
fetch({
  url: 'http://localhost:3000/api/customers',
  method: 'get',
  params: {
    page: 1,
  },
});

// If you want to extend an interface it is still possible but you have to use extends (an interface can extend a type and vice versa)
interface MySpecial extends IRequestOptions {
  special: boolean;
}

const special: MySpecial = {
  url: 'http://localhost:3000/api/customers',
  method: 'get',
  params: {
    page: 1,
  },
  special: true,
};

// 💪 But a type can do a lot more !!
