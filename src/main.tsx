import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Initialize Telegram Game Proxy
if (window.TelegramGameProxy) {
  window.TelegramGameProxy.initGame({
    onStart: () => console.log('Game started'),
    onEvent: data => console.log('Event from Bot:', data)
  })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />)