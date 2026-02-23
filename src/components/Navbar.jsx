import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/training', label: 'Training & Workshops' },
  { to: '/mobile-clinic', label: 'Mobile Clinic' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [isOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname === path
  }

  return (
    <>
      <div className="hidden lg:block bg-blue-900 text-white/80 py-2 border-b border-white/10 relative z-[60]">
        <div className="container mx-auto px-4 flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <i className="fa fa-phone text-yellow-400"></i> +91-9151161267
            </span>
            <span className="flex items-center gap-2">
              <i className="fa fa-envelope text-yellow-400"></i> kishansingh2882004@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <i className="fa fa-map-marker text-yellow-400"></i> SAMNEGHAT, VARANASI
            </span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-400 transition-colors">Career</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Support</a>
            <a href="/gallery" className="hover:text-yellow-400 transition-colors">Media</a>
          </div>
        </div>
      </div>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'top-0 bg-white dark:bg-gray-900 shadow-lg' : 'top-0 lg:top-8 bg-transparent'
          }`}
        style={{ background: scrolled ? undefined : 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)' }}
      >
        <div className="container mx-auto px-4">
          <div ref={menuRef} className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 z-10 transition-colors">
              <h1 className={`text-xl md:text-2xl font-bold tracking-wide transition-colors ${scrolled ? 'text-gray-800 dark:text-white' : 'text-white'
                }`}>
                Kindway
                <span className="text-yellow-400 text-sm md:text-base font-semibold ml-1">BioReZens</span>
              </h1>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${active
                      ? 'text-blue-600 dark:text-yellow-400 border-b-2 border-blue-600 dark:border-yellow-400'
                      : (scrolled ? 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-400' : 'text-white hover:text-yellow-400')
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Dark mode + hamburger */}
            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${scrolled ? 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10' : 'text-white hover:bg-white/20'
                  }`}
                aria-label="Toggle dark mode"
              >
                <i className={`fa ${darkMode ? 'fa-lightbulb-o' : 'fa-moon-o'} text-lg`}></i>
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-md transition-all ${scrolled ? 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10' : 'text-white hover:bg-white/20'
                  }`}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'
              }`}
          >
            <nav className="flex flex-col bg-white dark:bg-gray-900 rounded-xl shadow-2xl mt-2 overflow-hidden">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-4 text-base font-semibold border-b border-gray-100 dark:border-gray-700 transition-all duration-200 ${isActive(link.to)
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-between px-6 py-4 text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                <i className={`fa ${darkMode ? 'fa-lightbulb-o text-yellow-500' : 'fa-moon-o text-blue-500'} text-lg`}></i>
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
