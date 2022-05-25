import './styles.css'

function Form({listTransactions,setListTransactions}) {


    return (
        <form className="form-transaction">
            <div className="input-box">
                <label>Descrição</label>
                <input type="text" placeholder="Digite aqui sua descrição" name="descricao"></input>
                <span>Ex: Compra de roupas</span>
            </div>  
            <div className="flex-below">
                <div className="input-box">
                    <label>Valor</label>
                    <input type="text" placeholder="Valor" name="valor"></input>
                    <span>R$</span>
                </div>          
                <div className="select-box">
                    <label>Tipo de valor</label>
                    <select>
                        <option>Entrada</option>
                        <option>Despesa</option>
                    </select>
                </div>
            </div>
            <button className="form-button">Inserir valor</button>


        </form>
    )

}

export default Form