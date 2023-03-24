type MyIf<T extends boolean, A, B> = T extends true ? A : B

type A = MyIf<true, 'a', 'b'>
type B = MyIf<false, 'a', 'b'>

const a: A = 'a'
const b: B = 'b'
const c: A = 'b' // Type '"b"' is not assignable to type '"a"'.
const d: B = 'a' // Type '"a"' is not assignable to type '"b"'.
