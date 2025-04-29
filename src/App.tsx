import React, { useEffect, useState } from 'react'

export default function App() {
  const [score, setScore] = useState(0)
  const [targetPos, setTargetPos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    // Move target every second
    const interval = setInterval(() => {
      const x = Math.random() * (window.innerWidth - 50)
      const y = Math.random() * (window.innerHeight - 50)
      setTargetPos({ x, y })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleHit = () => setScore(prev => prev + 1)

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#282c34' }}>
      <h2 style={{ color: '#fff', textAlign: 'center', padding: '0.5rem' }}>
        Score: {score}
      </h2>
      <div
        onClick={handleHit}
        style={{
          position: 'absolute',
          left: targetPos.x,
          top: targetPos.y,
          width: 50,
          height: 50,
          background: 'red',
          borderRadius: '50%',
          cursor: 'pointer'
        }}
      />
    </div>
  )
}