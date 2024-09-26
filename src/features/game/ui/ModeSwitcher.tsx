import React from "react"
import { Button } from "../../../shared/ui"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../app/stores/mainStore"
import { GameModes } from "../../../shared/models"
import { changeGameMode, resetGame } from "../model/game.slice"
import clsx from "clsx"

const ModeSwitcher = () => {
  const gameMode = useSelector((state: RootState) => state.game.gameMode)

  const dispatch: AppDispatch = useDispatch()

  return (
    <div className="w-full max-w-[768px] flex bg-gray-400 border-2 border-gray-800 mb-6">
      <Button
        onClick={() => {
          dispatch(changeGameMode(GameModes.BI))
          dispatch(resetGame())
        }}
        modifiers={clsx("w-full rounded-none text-gray-800 transition-colors", {
          ["bg-gray-800 text-gray-400"]: gameMode === 1,
        })}
        caption="2x2"
      />
      <Button
        onClick={() => {
          dispatch(changeGameMode(GameModes.QUADRO))
          dispatch(resetGame())
        }}
        modifiers={clsx("w-full rounded-none text-gray-800 transition-colors", {
          ["bg-gray-800 text-gray-400"]: gameMode === 2,
        })}
        caption="4x4"
      />
      <Button
        onClick={() => {
          dispatch(changeGameMode(GameModes.OCTO))
          dispatch(resetGame())
        }}
        modifiers={clsx("w-full rounded-none text-gray-800 transition-colors", {
          ["bg-gray-800 text-gray-400"]: gameMode === 3,
        })}
        caption="8x8"
      />
    </div>
  )
}

export default ModeSwitcher
