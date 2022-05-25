import { useState } from 'react'
import './styles.css'


function Form({listTransactions,setListTransactions}) {

    /*{ description: "Salário recebido", type: "entrada", value: 2500 },
  { description: "Conta de luz", type: "saída", value: -150 }*/

    function addTransaction() {
      
        setListTransactions([...listTransactions, {description,value,type}])
    }

    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [value, setValue] = useState('')

    return (
        <form className="form-transaction">
            <div className="input-box">
                <label>Descrição</label>
                <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Digite aqui sua descrição" name="descricao"></input>
                <span className='input-ex'>Ex: Compra de roupas</span>
            </div>  
            <div className="flex-below">
                <div className="input-box">
                    <label>Valor</label>
                    <input onChange={(e) => setValue(e.target.value)} type="text" placeholder="1" name="valor"></input>
                    <span className='input-value'>R$</span>
                </div>          
                <div className="select-box">
                    <label>Tipo de valor</label>
                    <select onChange={(e) => setType(e.target.value)}>
                        <option>Entrada</option>
                        <option>Despesa</option>
                    </select>
                </div>
            </div>
            <button onClick={(e) => {e.preventDefault() 
                addTransaction()}} className="form-button">Inserir valor</button>


        </form>
    )

}

export default Form