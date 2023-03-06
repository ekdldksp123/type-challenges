type ImpleLenth<T extends Array<any>> = T["length"];

type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = ImpleLenth<tesla>; // expected 4
type spaceXLength = ImpleLenth<spaceX>; // expected 5

const lengthOfTesla: teslaLength = 4;
const lengthOfSpaceX: spaceXLength = 5;
