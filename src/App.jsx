import './App.css'
import { useState } from 'react'
import { Operacoes } from './components/Operacoes'
import { Historico } from './components/Historico'

function App() {
  const [historico, setHistorico] = useState([])

  const buscarHistorico = (data) => {
    setHistorico([historico, ...data])
  }

  return (
    <>
      <Historico historico={historico}></Historico>
      <Operacoes buscarHistorico={buscarHistorico}></Operacoes>
      
    </>
  )

}

export default App
