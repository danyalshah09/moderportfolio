"use client"

import React from "react"
import { useState, useEffect, useCallback } from "react"
import { ArrowUp } from "lucide-react"
import classNames from "classnames";
import { useTheme } from "next-themes";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme } = useTheme() // Get the current theme (light/dark)

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0

    setIsVisible(scrollTop > 50) // Show button after scrolling 50px
    setScrollProgress(progress)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    // Call once on mount to set initial state
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  // Determine colors based on the current theme
  const progressColor = theme === "dark" ? "#57534e" : "#a8a29e" // stone-700 for dark, stone-400 for light
  const backgroundColor = theme === "dark" ? "#1c1917" : "#292524" // stone-900 for dark, stone-800 for light
  const innerBgColor = theme === "dark" ? "bg-stone-900" : "bg-stone-800"
  const ringOffsetColor = theme === "dark" ? "focus:ring-offset-gray-950" : "focus:ring-offset-gray-100"

  return (
    <div
      className={classNames(
        "fixed bottom-8 right-8 z-40 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <div className="relative">
        {/* Progress ring */}
        <svg
          className="absolute inset-0 w-14 h-14 -rotate-90 transform"
          viewBox="0 0 56 56"
        >
          {/* Background circle */}
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke={theme === "dark" ? "#292524" : "#44403c"}
            strokeWidth="2"
          />
          {/* Progress circle */}
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke={progressColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 26}`}
            strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
            className="transition-all duration-150 ease-out"
          />
        </svg>

        {/* Button */}
        <button
          onClick={scrollToTop}
          className={classNames(
            "relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 transition-all duration-200 hover:scale-105",
            innerBgColor,
            ringOffsetColor,
          )}
          style={{
            backgroundColor: backgroundColor,
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-stone-300" />
        </button>
      </div>
    </div>
  )
}