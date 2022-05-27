import './styles.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
import { useEffect, useState } from 'react';




//import { Chart, registerables } from 'chart.js';
//Chart.register(...registerables)

ChartJS.register(ArcElement, Tooltip, Legend);




function TotalMoney({listTransactions, dataGraph}) {

      console.log(dataGraph)
    

    return (
        <div className='total-money'>
        
            <div className='total'>
            <h3>Valor total:</h3>
            <p>{listTransactions.reduce((acc,actual) => 
            actual.type==='Despesa' ?
            acc + -Math.abs(Number(actual.value)) : acc + Number(actual.value)
            , 0)
            } R$
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