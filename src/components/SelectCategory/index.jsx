function SelectCategory(type) {


    const categoriesIncome = ['Salário', 'Retorno']

    const categoriesExpense = ['Comida','Saúde','Roupa','Pets','Beleza','Casa']
    
   
        return type === 'Entrada' ? 
        categoriesIncome
        :
        categoriesExpense
                    
}
                        

export default SelectCategory