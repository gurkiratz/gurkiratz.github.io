import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Articles from './pages/Articles'
import ShowArticle from './components/ShowArticle'
import Home from './pages/Home'
import Projects from './pages/Projects'
import MDeditor from './components/MDeditor'
import Contact from './pages/Contact'

function App() {
  // const baseUrl = '/portfolio-v1'
  const baseUrl = '/'
  return (
    <div
      id="App"
      className="py-8 lg:py-16 px-6 md:px-16 lg:px-24 text-gray-700"
    >
      <Router basename={baseUrl}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles/:article" element={<ShowArticle />} />
          <Route path="/editor" element={<MDeditor />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
