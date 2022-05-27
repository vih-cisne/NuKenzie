import { useState } from 'react'
import './styles.css'
import { useForm } from "react-hook-form";

function Form({listTransactions,setListTransactions}) {
    
    const [type, setType] = useState('Entrada')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => setListTransactions([...listTransactions, data])
    

    return (
        <form className="form-transaction" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-box">
                <label>Descrição</label>
                <input {...register("description", {required: true })} type="text" placeholder="Digite aqui sua descrição" ></input>
                <span className='input-ex'>Ex: Compra de roupas</span>
            </div>  
            <div className="flex-below">
                <div className="input-box">
                    <label>Valor</label>
                    <input {...register("value", {required: true })} type="text" placeholder="1" ></input>
                    <span className='input-value'>R$</span>
                </div>          
                <div className="select-box">
                    <label>Tipo de valor</label>
                    <select {...register("type")} onChange={(e) => setType(e.target.value)} onClick={(e) => setType(e.target.value)}>
                        
                        <option>Entrada</option>
                        <option>Despesa</option>
                    </select>
                </div>
                <div className="select-box">
                    <label>Categoria</label>
                    <select {...register("category") } >
                        
                        {type === 'Despesa' ? 
                            <>  
                                <option >Comida</option>
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
            {errors.exampleRequired && <span>This field is required</span>}
            <button type='submit' className="form-button">Inserir valor</button>

        </form>
    )

}

export default Form