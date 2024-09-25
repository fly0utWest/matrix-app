import { Tile } from "../../../shared/models"
import { multiplyArray, shuffleArray } from "../../../shared/lib"

export const createTiles = (multiplier: number): Tile[] => {
  const colors: string[] = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-purple-500",
    "bg-cyan-500",
    "bg-orange-500",
  ]

  const multipliedArray = multiplyArray(colors, 2)

  return shuffleArray(
    multipliedArray.map((color, index) => ({
      id: index,
      color,
      isFlipped: false,
      isMatched: false,
    })),
  )
}
