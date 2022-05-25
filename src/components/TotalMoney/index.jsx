import './styles.css'

function TotalMoney({listTransactions}) {

    return (
        <p>{listTransactions.reduce((acc,actual) => acc+actual.value,0)}</p>
    )

}

export default TotalMoney