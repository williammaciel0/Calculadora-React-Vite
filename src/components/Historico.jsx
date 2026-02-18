import './style.css'


export const Historico = ({ historico }) => {

    const retornaOperacao = (index) => {
        console.log(historico[index])
        return(<>
        as
        </>)
    }

    function converterDuasCasas(result, index){
        if(index !== 0){
            const resultado = Number(result)
            return resultado.toFixed(2)
        } else {
            return ""
        }
        
    }

    const ocultarHistorico = () => {
        let classHistorico = document.getElementsByClassName('historico')
        
        if(classHistorico[0].className[10] === 'd'){
            classHistorico[0].classList.remove('desocultar')
            classHistorico[0].classList.add('ocultar')
        } else if(classHistorico[0].className[10] === 'o'){
            classHistorico[0].classList.remove('ocultar')
            classHistorico[0].classList.add('desocultar')
        }
    }
    return (
        <>
            <button onClick={ocultarHistorico} >Histórico</button>
            <div className="historico ocultar">
                
                {
                    historico.map((operacao, index) => {
                        return (
                            <p onClick={() => retornaOperacao(index)} key={index}> {operacao.primeiroNumero} {operacao.operador} {operacao.segundoNumero} {index ? '=': ''} {converterDuasCasas(operacao.result, index)}</p>
                        )
                    })
                }
            </div>

        </>
    )
}