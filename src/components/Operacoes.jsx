import { useState } from 'react'

const salvador = []

export const Operacoes = ({buscarHistorico}) => {
    const [valorExibido, setValorExibido] = useState('')

    const onSubmit = (dado) => {
        setValorExibido([...valorExibido, dado])

        if (dado === "") {

            let numero = valorExibido.join('')
            numero = parseInt(numero)

            let numero2 = valorExibido.reverse()
            numero2 = valorExibido.join('')
            numero2 = parseInt(numero2)
            let arrayNumero2 = Array.from(String(numero2), Number) // converte número em array
            let arrayNumero2Reverse = arrayNumero2.reverse()
            arrayNumero2Reverse = arrayNumero2.join('')
            arrayNumero2Reverse = parseInt(arrayNumero2Reverse)

            if (valorExibido.includes('+') === true) {
                const result = numero + arrayNumero2Reverse
                setValorExibido(result)
                salvador.push({primeiroNumero: numero, operador: "+", segundoNumero: arrayNumero2Reverse, result })
                buscarHistorico(salvador)
            } else if (valorExibido.includes('-') === true) {
                const result = numero - arrayNumero2Reverse
                setValorExibido(result)
                salvador.push({ primeiroNumero: numero, operador: "-", segundoNumero: arrayNumero2Reverse, result })
                buscarHistorico(salvador)
            } else if (valorExibido.includes('*') === true) {
                const result = numero * arrayNumero2Reverse
                setValorExibido(result)
                salvador.push({ primeiroNumero: numero, operador: "x", segundoNumero: arrayNumero2Reverse, result })
                buscarHistorico(salvador)
            } else if (valorExibido.includes('/') === true) {
                const result = numero / arrayNumero2Reverse
                setValorExibido(result)
                salvador.push({ primeiroNumero: numero, operador: "/", segundoNumero: arrayNumero2Reverse, result })
                buscarHistorico(salvador)
            }

        }
        
    }

    const clear = (dado) => {
        setValorExibido("")
    }

    return (
        <section className='calculadora'>

            <div className='display-numerico'>{valorExibido}</div>
            <div className='teclado'>
                <div className='teclas-numericas'>
                    <div className='filas'>
                        <button className='' onClick={(e) => onSubmit(e.target.value)} value='1'>1</button>
                        <button className='' onClick={(e) => onSubmit(e.target.value)} value='2'>2</button>
                        <button className='' onClick={(e) => onSubmit(e.target.value)} value='3'>3</button>
                    </div>
                    <div className='filas'>
                        <button className='' onClick={(e) => onSubmit(e.target.value)} value='4'>4</button>
                        <button className='' onClick={(e) => onSubmit(e.target.value)} value='5'>5</button>
                        <button className='' onClick={(e) => onSubmit(e.target.value)} value='6'>6</button>
                    </div>
                    <div className='filas'>
                        <button className='' onClick={(e) => onSubmit(e.target.value)} value='7'>7</button>
                        <button className='' onClick={(e) => onSubmit(e.target.value)} value='8'>8</button>
                        <button className='' onClick={(e) => onSubmit(e.target.value)} value='9'>9</button>
                    </div>
                    <div className='filas'>
                        <button className='' onClick={(e) => onSubmit(e.target.value)} value='0'>0</button>
                        <button className='igualdade' onClick={(e) => onSubmit(e.target.value)} >=</button>
                    </div>
                    <button onClick={(e) => clear(e.target.value)} value='clear'>Clear</button>
                </div>
                <div className='operadores'>
                    <button className='btn-operador' onClick={(e) => onSubmit(e.target.value)} value='*'>*</button>
                    <button className='btn-operador' onClick={(e) => onSubmit(e.target.value)} value='/'>/</button>
                    <button className='btn-operador' onClick={(e) => onSubmit(e.target.value)} value='+'>+</button>
                    <button className='btn-operador' onClick={(e) => onSubmit(e.target.value)} value='-'>-</button>
                </div>

            </div>

        </section>
    )
}