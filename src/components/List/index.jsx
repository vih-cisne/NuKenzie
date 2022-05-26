import { useState } from "react"
import Card from "../Card"
import './styles.css'

function List({listTransactions, setListTransactions, updateGraph}) {

    const [listFiltered, setListFiltered] = useState(undefined)

    function filterList(e) {
        if(e.target.id ==='Todos') {
            setListFiltered(undefined)
        } else {
            setListFiltered([...listTransactions].filter((item) => item.type === e.target.value))
        }
        const selected = document.querySelector('.selected')
        selected.className = ''

        e.target.className = 'selected'

    }

    const listActual = listFiltered ? listFiltered : listTransactions


    return (
        <div className="list-transaction">
            <div className="header-transaction">
                <h3>Resumo financeiro</h3>

                <div className="nav-type">
                    <div className="radio-box">
                        <button className="selected" onClick={(e) => filterList(e)} type="radio" value="Todos" name="type" id='Todos'>Todos</button>
                    </div>
                    <div className="radio-box">
                        <button onClick={(e) => filterList(e)} type="radio" value="Entrada" name="type" id="Entradas">Entradas</button>
                    </div>
                    <div className="radio-box">
                        <button onClick={(e) => filterList(e)} type="radio" value="Despesa" name="type" id="Despesas">Despesas</button>
                    </div>
                </div>
            </div>
            {listTransactions.length === 0 ? 
            <div className="info-list"><h2>Você ainda não possui nenhum lançamento</h2>
                <img src="image/NoCard.svg" alt="" />
            </div> 
            : null }
            <ul className="list">
                {listActual.map((transaction, index) => 
                <Card  updateGraph={updateGraph} transaction={transaction} key={index} index={index} listTransactions={listTransactions} setListTransactions={setListTransactions}/>)}
            </ul>
            
        </div>
    )
}

export default List