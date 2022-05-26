import { useState } from 'react'
import './styles.css'


function Form({listTransactions,setListTransactions, dataGraph, setDataGraph}) {

    function addTransaction() {
      
        setListTransactions([...listTransactions, {description,value,type,category}])
    }

    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')
    


    function addCategory(value) {
        setCategory(value)
        
    }

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
                <div className="select-box">
                    <label>Categoria</label>
                    <select onChange={(e) => addCategory(e.target.value)}>
                        
                        {type === 'Despesa' ? 
                            <>
                                <option>Comida</option>
                                <option>Saúde</option>
                                <option>Roupa</option>
                                <option>Pets</option>
                                <option>Beleza</option>
                                <option>Casa</option>
                            </>
                            :
                            <>
                                <option>Salário</option>
                                <option>Retorno</option>

                            </>
                    
                        }
                        
                    </select>
                </div>
            </div>
            <button onClick={(e) => {e.preventDefault() 
                addTransaction()}} className="form-button">Inserir valor</button>


        </form>
    )

}

export default Form