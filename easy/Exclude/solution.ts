type ExcludeImpl<T, U> = T extends U ? never : T
const test1: ExcludeImpl<'a'| 'b'| 'c', 'a'> = 'b'
const test2: ExcludeImpl<'a'| 'b'| 'c', 'a'> = 'c'
const test3: ExcludeImpl<'a'| 'b'| 'c', 'a'> = 'a' // Type '"a"' is not assignable to type '"b" | "c"'
