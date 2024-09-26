import React from "react"
import { Button } from "../../shared/ui/"

interface WinModalProps {
  onClickBg: () => void
  onClickButton: () => void
}

const WinModal: React.FC<WinModalProps> = ({ onClickBg, onClickButton }) => {
  return (
    <div
      className="absolute text-3xl font-bold top-0 left-0 w-full h-full bg-slate-600 bg-opacity-45 flex flex-col items-center justify-center"
      onClick={onClickBg}
    >
      <section
        className="w-[768px] max-w-[768px] bg-white rounded-xl p-4 min-h-[75%] flex flex-col items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <h2>You won!</h2>
        <Button onClick={onClickButton} caption="Try again" />
      </section>
    </div>
  )
}
/*  */
export default WinModal
