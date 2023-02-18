type ImpleReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

type Somebody = {
  name: string;
  checked: boolean;
};

const readonlySomebody: ImpleReadonly<Somebody> = {
  name: "somebody",
  checked: true,
};
