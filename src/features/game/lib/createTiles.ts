import { GameModes, Tile } from "../../../shared/models";
import { multiplyArray, shuffleArray } from "../../../shared/lib";

const biColors: string[] = ["bg-red-500", "bg-blue-500"];
const quadroColors: string[] = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-pink-500",
  "bg-purple-500",
  "bg-cyan-500",
  "bg-orange-500",
];
const octoColors: string[] = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-pink-500",
  "bg-purple-500",
  "bg-cyan-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-indigo-500",
  "bg-lime-500",
  "bg-rose-500",
  "bg-amber-500",
  "bg-fuchsia-500",
  "bg-violet-500",
  "bg-sky-500",
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-pink-400",
  "bg-purple-400",
  "bg-cyan-400",
  "bg-orange-400",
  "bg-teal-400",
  "bg-indigo-400",
  "bg-lime-400",
  "bg-rose-400",
  "bg-amber-400",
  "bg-fuchsia-400",
  "bg-violet-400",
  "bg-sky-400",
];

export const createTiles = (gameMode: GameModes): Tile[] => {
  let colors: string[];
  let pairsNeeded: number;

  switch (gameMode) {
    case GameModes.BI:
      colors = biColors;
      pairsNeeded = 2;
      break;

    case GameModes.QUADRO: 
      colors = quadroColors;
      pairsNeeded = 8;
      break;

    case GameModes.OCTO:
    default:
      colors = octoColors;
      pairsNeeded = 32;
      break;
  }

  const multipliedArray = multiplyArray(colors, pairsNeeded);

  return shuffleArray(
    multipliedArray.map((color, index) => ({
      id: index,
      color,
      isFlipped: false,
      isMatched: false,
    })),
  );
};
