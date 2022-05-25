import './styles.css'

function TotalMoney({listTransactions}) {

    return (
        <div className='total-money'>
        
            <h3>Valor total:</h3>
            <p>R${listTransactions.reduce((acc,actual) => 
            actual.type==='Despesa' ?
            acc + -Math.abs(Number(actual.value)) : acc + Number(actual.value)
            , 0)}</p>
        
        <span className='total-span'>O valor é referente ao saldo</span>
        </div>
    )

}

export default TotalMoney