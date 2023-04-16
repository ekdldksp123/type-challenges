type Unshift<T extends unknown[], U> = [U, ...T];

type Result = Unshift<[], 1>; // [1]
type Result2 = Unshift<[1, 2], 0>; // [0, 1, 2]
type Result3 = Unshift<["1", 2, "3"], boolean>; // [boolean, '1', 2, '3']
