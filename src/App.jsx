import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Implants from './pages/Implants'
import BoneGrafts from './pages/BoneGrafts'
import MobileClinic from './pages/MobileClinic'
import Training from './pages/Training'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Director from './pages/Director'
import Research from './pages/Research'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <HashRouter>
      <ScrollToTop />
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-transparent font-quicksand">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/implants" element={<Implants />} />
            <Route path="/bone-grafts" element={<BoneGrafts />} />
            <Route path="/mobile-clinic" element={<MobileClinic />} />
            <Route path="/training" element={<Training />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/director" element={<Director />} />
            <Route path="/research" element={<Research />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </HashRouter>
  )
}

export default App
