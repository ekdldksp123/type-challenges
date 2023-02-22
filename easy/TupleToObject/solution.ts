const tuple = ["tesla", "model 3", "model X", "model Y"] as const; // readonly ["tesla", "model 3", "model X", "model Y"]

type TupleToObject<T extends readonly PropertyKey[]> = {
  [key in T[number]]: key;
};

type result = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

const test: result = {
  tesla: "tesla",
  "model 3": "model 3",
  "model X": "model X",
  "model Y": "model Y",
};
console.log(test);
