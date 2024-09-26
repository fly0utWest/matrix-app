import React from "react"
import { Button } from "../../../shared/ui"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../app/stores/mainStore"
import { GameModes } from "../../../shared/models"
import { changeGameMode, resetGame } from "../model/game.slice"

const ModeSwitcher = () => {
  const gameMode = useSelector((state: RootState) => state.game.gameMode)

  const dispatch: AppDispatch = useDispatch()

  return (
    <div className="w-[768px] flex bg-gray-400 border-2 border-gray-800">
      <Button
        onClick={() => {
          dispatch(changeGameMode(GameModes.BI))
          dispatch(resetGame())
        }}
        caption="2x2"
      />
      <Button
        onClick={() => {
          dispatch(changeGameMode(GameModes.QUADRO))
          dispatch(resetGame())
        }}
        caption="4x4"
      />
      <Button
        onClick={() => {
          dispatch(changeGameMode(GameModes.OCTO))
          dispatch(resetGame())
        }}
        caption="8x8"
      />
    </div>
  )
}

export default ModeSwitcher
