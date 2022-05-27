
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';


if(!localStorage.getItem('listT-nuKenzie')) {
  localStorage.setItem('listT-nuKenzie', JSON.stringify([]))
}

function App() {
  
  const [listTransactions, setListTransactions] = useState(JSON.parse(localStorage.getItem('listT-nuKenzie')))
  
  const [start, setStart] = useState(true)

  const [dataGraph, setDataGraph] = useState({})

    const [total, setTotal] = useState(0)

    function calculateTotal() {
        const total = listTransactions.reduce((acc,actual) => 
        actual.type==='Despesa' ?
        acc + -Math.abs(Number(actual.value)) : acc + Number(actual.value)
        , 0)
        return total
    }

    useEffect(() => {
        setTotal(calculateTotal())
        localStorage.setItem('listT-nuKenzie', JSON.stringify(listTransactions))
  
    }, [listTransactions])

    useEffect(() => {
        setDataGraph(updateGraph())
    }, [total])
      

    function updateGraph() {

        const newDataGraph = {
            datasets: [{
            backgroundColor: [
          'green',
          'rgb(255, 192, 241)',
          'rgb(247, 126, 220)',
          'rgb(247, 93, 213)',
          'rgb(245, 69, 207)',
          'rgb(221, 39, 182);',
          'rgb(150, 3, 118);'
          ]}]
            }

        newDataGraph.datasets[0].data = [0]
        newDataGraph.labels = ['Livre']
  
        listTransactions.forEach((item) => {
  
          if(item.type==='Despesa') {
            const findIndex = newDataGraph.labels.findIndex((el) => el===item.category )
            if(findIndex>=0) {
  
              newDataGraph.datasets[0].data[findIndex] = newDataGraph.datasets[0].data[findIndex] + Number(item.value)
    
            } else {
              newDataGraph.labels.push(item.category)
              newDataGraph.datasets[0].data.push(Number(item.value))
    
            }
          }
  
        })

        newDataGraph.datasets[0].data[0] =  total > 0 ?  total : null

        return newDataGraph
    }

  if(start) {


    return (
      <div id='home'>

        <aside>
          <img src='image/Nu Kenzie (1).svg' alt='logo'></img>
          <h1>Centralize o controle das suas finanças</h1>
          <h4>de forma rápida e segura</h4>
          <button onClick={() => setStart(false)}>Iniciar</button>
        </aside>

        <aside className='right'><img src='image/Group 277.svg' alt='detail'></img></aside>

      </div>
    )

  } else {
    
    return (
      <div >
        <header>
          <div className='logo-header'>
            <img src='image/Nu Kenzie.svg' alt='logo'/>

          </div>
          <button onClick={() => setStart(true)} className='button-start'>Inicio</button>
        
        </header>
        <div id='body'>
          <aside>
            <Form   listTransactions={listTransactions} setListTransactions={setListTransactions}/>
            <TotalMoney total={total} dataGraph={dataGraph} listTransactions={listTransactions} />
          </aside>

          <main>
            <List listTransactions={listTransactions} setListTransactions={setListTransactions}/>

          </main>

        </div>
      </div>  
    )
  }
}

export default App;
