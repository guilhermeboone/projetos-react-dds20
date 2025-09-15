import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FirstComponent from './components/FirstComponent.jsx'

import SecondComponent from './components/SecondComponent.jsx'

import TemplateExpressions from './components/TemplateExpressions.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TemplateExpressions />
      <SecondComponent />
      <FirstComponent />
    </>
  )
}

export default App
