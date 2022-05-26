import './styles.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

//import { Chart, registerables } from 'chart.js';
//Chart.register(...registerables)




function TotalMoney({listTransactions, dataGraph}) {

    
    

    

    /*<Doughnut
            
            data={{labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
                data: [12, 19, 3],
                backgroundColor: [
                'red',
                'blue',
                ]}]
            }}
            
        />*/

    return (
        <div className='total-money'>
        
            <div className='total'>
            <h3>Valor total:</h3>
            <p>R${listTransactions.reduce((acc,actual) => 
            actual.type==='Despesa' ?
            acc + -Math.abs(Number(actual.value)) : acc + Number(actual.value)
            , 0)
            }
            </p>
        
            </div>
            <span className='total-span'>O valor é referente ao saldo</span>

        <div style={{width:'200px', height:'200px'}}>
        <Doughnut
            
            data={dataGraph}
            
        />
        </div>

        

        </div>
    )

}

export default TotalMoney