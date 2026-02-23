import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const instagramImages = [
  new URL('../assets/images/b1.jpg', import.meta.url).href,
  new URL('../assets/images/b2.jpg', import.meta.url).href,
  new URL('../assets/images/b3.jpg', import.meta.url).href,
  new URL('../assets/images/b4.jpg', import.meta.url).href,
  new URL('../assets/images/b5.jpg', import.meta.url).href,
  new URL('../assets/images/b6.jpg', import.meta.url).href,
]

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <footer className="footer-bg text-gray-300">
        {/* Main Footer */}
        <div className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Brand */}
              <div className="lg:col-span-1">
                <Link to="/" className="block mb-4">
                  <span className="text-2xl font-bold text-white">
                    Kindway<span className="text-yellow-300 text-base ml-1">BioReZens</span>
                  </span>
                </Link>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  We are more than a company — we are a purpose-driven force committed to advancing dental care through innovation, quality, and precision.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/share/1GBc9pA6Rg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link bg-blue-700 hover:bg-blue-800"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@kindwaydentalimplants"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link bg-red-600 hover:bg-red-700"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/quadhelixx?igsh=dHB4bzQ2Y2dycWd4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link bg-pink-600 hover:bg-pink-700"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>

              {/* Useful Links */}
              <div>
                <h6 className="text-white font-bold text-base mb-4 uppercase tracking-wider">Useful Links</h6>
                <ul className="space-y-2">
                  {[
                    { label: 'Gallery', to: '/gallery' },
                    { label: 'About', to: '/about' },
                    { label: 'Services', to: '/services' },
                    { label: 'Products', to: '/products' },
                    { label: 'Contact Us', to: '/contact' },
                  ].map(item => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        className="text-gray-400 hover:text-yellow-300 transition-colors text-sm py-1 block"
                      >
                        <i className="fa fa-angle-right mr-2 text-blue-400"></i>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* More Info */}
              <div>
                <h6 className="text-white font-bold text-base mb-4 uppercase tracking-wider">More Info</h6>
                <ul className="space-y-2">
                  {[
                    'Events', 'Webinar', 'Investor', 'Workshop/Training', 'Support'
                  ].map(item => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors text-sm py-1 block">
                        <i className="fa fa-angle-right mr-2 text-blue-400"></i>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instagram Grid */}
              <div>
                <h6 className="text-white font-bold text-base mb-4 uppercase tracking-wider">Instagram</h6>
                <div className="grid grid-cols-3 gap-2">
                  {instagramImages.map((imgUrl, idx) => (
                    <a key={idx} href="https://www.instagram.com/quadhelixx?igsh=dHB4bzQ2Y2dycWd4" target="_blank" rel="noopener noreferrer">
                      <img
                        src={imgUrl}
                        alt="Instagram"
                        className="w-full aspect-square object-cover rounded-md hover:opacity-80 transition-opacity"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 py-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © 2026 Kindway BioReZens. All rights reserved.
              </p>
              <ul className="flex items-center gap-4 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-yellow-300 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-500 hover:text-yellow-300 transition-colors">Privacy Policy</a></li>
                <li><Link to="/contact" className="text-gray-500 hover:text-yellow-300 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Back to top"
        >
          <i className="fa fa-arrow-up"></i>
        </button>
      )}

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </>
  )
}

function WhatsAppWidget() {
  useEffect(() => {
    const w = window
    const d = document
    const s = 'script'
    const u = 'https://waw.gallabox.com'
    w.gbwawc = {
      url: u,
      options: {
        waId: '+91 91988 46529',
        siteName: 'Kindway Biorezens',
        siteTag: 'Innovation, Quality & Precision',
        siteLogo: 'https://assets.gallabox.com/gb-home/wa-chat-widget/bot-logo-3.png',
        widgetPosition: 'LEFT',
        welcomeMessage: 'Welcome in Kindway Biorezens Pvt. Ltd.',
        triggerMessage: 'Kindway Biorezens',
        brandColor: '#25D366',
        messageText: 'I am looking for a',
        replyOptions: ['Order product to deliver my home', 'Workshop / Training'],
        version: 'v1',
        widgetPositionMarginX: '12',
        widgetPositionMarginY: '12',
      },
    }
    const h = d.getElementsByTagName(s)[0]
    const j = d.createElement(s)
    j.async = true
    j.src = u + '/whatsapp-widget.min.js?_=2024-12-10 14'
    h.parentNode.insertBefore(j, h)
  }, [])
  return null
}