import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FirstComponent from './components/FirstComponent.jsx'

import SecondComponent from './components/SecondComponent.jsx'

import TemplateExpressions from './components/TemplateExpressions.jsx'
import Event from './components/Event.jsx'
import MostrarImagens from './components/MostrarImagens.jsx'

function App() {

  return (
    <>
      {/* <TemplateExpressions />
      <SecondComponent />
      <FirstComponent /> */}

      <Event></Event>
      <MostrarImagens></MostrarImagens>
    </>
  )
}

export default App
