import './styles.css'
import { AiTwotoneDelete } from "react-icons/ai";



function Card({transaction, setListTransactions, index, listTransactions, listFiltered, setListFiltered}) {
    
    function deleteTransaction() {

        const newListF = listTransactions.filter(( item , i) => i !== index )
        setListTransactions(newListF)   

    }
    
    
    
    return (
        <li className={`transation-item ${transaction.type}`}>
            <div>
                <h3>{transaction.description}</h3> 
                <h5>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Math.abs(transaction.value))}</h5> 
                <button onClick={() => deleteTransaction()}>< AiTwotoneDelete/></button>
                <span>{transaction.type}</span>
                <span className='category'>{transaction.category}</span>
            </div>
        </li>
    )
}

export default Card