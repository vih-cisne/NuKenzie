import { useEffect, useState } from "react"
import Card from "../Card"
import './styles.css'

function List({listTransactions, setListTransactions}) {

    const [listFiltered, setListFiltered] = useState([...listTransactions])
    const [filter, setFilter] = useState('Todos')

    useEffect(() => {
        filterList()
    }, [listTransactions])


    useEffect(() => {
        filterList()
    }, [filter])



    function filterList() {
        if(filter ==='Todos') {
            setListFiltered([...listTransactions])
        } else {
            setListFiltered([...listTransactions].filter((item) => item.type === filter))
        }

    }

    


    return (
        <div className="list-transaction">
            <div className="header-transaction">
                <h3>Resumo financeiro</h3>

                <div className="nav-type">
                    <div className="radio-box">
                        <button className={filter==='Todos' ? 'selected' : ''} onClick={() => setFilter("Todos")} type="radio" value="Todos" name="type" id='Todos'>Todos</button>
                    </div>
                    <div className="radio-box">
                        <button className={filter==='Entrada' ? 'selected' : ''} onClick={() => setFilter("Entrada")} type="radio" value="Entrada" name="type" id="Entradas">Entradas</button>
                    </div>
                    <div className="radio-box">
                        <button className={filter==='Despesa' ? 'selected' : ''} onClick={() => setFilter("Despesa")} type="radio" value="Despesa" name="type" id="Despesas">Despesas</button>
                    </div>
                </div>
            </div>
            {listTransactions.length === 0 ? 
            <div className="info-list"><h2>Você ainda não possui nenhum lançamento</h2>
                <img src="image/NoCard.svg" alt="" />
            </div> 
            : null }
            <ul className="list">
                {listFiltered.map((transaction, index) =>
                <Card  listFiltered={listFiltered} setListFiltered={setListFiltered} transaction={transaction} key={index} index={index} listTransactions={listTransactions} setListTransactions={setListTransactions}/>)}
            </ul>
            
        </div>
    )
}

export default List