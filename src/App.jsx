import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Articles from './pages/Articles'
import Article from './components/Article'
import Home from './pages/Home'
import Projects from './pages/Projects'

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
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article" element={<Article />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
