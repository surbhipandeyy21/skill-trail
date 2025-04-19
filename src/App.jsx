import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing_page from './views/Homepage/landing_page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing_page />
    </>
  )
}

export default App
