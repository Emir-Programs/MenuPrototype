import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './widgets/header/Header'
import MenuPage from './pages/MenuPage'

function App() {

  return (
    <>
    <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App