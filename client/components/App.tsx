import { Outlet } from 'react-router'
import { Image } from '../Models/Image'
import LevelOne from './Level1'

function App() {
  return (
    <div>
      <h1>Maeve's Numbers</h1>
      <div></div>
      <LevelOne />
      <Outlet />
    </div>
  )
}

export default App
