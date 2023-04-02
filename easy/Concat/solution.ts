type Concat<A extends Array<any>, B extends Array<any>> = [...A, ...B];
type Result = Concat<[1], [2]>;
let arr: Result = [3] //Type '3' is not assignable to type '1'.
arr = [1,2]
