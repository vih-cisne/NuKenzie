import './styles.css'
import { AiTwotoneDelete } from "react-icons/ai";



function Card({transaction, setListTransactions, index, listTransactions, dataGraph, setDataGraph}) {
    
    function deleteTransaction() {
        const newList = listTransactions.filter(( item , i) => i !== index )
        setListTransactions(newList)
    }
    
    return (
        <li className={`transation-item ${transaction.type}`}>
            <div>
                <h3>{transaction.description}</h3> 
                <h5>R$ {Math.abs(transaction.value)}</h5> 
                <button onClick={() => deleteTransaction()}>< AiTwotoneDelete/></button>
                <span>{transaction.type}</span>
                <span className='category'>{transaction.category}</span>
            </div>
        </li>
    )
}

export default Card