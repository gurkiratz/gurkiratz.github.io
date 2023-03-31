import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Header2 from './components/Header2'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
  return (
    <div
      id="App"
      className="py-8 lg:py-16 px-6 md:px-16 lg:px-24 text-gray-700"
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
