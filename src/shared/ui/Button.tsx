import clsx from "clsx"
import React from "react"

interface ButtonProps {
  onClick: () => void
  caption: string
  modifiers?: string
}

const Button: React.FC<ButtonProps> = ({ onClick, caption, modifiers }) => {
  return (
    <button
      className={clsx(
        "transition-all duration-500 p-4 border-4 text-white border-gray-700 rounded-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gray-300",
        modifiers ?? modifiers,
      )}
      onClick={onClick}
    >
      {caption}
    </button>
  )
}

export default Button
