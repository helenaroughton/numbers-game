import { Outlet } from 'react-router'
import LevelOne from './Level1'
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
