'use client'
import { useEffect, useState } from 'react'

interface AnimatedTextProps {
  texts: string[]
  interval?: number
}

export default function AnimatedText({ texts, interval = 2000 }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setFade(true)
      }, 400) // transition time
    }, interval)
    return () => clearInterval(timer)
  }, [texts, interval])

  return (
    <span
      className={`inline-block font-semibold text-white transition-all duration-500 ease-in-out ${
        fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      {texts[currentIndex]}
    </span>
  )
}
