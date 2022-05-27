import { useEffect, useState } from 'react'
import './styles.css'
import { useForm } from "react-hook-form";
import SelectCategory from '../SelectCategory';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";




function Form({listTransactions,setListTransactions}) {

    const schema = yup.object({
        description: yup.string().required('A descrição não pode estar vazia'),
        value: yup.string().required('Defina um valor'),
    }).required()
    
    const [type, setType] = useState('Entrada')
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => setListTransactions([...listTransactions, data])

    const [categories, setCategories] = useState(SelectCategory(type))

    useEffect(() => {
        setCategories(SelectCategory(type))
        
    }, [type])
    

    return (
        <form className="form-transaction" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-box">
                <label>Descrição</label>
                <input {...register("description")} type="text" placeholder="Digite aqui sua descrição" ></input>
                {/*<span className='input-ex'>Ex: Compra de roupas</span>*/}
                <p className='Mesage-error'>{errors.description?.message}</p>
            </div>  
            <div className="flex-below">
                <div className="input-box">
                    <label>Valor</label>
                    <input {...register("value")} type="text" placeholder="1" ></input>
                    <span className='input-value'>R$</span>
                    <p className='Mesage-error'>{errors.value?.message}</p>
                </div>          
                <div className="select-box">
                    <label>Tipo de valor</label>
                    <select {...register("type")} onChange={(e) => setType(e.target.value)} onClick={(e) => setType(e.target.value)}>
                        
                        <option value='Entrada'>Entrada</option>
                        <option value='Despesa'>Despesa</option>
                    </select>
                </div>
                <div className="select-box">
                    <label>Categoria</label>
                    <select {...register("category")} >
                    {
                        categories.map((item, index) => <option key={index} value={item}>{item}</option>)
                    }
                    </select>
                    
                    
                </div>
            </div>
            <button type='submit' className="form-button">Inserir valor</button>

        </form>
    )

}

export default Form