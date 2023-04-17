const foo = (arg1: string, arg2: number, arg3?: boolean): void => {};

type ParametersImpl<T extends (...args: any[]) => unknown> = T extends (
  ...args: infer P
) => unknown
  ? P
  : [];

type FunctionParameterType = ParametersImpl<typeof foo>;

const testParameters1: FunctionParameterType = ["arg1", 1];
const testParameters2: FunctionParameterType = ["arg1", 0, true];
