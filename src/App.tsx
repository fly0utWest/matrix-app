import {Board} from "./widgets/Board"

const App: React.FC = () => {
  return (
    <main className="flex flex-1 p-5 flex-col h-full items-center justify-center bg-gray-300">
      <Board />
    </main>
  )
}

export default App
