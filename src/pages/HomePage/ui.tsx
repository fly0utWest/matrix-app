import React from "react"
import { Board } from "../../widgets/Board"
import { ModeSwitcher } from "../../features/game/ui"

const HomePage = () => {
  return (
    <main className="flex flex-1 p-5 flex-col h-full items-center justify-center bg-gray-300">
      <h1 className="font-extrabold text-5xl uppercase mb-6">Tile Minigame</h1>
      <ModeSwitcher />
      <Board />
    </main>
  )
}

export default HomePage
