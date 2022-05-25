import Card from "../Card"
import './styles.css'

function List({listTransactions}) {


    return (
        <div className="list-transaction">
            <div className="header-transaction">
                <h3>Resumo financeiro</h3>

                <div className="nav-type">
                    <div className="radio-box">
                        <input type="radio" value="Todos" name="type"/> <p>Todos</p>
                    </div>
                    <div className="radio-box">
                        <input type="radio" value="Entradas" name="type" /> <p>Entradas</p>
                    </div>
                    <div className="radio-box">
                        <input type="radio" value="Despesas" name="type" /> <p>Despesas</p>
                    </div>
                </div>
            </div>
            {listTransactions.length === 0 ? 
            <div className="info-list">Você não possui nenhum lançamento</div> 
            : null }
            <u className="list">
                {listTransactions.map((transaction, index) => 
                <Card transaction={transaction} key={index} />)}
            </u>
            
        </div>
    )
}

export default List