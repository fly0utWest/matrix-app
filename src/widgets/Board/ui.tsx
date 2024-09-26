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

const Board: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const tiles = useSelector((state: RootState) => state.game.tiles)
  const flippedTiles = useSelector(
    (state: RootState) => state.game.flippedTiles,
  )
  const isGameOver = useSelector((state: RootState) => state.game.isGameOver)

  const [modalIsVisible, setModalIsVisible] = useState(true)

  const handleModalBg = () => {
    setModalIsVisible(false)
  }

  const handleModalButton = () => {
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
      {modalIsVisible &&
        isGameOver &&
        createPortal(
          <WinModal onClickBg={handleModalBg} onClickButton={handleModalButton} />,
          document.getElementById("root-modal") as HTMLElement,
        )}
      <div className="w-full max-w-[768px] min-h-[75%] border-4 border-gray-500 rounded-lg bg-gray-400 p-2 shadow-gray-700 shadow-xl grid grid-cols-4 gap-3">
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
      <Button onClick={() => dispatch(resetGame())} caption={'Reset game'} modifiers="mt-6"/>
    </>
  )
}

export default Board
