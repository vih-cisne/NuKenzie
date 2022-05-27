import './styles.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'



function TotalMoney({listTransactions, total, dataGraph}) {
    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className='total-money'>
        
            <div className='total'>
            <h3>Valor total:</h3>
            <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</p>
        
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