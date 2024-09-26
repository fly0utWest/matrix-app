import clsx from 'clsx';
import React from 'react'

interface ButtonProps {
    onClick: () => void;
    caption: string
    modifiers?: string
}

const Button: React.FC<ButtonProps> = ({onClick, caption, modifiers}) => {
  return (
    <button className={clsx('p-4 border-4 border-black rounded-xl font-bold',  modifiers ?? modifiers)} onClick={onClick}>{caption}</button>
  )
}

export default Button