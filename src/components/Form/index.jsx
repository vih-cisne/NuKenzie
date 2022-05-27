import { useState } from 'react'
import './styles.css'


function Form({listTransactions,setListTransactions}) {

    function addTransaction() {
      
        //localStorage.setItem('listT-nuKenzie',JSON.stringify([...listTransactions, {description,value,type,category}]))
        setListTransactions([...listTransactions, {description,value,type,category}])
        

        
    }

    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

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
                    <select onClick={(e) => setType(e.target.value)} onChange={(e) => setType(e.target.value)}>
                        
                        <option>Entrada</option>
                        <option>Despesa</option>
                    </select>
                </div>
                <div className="select-box">
                    <label>Categoria</label>
                    <select onClick={(e) => setCategory(e.target.value)} onChange={(e) => setCategory(e.target.value)}>
                        
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