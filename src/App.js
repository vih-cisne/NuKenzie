
import { useState } from 'react';
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


  if(!localStorage.getItem('dataGraph-nuKenzie')) {
    localStorage.setItem('dataGraph-nuKenzie', JSON.stringify({labels:['Livre'], datasets: [{
      data: [0],
      backgroundColor: [
      'green',
      'red',
      'blue',
      'yellow',
      'purple',
      'pink',
      'grey'
      ]}]}))
    
  }
 
  const [dataGraph, setDataGraph] = useState(JSON.parse(localStorage.getItem('dataGraph-nuKenzie')))

    function updateGraph(listTransactions) {

      const newDataGraph = dataGraph

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

        const livre = listTransactions.reduce((acc,actual) => 
        actual.type==='Despesa' ?
        acc + -Math.abs(Number(actual.value)) : acc + Number(actual.value)
      , 0)


        newDataGraph.datasets[0].data[0] =  livre >= 0 ?  livre : 0

      localStorage.setItem('dataGraph-nuKenzie', JSON.stringify(newDataGraph))

      console.log(newDataGraph)
  
      setDataGraph(newDataGraph)
  
  
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
            <Form  updateGraph={updateGraph} listTransactions={listTransactions} setListTransactions={setListTransactions}/>
            <TotalMoney dataGraph={dataGraph} updateGraph={updateGraph} listTransactions={listTransactions} />
          </aside>

          <main>
            <List updateGraph={updateGraph} listTransactions={listTransactions} setListTransactions={setListTransactions}/>

          </main>

        </div>
      </div>  
    )
  }
}

export default App;
