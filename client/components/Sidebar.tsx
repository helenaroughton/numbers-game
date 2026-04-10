// Props: the current active level (to highlight it) and the setter to update it
interface Props {
  activeLevel: number
  setActiveLevel: (level: number) => void
}

const levels = [
  { id: 1, label: 'Level 1', description: '1–10 · symbol & word' },
  { id: 2, label: 'Level 2', description: '1–10 · word only' },
  { id: 3, label: 'Level 3', description: '11–20 · symbol & word' },
  { id: 4, label: 'Level 4', description: '11–20 · word only' },
]

function Sidebar({ activeLevel, setActiveLevel }: Props) {
  return (
    <nav className="sidebar">
      {levels.map((level) => (
        <button
          key={level.id}
          // Add 'active' class when this button matches the current level
          className={`level-nav-button ${activeLevel === level.id ? 'active' : ''}`}
          onClick={() => setActiveLevel(level.id)}
        >
          <span className="level-label">{level.label}</span>
          <span className="level-desc">{level.description}</span>
        </button>
      ))}
    </nav>
  )
}

export default Sidebar
