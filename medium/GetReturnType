
type ReturnTypeImple<F extends (...args: any[]) => any> = F extends (...args: any[]) => infer R ? R : never

const fn = (v: boolean) => {
  if (v) return 1
  else return 2
}

type a = ReturnTypeImple<typeof fn> // should be "1 | 2"
const test1: a = 1
const test2: a = 2
