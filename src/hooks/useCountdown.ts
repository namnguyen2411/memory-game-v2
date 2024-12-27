import { useState, useEffect } from 'react'

const useCountdown = (time: number) => {
  const [countdown, setCountdown] = useState(time)
  const [isPaused, setIsPaused] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (!isPaused && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            clearInterval(interval) // clear interval when countdown reaches 0
          }

          return prevCountdown - 1
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isPaused, countdown])

  const stop = () => setIsPaused(true)
  const start = () => setIsPaused(false)

  return { countdown, stop, start }
}

export default useCountdown
