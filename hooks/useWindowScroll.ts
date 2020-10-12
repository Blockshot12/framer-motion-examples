import { useState, useEffect } from 'react'
import { isClient } from '../util/util'

export interface State {
  scrollX?: number
  scrollY?: number
  scrollDirection?: 'down' | 'up'
}

const useWindowScroll = (): State => {
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [scrollX, setScrollX] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('up')

  const listener = () => {
    setScrollY(window.pageYOffset)
    setScrollX(window.pageXOffset)
    setScrollDirection(lastScrollTop > -window.pageYOffset ? 'down' : 'up')
    setLastScrollTop(-window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)

    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  if (!isClient) {
    return {
      scrollY: 0,
      scrollX: 0,
      scrollDirection: 'down',
    }
  }

  return {
    scrollY,
    scrollX,
    scrollDirection,
  }
}

export default useWindowScroll