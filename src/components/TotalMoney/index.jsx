import './styles.css'
import { Doughnut } from 'react-chartjs-2'


function TotalMoney({listTransactions, dataGraph}) {

    

    /*<Doughnut
            
            data={{labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'purple',
                'orange',
                ]}]
            }}
            
        />*/

    return (
        <div className='total-money'>
        
            <h3>Valor total:</h3>
            <p>R${listTransactions.reduce((acc,actual) => 
            actual.type==='Despesa' ?
            acc + -Math.abs(Number(actual.value)) : acc + Number(actual.value)
            , 0)}
            </p>
        
        <span className='total-span'>O valor é referente ao saldo</span>

        
        </div>
    )

}

export default TotalMoney