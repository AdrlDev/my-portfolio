'use client'
import { useEffect, useState, useRef } from 'react'

interface AnimatedTextProps {
  texts: string[]
  interval?: number
}

export default function AnimatedText({ texts, interval = 2000 }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const spanRef = useRef<HTMLSpanElement>(null)

  // Auto-update width when current text changes
  useEffect(() => {
    if (spanRef.current) {
      setWidth(spanRef.current.offsetWidth)
    }
  }, [currentIndex, texts])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, interval)
    return () => clearInterval(timer)
  }, [texts, interval])

  return (
    <span
      className="inline-block align-middle relative"
      style={{ width }}
    >
      {texts.map((text, idx) => (
        <span
          key={idx}
          ref={idx === currentIndex ? spanRef : null}
          className={`absolute left-0 top-0 transition-all duration-500 ease-in-out
            ${idx === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
          `}
        >
          {text}
        </span>
      ))}
    </span>
  )
}
