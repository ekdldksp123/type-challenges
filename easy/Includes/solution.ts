type IsEqual<T, U> = (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U
  ? 1
  : 2
  ? true
  : false;

type Includes<Value extends any[], Item> = IsEqual<Value[0], Item> extends true
  ? true
  : Value extends [Value[0], ...infer rest]
  ? Includes<rest, Item> // 재귀 호출
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">;

const test1: isPillarMen = true; // Type 'true' is not assignable to type 'false'.
const test2: isPillarMen = false;
