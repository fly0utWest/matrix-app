import React from "react"
import { Button } from "../../shared/ui/"

interface WinModalProps {
  onClick: () => void
}

const WinModal: React.FC<WinModalProps> = ({ onClick }) => {
  return (
    <div
      className="absolute text-3xl font-bold top-0 left-0 w-full h-full bg-slate-600 bg-opacity-45 flex flex-col items-center justify-center"
      onClick={onClick}
    >
      <section
        className="w-[768px] max-w-[768px] bg-white rounded-xl p-4 min-h-[75%] flex flex-col items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
      
      <div className="w-full h-full flex flex-col items-center justify-between">

        <h2>You won!</h2>
        <p className="text-[150px]">🎉</p>
        <Button modifiers="relative bottom-0" onClick={onClick} caption="Try again" />
      </div>

      </section>
    </div>
  )
}
/*  */
export default WinModal
