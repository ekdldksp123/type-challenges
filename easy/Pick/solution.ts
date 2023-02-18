type ImplePick<T, K extends keyof T> = {
  [key in K]: T[key];
};

type SomeType = {
  name: string;
  checked: boolean;
};

const SomeTest: ImplePick<SomeType, "name"> = {
  name: "Kim",
};
