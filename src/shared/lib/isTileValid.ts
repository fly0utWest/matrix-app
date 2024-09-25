import { Tile } from "../models"

export const isTileValid = (state: any, tile: Tile): boolean => {
  return (
    !tile.isFlipped &&
    !tile.isMatched &&
    !state.flippedTiles.some((t: Tile) => t.id === tile.id) &&
    state.flippedTiles.length < 2
  )
}
