import React from "react"
import clsx from "clsx"

interface TileProps {
  color: string
  onClick: () => void
  number: number
  isMatched: boolean
  isFlipped: boolean
}

const Tile: React.FC<TileProps> = ({
  color,
  number,
  onClick,
  isMatched,
  isFlipped,
}) => {
  const baseStyles =
    "p-2 text-4xl flex items-center justify-center font-bold text-white cursor-pointer rounded-2xl border-2 border-gray-700 transition-colors duration-300 transform"

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Tile number ${number} ${isFlipped ? "flipped" : "hidden"}`}
      className={clsx(baseStyles, {
        [color]: isFlipped,
        "bg-gray-700": !isFlipped && !isMatched,
        "transition-opacity duration-1000 opacity-0 pointer-events-none": isMatched,
        "scale-105": isFlipped,
      })}
      onClick={onClick}
      onKeyDown={event => event.key === "Enter" && onClick()}
    >
    </div>
  )
}

export default Tile
