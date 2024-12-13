import Home from 'src/page/Home'
import InGame from 'src/page/InGame'
import { useStore } from 'src/store'

function App() {
  const { gameStarted } = useStore()

  return <div className="App">{gameStarted ? <InGame /> : <Home />}</div>
}

export default App
