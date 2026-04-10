import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Level from './Level'

// Maps each level ID to the config the Level component needs
// When the user switches levels, App just looks up the new config and passes it down
const levelConfig: Record<
  number,
  { range: [number, number]; mode: 'symbol-word' | 'word-only' }
> = {
  1: { range: [1, 10], mode: 'symbol-word' },
  2: { range: [1, 10], mode: 'word-only' },
  3: { range: [11, 20], mode: 'symbol-word' },
  4: { range: [11, 20], mode: 'word-only' },
}

function App() {
  // activeLevel lives here so both Sidebar and Level can access it
  const [activeLevel, setActiveLevel] = useState(1)
  const config = levelConfig[activeLevel]

  return (
    <div id="app">
      <Header />
      <div className="layout">
        {/* Sidebar receives activeLevel to highlight the right button,
            and setActiveLevel so it can update state when clicked */}
        <Sidebar activeLevel={activeLevel} setActiveLevel={setActiveLevel} />

        <main className="game-area">
          {/* key={activeLevel} tells React to fully reset Level when the level changes,
              so the game starts fresh with a new question */}
          <Level key={activeLevel} range={config.range} mode={config.mode} />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
