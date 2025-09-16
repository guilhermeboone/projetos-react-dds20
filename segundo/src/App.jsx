import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import OtherComponent from './components/OtherComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent/>
      <p> Este P é o do App.jsx</p>
      <OtherComponent/>
    </>
  )
}

export default App
