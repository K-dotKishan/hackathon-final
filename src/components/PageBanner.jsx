import { Link } from 'react-router-dom'

export default function PageBanner({ title, bgImage }) {
  const defaultBg = new URL('../assets/images/bg3.webp', import.meta.url).href

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
    </>
  )
}