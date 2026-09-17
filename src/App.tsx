import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { LanguagePage } from './pages/LanguagePage'
import { ProblemPage } from './pages/ProblemPage'

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:language" element={<LanguagePage />} />
        <Route path="/:language/:difficulty/:problemId" element={<ProblemPage />} />
      </Routes>
    </div>
  )
}

export default App
