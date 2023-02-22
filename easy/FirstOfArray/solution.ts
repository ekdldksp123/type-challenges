type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type First<T extends Array<string | number>> = T[0];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3

const test1: head1 = "a";
const test2: head2 = 3;
