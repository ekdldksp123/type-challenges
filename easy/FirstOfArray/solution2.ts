type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
type arr3 = [];

type First<T extends Array<any>> = T["length"] extends 0 ? never : T[0]; // A extends B = A 가 B의 부분집합이면 (속한다면)

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First<arr3>; // expected to be never

const test1: head1 = "a";
const test2: head2 = 3;
const test3: head3 = undefined as never;
