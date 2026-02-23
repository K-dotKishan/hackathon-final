import { useState, useEffect, useRef } from 'react'

export default function CountUp({ start = 0, end, duration = 2000, className = '' }) {
  const [count, setCount] = useState(start)
  const ref = useRef(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    // Force reset to start value on mount or prop change
    setCount(start)
    hasStarted.current = false

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true

          let startTimestamp = null
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)

            // Linear progress for debugging
            const currentCount = Math.floor(progress * (end - start) + start)
            setCount(currentCount)

            if (progress < 1) {
              window.requestAnimationFrame(step)
            } else {
              setCount(end)
            }
          }
          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
      observer.disconnect()
    }
  }, [start, end, duration])

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
    </span>
  )
}
