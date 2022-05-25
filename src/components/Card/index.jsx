import './styles.css'
import { AiTwotoneDelete } from "react-icons/ai";



function Card({transaction}) {
    
    return (
        <li className={`transation-item ${transaction.type}`}>
            <div>
                <h3>{transaction.description}</h3> <h5>R$ {Math.abs(transaction.value)}</h5> <button>< AiTwotoneDelete/></button>
                <span>{transaction.type}</span>
            </div>
        </li>
    )
}

export default Card