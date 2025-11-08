import { Outlet } from 'react-router'
import { Image } from '../Models/Image'
import LevelOne from './Level1'
import RandomImageGenerator from './Image-random'
import Footer from './Footer'
import Header from './Header'

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <LevelOne />
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default App
