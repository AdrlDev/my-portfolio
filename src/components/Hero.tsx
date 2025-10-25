'use client'
import ModalDialog from "@/components/ModalDialog";
import { useState } from 'react'
import AnimatedText from './AnimatedText'

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState("")

  return (
    <div className="bg-gray-900">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Background blobs */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        {/* Hero content */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white">
            Hi, I&apos;m Adriel {' '}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 text-center sm:text-left">
            I&apos;m an{' '}
            <AnimatedText
              texts={['Android Developer', 'Freelance Programmer']}
              interval={1500}
            />
            . I build mobile apps, web tools, and custom software solutions to help businesses and individuals bring their ideas to life.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => {
                setIsOpen(true)
                setTitle("Hire Me")
              }}
              className="rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Hire Me
            </button>

            <button
              onClick={() => {
                setIsOpen(true)
                setTitle("View Portfolio")
              }}
              className="text-sm font-semibold text-gray-300 hover:text-white"
            >
              View Portfolio <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Bottom background blob */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>

      <ModalDialog
        open={isOpen}
        onClose={setIsOpen}
        title={title}
        description="This is a call-to-action. You can replace this text with your own description or link to your projects."
      />
    </div>
  )
}