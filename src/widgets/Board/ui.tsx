import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "../../app/stores/mainStore"
import {
  resetGame,
  flipTile,
  matchTiles,
  resetFlippedTilesAsync,
} from "../../features/game/model"
import Tile from "../../shared/ui/Tile"
import { createPortal } from "react-dom"
import { WinModal } from "../WinModal"
import { Button } from "../../shared/ui"
import clsx from "clsx"

const Board: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const tiles = useSelector((state: RootState) => state.game.tiles)
  const gameMode = useSelector((state: RootState) => state.game.gameMode)
  const flippedTiles = useSelector(
    (state: RootState) => state.game.flippedTiles,
  )
  const isGameOver = useSelector((state: RootState) => state.game.isGameOver)

  const [modalIsVisible, setModalIsVisible] = useState(false)

  const handleModal = () => {
    setModalIsVisible(false)
    dispatch(resetGame())
  }

  useEffect(() => {
    dispatch(resetGame())
  }, [dispatch])

  const handleTileClick = (id: number) => {
    dispatch(flipTile(id))

    if (flippedTiles.length === 1) {
      const [firstTile] = flippedTiles
      const secondTile = tiles.find(t => t.id === id)

      if (
        firstTile &&
        secondTile &&
        firstTile.color === secondTile.color &&
        firstTile.id !== secondTile.id
      ) {
        dispatch(matchTiles())
      } else {
        dispatch(resetFlippedTilesAsync())
      }
    }
  }

  return (
    <>
      {modalIsVisible ||
        (isGameOver &&
          createPortal(
            <WinModal onClick={handleModal} />,
            document.getElementById("root-modal") as HTMLElement,
          ))}
      <div
        className={clsx(
          "w-full max-w-[768px] min-h-[75%] border-4 border-gray-500 rounded-lg bg-gray-400 p-2 shadow-gray-700 shadow-xl grid gap-3",
          {
            "grid-cols-2 gap-8 p-8": gameMode === 1,
            "grid-cols-4": gameMode === 2,
            "grid-cols-8": gameMode === 3,
          },
        )}
      >
        {tiles.map(tile => (
          <Tile
            key={tile.id}
            color={tile.color}
            number={tile.id}
            isMatched={tile.isMatched}
            isFlipped={tile.isFlipped}
            onClick={() => handleTileClick(tile.id)}
          />
        ))}
      </div>
      <Button
        onClick={() => dispatch(resetGame())}
        caption={"Reset game"}
        modifiers="mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gray-300"
      />
    </>
  )
}

export default Board
