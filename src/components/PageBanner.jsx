import { Link } from 'react-router-dom'

export default function PageBanner({ title, bgImage }) {
  const defaultBg = new URL('../assets/images/bg3.jpg', import.meta.url).href

  return (
    <>
      <div
        className="h-48 md:h-64 flex items-center justify-center relative overflow-hidden"
        style={{
          marginTop: '80px',
          background: `url(${bgImage || defaultBg}) center/cover no-repeat`
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{title}</h2>
        </div>
      </div>
      <section className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 py-3 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:text-blue-600 transition-colors font-medium">Home</Link>
            <i className="fa fa-arrow-right text-xs text-gray-400"></i>
            <span className="text-blue-600 font-semibold">{title}</span>
          </nav>
        </div>
      </section>
    </>
  )
}