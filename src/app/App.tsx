import HomePage from "../pages/HomePage/ui"
import { MainProviders } from "./providers/"
import './styles/global.css'

const App: React.FC = () => {
  return (
    <MainProviders>
      <HomePage />
    </MainProviders>
  )
}

export default App
