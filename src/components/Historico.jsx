import './style.css'

export const Historico = ({ historico }) => {
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
                            <p key={index}> {operacao.primeiroNumero} {operacao.operador} {operacao.segundoNumero} = {operacao.result}</p>
                        )
                    })
                }
            </div>

        </>
    )
}