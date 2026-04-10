import { createRoot } from 'react-dom/client'
import App from './components/App'

// Simplified: no router needed since all navigation is handled by useState in App
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(<App />)
})
