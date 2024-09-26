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
        "transition-all duration-500 p-4 border-4 text-white border-gray-700 font-bold",
        modifiers ?? modifiers,
      )}
      onClick={onClick}
    >
      {caption}
    </button>
  )
}

export default Button
