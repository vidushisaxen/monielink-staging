import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function DecryptedText({
  text,
  speed = 100,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  letterTransitionDuration = 0.5,
  ...props
}) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovering, setIsHovering] = useState(false)
  const [isScrambling, setIsScrambling] = useState(false)
  const [revealedIndices, setRevealedIndices] = useState(new Set())
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    let animationFrame
    let currentIteration = 0
    let lastTime = performance.now()

    const getNextIndex = (revealedSet) => {
      const textLength = text.length
      switch (revealDirection) {
        case 'start':
          return revealedSet.size
        case 'end':
          return textLength - 1 - revealedSet.size
        case 'center': {
          const middle = Math.floor(textLength / 2)
          const offset = Math.floor(revealedSet.size / 2)
          const nextIndex =
            revealedSet.size % 2 === 0
              ? middle + offset
              : middle - offset - 1

          if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
            return nextIndex
          }
          for (let i = 0; i < textLength; i++) {
            if (!revealedSet.has(i)) return i
          }
          return 0
        }
        default:
          return revealedSet.size
      }
    }

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter((char) => char !== ' ')
      : characters.split('')

    const shuffleText = (originalText, currentRevealed) => {
      if (useOriginalCharsOnly) {
        const positions = originalText.split('').map((char, i) => ({
          char,
          isSpace: char === ' ',
          index: i,
          isRevealed: currentRevealed.has(i),
        }))

        const nonSpaceChars = positions
          .filter((p) => !p.isSpace && !p.isRevealed)
          .map((p) => p.char)

        for (let i = nonSpaceChars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]]
        }

        let charIndex = 0
        return positions
          .map((p) => {
            if (p.isSpace) return ' '
            if (p.isRevealed) return originalText[p.index]
            return nonSpaceChars[charIndex++]
          })
          .join('')
      } else {
        return originalText
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (currentRevealed.has(i)) return originalText[i]
            return availableChars[Math.floor(Math.random() * availableChars.length)]
          })
          .join('')
      }
    }

    const animate = (time) => {
      if (time - lastTime < speed) {
        animationFrame = requestAnimationFrame(animate)
        return
      }
      lastTime = time

      setRevealedIndices((prevRevealed) => {
        if (sequential) {
          if (prevRevealed.size < text.length) {
            const nextIndex = getNextIndex(prevRevealed)
            const newRevealed = new Set(prevRevealed)
            newRevealed.add(nextIndex)
            setDisplayText(shuffleText(text, newRevealed))
            return newRevealed
          } else {
            setIsScrambling(false)
            return prevRevealed
          }
        } else {
          setDisplayText(shuffleText(text, prevRevealed))
          currentIteration++
          if (currentIteration >= maxIterations) {
            setIsScrambling(false)
            setDisplayText(text)
          }
          return prevRevealed
        }
      })

      animationFrame = requestAnimationFrame(animate)
    }

    if (isHovering) {
      setIsScrambling(true)
      animationFrame = requestAnimationFrame(animate)
    } else {
      setDisplayText(text)
      setRevealedIndices(new Set())
      setIsScrambling(false)
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [
    isHovering,
    text,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    characters,
    useOriginalCharsOnly,
  ])

  useEffect(() => {
    if (animateOn !== 'view') return

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true)
          setHasAnimated(true)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [animateOn, hasAnimated])

  const hoverProps =
    animateOn === 'hover'
      ? {
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false),
        }
      : {}

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      {...hoverProps}
      {...props}
    >
      <span className="sr-only">{displayText}</span>

      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealedOrDone =
            revealedIndices.has(index) || !isScrambling || !isHovering

          return (
            <motion.span
              key={index}
              className={isRevealedOrDone ? className : encryptedClassName}
              initial={{ opacity: 0.3, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: letterTransitionDuration, ease: 'easeOut' }}
            >
              {char}
            </motion.span>
          )
        })}
      </span>
    </motion.span>
  )
}
