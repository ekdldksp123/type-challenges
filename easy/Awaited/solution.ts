type ExampleType = Promise<string>;
type AwaitedImpl<T extends Promise<any>> = T extends Promise<infer V>
  ? V
  : never;
// infer : 타입 추론 키워드
type Result1 = AwaitedImpl<ExampleType>; // string
