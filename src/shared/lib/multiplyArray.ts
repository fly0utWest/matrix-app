import { GameModes } from "../models"

export const multiplyArray = (colorsArray: string[], gameMode: GameModes) => {
  const multipliedArray = []

  if (gameMode === 1) {
    const temp = []

    for (let i = 0; i <= colorsArray.length / 2 - 1; i++) {
      temp.push(colorsArray[i])
    }
    multipliedArray.push(...temp)
  } else if (gameMode === 2) {
    for (let i = 1; i <= 2; i++) {
      multipliedArray.push(...colorsArray)
    }
  } else {
    for (let i = 1; i <= 4; i++) {
      multipliedArray.push(...colorsArray)
    }
  }

  return multipliedArray
}
