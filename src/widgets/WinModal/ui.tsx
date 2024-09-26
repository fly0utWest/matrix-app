import React from "react"
import { Button } from "../../shared/ui/"

interface WinModalProps {
  onClick: () => void
}

const WinModal: React.FC<WinModalProps> = ({ onClick }) => {
  return (
    <div
      className="absolute text-3xl font-bold top-0 left-0 w-full h-full bg-slate-600 bg-opacity-45 flex flex-col items-center justify-center px-6"
      onClick={onClick}
    >
      <section
        className="w-max max-w-[768px] bg-white rounded-xl py-4 px-16 min-h-[75%] flex flex-col items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
      
      <div className="w-full h-full flex flex-col items-center justify-between">

        <h2>You won!</h2>
        <p className="text-[150px]">🎉</p>
        <Button modifiers="relative bottom-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gray-300" onClick={onClick} caption="Try again" />
      </div>

      </section>
    </div>
  )
}
/*  */
export default WinModal
