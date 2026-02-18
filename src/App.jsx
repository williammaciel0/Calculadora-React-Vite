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
      <div className=''>
        <Historico historico={historico} />
        <Operacoes buscarHistorico={buscarHistorico}></Operacoes>
      </div>
    </>
  )

}

export default App
